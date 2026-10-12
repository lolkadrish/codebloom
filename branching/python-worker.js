/* Python executes off the UI thread. The UI can terminate this worker. */
let python;
const source=new URL(self.location.href).searchParams.get('source')==='cdn'?'cdn':'site';
const indexURL=source==='cdn'?'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/':new URL('../runtime/pyodide/',self.location.href).href;
let phase='loader',failedFile='';
async function initialize() {
  try {
    if(typeof WebAssembly!=='object')throw new Error('WebAssembly is unavailable in this browser');
    // Preserve the original fetch API, but retain the exact failed runtime file.
    const originalFetch=self.fetch.bind(self);
    self.fetch=async (...args)=>{
      const url=String(args[0]?.url||args[0]),file=url.split('/').at(-1).split('?')[0];
      try{const response=await originalFetch(...args);if(!response.ok){failedFile=file;throw new Error(`HTTP ${response.status}: ${file}`);}return response;}
      catch(error){failedFile=file;throw error;}
    };
    self.postMessage({type:'loading-progress',phase:'files'});
    importScripts(indexURL+'pyodide.js');
    phase='runtime';
    self.postMessage({type:'loading-progress',phase:'initializing'});
    python = await loadPyodide({indexURL,enableRunUntilComplete:false});
    phase='lesson';
    python.runPython(`
import ast, builtins, io, json, sys, traceback

class LessonOutput(io.StringIO):
    def write(self, text):
        if self.tell() + len(text) > 20000:
            raise RuntimeError("Output limit exceeded: 20000 characters")
        return super().write(text)

def lesson_run(payload_json):
    payload = json.loads(payload_json)
    code = payload['code']
    results = []
    has_ifexp = False
    try:
        tree = ast.parse(code, filename='<lesson>')
        has_ifexp = any(isinstance(node, ast.IfExp) for node in ast.walk(tree))
        executable = compile(tree, '<lesson>', 'exec')
    except SyntaxError as error:
        return json.dumps({'results': [], 'syntax': {'type':type(error).__name__, 'message':error.msg, 'line':error.lineno, 'offset':error.offset, 'text':error.text or ''}}, ensure_ascii=False)
    for case in payload['cases']:
        lines = iter(case)
        output = LessonOutput()
        def lesson_input(prompt=''):
            if prompt:
                output.write(str(prompt))
            try:
                return next(lines)
            except StopIteration:
                raise EOFError('No input line available for input()') from None
        safe_builtins = dict(vars(builtins))
        safe_builtins['input'] = lesson_input
        env = {'__builtins__': safe_builtins, '__name__': '__main__'}
        old_stdout, old_stderr, old_stdin = sys.stdout, sys.stderr, sys.stdin
        sys.stdout = sys.stderr = output
        sys.stdin = io.StringIO('\\n'.join(case))
        error_data = None
        try:
            exec(executable, env)
        except BaseException as error:
            frames = [frame for frame in traceback.extract_tb(error.__traceback__) if frame.filename == '<lesson>']
            error_data = {'type':type(error).__name__, 'message':str(error), 'line':frames[-1].lineno if frames else None}
        finally:
            sys.stdout, sys.stderr, sys.stdin = old_stdout, old_stderr, old_stdin
        results.append({'output': output.getvalue(), 'error': error_data})
    return json.dumps({'results': results, 'hasIfExp':has_ifexp}, ensure_ascii=False)
`);
    self.postMessage({type:'ready',source});
  } catch (error) { self.postMessage({type:'init-error',source,phase,file:failedFile,message:String(error).slice(0,2000)}); }
}
const ready = initialize();
self.onmessage = async ({data}) => {
  try {
    await ready;
    if (!python) throw new Error('Python is not ready');
    python.globals.set('_lesson_payload', JSON.stringify({code:data.code,cases:data.cases}));
    const result = JSON.parse(python.runPython('lesson_run(_lesson_payload)'));
    self.postMessage({type:'result',id:data.id,...result});
  } catch (error) { self.postMessage({type:'worker-error',id:data.id,message:String(error)}); }
};

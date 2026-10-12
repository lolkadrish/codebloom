/* Python executes off the UI thread. The UI can terminate this worker. */
let python;
async function initialize() {
  try {
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js');
    python = await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/'});
    python.runPython(`
import ast, builtins, io, json, sys, traceback

class LessonOutput(io.StringIO):
    def write(self, text):
        if self.tell() + len(text) > 20000:
            raise RuntimeError("Слишком много вывода: максимум 20000 символов")
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
                raise EOFError('Не хватает строк для input()') from None
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
    self.postMessage({type:'ready'});
  } catch (error) { self.postMessage({type:'init-error',message:String(error)}); }
}
const ready = initialize();
self.onmessage = async ({data}) => {
  try {
    await ready;
    if (!python) throw new Error('Python ещё не загружен');
    python.globals.set('_lesson_payload', JSON.stringify({code:data.code,cases:data.cases}));
    const result = JSON.parse(python.runPython('lesson_run(_lesson_payload)'));
    self.postMessage({type:'result',id:data.id,...result});
  } catch (error) { self.postMessage({type:'worker-error',id:data.id,message:String(error)}); }
};

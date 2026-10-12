'use strict';
const $ = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const tasks = COURSE.flatMap((module, moduleIndex) => module.tasks.map(task => ({...task,module,moduleIndex})));
const STORAGE_KEY = 'python-next-step-v1';
let state = {current:0,drafts:{},inputs:{},solved:{},hints:{}};
try { const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)); if(saved && typeof saved==='object') for(const key of Object.keys(state)) if(key in saved) state[key]=saved[key]; } catch {}
for(const key of ['drafts','inputs','solved','hints']) if(!state[key] || typeof state[key]!=='object' || Array.isArray(state[key])) state[key]={};
if(!Number.isInteger(state.current) || state.current<0 || state.current>=tasks.length) state.current=0;
let current=state.current, worker, ready=false, busy=false, job=null, sequence=0, timer, initTimer, errorLine=null;
const codeOf=task => typeof state.drafts[task.id]==='string' ? state.drafts[task.id] : task.starter;
const isSolved=task => typeof state.solved[task.id]==='string' && state.solved[task.id]===codeOf(task);
const persist=() => {try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));$('save-status').textContent='· сохранено';}catch{$('save-status').textContent='· без сохранения';}};
function highlight(code){
  const pattern=/(#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:if|elif|else|and|or|not|True|False)\b|\b(?:print|input|int|str)\b|\b\d+\b)/g;
  let end=0, result='';
  for(const match of code.matchAll(pattern)){result+=escapeHTML(code.slice(end,match.index));const token=match[0];let kind=token.startsWith('#')?'comment':/^['"]/.test(token)?'string':/^\d/.test(token)?'num':/^(print|input|int|str)$/.test(token)?'func':'key';result+=`<span class="tok-${kind}">${escapeHTML(token)}</span>`;end=match.index+token.length;}
  return result+escapeHTML(code.slice(end))+'\n';
}
function paintEditor(){
  $('code-highlight').innerHTML=highlight($('code').value);
  $('line-numbers').innerHTML=$('code').value.split('\n').map((_,i)=>`<div${i+1===errorLine?' class="error-line"':''}>${i+1}</div>`).join('');
  syncScroll();
}
function syncScroll(){ $('code-highlight').scrollTop=$('code').scrollTop;$('code-highlight').scrollLeft=$('code').scrollLeft;$('line-numbers').scrollTop=$('code').scrollTop; }
function updateProgress(){
  const completed=tasks.filter(isSolved).length;
  $('progress-count').textContent=`${completed} / ${tasks.length}`;
  $('progress-bar').style.width=`${completed/tasks.length*100}%`;
  $('solved-badge').hidden=!isSolved(tasks[current]);
  $('completion').hidden=completed!==tasks.length;
  $('course-nav').innerHTML=COURSE.map((module,mi)=>{const done=module.tasks.every(t=>isSolved(tasks.find(x=>x.id===t.id)));return `<div class="module ${mi===tasks[current].moduleIndex?'active':''} ${done?'finished':''}"><button class="module-button" data-module="${mi}" ${busy?'disabled':''}><span class="module-index">${done?'✓':String(mi+1).padStart(2,'0')}</span><span><strong>${escapeHTML(module.title)}</strong><small>${escapeHTML(module.subtitle)}</small></span></button>${mi===tasks[current].moduleIndex?`<div class="module-tasks">${module.tasks.map(t=>{const i=tasks.findIndex(x=>x.id===t.id);return `<button class="task-nav ${i===current?'current':''} ${isSolved(tasks[i])?'done':''}" data-task="${i}" ${i===current?'aria-current="step"':''} ${busy?'disabled':''}><span class="task-dot"></span>${escapeHTML(t.title)}</button>`}).join('')}</div>`:''}</div>`;}).join('');
  $('previous').disabled=busy||current===0;$('next').disabled=busy||current===tasks.length-1;
}
function showTask(index,{scroll=false}={}){
  if(busy || index<0 || index>=tasks.length)return;
  current=index;state.current=index;const task=tasks[index],module=task.module;
  history.replaceState(null,'',`#${task.id}`);
  $('topic-name').textContent=module.title;$('task-position').textContent=`${index+1} / ${tasks.length}`;
  $('task-level').textContent=module.tag;$('task-duration').textContent=task.time;$('task-heading').textContent=task.title;$('task-intro').textContent=task.intro;
  $('theory-title').textContent=module.theoryTitle;
  $('theory-content').innerHTML=`<div class="theory-text"><p>${escapeHTML(module.theory)}</p><div class="theory-note">${escapeHTML(module.note)}</div></div><pre>${highlight(module.example)}</pre>`;
  $('requirements').innerHTML=`<ol class="requirements">${task.requirements.map(t=>`<li>${escapeHTML(t)}</li>`).join('')}</ol>`;
  $('input-rule').innerHTML=`<strong>Ввод:</strong> ${escapeHTML(task.input)}`;
  $('examples').innerHTML=task.cases.slice(0,2).map((test,i)=>`<div class="example"><div><span>Ввод ${i+1}</span><pre>${escapeHTML(test.input.join('\n'))}</pre></div><div class="example-arrow">→</div><div><span>Вывод</span><pre>${escapeHTML(test.out)}</pre></div><button data-example="${i}" aria-label="Использовать данные примера ${i+1}" title="Подставить во входные данные">↗</button></div>`).join('');
  $('code').value=codeOf(task);$('code').scrollTop=0;$('code').scrollLeft=0;
  $('stdin').value=typeof state.inputs[task.id]==='string'?state.inputs[task.id]:task.cases[0].input.join('\n');
  errorLine=null;paintEditor();resetResult();renderHints();updateProgress();persist();
  if(scroll){$('task-heading').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
}
function resetResult(){
  $('output').className='output-box';$('output').innerHTML='<p class="output-placeholder">Твой код оживёт здесь.<br>Нажми «Запустить», чтобы увидеть вывод.</p>';
  $('execution-label').textContent='Ждёт запуска';$('feedback').hidden=true;$('test-section').hidden=true;$('test-rows').innerHTML='';
}
function renderHints(){
  const task=tasks[current];const count=Math.min(3,Math.max(0,Number(state.hints[task.id])||0));
  $('hint-count').textContent=`${count} / 3`;$('hint').disabled=count===3;
  $('hint-list').innerHTML=task.hints.slice(0,count).map((hint,i)=>`<div class="hint-card"><strong>ПОДСКАЗКА ${i+1}</strong><span>${escapeHTML(hint)}</span></div>`).join('');
}
function saveCode(){
  state.drafts[tasks[current].id]=$('code').value;errorLine=null;paintEditor();persist();updateProgress();
  $('feedback').hidden=true;$('test-section').hidden=true;
}
function replaceSelection(text){const start=$('code').selectionStart,end=$('code').selectionEnd;$('code').setRangeText(text,start,end,'end');saveCode();}
function shiftIndent(reverse=false){
  const editor=$('code'),text=editor.value,start=editor.selectionStart,end=editor.selectionEnd;
  const lineStart=text.lastIndexOf('\n',start-1)+1;
  const blockEnd=start===end?(text.indexOf('\n',start)===-1?text.length:text.indexOf('\n',start)):(end>start&&text[end-1]==='\n'?end-1:end);
  const block=text.slice(lineStart,blockEnd);
  let firstDelta=0,totalDelta=0;
  const changed=block.split('\n').map((line,i)=>{const remove=reverse?(line.match(/^ {1,4}/)?.[0].length||0):0;const delta=reverse?-remove:4;if(i===0)firstDelta=delta;totalDelta+=delta;return reverse?line.slice(remove):'    '+line;}).join('\n');
  editor.setRangeText(changed,lineStart,blockEnd,'preserve');
  editor.setSelectionRange(Math.max(lineStart,start+firstDelta),Math.max(lineStart,end+totalDelta));editor.focus();saveCode();
}
function setBusy(value){
  busy=value;$('run').disabled=value||!ready;$('check').disabled=value||!ready;$('reset-code').disabled=value;
  $('code').readOnly=value;$('stdin').readOnly=value;$('stop').hidden=!value;
  $('indent').disabled=value;$('outdent').disabled=value;updateProgress();
}
function setRuntime(kind,text){$('runtime').className=`runtime ${kind}`;$('runtime').innerHTML=`<i></i><span>${escapeHTML(text)}</span>${kind==='error'?'<button id="retry-python">Повторить</button>':''}`;if(kind==='error')$('retry-python').onclick=createWorker;}
function stoppedOutput(){ $('execution-label').textContent='Остановлено';$('output').className='output-box';$('output').innerHTML='<p class="output-placeholder">Выполнение остановлено. Код сохранён.</p>'; }
function createWorker(){
  if(worker)worker.terminate();clearTimeout(initTimer);ready=false;setBusy(false);setRuntime('','Загрузка Python…');
  try{
    worker=new Worker('python-worker.js');
    initTimer=setTimeout(()=>{if(!ready){worker.terminate();setRuntime('error','Python не загрузился');}},45000);
    worker.onmessage=({data})=>{
      if(data.type==='ready'){clearTimeout(initTimer);ready=true;setRuntime('ready','Python готов');setBusy(false);return;}
      if(data.type==='init-error'){clearTimeout(initTimer);setRuntime('error','Нет связи с Python');setBusy(false);return;}
      if(!job || data.id!==job.id)return;
      const finished=job;job=null;clearTimeout(timer);setBusy(false);
      if(data.type==='worker-error'){feedback('info','Не удалось запустить Python','Попробуй повторить запуск. Если ошибка остаётся, обнови страницу.');return;}
      processResult(data,finished);
    };
    worker.onerror=()=>{clearTimeout(initTimer);if(job){clearTimeout(timer);job=null;feedback('info','Python остановился','Повтори загрузку среды кнопкой в верхней части страницы.');}ready=false;setRuntime('error','Ошибка загрузки');setBusy(false);};
  }catch{setRuntime('error','Python недоступен');}
}
function feedback(kind,title,text,extra=''){
  $('feedback').className=`feedback ${kind}`;$('feedback').innerHTML=`<h2>${escapeHTML(title)}</h2><p>${escapeHTML(text)}</p>${extra}`;$('feedback').hidden=false;
}
function explainError(error){
  const {type,message='',line,text=''}=error;
  if(type==='IndentationError'||type==='TabError')return 'Проверь отступы: 4 пробела на каждый уровень. if и его else должны стоять на одном уровне. После строки с двоеточием нужно действие с отступом.';
  if(type==='NameError'){const name=message.match(/name '([^']+)'/)?.[1];return `Переменная${name?' «'+name+'»':''} ещё не получила значение или её имя написано иначе. Сначала прочитай или присвой значение, затем используй его. Регистр букв имеет значение.`;}
  if(type==='EOFError')return 'Для очередного input() не хватает строки ввода. Для запуска добавь нужные строки. В тестах проверь, не читаешь ли ты лишнее значение за пределами нужной ветки.';
  if(type==='ValueError')return 'В int() попал текст, который нельзя превратить в целое число. Проверь входные данные: текстовые значения читаются обычным input().';
  if(type==='TypeError')return 'Проверь типы значений: input() возвращает текст, int(input()) — целое число. Сравнение и арифметика должны работать с подходящими типами.';
  if(type==='SyntaxError'){
    if(message.includes('unmatched')||message.includes('never closed'))return 'Проверь пары скобок и кавычек в указанной строке. У каждой открывающей скобки должна быть своя закрывающая.';
    if(message.includes("expected ':'"))return 'В конце всей строки с if, elif или else нужно двоеточие. После обычных input() и print() его не ставят.';
    if(/\b(?:if|elif)\s*:/.test(text))return 'Двоеточие ставится после всего условия, а не сразу после if или elif. У else своего условия нет.';
    if(text.trim().endsWith(':')&&!/^\s*(if|elif|else|for|while|def|class|try|except|finally|with|match|case)\b/.test(text))return 'В этой строке двоеточие лишнее. После присваивания, print() и однострочного выбора if/else двоеточие не ставится.';
    if(/\b(?:if|elif)\s+\w+\s+["']/.test(text))return 'Для сравнения переменной с текстом нужен оператор ==. Текст должен быть в кавычках.';
    return 'Проверь запись в указанной строке: == для сравнения, имя переменной без пробелов, условие целиком перед двоеточием. В коротком выборе if/else двоеточия нет.';
  }
  return message||'Проверь указанную строку и попробуй снова.';
}
function showError(error){
  errorLine=error.line;paintEditor();$('execution-label').textContent='Ошибка';$('output').className='output-box error';
  $('output').innerHTML=`<pre>${escapeHTML(error.type+(error.line?' · строка '+error.line:'')+'\n'+error.message)}</pre>`;
  feedback('',`${error.type}${error.line?' · строка '+error.line:''}`,explainError(error),error.text?`<pre>${escapeHTML(error.text.trimEnd())}</pre>`:'');
}
function normalOutput(value){return value.replace(/\r\n/g,'\n').replace(/\n$/,'');}
function processResult(data,finished){
  const task=tasks[current];
  if(data.syntax){showError(data.syntax);return;}
  if(finished.kind==='run'){
    const result=data.results[0];if(result.error){showError(result.error);return;}
    $('execution-label').textContent='Выполнено';$('output').className='output-box';
    $('output').innerHTML=result.output?`<pre>${escapeHTML(result.output)}</pre>`:'<p class="output-placeholder">Программа завершилась без вывода. Добавь print(), чтобы увидеть результат.</p>';
    return;
  }
  const checks=data.results.map((result,i)=>({...result,passed:!result.error&&normalOutput(result.output)===task.cases[i].out}));
  const passed=checks.filter(x=>x.passed).length;
  $('test-summary').textContent=`${passed} / ${checks.length} по выводу`;
  $('test-rows').innerHTML=checks.map((result,i)=>`<tr><td>${String(i+1).padStart(2,'0')}</td><td><pre>${escapeHTML(task.cases[i].input.join('\n'))}</pre></td><td><pre>${escapeHTML(task.cases[i].out)}</pre></td><td><pre>${escapeHTML(result.error?result.error.type+': '+result.error.message:normalOutput(result.output)||'∅ Нет вывода')}</pre></td><td class="${result.passed?'pass':'fail'}">${result.passed?'✓ Верно':'× Проверь'}</td></tr>`).join('');
  $('test-section').hidden=false;
  const firstError=checks.find(x=>x.error);
  if(firstError){showError(firstError.error);return;}
  $('output').className='output-box';$('execution-label').textContent=`Тесты: ${passed} / ${checks.length}`;
  $('output').innerHTML=`<pre>${escapeHTML(normalOutput(checks[0].output)||'∅ Нет вывода')}</pre>`;
  if(passed===checks.length){
    if(task.requiresTernary&&!data.hasIfExp){feedback('info','Вывод верный. Остался один шаг.','В этом задании нужен хотя бы один выбор значения короткой записью if/else. Перепиши подходящий блок и проверь ещё раз.');return;}
    state.solved[task.id]=finished.code;persist();updateProgress();
    feedback('success',`✓ Все ${checks.length} тестов пройдены`,current===tasks.length-1?'Последняя задача решена. Если какие-то задания пропущены, их можно выбрать слева.':'Границы и разные варианты ввода проверены. Можно переходить к следующему заданию.',current<tasks.length-1?'<button id="continue" class="secondary-button">Следующее задание →</button>':'');
    if($('continue'))$('continue').onclick=()=>showTask(current+1,{scroll:true});
  }else{
    const failed=checks.findIndex(x=>!x.passed),result=checks[failed],expected=task.cases[failed].out;
    let message=`В тесте ${failed+1} результат отличается от ожидаемого. Сравни ввод и вывод в таблице ниже. Проверь границы и порядок веток.`;
    if(!result.output)message='В программе нет нужного вывода. Не забудь print(): присваивание само по себе ничего не печатает.';
    else if(result.output.trim()===expected.trim())message='Ответ почти совпал, но есть лишние пробелы или пустые строки. Вывод должен точно совпадать с текстом задания.';
    feedback('',`Пока пройдено ${passed} из ${checks.length} тестов`,message);
  }
}
function execute(kind){
  if(busy||!ready)return;
  const task=tasks[current],code=$('code').value;
  if(!code.trim()){feedback('info','Сначала напиши код','Начни с чтения входных данных, затем добавь условия и вывод.');return;}
  let inputs=[];if($('stdin').value!==''){inputs=$('stdin').value.replace(/\r\n/g,'\n').split('\n');if(inputs.at(-1)==='')inputs.pop();}
  errorLine=null;paintEditor();$('feedback').hidden=true;$('test-section').hidden=true;
  $('output').className='output-box';$('output').innerHTML='<p class="output-placeholder">Выполняем твой код…</p>';$('execution-label').textContent=kind==='check'?'Проверка тестов…':'Запуск…';
  job={id:++sequence,kind,taskId:task.id,code};setBusy(true);
  worker.postMessage({id:job.id,code,cases:kind==='check'?task.cases.map(x=>x.input):[inputs]});
  timer=setTimeout(()=>{if(job){job=null;worker.terminate();createWorker();feedback('info','Выполнение остановлено через 12 секунд','Проверь, нет ли бесконечного цикла. Python загружается заново; после загрузки можно повторить запуск.');stoppedOutput();}},12000);
}
$('code').addEventListener('input',saveCode);$('code').addEventListener('scroll',syncScroll);
$('code').addEventListener('keydown',event=>{
  if((event.ctrlKey||event.metaKey)&&event.key==='Enter'){event.preventDefault();execute('check');}
  else if(event.key==='Tab'){event.preventDefault();shiftIndent(event.shiftKey);}
  else if(event.key==='Enter'&&!busy){event.preventDefault();const before=$('code').value.slice(0,$('code').selectionStart).split('\n').at(-1);const spaces=before.match(/^ */)[0];replaceSelection('\n'+spaces+(before.trimEnd().endsWith(':')?'    ':''));}
});
$('stdin').addEventListener('input',()=>{state.inputs[tasks[current].id]=$('stdin').value;persist();});
$('indent').onclick=()=>shiftIndent();$('outdent').onclick=()=>shiftIndent(true);
$('run').onclick=()=>execute('run');$('check').onclick=()=>execute('check');
$('stop').onclick=()=>{if(!job)return;job=null;clearTimeout(timer);worker.terminate();createWorker();feedback('info','Запуск остановлен','Код сохранён. Дождись повторной загрузки Python и попробуй ещё раз.');stoppedOutput();};
$('reset-code').onclick=()=>{$('code').value=tasks[current].starter;saveCode();resetResult();};
$('hint').onclick=()=>{const id=tasks[current].id;state.hints[id]=Math.min(3,(Number(state.hints[id])||0)+1);persist();renderHints();};
$('previous').onclick=()=>showTask(current-1,{scroll:true});$('next').onclick=()=>showTask(current+1,{scroll:true});
$('course-nav').onclick=event=>{const taskButton=event.target.closest('[data-task]'),moduleButton=event.target.closest('[data-module]');if(taskButton)showTask(Number(taskButton.dataset.task),{scroll:true});else if(moduleButton){const mi=Number(moduleButton.dataset.module);const first=tasks.findIndex(t=>t.moduleIndex===mi&&!isSolved(t));showTask(first===-1?tasks.findIndex(t=>t.moduleIndex===mi):first,{scroll:true});}};
$('examples').onclick=event=>{const button=event.target.closest('[data-example]');if(button&&!busy){$('stdin').value=tasks[current].cases[Number(button.dataset.example)].input.join('\n');state.inputs[tasks[current].id]=$('stdin').value;persist();}};
$('cheatsheet').onclick=()=>$('reference-dialog').showModal();$('close-reference').onclick=()=>$('reference-dialog').close();
$('reference-dialog').addEventListener('click',event=>{if(event.target===$('reference-dialog')){const rect=$('reference-dialog').getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)$('reference-dialog').close();}});
document.querySelector('.brand').onclick=event=>{event.preventDefault();showTask(0,{scroll:true});};
window.addEventListener('hashchange',()=>{const index=tasks.findIndex(t=>t.id===location.hash.slice(1));if(index>=0)showTask(index);});
const hashIndex=tasks.findIndex(t=>t.id===location.hash.slice(1));
showTask(hashIndex>=0?hashIndex:current);createWorker();

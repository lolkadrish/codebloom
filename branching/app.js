'use strict';
const $ = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const languageIds = ['ru','uk','en'];
const courseStage=document.documentElement.dataset.course==='next'?'next':'first';
const assetRoot=new URL('.',document.currentScript.src);
const STORAGE_KEY=courseStage==='first'?'python-first-step-v1':'python-next-step-v1';
const PREFERENCES_KEY='python-learning-preferences-v1';
let state = {language:'ru',theme:'system',current:0,drafts:{},inputs:{},solved:{},hints:{},quizzes:{},answers:{},verifiedRevisions:{}};
try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));if(saved&&typeof saved==='object'&&!Array.isArray(saved))for(const key of Object.keys(state))if(key in saved)state[key]=saved[key];}catch{}
for(const key of ['drafts','inputs','solved','hints','quizzes','answers','verifiedRevisions'])if(!state[key]||typeof state[key]!=='object'||Array.isArray(state[key]))state[key]={};
// Preserve the original Russian next-step drafts and verified progress.
if(courseStage==='next')for(const item of LESSON_TASKS)for(const field of ['drafts','inputs','solved','hints','verifiedRevisions']){const legacy=item.id,key='ru:'+item.id;if(legacy in state[field]&&!(key in state[field]))state[field][key]=state[field][legacy];}
try{const preferences=JSON.parse(localStorage.getItem(PREFERENCES_KEY))||JSON.parse(localStorage.getItem('python-first-step-v1'));if(preferences&&typeof preferences==='object'){if(languageIds.includes(preferences.language))state.language=preferences.language;if(['system','light','dark','lavender'].includes(preferences.theme))state.theme=preferences.theme;}}catch{}
if(!languageIds.includes(state.language))state.language='ru';
if(!['system','light','dark','lavender'].includes(state.theme))state.theme='system';
if(!Number.isInteger(state.current)||state.current<0||state.current>=LESSON_TASKS.length)state.current=0;
let current=state.current,worker,ready=false,busy=false,job=null,sequence=0,timer,initTimer,errorLine=null,runtimeKey='loading',runtimeKind='';
const explorerState={temperature:-5,energy:55,weather:'rain',weight:3,fragile:'yes'};
const loc = value => Array.isArray(value)?value[languageIds.indexOf(state.language)]:value;
const t = (key,values={}) => {let text=loc(UI[key])??key;for(const [name,value]of Object.entries(values))text=text.replaceAll('{'+name+'}',String(value));return text;};
const rich = value => escapeHTML(loc(value)).replace(/`([^`]+)`/g,'<code>$1</code>');
const keyOf = id => state.language+':'+id;
const task = () => LESSON_TASKS[current];
const casesOf = item => item.cases.map(c=>({input:c.input.map(loc),out:loc(c.out)}));
const codeOf = item => typeof state.drafts[keyOf(item.id)]==='string'?state.drafts[keyOf(item.id)]:item.starter;
const isSolved = item => typeof state.solved[keyOf(item.id)]==='string'&&state.solved[keyOf(item.id)]===codeOf(item)&&(state.verifiedRevisions[keyOf(item.id)]||1)===(item.revision||1);
const courseHref = stage => new URL(stage==='first'?(courseStage==='first'?'./':'branching/'):(courseStage==='first'?'../':'./'),location.href).href;
function persist(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));localStorage.setItem(PREFERENCES_KEY,JSON.stringify({language:state.language,theme:state.theme}));$('save-status').textContent=t('saved');}catch{$('save-status').textContent=t('notSaved');}}
function applyTheme(){const mode=state.theme==='system'?(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'):state.theme;document.documentElement.dataset.theme=mode;$('theme').value=state.theme;$('theme-icon').textContent=mode==='dark'?'☾':mode==='lavender'?'✦':'◐';document.querySelector('meta[name="theme-color"]').content=mode==='dark'?'#1d1e2b':'#7255db';}
matchMedia('(prefers-color-scheme:dark)').addEventListener('change',()=>{if(state.theme==='system')applyTheme();});
function applyLocale(){
  document.documentElement.lang=state.language;document.title=t('brand')+' · '+t('courseName');
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-title]').forEach(el=>el.title=t(el.dataset.i18nTitle));
  const heading=document.querySelector('[data-i18n="courseHeading"]');heading.innerHTML=escapeHTML(t('courseHeading')).replace(/\n/g,'<br>').replace(/\.$/,'<span>.</span>');
  document.querySelector('[data-i18n="courseIntro"]').style.whiteSpace='pre-line';
  $('language').value=state.language;applyTheme();renderRuntime();renderReference();
  for(const stage of ['first','next']){const link=$('course-'+stage);link.href=courseHref(stage);if(stage===courseStage)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');}
  $('related-course').href=courseHref(courseStage==='first'?'next':'first');$('related-course-label').textContent=t(courseStage==='first'?'nextCourse':'returnFirstCourse');
  $('completion-course-link').href=courseHref(courseStage==='first'?'next':'first');
}
function highlight(code){
  const pattern=/(#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:if|elif|else|and|or|not|True|False)\b|\b(?:print|input|int|str)\b|\b\d+\b)/g;
  let end=0,result='';for(const match of code.matchAll(pattern)){result+=escapeHTML(code.slice(end,match.index));const token=match[0];const kind=token.startsWith('#')?'comment':/^['"]/.test(token)?'string':/^\d/.test(token)?'num':/^(print|input|int|str)$/.test(token)?'func':'key';result+=`<span class="tok-${kind}">${escapeHTML(token)}</span>`;end=match.index+token.length;}return result+escapeHTML(code.slice(end))+'\n';
}
function paintEditor(){ $('code-highlight').innerHTML=highlight($('code').value);$('line-numbers').innerHTML=$('code').value.split('\n').map((_,i)=>`<div${i+1===errorLine?' class="error-line"':''}>${i+1}</div>`).join('');syncScroll(); }
function syncScroll(){ $('code-highlight').scrollTop=$('code').scrollTop;$('code-highlight').scrollLeft=$('code').scrollLeft;$('line-numbers').scrollTop=$('code').scrollTop; }
function renderNavigation(){
  const done=LESSON_TASKS.filter(isSolved).length;$('progress-count').textContent=`${done} / ${LESSON_TASKS.length}`;$('progress-bar').style.width=done/LESSON_TASKS.length*100+'%';$('completion').hidden=done!==LESSON_TASKS.length;$('solved-badge').hidden=!isSolved(task());$('solved-badge').textContent=t('solved');
  $('course-nav').innerHTML=LESSON_MODULES.map((module,mi)=>{const items=LESSON_TASKS.map((item,i)=>({...item,index:i})).filter(item=>item.module===mi),complete=items.every(isSolved),active=task().module===mi;return `<div class="module ${active?'active':''} ${complete?'finished':''}"><button class="module-button" data-module="${mi}" ${busy?'disabled':''}><span class="module-num">${complete?'✓':String(mi+1).padStart(2,'0')}</span><span><span class="module-title">${escapeHTML(loc(module.title))}</span><span class="module-subtitle">${escapeHTML(loc(module.subtitle))}</span></span></button>${active?`<div class="module-tasks">${items.map(item=>`<button class="task-link ${item.index===current?'current':''} ${isSolved(item)?'done':''}" data-task="${item.index}" ${item.index===current?'aria-current="step"':''} ${busy?'disabled':''}><span class="task-dot"></span>${escapeHTML(loc(item.title))}</button>`).join('')}</div>`:''}</div>`;}).join('');
  $('previous').disabled=busy||current===0;$('next').disabled=busy||current===LESSON_TASKS.length-1;
}
function showTask(index,{scroll=false}={}){
  if(busy||index<0||index>=LESSON_TASKS.length)return;
  current=index;state.current=index;const item=task(),module=LESSON_MODULES[item.module],cases=casesOf(item);
  history.replaceState(null,'','#'+item.id);$('module-name').textContent=loc(module.title);$('task-position').textContent=`${index+1} / ${LESSON_TASKS.length}`;$('level-label').textContent=t('level',{n:String(item.module+1).padStart(2,'0')});$('task-time').textContent=t('minutes',{n:item.time});$('task-heading').textContent=loc(item.title);$('task-intro').textContent=loc(item.intro);
  $('module-symbol').textContent=module.id==='nested'?loc(['if внутри if','if усередині if','if inside if']):module.symbol;$('theory-heading').textContent=loc(module.heading);$('theory-copy').innerHTML=loc(module.copy).split('\n\n').map(text=>'<p>'+rich(text)+'</p>').join('');$('theory-note').innerHTML=rich(module.note);$('explorer-prompt').textContent=loc(module.explorerPrompt);renderExplorer();renderQuiz();
  $('requirements').innerHTML=item.requirements.map(line=>'<li>'+rich(line)+'</li>').join('');$('input-rule').innerHTML=`<strong>${escapeHTML(t('input'))}:</strong> ${escapeHTML(loc(item.input))}<span class="language-note">${escapeHTML(t('languageNotice'))}</span>`;
  $('examples').innerHTML=cases.slice(0,2).map((c,i)=>`<div class="example"><div><span>${escapeHTML(t('exampleInput',{n:i+1}))}</span><pre>${escapeHTML(c.input.join('\n'))}</pre></div><div class="example-arrow">→</div><div><span>${escapeHTML(t('output'))}</span><pre>${escapeHTML(c.out||t('noOutput'))}</pre></div><button data-example="${i}" aria-label="${escapeHTML(t('exampleUse',{n:i+1}))}" title="${escapeHTML(t('exampleUse',{n:i+1}))}">↗</button></div>`).join('');
  $('code').value=codeOf(item);$('code').scrollTop=0;$('code').scrollLeft=0;$('stdin').value=typeof state.inputs[keyOf(item.id)]==='string'?state.inputs[keyOf(item.id)]:cases[0].input.join('\n');errorLine=null;paintEditor();resetResult();renderHints();renderNavigation();persist();
  if(scroll){$('task-heading').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
}
function traceCode(lines,active){$('explorer-code').innerHTML=lines.map((line,i)=>`<span class="trace-line ${active.includes(i)?'trace-active':''}">${escapeHTML(line)}</span>`).join('');}
function renderExplorer(updateOnly=false){
  const module=LESSON_MODULES[task().module],type=module.explorer||module.id;let controls='',lines=[],active=[],output='',explanation='';const quote=key=>JSON.stringify(t(key));
  const slider=(name,label,min,max,value,unit='')=>`<div class="slider-control"><input type="range" data-explorer="${name}" min="${min}" max="${max}" value="${value}" aria-label="${escapeHTML(t(label))}"><output>${value}${unit}</output></div>`;
  if(type==='if'||type==='ternary'){
    const temp=explorerState.temperature;controls=slider('temperature','temperature',-10,35,temp,'°');
    if(type==='if'){lines=[`temp = ${temp}`,'if temp < 0:',`    print(${quote('hat')})`];active=temp<0?[1,2]:[];output=temp<0?t('hat'):t('noOutput');explanation=t(temp<0?'traceTrue':'traceFalse');}
    else{lines=[`temp = ${temp}`,`label = ${quote('cold')} if temp < 10 else ${quote('warm')}`,'print(label)'];active=[1];output=t(temp<10?'cold':'warm');explanation=t('traceTernary');}
  }else if(type==='else'){
    const charge=explorerState.energy;controls=slider('energy','energy',0,100,charge,'%');lines=[`charge = ${charge}`,'if charge >= 30:',`    print(${quote('readyOutput')})`,'else:',`    print(${quote('charge')})`];active=charge>=30?[1,2]:[3,4];output=t(charge>=30?'readyOutput':'charge');explanation=t(charge>=30?'traceTrue':'traceElse');
  }else if(type==='elif'){
    controls=`<div class="choice-controls">${['rain','snow','sun','unknown'].map(value=>`<button type="button" data-weather="${value}" class="${explorerState.weather===value?'active':''}" aria-pressed="${explorerState.weather===value}">${escapeHTML(t(value))}</button>`).join('')}</div>`;
    lines=[`weather = "${explorerState.weather}"`,'if weather == "rain":',`    print(${quote('umbrella')})`,'elif weather == "snow":',`    print(${quote('boots')})`,'elif weather == "sun":',`    print(${quote('walk')})`,'else:',`    print(${quote('lookOutside')})`];const index={rain:1,snow:3,sun:5,unknown:7}[explorerState.weather];active=[index,index+1];output=t({rain:'umbrella',snow:'boots',sun:'walk',unknown:'lookOutside'}[explorerState.weather]);explanation=t('traceElif');
  }else if(type==='warmup'){
    const temp=explorerState.temperature;controls=slider('temperature','temperature',-10,35,temp,'°');lines=[`temp = ${temp}`,'if temp < 0:',`    print(${quote('frost')})`,'elif temp < 15:',`    print(${quote('cool')})`,'else:',`    print(${quote('warm')})`];const branch=temp<0?1:temp<15?3:5;active=[branch,branch+1];output=t(temp<0?'frost':temp<15?'cool':'warm');explanation=t('traceElif');
  }else if(type==='logic'){
    const temp=explorerState.temperature,weather=explorerState.weather;controls=slider('temperature','temperature',-10,35,temp,'°')+`<div class="choice-controls">${['rain','snow','sun'].map(value=>`<button type="button" data-weather="${value}" class="${weather===value?'active':''}" aria-pressed="${weather===value}">${escapeHTML(t(value))}</button>`).join('')}</div>`;lines=[`temp = ${temp}`,`weather = "${weather}"`,'if temp >= 10 and temp <= 25:',`    print(${quote('comfortable')})`,'if weather == "rain" or weather == "snow":',`    print(${quote('wetWeather')})`];active=[];const values=[];if(temp>=10&&temp<=25){active.push(2,3);values.push(t('comfortable'));}if(weather==='rain'||weather==='snow'){active.push(4,5);values.push(t('wetWeather'));}output=values.join('\n')||t('noOutput');explanation=t('traceLogic');
  }else if(type==='thresholds'){
    const points=explorerState.points??72;controls=slider('points','points',0,100,points);lines=[`points = ${points}`,'if points >= 90:',`    print(${quote('gold')})`,'elif points >= 50:',`    print(${quote('silver')})`,'else:',`    print(${quote('bronze')})`,`print(points % 4)`];const branch=points>=90?1:points>=50?3:5;active=[branch,branch+1,7];output=t(points>=90?'gold':points>=50?'silver':'bronze')+'\n'+points%4;explanation=t('traceThresholds');
  }else if(type==='ordering'){
    const height=explorerState.height??180;controls=slider('height','height',-10,320,height,' cm');lines=[`height = ${height}`,'if height < 0 or height > 300:',`    print(${quote('checkInput')})`,'elif height >= 190:',`    print(${quote('tall')})`,'else:',`    print(${quote('regularHeight')})`];const invalid=height<0||height>300,branch=invalid?1:height>=190?3:5;active=[branch,branch+1];output=t(invalid?'checkInput':height>=190?'tall':'regularHeight');explanation=t('traceOrdering');
  }else{
    const weight=explorerState.weight,fragile=explorerState.fragile==='yes';controls=`<div class="nested-controls">${slider('weight','weight',1,10,weight,' kg')}<select data-explorer="fragile" aria-label="${escapeHTML(t('handling'))}"><option value="yes" ${fragile?'selected':''}>${escapeHTML(t('yes'))}</option><option value="no" ${!fragile?'selected':''}>${escapeHTML(t('no'))}</option></select></div>`;
    lines=[`weight = ${weight}`,`fragile = ${fragile?'True':'False'}`,'if weight <= 5:','    if fragile:',`        print(${quote('carefully')})`,'    else:',`        print(${quote('regular')})`,'else:',`    print(${quote('large')})`];active=weight>5?[7,8]:fragile?[2,3,4]:[2,5,6];output=t(weight>5?'large':fragile?'carefully':'regular');explanation=t('traceNested');
  }
  if(!updateOnly)$('explorer-controls').innerHTML=controls;traceCode(lines,active);$('explorer-output').textContent=output;$('explorer-explanation').textContent=explanation;
}
$('explorer-controls').addEventListener('input',event=>{
  const el=event.target.closest('[data-explorer]');if(!el)return;const name=el.dataset.explorer;explorerState[name]=name==='fragile'?el.value:Number(el.value);
  const readout=el.closest('.slider-control')?.querySelector('output');if(readout)readout.textContent=el.value+(name==='temperature'?'°':name==='energy'?'%':name==='weight'?' kg':name==='height'?' cm':'');
  renderExplorer(true);
});
$('explorer-controls').addEventListener('click',event=>{const el=event.target.closest('[data-weather]');if(el){explorerState.weather=el.dataset.weather;renderExplorer();$('explorer-controls').querySelector(`[data-weather="${explorerState.weather}"]`)?.focus({preventScroll:true});}});
function renderQuiz(){
  const module=LESSON_MODULES[task().module],saved=state.answers[keyOf(module.id)]||[];$('quiz-status').textContent=state.quizzes[keyOf(module.id)]?t('quizDone'):'';$('quiz-feedback').textContent='';$('quiz-feedback').className='';
  $('quiz-questions').className='quiz-questions';$('quiz-questions').innerHTML=module.quiz.map((question,qi)=>`<fieldset class="quiz-question"><legend>${qi+1}. ${escapeHTML(loc(question.question))}</legend>${question.options.map((option,oi)=>`<label class="quiz-option"><input type="radio" name="question-${qi}" value="${oi}" ${saved[qi]===oi?'checked':''}><span>${escapeHTML(loc(option))}</span></label>`).join('')}</fieldset>`).join('');
}
$('quiz-form').addEventListener('change',()=>{const module=LESSON_MODULES[task().module];state.answers[keyOf(module.id)]=module.quiz.map((_,qi)=>{const el=document.querySelector(`input[name="question-${qi}"]:checked`);return el?Number(el.value):null;});persist();});
$('quiz-form').addEventListener('submit',event=>{event.preventDefault();const module=LESSON_MODULES[task().module],answers=module.quiz.map((_,qi)=>document.querySelector(`input[name="question-${qi}"]:checked`));if(answers.some(el=>!el)){$('quiz-feedback').textContent=t('quizChoose');return;}const correct=answers.filter((el,i)=>Number(el.value)===module.quiz[i].answer).length;$('quiz-feedback').textContent=correct===2?t('quizCorrect'):t('quizWrong',{n:correct});$('quiz-feedback').className=correct===2?'pass':'';if(correct===2){state.quizzes[keyOf(module.id)]=true;$('quiz-status').textContent=t('quizDone');persist();}});
function renderInitialization(failed=false){if(busy)return;$('output').dataset.state=failed?'python-error':'python-loading';$('output').className='output-box'+(failed?' error':'');$('execution-label').textContent=t(failed?'loadFailed':runtimeKey);$('output').innerHTML=`<p class="output-placeholder">${escapeHTML(t(failed?'loadingFailureHelp':'loadingHelp'))}</p>${failed?`<button id="retry-in-console" class="secondary-button">${escapeHTML(t('retryLoading'))}</button>`:''}`;if($('retry-in-console'))$('retry-in-console').onclick=createWorker;}
function clearInitialization(){if(['python-error','python-loading'].includes($('output').dataset.state)){delete $('output').dataset.state;$('output').className='output-box';$('output').innerHTML=`<p class="output-placeholder">${escapeHTML(t('outputPlaceholder'))}</p>`;$('execution-label').textContent=t('waiting');}}
function resetResult(){ delete $('output').dataset.state;$('output').className='output-box';$('output').innerHTML=`<p class="output-placeholder">${escapeHTML(t('outputPlaceholder'))}</p>`;$('execution-label').textContent=t('waiting');$('feedback').hidden=true;$('test-section').hidden=true;$('test-rows').innerHTML='';if(!ready)renderInitialization(runtimeKind==='error'); }
function renderHints(){const count=Math.min(3,Math.max(0,Number(state.hints[keyOf(task().id)])||0));$('hint-count').textContent=`${count} / 3`;$('hint').disabled=count===3;$('hints').innerHTML=task().hints.slice(0,count).map((hint,i)=>`<div class="hint-card"><strong>${escapeHTML(t('hintNumber',{n:i+1}))}</strong><span>${escapeHTML(loc(hint))}</span></div>`).join('');}
function saveCode(){state.drafts[keyOf(task().id)]=$('code').value;errorLine=null;paintEditor();persist();renderNavigation();$('feedback').hidden=true;$('test-section').hidden=true;}
function replaceSelection(text){const editor=$('code');editor.setRangeText(text,editor.selectionStart,editor.selectionEnd,'end');saveCode();}
function shiftIndent(reverse=false){const editor=$('code'),text=editor.value,start=editor.selectionStart,end=editor.selectionEnd,lineStart=text.lastIndexOf('\n',start-1)+1,blockEnd=start===end?(text.indexOf('\n',start)===-1?text.length:text.indexOf('\n',start)):(end>start&&text[end-1]==='\n'?end-1:end);let firstDelta=0,totalDelta=0;const changed=text.slice(lineStart,blockEnd).split('\n').map((line,i)=>{const remove=reverse?(line.match(/^ {1,4}/)?.[0].length||0):0,delta=reverse?-remove:4;if(i===0)firstDelta=delta;totalDelta+=delta;return reverse?line.slice(remove):'    '+line;}).join('\n');editor.setRangeText(changed,lineStart,blockEnd,'preserve');editor.setSelectionRange(Math.max(lineStart,start+firstDelta),Math.max(lineStart,end+totalDelta));editor.focus();saveCode();}
function setBusy(value){busy=value;$('run').disabled=value||!ready;$('check').disabled=value||!ready;$('reset-code').disabled=value;$('language').disabled=value;$('code').readOnly=value;$('stdin').readOnly=value;$('stop').hidden=!value;$('indent').disabled=value;$('outdent').disabled=value;renderNavigation();}
function renderRuntime(){$('runtime').className='runtime '+runtimeKind;$('runtime').innerHTML=`<span>${escapeHTML(t(runtimeKey))}</span>${runtimeKind==='error'?`<button id="retry-python">${escapeHTML(t('retry'))}</button>`:''}`;if($('retry-python'))$('retry-python').onclick=createWorker;}
function setRuntime(kind,key){runtimeKind=kind;runtimeKey=key;renderRuntime();}
function createWorker(){
  worker?.terminate();clearTimeout(initTimer);ready=false;setBusy(false);setRuntime('','loading');delete $('runtime').dataset.source;renderInitialization();
  try{worker=new Worker(new URL('python-worker.js?v=3',assetRoot));const instance=worker;const watchInitialization=()=>{clearTimeout(initTimer);initTimer=setTimeout(()=>{if(!ready&&worker===instance){instance.terminate();setRuntime('error','loadFailed');renderInitialization(true);}},120000);};watchInitialization();
    worker.onmessage=({data})=>{
      if(worker!==instance)return;
      if(data.type==='loading-progress'){setRuntime('',data.phase==='files'?'loadingFiles':'startingPython');renderInitialization();watchInitialization();return;}
      if(data.type==='ready'){clearTimeout(initTimer);ready=true;setRuntime('ready','ready');$('runtime').dataset.source=data.source||'site';setBusy(false);clearInitialization();return;}
      if(data.type==='init-error'){clearTimeout(initTimer);instance.terminate();ready=false;setRuntime('error','loadFailed');setBusy(false);renderInitialization(true);return;}
      if(!job||data.id!==job.id)return;const finished=job;job=null;clearTimeout(timer);setBusy(false);
      if(data.type==='worker-error'){ready=false;setRuntime('error','loadFailed');setBusy(false);feedback('info',t('error'),t('workerFailure'));return;}
      processResult(data,finished);
    };
    worker.onerror=()=>{if(worker!==instance)return;clearTimeout(initTimer);clearTimeout(timer);job=null;ready=false;setRuntime('error','loadFailed');setBusy(false);renderInitialization(true);};
  }catch{setRuntime('error','loadFailed');renderInitialization(true);}
}
function feedback(kind,title,body,extra=''){$('feedback').className='feedback '+kind;$('feedback').innerHTML=`<h2>${escapeHTML(title)}</h2><p>${escapeHTML(body)}</p>${extra}`;$('feedback').hidden=false;}
function explainError(error){
  const {type,message='',text=''}=error;
  if(type==='IndentationError'||type==='TabError')return t('indentationError');
  if(type==='NameError')return t('nameError',{name:message.match(/name '([^']+)'/)?.[1]||''});
  if(type==='EOFError')return t('eofError');if(type==='ValueError')return t('valueError');if(type==='TypeError')return t('typeError');
  if(type==='SyntaxError'){if(message.includes('unmatched')||message.includes('never closed'))return t('bracketsError');if(message.includes("expected ':'"))return t('colonError');if(text.trim().endsWith(':')&&!/^\s*(if|elif|else|for|while|def|class|try|except|finally|with|match|case)\b/.test(text))return t('extraColon');return t('syntaxError');}
  return message||t('syntaxError');
}
function errorTitle(error){return error.type+(error.line?' · '+t('line')+' '+error.line:'');}
function showError(error){errorLine=error.line;paintEditor();$('execution-label').textContent=t('error');$('output').className='output-box error';$('output').innerHTML='<pre>'+escapeHTML(errorTitle(error)+'\n'+error.message)+'</pre>';feedback('',errorTitle(error),explainError(error),error.text?'<pre>'+escapeHTML(error.text.trimEnd())+'</pre>':'');}
const normalOutput = value => value.replace(/\r\n/g,'\n').replace(/\n$/,'');
function processResult(data,finished){
  const item=task(),cases=casesOf(item);if(data.syntax){showError(data.syntax);return;}
  if(finished.kind==='run'){const result=data.results[0];if(result.error){showError(result.error);return;}$('execution-label').textContent=t('executed');$('output').className='output-box';$('output').innerHTML=result.output?'<pre>'+escapeHTML(result.output)+'</pre>':`<p class="output-placeholder">${escapeHTML(t('noOutput'))}</p>`;return;}
  const checks=data.results.map((result,i)=>({...result,passed:!result.error&&normalOutput(result.output)===cases[i].out}));const passed=checks.filter(c=>c.passed).length;
  $('test-summary').textContent=`${passed} / ${checks.length}`;$('test-rows').innerHTML=checks.map((result,i)=>`<tr><td>${String(i+1).padStart(2,'0')}</td><td><pre>${escapeHTML(cases[i].input.join('\n'))}</pre></td><td><pre>${escapeHTML(cases[i].out||t('noOutput'))}</pre></td><td><pre>${escapeHTML(result.error?errorTitle(result.error)+': '+result.error.message:normalOutput(result.output)||t('noOutput'))}</pre></td><td class="${result.passed?'pass':'fail'}">${escapeHTML(t(result.passed?'pass':'fail'))}</td></tr>`).join('');$('test-section').hidden=false;
  const firstError=checks.find(c=>c.error);if(firstError){showError(firstError.error);return;}
  $('execution-label').textContent=t('testsCount',{n:passed,total:checks.length});$('output').className='output-box';$('output').innerHTML='<pre>'+escapeHTML(normalOutput(checks[0].output)||t('noOutput'))+'</pre>';
  if(passed===checks.length){if(item.requiresTernary&&!data.hasIfExp){feedback('info',t('ternaryTitle'),t('ternaryHelp'));return;}state.solved[keyOf(item.id)]=finished.code;state.verifiedRevisions[keyOf(item.id)]=item.revision||1;persist();renderNavigation();if(courseStage==='first'&&LESSON_TASKS.every(isSolved)){window.location.assign(courseHref('next')+'#museum');return;}feedback('success','✓ '+t('allPassed',{n:checks.length}),t(current===LESSON_TASKS.length-1?'lastSuccess':'successText'),current<LESSON_TASKS.length-1?`<button class="secondary-button" id="continue">${escapeHTML(t('continue'))}</button>`:'');if($('continue'))$('continue').onclick=()=>showTask(current+1,{scroll:true});}
  else{const first=checks.findIndex(c=>!c.passed),actual=normalOutput(checks[first].output),expected=cases[first].out;let message=t('mismatch');if(!actual&&expected)message=t('missingOutput');else if(actual&&!expected)message=t('unexpectedOutput');else if(actual.trim()===expected.trim())message=t('whitespace');feedback('',t('passedCount',{n:passed,total:checks.length}),message);}
}
function execute(kind){
  if(busy||!ready)return;const code=$('code').value;if(!code.trim()){feedback('info',t('emptyCode'),t('emptyCodeHelp'));return;}
  let input=[];if($('stdin').value!==''){input=$('stdin').value.replace(/\r\n/g,'\n').split('\n');if(input.at(-1)==='')input.pop();}
  errorLine=null;paintEditor();$('feedback').hidden=true;$('test-section').hidden=true;$('output').className='output-box';$('output').innerHTML=`<p class="output-placeholder">${escapeHTML(t('running'))}</p>`;$('execution-label').textContent=t(kind==='check'?'checking':'running');
  job={id:++sequence,kind,taskId:task().id,language:state.language,code};setBusy(true);worker.postMessage({id:job.id,code,cases:kind==='check'?casesOf(task()).map(c=>c.input):[input]});
  timer=setTimeout(()=>{if(job){job=null;worker.terminate();createWorker();$('execution-label').textContent=t('stopped');feedback('info',t('timeoutTitle'),t('timeoutHelp'));}},12000);
}
$('code').addEventListener('input',saveCode);$('code').addEventListener('scroll',syncScroll);
$('code').addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&event.key==='Enter'){event.preventDefault();execute('check');}else if(event.key==='Tab'){event.preventDefault();if(!busy)shiftIndent(event.shiftKey);}else if(event.key==='Enter'&&!busy){event.preventDefault();const line=$('code').value.slice(0,$('code').selectionStart).split('\n').at(-1);replaceSelection('\n'+line.match(/^ */)[0]+(line.trimEnd().endsWith(':')?'    ':''));}});
$('stdin').addEventListener('input',()=>{state.inputs[keyOf(task().id)]=$('stdin').value;persist();});
$('indent').onclick=()=>shiftIndent();$('outdent').onclick=()=>shiftIndent(true);$('run').onclick=()=>execute('run');$('check').onclick=()=>execute('check');
$('stop').onclick=()=>{if(!job)return;job=null;clearTimeout(timer);worker.terminate();createWorker();$('execution-label').textContent=t('stopped');$('output').innerHTML=`<p class="output-placeholder">${escapeHTML(t('stoppedText'))}</p>`;feedback('info',t('stopped'),t('stoppedText'));};
$('reset-code').onclick=()=>{$('code').value=task().starter;saveCode();resetResult();};
$('hint').onclick=()=>{const key=keyOf(task().id);state.hints[key]=Math.min(3,(Number(state.hints[key])||0)+1);persist();renderHints();};
$('previous').onclick=()=>showTask(current-1,{scroll:true});$('next').onclick=()=>showTask(current+1,{scroll:true});
$('course-nav').onclick=event=>{const taskButton=event.target.closest('[data-task]'),moduleButton=event.target.closest('[data-module]');if(taskButton)showTask(Number(taskButton.dataset.task),{scroll:true});else if(moduleButton){const mi=Number(moduleButton.dataset.module),first=LESSON_TASKS.findIndex(item=>item.module===mi&&!isSolved(item));showTask(first===-1?LESSON_TASKS.findIndex(item=>item.module===mi):first,{scroll:true});}};
$('examples').onclick=event=>{const button=event.target.closest('[data-example]');if(button&&!busy){$('stdin').value=casesOf(task())[Number(button.dataset.example)].input.join('\n');state.inputs[keyOf(task().id)]=$('stdin').value;persist();}};
$('language').onchange=()=>{state.language=$('language').value;applyLocale();showTask(current);};
$('theme').onchange=()=>{state.theme=$('theme').value;applyTheme();persist();};
function renderReference(){const parts=[['referenceInputs','word = input()\nnumber = int(input())'],['referenceDecisions','if condition:\n    action_a()\nelif other_condition:\n    action_b()\nelse:\n    action_c()'],['referenceCompare',t('referenceOperators')],['referenceLogic',t('referenceLogicText')],['referenceShort','result = yes_value if condition else no_value']];$('reference-content').innerHTML=parts.map(([heading,code])=>`<h3>${escapeHTML(t(heading))}</h3><pre>${escapeHTML(code)}</pre>`).join('')+'<p>'+escapeHTML(t('referenceIndent'))+'</p>';}
$('reference-open').onclick=()=>$('reference-dialog').showModal();$('reference-close').onclick=()=>$('reference-dialog').close();$('reference-dialog').addEventListener('click',event=>{if(event.target===$('reference-dialog')){const rect=$('reference-dialog').getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)$('reference-dialog').close();}});
document.querySelector('.brand').onclick=event=>{event.preventDefault();showTask(0,{scroll:true});};
for(const stage of ['first','next'])$('course-'+stage).addEventListener('click',event=>{if(stage===courseStage)event.preventDefault();});
window.addEventListener('hashchange',()=>{const index=LESSON_TASKS.findIndex(item=>item.id===location.hash.slice(1));if(index>=0&&!busy)showTask(index);});
applyLocale();const hashIndex=LESSON_TASKS.findIndex(item=>item.id===location.hash.slice(1));showTask(hashIndex>=0?hashIndex:current);createWorker();

'use strict';
(() => {
  const $=id=>document.getElementById(id),course=window.CB_COMPILED_COURSE,{loc,t,rich,escape}=CB,store=CB_COMPILED_STORE;
  const stages=course.stages,tasks=stages.flatMap((stage,index)=>stage.tasks.map(task=>({...task,stage:index}))),fields=['drafts','inputs','solved','hints','quizzes','answers','verifiedRevisions','experiments'];
  let state={},current=0,busy=false,sequence=0,pendingRemote=false,chooseRemotePosition=!location.hash;
  const task=()=>tasks[current],key=()=>course.prefix+task().id;
  const features={multiply:'*',variable:'int coins',update:'value = value + change',if:'if',and:'&&',while:'while',loop:'for / while',function:'function / method',list:'List<T>',dictionary:'Dictionary<TKey,TValue>',set:'HashSet<T> / std::set<T>',class:'class',struct:'struct',override:'override',interface:'interface',lambda:'lambda',where:'Where',select:'Select',orderby:'OrderBy',generic:'First<T>',tryparse:'TryParse',catch:'try / catch',stringreader:'StringReader',file:'file write / read',await:'await',whenall:'Task.WhenAll',cancellation:'ThrowIfCancellationRequested',throw:'throw',vector:'std::vector',map:'std::map',popback:'pop_back',reference:'int&',constref:'const std::vector<int>&',pointer:'int*',destructor:'destructor',unique:'std::make_unique',countif:'std::count_if',sort:'std::sort',accumulate:'std::accumulate',template:'template',stringstream:'std::istringstream',async:'std::async'};
  const output=value=>value===''?t('outputEmpty'):value==='\n'?t('emptyLine'):value;
  function load(){state=store.read(course);for(const field of fields)if(!state[field]||typeof state[field]!=='object'||Array.isArray(state[field]))state[field]={};}
  function save(){try{store.write(course,state);$('js-save').textContent=t('saved');}catch{$('js-save').textContent=t('notSaved');}}
  const codeOf=value=>typeof state.drafts[course.prefix+value.id]==='string'?state.drafts[course.prefix+value.id]:value.starter;
  const solved=value=>store.solved(course,state,value);
  function scope(){
    $('js-scope').textContent=pendingRemote?t('remoteWaiting'):store.pendingPreview(course)?t('previewMoveHelp'):!store.cloudReady?t('compiledPreviewSave'):window.LEARNING_STORE?.owner()?window.LEARNING_ACCOUNT_TEXT(window.LEARNING_CLOUD?.getStatus()?.status||'pending'):t('localSave');
    $('compiled-preview-transfer').hidden=!store.pendingPreview(course);
    $('compiled-preview-copy').hidden=!store.cloudReady||!store.archive(course);
  }
  function navigation(){
    $('js-nav').innerHTML=stages.map((stage,index)=>`<details ${task().stage===index?'open':''}><summary><span>${String(index+1).padStart(2,'0')}</span>${escape(loc(stage.title))}</summary>${stage.tasks.map(value=>`<button type="button" data-task="${escape(value.id)}" class="${solved(value)?'done ':''}${task().id===value.id?'active':''}" ${busy?'disabled':''}>${escape(loc(value.title))}</button>`).join('')}</details>`).join('');
    $('js-solved').hidden=!solved(task());$('js-completion').hidden=!tasks.every(solved);scope();
  }
  function paint(line=null){$('js-lines').innerHTML=Array.from({length:Math.max(12,$('js-code').value.split('\n').length)},(_,i)=>`<span${i+1===line?' class="cb-error-line"':''}>${i+1}</span>`).join('\n');$('js-lines').scrollTop=$('js-code').scrollTop;}
  function setBusy(value){busy=value;for(const id of ['js-run','js-check','js-reset','site-language','compiled-download','compiler-consent','compiled-preview-move','compiled-preview-copy','compiled-hint-next'])$(id).disabled=value;$('js-code').readOnly=value;$('js-input').readOnly=value;$('js-stop').hidden=!value;$('js-previous').disabled=value||current===0;$('js-next').disabled=value||current===tasks.length-1;document.querySelectorAll('[data-task],[data-example]').forEach(el=>el.disabled=value);}
  function feedback(kind,title,body,diagnostics=''){
    const panel=$('js-feedback');panel.hidden=false;panel.className='cb-feedback '+kind;panel.replaceChildren();
    const heading=document.createElement('strong'),text=document.createElement('p');heading.textContent=title;text.textContent=body;panel.append(heading,text);
    if(diagnostics){const label=document.createElement('h3'),pre=document.createElement('pre');label.textContent=t('compilerDiagnostics');pre.textContent=diagnostics;panel.append(label,pre);}
  }
  function show(index,{focus=false,persistState=true}={}){
    if(index<0||index>=tasks.length)return;
    if(persistState)chooseRemotePosition=false;
    if(busy){sequence++;CB_COMPILER.stop();setBusy(false);}
    current=index;state.current=current;state.currentTaskId=task().id;history.replaceState(null,'','#'+task().id);
    document.title=loc(task().title)+' · '+course.name+' · CodeBloom';
    $('js-title').textContent=loc(task().title);$('js-stage-name').textContent=loc(stages[task().stage].title);
    $('js-position').textContent=t('stage',{n:task().stage+1})+' / '+stages.length+' · '+(current+1)+' / '+tasks.length;
    $('js-learn').textContent=loc(task().learn);$('js-requirements').innerHTML=task().steps.map(value=>'<li>'+rich(value)+'</li>').join('');
    $('js-theory-link').href='theory.html?lesson='+encodeURIComponent(task().id)+'#'+stages[task().stage].id;
    $('js-theory-link').textContent=t('lessonTheory');$('js-code').value=codeOf(task());
    $('js-input').value=typeof state.inputs[key()]==='string'?state.inputs[key()]:task().cases[0].input;
    $('js-examples').innerHTML=task().cases.slice(0,2).map((test,i)=>`<article class="cb-case"><small>${escape(t('input'))} ${i+1}</small><pre>${escape(test.input||t('noInput'))}</pre><small>${escape(t('expected'))}</small><pre>${escape(output(test.output))}</pre><button type="button" data-example="${i}" class="text-button">${escape(t('useExample'))}</button></article>`).join('');
    $('js-fixtures').replaceChildren();$('js-output').textContent=t('runWaiting');$('js-feedback').hidden=true;$('js-tests').hidden=true;
    $('js-save').textContent=t('saved');$('compiler-runtime').textContent=course.runtime;$('compiler-consent').checked=CB_COMPILER.consent();
    renderHints();paint();setBusy(false);navigation();if(persistState)save();if(focus)$('js-title').focus({preventScroll:false});
  }
  function renderHints(){
    const count=Math.min(Number(state.hints[key()])||0,task().hints.length);
    $('js-hint').replaceChildren();for(const hint of task().hints.slice(0,count)){const p=document.createElement('p');p.textContent=loc(hint);$('js-hint').append(p);}
    $('compiled-hint-next').hidden=count>=task().hints.length;
    $('compiled-hint-end').hidden=count<task().hints.length;
    $('js-hint-code').textContent=stages[task().stage].theory.example.code;
  }
  function errorMessage(error){return t(({consent:'compilerNeedsConsent',rate:'compilerRate',timeout:'compilerTimeout',stopped:'compilerStopped',limit:'compilerLimit'})[error.kind]||'compilerUnavailable');}
  async function execute(check){
    if(busy)return;
    const value=task(),code=$('js-code').value;
    if(!CB_COMPILER.consent()){feedback('error',t('compilerTitle'),t('compilerNeedsConsent'));$('compiler-consent').focus();return;}
    if(check){const missing=CB_COMPILER.missing(code,value.features);if(missing.length){feedback('error',t('useRequestedTool'),t('requestedToolHelp',{tools:missing.map(x=>features[x]||x).join(', ')}));return;}}
    state.drafts[key()]=code;state.inputs[key()]=$('js-input').value;save();
    const tests=check?value.cases:[{input:$('js-input').value}],serial=++sequence;
    $('js-feedback').hidden=true;$('js-tests').hidden=true;setBusy(true);
    let results;
    try{
      $('js-output').textContent=t('compilerProgress',{n:1,total:tests.length});
      results=await CB_COMPILER.run(course,code,tests,progress=>{if(serial===sequence)$('js-output').textContent=t('compilerProgress',{n:Math.min(progress.completed+1,tests.length),total:tests.length});});
      if(serial!==sequence)return;
      const failed=results.find(result=>result.error),first=results[0];$('js-output').textContent=output(first?.output||'');
      if(failed){
        const match=failed.error.message.match(/(?:prog\.(?:cs|cc|cpp)\(|prog\.(?:cs|cc|cpp):)(\d+)/);if(match)paint(Number(match[1]));
        feedback('error',t(failed.error.kind==='compile'?'compilerError':'runtimeError'),t(failed.error.kind==='compile'?'compilerErrorHelp':'runtimeErrorHelp'),failed.error.message);return;
      }
      if(!check)return;
      const flags=value.cases.map((test,i)=>!!results[i]&&!results[i].error&&CB_COMPILER.matches(results[i].output,test.output));
      const passed=flags.filter(Boolean).length;
      $('js-tests').hidden=false;$('js-tests').innerHTML=`<h2>${escape(t('testResults'))}</h2><div class="compiled-table-scroll"><table><thead><tr>${['input','expected','actual','result'].map(label=>'<th>'+escape(t(label))+'</th>').join('')}</tr></thead><tbody>${value.cases.map((test,i)=>`<tr><td><pre>${escape(test.input||t('noInput'))}</pre></td><td><pre>${escape(output(test.output))}</pre></td><td><pre>${escape(results[i]?output(results[i].output):t('notRun'))}</pre></td><td class="${flags[i]?'pass':'fail'}">${flags[i]?'✓':'×'} ${escape(t(flags[i]?'pass':'fail'))}</td></tr>`).join('')}</tbody></table></div>`;
      if(passed===value.cases.length){
        const taskKey=course.prefix+value.id;state.solved[taskKey]=code;state.verifiedRevisions[taskKey]=value.revision;save();navigation();
        feedback('success',t('checkPassed',{n:passed}),tasks.every(solved)?t('pathCompleteHelp'):t('tryOwn'));
        if(current<tasks.length-1){const button=document.createElement('button');button.type='button';button.className='secondary-button';button.textContent=t('nextTask');button.onclick=()=>show(current+1,{focus:true});$('js-feedback').append(button);}
      }else feedback('error',t('checkFailed',{passed,total:value.cases.length}),t('compareHelp'));
    }catch(error){if(serial===sequence)feedback('error',t(error.kind==='stopped'?'stop':'result'),errorMessage(error));}
    finally{if(serial===sequence){setBusy(false);refreshRemote();}}
  }
  function refreshRemote(){if(!pendingRemote||busy||document.activeElement===$('js-code'))return;const previous=task().id;pendingRemote=false;load();const id=chooseRemotePosition&&tasks.some(x=>x.id===state.currentTaskId)?state.currentTaskId:previous;chooseRemotePosition=false;show(Math.max(0,tasks.findIndex(x=>x.id===id)),{persistState:false});}
  $('js-nav').onclick=event=>{const button=event.target.closest('[data-task]');if(button&&!busy)show(tasks.findIndex(x=>x.id===button.dataset.task),{focus:true});};
  $('js-examples').onclick=event=>{const button=event.target.closest('[data-example]');if(button&&!busy){$('js-input').value=task().cases[Number(button.dataset.example)].input;state.inputs[key()]=$('js-input').value;save();}};
  $('js-code').addEventListener('input',()=>{chooseRemotePosition=false;state.drafts[key()]=$('js-code').value;paint();save();navigation();});$('js-code').addEventListener('scroll',()=>{$('js-lines').scrollTop=$('js-code').scrollTop;});$('js-code').addEventListener('blur',refreshRemote);
  $('js-input').addEventListener('input',()=>{chooseRemotePosition=false;state.inputs[key()]=$('js-input').value;save();});
  $('js-code').addEventListener('keydown',event=>{if(event.key==='Tab'&&!busy){event.preventDefault();const start=event.target.selectionStart,end=event.target.selectionEnd;event.target.setRangeText('    ',start,end,'end');event.target.dispatchEvent(new Event('input'));}if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();void execute(true);}});
  $('compiler-consent').onchange=event=>CB_COMPILER.setConsent(event.target.checked);
  $('js-run').onclick=()=>void execute(false);$('js-check').onclick=()=>void execute(true);
  $('js-stop').onclick=()=>{sequence++;CB_COMPILER.stop();setBusy(false);$('js-output').textContent=t('compilerStopped');};
  $('js-reset').onclick=()=>{if(busy)return;state.drafts[key()]=task().starter;save();show(current);};
  $('js-previous').onclick=()=>show(current-1,{focus:true});$('js-next').onclick=()=>show(current+1,{focus:true});
  $('compiled-hint-next').onclick=()=>{state.hints[key()]=Math.min((Number(state.hints[key()])||0)+1,task().hints.length);save();renderHints();};
  $('js-share').onclick=async()=>{const url=new URL(location.href);url.search='';try{await navigator.clipboard.writeText(url.href);$('js-save').textContent=t('copied');}catch{$('js-save').textContent=url.href;}};
  $('compiled-download').onclick=()=>{const url=URL.createObjectURL(new Blob([$('js-code').value],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download=course.filename;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  $('compiled-preview-copy').onclick=()=>{const data=store.archive(course);if(!data)return;const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download='codebloom-'+course.id+'-preview.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  $('compiled-preview-move').onclick=async()=>{if(busy)return;const id=task().id;setBusy(true);$('js-stop').hidden=true;try{if(await store.importPreview(course)){pendingRemote=false;load();show(Math.max(0,tasks.findIndex(value=>value.id===id)),{persistState:false});}else feedback('error',t('previewMove'),t('previewMoveWaiting'));}catch{feedback('error',t('previewMove'),t('previewMoveWaiting'));}finally{setBusy(false);}};
  window.addEventListener('hashchange',()=>{const index=tasks.findIndex(x=>x.id===location.hash.slice(1));if(index>=0&&index!==current)show(index,{focus:true});});
  window.addEventListener('codebloom-language',()=>{CB.apply();show(current,{persistState:false});});
  window.addEventListener('learning-cloud-status',scope);
  window.addEventListener('learning-store-scope',()=>{sequence++;CB_COMPILER.stop();setBusy(false);load();show(Math.max(0,tasks.findIndex(x=>x.id===state.currentTaskId)),{persistState:false});});
  window.addEventListener('learning-store-synced',event=>{if(store.cloudReady&&event.detail?.changed!==false){pendingRemote=true;scope();refreshRemote();}});
  window.addEventListener('storage',event=>{if(event.key===course.storageKey||event.key?.endsWith(':'+course.id)){pendingRemote=true;scope();refreshRemote();}});
  window.addEventListener('pagehide',()=>CB_COMPILER.stop());
  load();show(Math.max(0,tasks.findIndex(x=>x.id===(location.hash.slice(1)||state.currentTaskId))),{persistState:false});
})();

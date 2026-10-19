'use strict';
(() => {
  const $=id=>document.getElementById(id),course=CB_COMPILED_COURSE,{loc,t,rich,escape}=CB;
  let index=0,busy=false,trace=0,serial=0;
  const stage=()=>course.stages[index];
  const showOutput=value=>value===''?t('outputEmpty'):value==='\n'?t('emptyLine'):value;
  function render(){
    const requested=location.hash.slice(1),found=course.stages.findIndex(value=>value.id===requested);if(found>=0)index=found;
    const data=stage().theory;history.replaceState(null,'','#'+stage().id);document.title=loc(stage().title)+' · '+course.name+' · CodeBloom';
    $('theory-title').textContent=loc(stage().title);$('theory-stage').textContent=t('stage',{n:index+1})+' / '+course.stages.length;
    $('theory-intro').textContent=loc(stage().intro);$('theory-paragraphs').innerHTML=data.paragraphs.map(p=>'<p>'+rich(p)+'</p>').join('');
    $('theory-code').textContent=data.example.code;$('theory-input').value=data.example.input;$('theory-expected').textContent=showOutput(data.example.output);$('theory-output').textContent=t('runWaiting');
    $('theory-lines').innerHTML=data.lines.map((line,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${rich(line)}</p></li>`).join('');
    $('theory-mistake').innerHTML=rich(data.mistake);$('theory-sources').replaceChildren();
    for(const url of data.sources){const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=course.name+' · '+t('officialReading')+' ↗';$('theory-sources').append(link);}
    const query=new URLSearchParams(location.search).get('lesson'),all=course.stages.flatMap(s=>s.tasks),returnId=all.some(value=>value.id===query&&stage().tasks.some(x=>x.id===query))?query:stage().tasks[0].id;
    $('theory-return').href='./#'+returnId;
    $('theory-exercises').innerHTML=stage().tasks.map((value,i)=>`<a href="./#${escape(value.id)}"><span>${String(i+1).padStart(2,'0')}</span>${escape(loc(value.title))}<span aria-hidden="true">↗</span></a>`).join('');
    $('js-nav').innerHTML=course.stages.map((value,i)=>`<a class="compiled-theory-nav ${i===index?'active':''}" href="#${escape(value.id)}" ${i===index?'aria-current="page"':''}><span>${String(i+1).padStart(2,'0')}</span>${escape(loc(value.title))}</a>`).join('');
    $('compiler-consent').checked=CB_COMPILER.consent();$('compiler-runtime').textContent=course.runtime;
    $('theory-trace-previous').setAttribute('aria-label',t('previousTraceStep'));$('theory-trace-next').setAttribute('aria-label',t('nextTraceStep'));
    trace=0;paintTrace();
  }
  function paintTrace(){const steps=stage().theory.trace;$('theory-trace-value').textContent=loc(steps[trace]);$('theory-trace-count').textContent=(trace+1)+' / '+steps.length;$('theory-trace-previous').disabled=trace===0;$('theory-trace-next').disabled=trace===steps.length-1;}
  function setBusy(value){busy=value;$('theory-run').disabled=value;$('site-language').disabled=value;$('compiler-consent').disabled=value;$('theory-stop').hidden=!value;}
  $('compiler-consent').onchange=event=>CB_COMPILER.setConsent(event.target.checked);
  $('theory-run').onclick=async()=>{
    if(busy)return;if(!CB_COMPILER.consent()){$('theory-output').textContent=t('compilerNeedsConsent');$('compiler-consent').focus();return;}
    const ticket=++serial;setBusy(true);$('theory-output').textContent=t('compilerProgress',{n:1,total:1});
    try{const results=await CB_COMPILER.run(course,stage().theory.example.code,[{input:$('theory-input').value}]);if(ticket!==serial)return;const value=results[0];$('theory-output').textContent=value.error?t('compilerDiagnostics')+'\n'+value.error.message:showOutput(value.output);}
    catch(error){if(ticket===serial)$('theory-output').textContent=t(error.kind==='stopped'?'compilerStopped':error.kind==='timeout'?'compilerTimeout':error.kind==='rate'?'compilerRate':'compilerUnavailable');}
    finally{if(ticket===serial)setBusy(false);}
  };
  $('theory-stop').onclick=()=>{serial++;CB_COMPILER.stop();setBusy(false);$('theory-output').textContent=t('compilerStopped');};
  $('theory-trace-previous').onclick=()=>{if(trace>0){trace--;paintTrace();}};$('theory-trace-next').onclick=()=>{if(trace<stage().theory.trace.length-1){trace++;paintTrace();}};
  window.addEventListener('hashchange',()=>{serial++;CB_COMPILER.stop();setBusy(false);render();$('theory-title').focus();});
  window.addEventListener('codebloom-language',()=>{CB.apply();render();});window.addEventListener('pagehide',()=>CB_COMPILER.stop());render();
})();

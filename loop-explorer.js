'use strict';
(() => {
  const values={limit:5,start:1,stop:5,step:1,skip:3,halt:6,rows:2,columns:2};
  let model=null,signature='',attempt=null,position=0,context=null,installed=false,invalidParameters=false;
  function build(id,v,t){
    const frames=[];let output='';
    const frame=(lines,variables,note)=>frames.push({lines,variables:{...variables},output,note});
    let code='',variables={};
    const emit=value=>{output+=(output?'\n':'')+value;};
    if(id==='while'){
      code=`charge = ${v.limit}\nwhile charge > 0:\n    print(charge)\n    charge -= 2\nprint("OK")`;
      variables={charge:v.limit};frame([0],variables,t('loopInitial'));
      while(variables.charge>0){frame([1],variables,t('loopConditionTrue'));emit(variables.charge);frame([2],variables,t('loopPrinted'));variables.charge-=2;frame([3],variables,t('loopUpdated'));}
      frame([1],variables,t('loopConditionFalse'));emit('OK');frame([4],variables,t('loopFinished'));
    }else if(id==='for'){
      code=`for number in range(${v.start}, ${v.stop}, ${v.step}):\n    print(number)\nprint("OK")`;
      frame([],{},t('loopRangeReady'));
      for(let number=v.start;v.step>0?number<v.stop:number>v.stop;number+=v.step){variables={number};frame([0],variables,t('loopNextValue'));emit(number);frame([1],variables,t('loopPrinted'));}
      emit('OK');frame([2],variables,t('loopFinished'));
    }else if(id==='accumulator'){
      code=`total = 10\nfor number in range(1, ${v.limit+1}):\n    total += number * 2\nprint(total)`;
      variables={total:10};frame([0],variables,t('loopInitial'));
      for(let number=1;number<=v.limit;number++){variables.number=number;frame([1],variables,t('loopNextValue'));variables.total+=number*2;frame([2],variables,t('loopAccumulated'));}
      emit(variables.total);frame([3],variables,t('loopFinished'));
    }else if(id==='control'){
      code=`skip = ${v.skip}\nstop = ${v.halt}\nfor number in range(1, 9):\n    if number == stop:\n        break\n    if number == skip:\n        continue\n    print(number)\nprint("OK")`;
      variables={skip:v.skip,stop:v.halt};frame([0,1],variables,t('loopInitial'));
      for(let number=1;number<=8;number++){
        variables.number=number;frame([2,3],variables,t('loopStopCheck'));
        if(number===v.halt){frame([4],variables,t('loopBreak'));break;}
        frame([5],variables,t('loopSkipCheck'));
        if(number===v.skip){frame([6],variables,t('loopContinue'));continue;}
        emit(number);frame([7],variables,t('loopPrinted'));
      }
      emit('OK');frame([8],variables,t('loopFinished'));
    }else{
      code=`for row in range(1, ${v.rows+1}):\n    for column in range(1, ${v.columns+1}):\n        print(row, column)\nprint("OK")`;
      frame([],{},t('loopInitial'));
      for(let row=1;row<=v.rows;row++){variables={...variables,row};frame([0],variables,t('loopOuter'));for(let column=1;column<=v.columns;column++){variables.column=column;frame([1],variables,t('loopInner'));emit(row+' '+column);frame([2],variables,t('loopPrinted'));}}
      emit('OK');frame([3],variables,t('loopFinished'));
    }
    return {code,frames,expected:output};
  }
  function render(ctx,preserveControls=false){
    if(!context||context.id!==ctx.id||context.language!==ctx.language)invalidParameters=false;
    context=ctx;const {$,t,escape,traceCode,id,language,busy,ready}=ctx;
    const nextSignature=id+':'+language+':'+JSON.stringify(values);if(signature!==nextSignature){signature=nextSignature;attempt=null;position=0;model=build(id,values,t);}
    const number=(key,label,min,max)=>`<label class="loop-value">${escape(t(label))}<input type="number" min="${min}" max="${max}" step="1" value="${values[key]}" data-loop-value="${key}" aria-label="${escape(t(label))}"><small>${min}…${max}</small></label>`;
    let controls='';
    if(id==='while'||id==='accumulator')controls=number('limit',id==='while'?'loopInitialCharge':'loopRepeatCount',0,8);
    else if(id==='for')controls=number('start','loopStart',-4,8)+number('stop','loopStop',-4,8)+`<label class="loop-value">${escape(t('loopStep'))}<select data-loop-value="step" aria-label="${escape(t('loopStep'))}">${[-2,-1,1,2].map(v=>`<option value="${v}" ${values.step===v?'selected':''}>${v}</option>`).join('')}</select></label>`;
    else if(id==='control')controls=number('skip','loopSkip',1,8)+number('halt','loopHalt',1,8);
    else controls=number('rows','loopRows',0,3)+number('columns','loopColumns',0,3);
    const done=!!attempt&&!attempt.error;
    const buttons=`<button type="button" class="primary-button" data-loop-run ${busy||!ready||invalidParameters?'disabled':''}>${escape(t('loopRun'))}</button><button type="button" class="secondary-button" data-loop-reset ${busy||!done?'disabled':''}>${escape(t('loopReset'))}</button><button type="button" class="secondary-button" data-loop-next ${busy||!done||position>=model.frames.length-1?'disabled':''}>${escape(t('loopNext'))}</button><span class="loop-position">${done?escape(t('loopPosition',{n:position+1,total:model.frames.length})):escape(t('loopWaiting'))}</span>`;
    if(preserveControls&&$('explorer-controls').querySelector('.loop-buttons'))$('explorer-controls').querySelector('.loop-buttons').innerHTML=buttons;
    else $('explorer-controls').innerHTML=`<div class="loop-values">${controls}</div><div class="loop-buttons">${buttons}</div>`;
    const current=done?model.frames[position]:null;traceCode(model.code.split('\n'),current?current.lines:[]);
    $('explorer-output').textContent=attempt?(attempt.error||attempt.output||t('noOutput')):t('loopWaiting');
    $('explorer-explanation').textContent=current?current.note:t('loopInstructions');
    $('loop-trace').hidden=!current;
    $('loop-trace').innerHTML=current?`<div class="loop-variables">${Object.entries(current.variables).map(([name,value])=>'<span><code>'+escape(name)+'</code><strong>'+escape(value)+'</strong></span>').join('')||'<span>—</span>'}</div><div class="loop-current-output"><span>${escape(t('loopOutputSoFar'))}</span><pre>${escape(current.output||t('noOutput'))}</pre></div>`:'';
    $('explorer-actions').hidden=true;$('experiment-required').hidden=true;
    if(!installed){installed=true;
      const updateValues=event=>{
        const changed=event.target.closest('[data-loop-value]');if(!changed)return;
        const next={};invalidParameters=false;
        $('explorer-controls').querySelectorAll('[data-loop-value]').forEach(el=>{const key=el.dataset.loopValue,value=Number(el.value);const valid=el.value.trim()!==''&&Number.isInteger(value)&&(key==='step'?[-2,-1,1,2].includes(value):value>=Number(el.min)&&value<=Number(el.max));el.setAttribute('aria-invalid',String(!valid));if(valid)next[key]=value;else invalidParameters=true;});
        if(invalidParameters){attempt=null;position=0;render(context,true);$('explorer-explanation').textContent=t('loopInvalidParameters');return;}
        Object.assign(values,next);render(context,true);
      };
      $('explorer-controls').addEventListener('input',updateValues);
      $('explorer-controls').addEventListener('change',updateValues);
      $('explorer-controls').addEventListener('click',event=>{if(event.target.closest('[data-loop-run]')){context.onRun();return;}if(event.target.closest('[data-loop-reset]')){position=0;render(context);}else if(event.target.closest('[data-loop-next]')&&attempt&&!attempt.error&&position<model.frames.length-1){position++;render(context);}});
    }
  }
  function prepare(){if(invalidParameters)return null;attempt=null;position=0;return model.code;}
  function finish(data){const result=data.results?.[0],error=data.syntax||result?.error;attempt={output:(result?.output||'').replace(/\r\n/g,'\n').replace(/\n$/,''),error:error?.message||(!result?context.t('workerFailure'):null)};if(!attempt.error&&attempt.output!==model.expected)attempt.error=context.t('workerFailure');position=model.frames.length-1;render(context);}
  function sync(busy,ready){if(!context)return;context={...context,busy,ready};const $=context.$;$('explorer-controls').querySelectorAll('input,select').forEach(el=>el.disabled=busy);const run=$('explorer-controls').querySelector('[data-loop-run]'),next=$('explorer-controls').querySelector('[data-loop-next]'),reset=$('explorer-controls').querySelector('[data-loop-reset]');if(run)run.disabled=busy||!ready||invalidParameters;if(next)next.disabled=busy||!attempt||!!attempt.error||position>=model.frames.length-1;if(reset)reset.disabled=busy||!attempt||!!attempt.error;}
  window.LOOP_EXPLORER={render,prepare,finish,sync,build};
})();

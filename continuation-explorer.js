'use strict';
(() => {
const values={fruit:17,text:'  HELLO  ',age:17,member:'yes',items:3,wrap:'no'};
let context=null,model=null,signature='',attempt=null,invalid=false,installed=false;
function build(id,v,t,taskId='normalize-word'){
 const quote=value=>JSON.stringify(value);
 if(id==='integer-parts')return `fruit = ${v.fruit}\nbox_size = 5\nfull = fruit // box_size\nleft = fruit % box_size\nprint(full, left)`;
 if(id==='clean-text'){
   const first=`note = ${quote(v.text)}\n`;
   if(taskId==='echo-text')return first+'print(note)';
   if(taskId==='copy-text')return first+'result = note\nprint(result)';
   if(['print-prepared','trim-message'].includes(taskId))return first+'result = note.strip()\nprint(result)';
   if(taskId==='lowercase-message')return first+'result = note.lower()\nprint(result)';
   if(taskId==='keep-original')return first+'result = note.strip()\nprint(note)\nprint(result)';
   return first+'tidy = note.strip()\nresult = tidy.lower()\nprint(result)';
 }
 if(id==='saved-conditions')return `age = ${v.age}\ncard = ${quote(v.member)}\nallowed = age >= 18 and card == "yes"\nprint(allowed)\nif allowed:\n    print(${quote(t('exampleAllowed'))})\nelse:\n    print(${quote(t('exampleBlocked'))})`;
 return `items = ${v.items}\ncard = ${quote(v.member)}\nwrap = ${quote(v.wrap)}\nprice = items * 25\nif card == "yes":\n    price = price - 10\nif wrap == "yes":\n    price = price + 8\nprint(price)`;
}
function render(ctx,preserve=false){
 preserve=preserve||!!(context&&context.id===ctx.id&&context.language===ctx.language&&ctx.$('explorer-controls').querySelector('[data-continuation-value]'));
 if(!context||context.id!==ctx.id||context.language!==ctx.language)invalid=false;
 context=ctx;const {$,t,escape,traceCode,id,language,busy,ready}=ctx;
 const next=id+':'+ctx.taskId+':'+language+':'+JSON.stringify(values);if(signature!==next){signature=next;model=build(id,values,t,ctx.taskId);attempt=null;}
 if(id==='clean-text'){
   const prompts={'echo-text':'textDemoRead','copy-text':'textDemoCopy','print-prepared':'textDemoStrip','trim-message':'textDemoStrip','lowercase-message':'textDemoLower','keep-original':'textDemoOriginal'};
   $('explorer-prompt').textContent=t(prompts[ctx.taskId]||'textDemoBoth');
 }
 const number=(key,label,min,max)=>`<label class="loop-value">${escape(t(label))}<input type="number" min="${min}" max="${max}" step="1" value="${values[key]}" data-continuation-value="${key}" aria-label="${escape(t(label))}"><small>${min}…${max}</small></label>`;
 const choice=(key,label)=>`<label class="loop-value">${escape(t(label))}<select data-continuation-value="${key}" aria-label="${escape(t(label))}">${['yes','no'].map(value=>`<option value="${value}"${values[key]===value?' selected':''}>${escape(t(value==='yes'?'exampleYes':'exampleNo'))}</option>`).join('')}</select></label>`;
 const controls=id==='integer-parts'?number('fruit','fruitAmount',0,50):id==='clean-text'?`<label class="loop-value example-text">${escape(t('rawText'))}<input type="text" maxlength="48" value="${escape(values.text)}" data-continuation-value="text" aria-label="${escape(t('rawText'))}"></label>`:id==='saved-conditions'?number('age','exampleAge',0,120)+choice('member','exampleMember'):number('items','exampleItems',1,8)+choice('member','exampleMember')+choice('wrap','exampleWrap');
 if(!preserve)$('explorer-controls').innerHTML=`<div class="loop-values">${controls}</div><div class="loop-buttons"><button type="button" class="primary-button" data-continuation-run>${escape(t('exampleRun'))}</button></div>`;
 traceCode(model.split('\n'),[]);
 $('explorer-output').textContent=attempt?(attempt.error||attempt.output||t('noOutput')):t('exampleWaiting');
 $('explorer-explanation').textContent=invalid?t('exampleInvalid'):attempt?(attempt.error||t('exampleDone')):t('exampleInstructions');
 if(id==='clean-text'&&attempt&&!attempt.error&&!invalid&&!attempt.output.includes('\n'))$('explorer-explanation').textContent=t('textQuotedOutput',{value:JSON.stringify(attempt.output)});
 sync(busy,ready);
 if(!installed){installed=true;const change=event=>{
   if(!event.target.closest('[data-continuation-value]'))return;
   let valid=true;const nextValues={...values};
   context.$('explorer-controls').querySelectorAll('[data-continuation-value]').forEach(field=>{
     let good=true,value=field.value;
     if(field.type==='number'){value=Number(field.value);good=field.value.trim()!==''&&Number.isInteger(value)&&value>=Number(field.min)&&value<=Number(field.max);}
     else if(field.tagName==='SELECT')good=['yes','no'].includes(value);
     field.setAttribute('aria-invalid',String(!good));if(good)nextValues[field.dataset.continuationValue]=value;else valid=false;
   });invalid=!valid;Object.assign(values,nextValues);render(context,true);
 };$('explorer-controls').addEventListener('input',change);$('explorer-controls').addEventListener('change',change);$('explorer-controls').addEventListener('click',event=>{if(event.target.closest('[data-continuation-run]'))context.onRun();});}
}
function prepare(){if(invalid)return null;attempt=null;return model;}
function finish(data){const result=data.results?.[0],error=data.syntax||result?.error;attempt={output:(result?.output||'').replace(/\r\n/g,'\n').replace(/\n$/,''),error:error?.message||(!result?context.t('workerFailure'):null)};render(context);}
function sync(busy,ready){if(!context)return;context={...context,busy,ready};context.$('explorer-controls').querySelectorAll('input,select').forEach(field=>field.disabled=busy);const run=context.$('explorer-controls').querySelector('[data-continuation-run]');if(run)run.disabled=busy||!ready||invalid;}
window.NEXT_EXPLORER={render,prepare,finish,sync,build};
})();

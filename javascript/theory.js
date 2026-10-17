'use strict';
(() => {
  const $=id=>document.getElementById(id),{loc,t,escape,rich}=CB,stages=JAVASCRIPT_COURSE;
  function render(){
    const requested=location.hash.slice(1);let index=stages.findIndex(stage=>stage.id===requested||stage.tasks.some(task=>task.id===requested));if(index<0)index=0;const stage=stages[index];
    document.title=loc(stage.title)+' · JavaScript · CodeBloom';$('js-theory-stage').innerHTML=stages.map((s,i)=>'<option value="'+s.id+'"'+(i===index?' selected':'')+'>'+escape(t('stage',{n:i+1})+' · '+loc(s.title))+'</option>').join('');
    $('js-theory-content').innerHTML=`<article id="${stage.id}"><p class="eyebrow">${escape(t('stage',{n:index+1}))}</p><h2>${escape(loc(stage.title))}</h2><p>${rich(stage.intro)}</p><h3>${escape(t('example'))}</h3><pre>${escape(stage.example)}</pre><h3>${escape(t('why'))}</h3><ul>${stage.notes.map(note=>'<li>'+rich(note)+'</li>').join('')}</ul>${stage.tasks.map(task=>`<section class="theory-task" id="${task.id}"><h3>${escape(loc(task.title))}</h3><p>${rich(task.learn)}</p><pre>${escape(task.example)}</pre><p>${escape(t('tryOwn'))}</p><a class="primary-button" href="./#${escape(task.id)}">${escape(t('backPractice'))}</a></section>`).join('')}</article>`;
    if(requested&&requested!==stage.id)document.getElementById(requested)?.scrollIntoView();
  }
  $('js-theory-stage').onchange=()=>location.hash=$('js-theory-stage').value;window.addEventListener('hashchange',render);window.addEventListener('codebloom-language',render);render();
})();

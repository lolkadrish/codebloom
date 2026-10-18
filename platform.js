'use strict';
(() => {
  const {loc,t,escape,root}=CB,kind=document.documentElement.dataset.course;
  const courses=window.CODEBLOOM_PYTHON||[],stages=window.JAVASCRIPT_COURSE||[];
  const read=key=>{try{return JSON.parse(window.LEARNING_STORE?LEARNING_STORE.readCourse(key):localStorage.getItem(key))||{};}catch{return {};}};
  function pythonProgress(course){const data=read(course.key),prefix=course.prefix||CB.language+':';let done=course.ids.filter(id=>typeof data.solved?.[prefix+id]==='string'&&data.solved[prefix+id]===data.drafts?.[prefix+id]&&(!course.revisions||data.verifiedRevisions?.[prefix+id]===course.revisions[id])).length;if(course.first&&data.experiments?.[prefix+'if-temperature']?.revision===1)done++;return {done,total:course.ids.length+(course.first?1:0),data};}
  function jsProgress(stage){const data=read('javascript-learning-v1'),prefix='js:';return {done:stage.tasks.filter(task=>typeof data.solved?.[prefix+task.id]==='string'&&data.solved[prefix+task.id]===data.drafts?.[prefix+task.id]&&data.verifiedRevisions?.[prefix+task.id]===task.revision).length,total:stage.tasks.length,data};}
  function render(){
    const py=courses.map(pythonProgress),js=stages.map(jsProgress),pyTotal=py.reduce((n,x)=>n+x.total,0),pyDone=py.reduce((n,x)=>n+x.done,0),jsTotal=js.reduce((n,x)=>n+x.total,0),jsDone=js.reduce((n,x)=>n+x.done,0);
    document.title=(kind==='home'?'CodeBloom':kind==='python-path'?'Python':'JavaScript')+' · '+t('pageTagline');
    const pyLabel=document.getElementById('python-progress'),jsLabel=document.getElementById('javascript-progress');if(pyLabel)pyLabel.textContent=t('progressCount',{done:pyDone,total:pyTotal});if(jsLabel)jsLabel.textContent=t('progressCount',{done:jsDone,total:jsTotal});
    const grid=document.getElementById('path-stages');if(!grid)return;
    const python=kind==='python-path',items=python?courses:stages,progress=python?py:js;
    grid.innerHTML=items.map((item,index)=>{const p=progress[index],href=python?new URL(item.url,root):new URL('javascript/#'+item.tasks[0].id,root),title=loc(item.title),description=python?loc(item.intro):loc(item.intro).split('. ')[0]+'.';return `<a class="path-stage ${p.done===p.total?'finished':''}" href="${escape(href)}"><span class="path-number">${String(index+1).padStart(2,'0')}</span><div><p class="eyebrow">${escape(t('stage',{n:index+1}))}</p><h2>${escape(title)}</h2><p>${escape(description)}</p><span class="path-count">${escape(t('progressCount',{done:p.done,total:p.total}))}</span></div><span aria-hidden="true">↗</span></a>`;}).join('');
    const resume=document.getElementById('path-resume'),data=python?py.find(x=>x.done<x.total)?.data:read('javascript-learning-v1');let href=python?new URL(courses.find((_,i)=>py[i].done<py[i].total)?.url||courses[0].url,root):new URL('javascript/#'+(stages.flatMap(s=>s.tasks).some(x=>x.id===data.currentTaskId)?data.currentTaskId:stages[0].tasks[0].id),root);if(resume)resume.href=href;
  }
  if(kind==='home'){
    const legacy=window.CODEBLOOM_PYTHON?.find(x=>x.id==='next');if(legacy?.ids.includes(location.hash.slice(1))){location.replace(new URL('python.html',root).href+location.hash);return;}
  }
  window.addEventListener('codebloom-language',render);window.addEventListener('learning-store-synced',render);render();
})();

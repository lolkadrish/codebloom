'use strict';
(() => {
  const {loc,t,escape,root}=CB,kind=document.documentElement.dataset.course;
  const courses=window.CODEBLOOM_PYTHON||[],stages=window.JAVASCRIPT_COURSE||[],languages=['en','ru','uk'];
  const read=key=>{try{return JSON.parse(window.LEARNING_STORE?LEARNING_STORE.readCourse(key):localStorage.getItem(key))||{};}catch{return {};}};
  const savedKeys=(course,id)=>course.prefix?[course.prefix+id]:[...languages.map(language=>language+':'+id),...(course.id==='next'?[id]:[])];
  function completed(course,data,id){return savedKeys(course,id).some(key=>typeof data.solved?.[key]==='string'&&data.solved[key]===data.drafts?.[key]&&(course.prefix?data.verifiedRevisions?.[key]===course.revisions[id]:(data.verifiedRevisions?.[key]||1)===(course.revisions?.[id]||1)));}
  function pythonProgress(course){
    const data=read(course.key);let done=course.ids.filter(id=>completed(course,data,id)).length;
    if(course.first&&savedKeys(course,'if-temperature').some(key=>{const attempt=data.experiments?.[key];return attempt?.revision===1&&Number.isFinite(attempt.temperature)&&attempt.temperature>=-10&&attempt.temperature<0;}))done++;
    return {done,total:course.ids.length+(course.first?1:0),data};
  }
  function languageFor(course,data,id,fallback=CB.language){
    const hasDraft=(language,taskId)=>typeof data.drafts?.[language+':'+taskId]==='string'||(language==='ru'&&course.id==='next'&&typeof data.drafts?.[taskId]==='string');
    const exact=[CB.language,data.language,...languages].find(language=>languages.includes(language)&&hasDraft(language,id));if(exact)return exact;
    const saved=languages.map(language=>({language,count:[...course.ids,'if-temperature'].filter(id=>hasDraft(language,id)||['solved','inputs','hints','experiments'].some(field=>Object.hasOwn(data[field]||{},language+':'+id))).length})).sort((a,b)=>b.count-a.count)[0];
    return saved.count?saved.language:fallback;
  }
  function pythonResume(progress){
    const hasWork=(course,data)=>course.ids.some(id=>savedKeys(course,id).some(key=>['drafts','solved','inputs','hints'].some(field=>Object.hasOwn(data[field]||{},key))))||(course.first&&Object.keys(data.experiments||{}).length>0);
    // A translated interface must not send an existing learner back to stage one.
    let index=courses.findLastIndex((course,i)=>hasWork(course,progress[i].data));
    if(index<0)index=progress.findIndex(p=>p.done<p.total);if(index<0)index=0;
    // Account clocks also let learners resume an earlier stage they revisited.
    if(window.LEARNING_STORE?.owner()){
      const entries=window.LEARNING_STORE.cache().entries,candidates=new Map();let latest=null;
      courses.forEach((course,i)=>{if(!candidates.has(course.id)&&hasWork(course,progress[i].data))candidates.set(course.id,i);});
      for(const [path,record]of Object.entries(entries)){
        const candidate=candidates.get(path.split('/')[0]);
        if(candidate===undefined||record.deleted)continue;
        const clock=record.clock;if(!latest||clock[0]>latest[0]||(clock[0]===latest[0]&&(clock[1]>latest[1]||(clock[1]===latest[1]&&clock[2]>latest[2])))){latest=clock;index=candidate;}
      }
    }
    let course=courses[index],data=progress[index].data;
    // Several advanced stages share one save. Keep its actual saved lesson.
    const savedCourse=courses.findIndex(item=>item.key===course.key&&item.ids.includes(data.currentTaskId));
    if(savedCourse>=0){index=savedCourse;course=courses[index];data=progress[index].data;}
    const previousLanguage=course.prefix?CB.language:languageFor(course,data,data.currentTaskId);
    if(progress[index].done===progress[index].total){const next=progress.findIndex((p,i)=>i>index&&p.done<p.total);if(next>=0){index=next;course=courses[index];data=progress[index].data;}}
    const id=course.ids.includes(data.currentTaskId)?data.currentTaskId:course.ids.find(id=>!completed(course,data,id))||course.ids[0];
    const url=new URL(course.url,root);url.hash=id;let language=null;
    if(!course.prefix){
      language=languageFor(course,data,id,previousLanguage);
      url.searchParams.set('resume-language',language);
    }
    return {url,language,index};
  }
  let waiting=false,resumeError='';
  function jsProgress(stage){const data=read('javascript-learning-v1'),prefix='js:';return {done:stage.tasks.filter(task=>typeof data.solved?.[prefix+task.id]==='string'&&data.solved[prefix+task.id]===data.drafts?.[prefix+task.id]&&data.verifiedRevisions?.[prefix+task.id]===task.revision).length,total:stage.tasks.length,data};}
  function render(){
    const py=courses.map(pythonProgress),js=stages.map(jsProgress),pyTotal=py.reduce((n,x)=>n+x.total,0),pyDone=py.reduce((n,x)=>n+x.done,0),jsTotal=js.reduce((n,x)=>n+x.total,0),jsDone=js.reduce((n,x)=>n+x.done,0);
    document.title=(kind==='home'?'CodeBloom':kind==='python-path'?'Python':'JavaScript')+' · '+t('pageTagline');
    const pyLabel=document.getElementById('python-progress'),jsLabel=document.getElementById('javascript-progress');if(pyLabel)pyLabel.textContent=t('progressCount',{done:pyDone,total:pyTotal});if(jsLabel)jsLabel.textContent=t('progressCount',{done:jsDone,total:jsTotal});
    const grid=document.getElementById('path-stages');if(!grid)return;
    const python=kind==='python-path',items=python?courses:stages,progress=python?py:js;
    grid.innerHTML=items.map((item,index)=>{const p=progress[index],href=python?new URL(item.url,root):new URL('javascript/#'+item.tasks[0].id,root),title=loc(item.title),description=python?loc(item.intro):loc(item.intro).split('. ')[0]+'.';return `<a class="path-stage ${p.done===p.total?'finished':''}" href="${escape(href)}"><span class="path-number">${String(index+1).padStart(2,'0')}</span><div><p class="eyebrow">${escape(t('stage',{n:index+1}))}</p><h2>${escape(title)}</h2><p>${escape(description)}</p><span class="path-count">${escape(t('progressCount',{done:p.done,total:p.total}))}</span></div><span aria-hidden="true">↗</span></a>`;}).join('');
    const resume=document.getElementById('path-resume');if(!resume)return;
    const target=python?pythonResume(py):{url:new URL('javascript/#'+(stages.flatMap(s=>s.tasks).some(x=>x.id===read('javascript-learning-v1').currentTaskId)?read('javascript-learning-v1').currentTaskId:stages[0].tasks[0].id),root)};
    resume.href=target.url;resume.textContent=waiting?t('loadingProgress'):t('startResume');resume.setAttribute('aria-busy',String(waiting));resume.setAttribute('aria-disabled',String(waiting));
    const note=document.getElementById('path-resume-note');
    if(note){
      const cloud=window.LEARNING_CLOUD?.getStatus(),loading=window.LEARNING_STORE?.owner()&&['connecting','syncing'].includes(cloud?.status);
      note.textContent=resumeError?t(resumeError):waiting||loading?t('loadingProgress'):target.language?t('resumeSavedLanguage',{language:{en:'English',ru:'Русский',uk:'Українська'}[target.language]}):t('resumeSavedLesson');
    }
    const help=document.getElementById('path-account-help');if(help){help.hidden=!resumeError;help.href=new URL('account.html',root);help.textContent=t('openAccount');}
  }
  const resume=document.getElementById('path-resume');
  resume?.addEventListener('click',async event=>{
    if(waiting){event.preventDefault();return;}
    const store=window.LEARNING_STORE,cloud=window.LEARNING_CLOUD,id=store?.owner()?.id;
    if(!id||!cloud?.enabled)return;
    event.preventDefault();waiting=true;resumeError='';render();
    try{
      await cloud.connect();
      if(store.owner()?.id!==id)return;
      if(cloud.getStatus().status==='synced'||store.cache().lastSynced){waiting=false;render();location.assign(resume.href);}
      else resumeError=cloud.getStatus().status==='reauth'?'resumeSignIn':'resumeUnavailable';
    }catch{resumeError='resumeUnavailable';}
    finally{waiting=false;render();}
  });
  if(kind==='home'){
    const legacy=window.CODEBLOOM_PYTHON?.find(x=>x.id==='next');if(legacy?.ids.includes(location.hash.slice(1))){location.replace(new URL('python.html',root).href+location.hash);return;}
  }
  window.addEventListener('codebloom-language',render);window.addEventListener('learning-store-synced',render);window.addEventListener('learning-cloud-status',render);render();
})();

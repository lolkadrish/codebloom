'use strict';
(() => {
  const {loc,t,escape,root}=CB,meta=CB_COMPILED_META,store=CB_COMPILED_STORE,kind=document.documentElement.dataset.course;
  let waiting=false,resumeError='';
  const all=course=>course.stages.flatMap(stage=>stage.ids.map(id=>({id,revision:1})));
  const progress=course=>{const state=store.read(course);return {state,total:all(course).length,done:all(course).filter(task=>store.solved(course,state,task)).length};};
  function render(){
    for(const course of Object.values(meta)){const node=document.getElementById(course.id+'-progress');if(node){const p=progress(course);node.textContent=t('progressCount',p);}}
    const course=meta[kind.replace('-path','')];if(!course)return;
    document.title=course.name+' · CodeBloom';const p=progress(course),tasks=all(course),requested=tasks.some(task=>task.id===p.state.currentTaskId)?p.state.currentTaskId:tasks.find(task=>!store.solved(course,p.state,task))?.id||tasks[0].id;
    const current=course.stages.findIndex(stage=>stage.ids.includes(requested));
    document.getElementById('path-stages').innerHTML=course.stages.map((stage,i)=>{
      const done=stage.ids.filter(id=>store.solved(course,p.state,{id,revision:1})).length,percent=Math.round(done/stage.ids.length*100);
      return `<a class="path-stage ${done===stage.ids.length?'finished ':''}${i===current?'current':''}" href="${escape(new URL(course.id+'/#'+(i===current?requested:stage.ids[0]),root))}" data-stage-index="${i}" ${i===current?'aria-current="step"':''} style="--stage-progress:${percent}%"><div class="route-card-top"><p class="eyebrow">${escape(t('stage',{n:i+1}))}</p><span class="route-current-label">${escape(t('routeContinueHere'))}</span></div><div class="route-card-main"><span class="path-number">${String(i+1).padStart(2,'0')}</span><div><h2>${escape(loc(stage.title))}</h2><p>${escape(loc(stage.intro))}</p></div></div><div class="route-card-bottom"><span class="path-count">${escape(t('progressCount',{done,total:stage.ids.length}))}</span><span class="route-card-go">${escape(t('routeOpenStage'))} ↗</span></div><span class="route-card-meter" aria-hidden="true"><span></span></span></a>`;
    }).join('');
    const percent=Math.round(p.done/p.total*100);document.getElementById('route-total-label').textContent=t('progressCount',p);document.getElementById('route-percent').textContent=percent+'%';
    const meter=document.getElementById('route-total-meter');meter.style.setProperty('--route-progress',percent+'%');meter.setAttribute('aria-valuenow',String(percent));meter.setAttribute('aria-valuetext',t('progressCount',p));
    const resume=document.getElementById('path-resume');resume.href=new URL(course.id+'/#'+requested,root);resume.textContent=t(waiting?'loadingProgress':'startResume');resume.setAttribute('aria-busy',String(waiting));resume.setAttribute('aria-disabled',String(waiting));
    document.getElementById('path-resume-note').textContent=resumeError?t(resumeError):waiting?t('loadingProgress'):store.pendingPreview(course)?t('previewMoveHelp'):store.cloudReady?t('resumeSavedLesson'):t('compiledPreviewSave');
    const help=document.getElementById('path-account-help');help.hidden=!resumeError;help.href=new URL('account.html',root);help.textContent=t('openAccount');
  }
  document.getElementById('path-resume')?.addEventListener('click',async event=>{
    if(waiting){event.preventDefault();return;}
    const course=meta[kind.replace('-path','')],owner=window.LEARNING_STORE?.owner(),cloud=window.LEARNING_CLOUD;
    if(!course||!store.cloudReady||store.pendingPreview(course)||!owner||!cloud?.enabled)return;
    event.preventDefault();waiting=true;resumeError='';render();
    try{
      await cloud.connect();if(window.LEARNING_STORE?.owner()?.id!==owner.id)return;
      if(cloud.getStatus().status==='synced'||window.LEARNING_STORE.cache().lastSynced){waiting=false;render();location.assign(document.getElementById('path-resume').href);}
      else resumeError=cloud.getStatus().status==='reauth'?'resumeSignIn':'resumeUnavailable';
    }catch{resumeError='resumeUnavailable';}finally{waiting=false;render();}
  });
  window.addEventListener('codebloom-language',render);window.addEventListener('codebloom-compiled-progress',render);window.addEventListener('storage',render);window.addEventListener('learning-store-synced',render);window.addEventListener('learning-cloud-status',render);render();
})();

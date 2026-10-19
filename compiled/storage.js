'use strict';
(() => {
  // Publication enables the existing account store only after its server-side
  // namespace allowlist has been upgraded. A preview never queues unknown paths.
  const cloudReady = true;
  const fields=['drafts','inputs','solved','hints','quizzes','answers','verifiedRevisions','experiments'];
  const parse=key=>{try{return JSON.parse(localStorage.getItem(key))||{};}catch{return {};}};
  const previewKey=(course,owner=window.LEARNING_STORE?.owner())=>owner?'codebloom-course-preview:'+owner.id+':'+course.id:null;
  const pendingPreview=course=>{
    if(!cloudReady||!window.LEARNING_STORE?.owner())return false;
    try{const key=previewKey(course);return !!localStorage.getItem(key)&&localStorage.getItem(key+':merged')!=='yes';}catch{return false;}
  };
  const courseKey = course => {
    const owner=window.LEARNING_STORE?.owner();
    return owner&&(!cloudReady||pendingPreview(course)) ? previewKey(course,owner) : course.storageKey;
  };
  const read=course=>{try{return JSON.parse(cloudReady&&!pendingPreview(course)&&window.LEARNING_STORE?window.LEARNING_STORE.readCourse(course.storageKey):localStorage.getItem(courseKey(course)))||{};}catch{return {};}};
  const write=(course,value)=>{
    if(cloudReady&&!pendingPreview(course)&&window.LEARNING_STORE)window.LEARNING_STORE.writeCourse(course.storageKey,value);
    else localStorage.setItem(courseKey(course),JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('codebloom-compiled-progress',{detail:{course:course.id}}));
  };
  const solved=(course,state,task)=>typeof state.solved?.[course.prefix+task.id]==='string'&&state.solved[course.prefix+task.id]===state.drafts?.[course.prefix+task.id]&&state.verifiedRevisions?.[course.prefix+task.id]===task.revision;
  const archive=course=>{const key=previewKey(course);try{return key&&localStorage.getItem(key)?parse(key):null;}catch{return null;}};
  async function importPreview(course){
    const owner=window.LEARNING_STORE?.owner(),cloud=window.LEARNING_CLOUD;
    if(!owner||!cloud||!pendingPreview(course))return false;
    const current=()=>window.LEARNING_STORE?.owner()?.id===owner.id;
    if(!await cloud.connect()||!current())return false;
    const key=previewKey(course,owner),snapshot=localStorage.getItem(key),preview=JSON.parse(snapshot||'{}');
    const remote=JSON.parse(window.LEARNING_STORE.readCourse(course.storageKey)||'{}'),previous=parse(key+':imported'),written={};
    for(const field of fields){
      if(!remote[field]||typeof remote[field]!=='object')remote[field]={};
      for(const [name,value]of Object.entries(preview[field]||{})){
        if(['__proto__','constructor','prototype'].includes(name))continue;
        if(!Object.hasOwn(remote[field],name)||Object.hasOwn(previous[field]||{},name)&&JSON.stringify(remote[field][name])===JSON.stringify(previous[field][name])){
          remote[field][name]=value;(written[field]||={})[name]=value;
        }
      }
    }
    for(const field of ['current','currentTaskId'])if(!Object.hasOwn(remote,field)&&Object.hasOwn(preview,field))remote[field]=preview[field];
    if(!current())return false;
    window.LEARNING_STORE.writeCourse(course.storageKey,remote);localStorage.setItem(key+':imported',JSON.stringify(written));
    if(!await cloud.sync()||!current()||localStorage.getItem(key)!==snapshot)return false;
    // Keep the original preview archive even after a successful merge. Existing
    // account fields win; no preview draft is deleted or silently overwritten.
    localStorage.setItem(key+':merged','yes');return true;
  }
  window.CB_COMPILED_STORE={read,write,solved,cloudReady,pendingPreview,importPreview,archive};
})();

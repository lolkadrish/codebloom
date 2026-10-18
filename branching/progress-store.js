'use strict';
(() => {
  const KEYS={first:'python-first-step-v1',next:'python-next-step-v1',continuation:'python-continuation-step-v1',loops:'python-loops-step-v1',javascript:'javascript-learning-v1',pythonadvanced:'python-advanced-learning-v1'};
  const MAPS=['drafts','inputs','solved','hints','quizzes','answers','verifiedRevisions','experiments'];
  const MODE='python-account-mode-v1',PREFIX='python-account-data-v1:';
  const safeKey=value=>typeof value==='string'&&value.length>0&&value.length<=180&&!['__proto__','constructor','prototype'].includes(value);
  const object=value=>!!value&&typeof value==='object'&&!Array.isArray(value);
  const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
  const clone=value=>JSON.parse(JSON.stringify(value));
  const validClock=value=>Array.isArray(value)&&value.length===3&&Number.isSafeInteger(value[0])&&value[0]>=0&&Number.isSafeInteger(value[1])&&value[1]>=0&&typeof value[2]==='string'&&/^[a-zA-Z0-9-]{8,100}$/.test(value[2]);
  const compare=(a,b)=>a[0]-b[0]||a[1]-b[1]||(a[2]===b[2]?0:a[2]>b[2]?1:-1);
  function validPath(path){const parts=path.split('/');return parts.length===3&&Object.hasOwn(KEYS,parts[0])&&(MAPS.includes(parts[1])||parts[1]==='position')&&safeKey(parts[2]);}
  function validRecord(path,record){return validPath(path)&&object(record)&&validClock(record.clock)&&typeof record.deleted==='boolean'&&(record.deleted||record.value!==undefined)&&JSON.stringify(record).length<=70000;}
  function flat(stage,state){
    const result=Object.create(null);
    for(const field of MAPS)if(object(state[field]))for(const [key,value]of Object.entries(state[field]))if(safeKey(key)&&value!==undefined)result[stage+'/'+field+'/'+encodeURIComponent(key)]=clone(value);
    if(Number.isInteger(state.current)&&state.current>=0)result[stage+'/position/current']=state.current;
    if(typeof state.currentTaskId==='string')result[stage+'/position/currentTaskId']=state.currentTaskId;
    return result;
  }
  function unpack(stage,entries){
    const result={};for(const field of MAPS)result[field]=Object.create(null);
    for(const [path,record]of Object.entries(entries)){
      if(!path.startsWith(stage+'/')||record.deleted||!validRecord(path,record))continue;
      const [,field,encoded]=path.split('/');let key;try{key=decodeURIComponent(encoded);}catch{continue;}if(!safeKey(key))continue;
      if(field==='position'){if(key==='current'&&Number.isInteger(record.value))result.current=record.value;if(key==='currentTaskId'&&typeof record.value==='string')result.currentTaskId=record.value;}
      else result[field][key]=clone(record.value);
    }return result;
  }
  function create({storage,now=Date.now,actor,notify=()=>{}}){
    if(!actor)throw new Error('A unique browser-tab identifier is required');
    const baselines=new Map();
    const parse=key=>{try{return JSON.parse(storage.getItem(key));}catch{return null;}};
    const owner=()=>{const value=parse(MODE);return object(value)&&typeof value.id==='string'&&/^[0-9a-f-]{36}$/i.test(value.id)?value:null;};
    function load(id=owner()?.id){
      const raw=parse(PREFIX+id),cache={entries:{},outbox:{},clock:[0,0,actor],conflicts:[],lastSynced:null};
      if(object(raw)){
        for(const field of ['entries','outbox'])if(object(raw[field]))for(const [path,record]of Object.entries(raw[field]))if(validRecord(path,record))cache[field][path]=record;
        if(validClock(raw.clock))cache.clock=raw.clock;
        if(Array.isArray(raw.conflicts))cache.conflicts=raw.conflicts.slice(-20);
        if(Number.isFinite(raw.lastSynced))cache.lastSynced=raw.lastSynced;
      }return cache;
    }
    function tick(cache){const time=Math.max(now(),cache.clock[0]);cache.clock=[time,time===cache.clock[0]?cache.clock[1]+1:0,actor];return [...cache.clock];}
    const save=(id,cache)=>storage.setItem(PREFIX+id,JSON.stringify(cache));
    function readCourse(key){
      const user=owner(),stage=Object.keys(KEYS).find(stage=>KEYS[stage]===key);if(!user||!stage)return storage.getItem(key);
      const entries=load(user.id).entries,state=unpack(stage,entries);baselines.set(key,flat(stage,state));return Object.keys(entries).some(path=>path.startsWith(stage+'/'))?JSON.stringify(state):null;
    }
    function writeCourse(key,state){
      const user=owner(),stage=Object.keys(KEYS).find(stage=>KEYS[stage]===key);if(!user||!stage){storage.setItem(key,JSON.stringify(state));return;}
      const cache=load(user.id),before=baselines.get(key)||flat(stage,unpack(stage,cache.entries)),after=flat(stage,state);let changed=false;
      for(const path of new Set([...Object.keys(before),...Object.keys(after)])){
        if(equal(before[path],after[path]))continue;
        const deleted=!Object.hasOwn(after,path),record={clock:tick(cache),deleted,...(!deleted?{value:after[path]}:{})};
        cache.entries[path]=record;cache.outbox[path]=record;changed=true;
      }
      baselines.set(key,after);if(changed){save(user.id,cache);notify('write',{id:user.id});}
    }
    function activate(user){
      if(!user||typeof user.id!=='string'||!/^[0-9a-f-]{36}$/i.test(user.id))throw new Error('Invalid account');
      storage.setItem(MODE,JSON.stringify({id:user.id,email:typeof user.email==='string'?user.email:''}));baselines.clear();notify('scope',{id:user.id});
    }
    function useLocal(){storage.removeItem(MODE);baselines.clear();notify('scope',{id:null});}
    function importLocal(){
      const user=owner();if(!user)throw new Error('Sign in first');const cache=load(user.id);let imported=0;
      for(const [stage,key]of Object.entries(KEYS)){
        const state=parse(key);if(!object(state))continue;
        if(stage==='next')for(const field of MAPS)if(object(state[field]))for(const old of Object.keys(state[field]))if(!/^(ru|uk|en):/.test(old)&&!Object.hasOwn(state[field],'ru:'+old))state[field]['ru:'+old]=state[field][old];
        for(const [path,value]of Object.entries(flat(stage,state))){
          if(cache.entries[path]&&!cache.entries[path].deleted)continue;
          const record={clock:tick(cache),deleted:false,value};cache.entries[path]=record;cache.outbox[path]=record;imported++;
        }
      }
      save(user.id,cache);notify('write',{id:user.id});return imported;
    }
    function pending(id){return clone(load(id).outbox);}
    function accept(id,remote,sent={}){
      if(owner()?.id!==id)return false;
      if(!object(remote)||Object.keys(remote).some(path=>!validRecord(path,remote[path])))throw new Error('Invalid cloud progress');
      const cache=load(id),courses=new Set();let changed=false;
      for(const [path,incoming]of Object.entries(remote)){
        if(compare(incoming.clock,cache.clock)>0)cache.clock=[...incoming.clock];
        const local=cache.entries[path];
        if(!local||compare(incoming.clock,local.clock)>0){
          if(local&&!local.deleted&&!incoming.deleted&&path.includes('/drafts/')&&!equal(local.value,incoming.value))cache.conflicts.push({path,value:local.value,clock:local.clock});
          cache.entries[path]=incoming;changed=true;if(path.split('/')[1]!=='position')courses.add(path.split('/')[0]);
        }
      }
      for(const [path,record]of Object.entries(sent))if(cache.outbox[path]&&equal(cache.outbox[path].clock,record.clock)&&remote[path]&&compare(remote[path].clock,record.clock)>=0)delete cache.outbox[path];
      cache.conflicts=cache.conflicts.slice(-20);cache.lastSynced=now();save(id,cache);notify('synced',{id,changed,courses:[...courses]});return changed;
    }
    function guestSummary(){return Object.entries(KEYS).map(([stage,key])=>{const state=parse(key)||{};return {stage,hasData:MAPS.some(field=>object(state[field])&&Object.keys(state[field]).length>0)};});}
    return {owner,activate,useLocal,readCourse,writeCourse,importLocal,pending,accept,guestSummary,cache:()=>load(),keys:KEYS};
  }
  window.LEARNING_STORE_FACTORY={create,compare,validRecord,unpack,flat,keys:KEYS};
  if(typeof localStorage!=='undefined'&&typeof crypto!=='undefined'){
    const actor=crypto.randomUUID();
    window.LEARNING_STORE=create({storage:localStorage,actor,notify:(type,detail)=>window.dispatchEvent(new CustomEvent('learning-store-'+type,{detail}))});
  }
})();

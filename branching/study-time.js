'use strict';
function createLearningStudyClock(env) {
  const INTERVAL=15000, IDLE=120000;
  let lastTick=env.now(),lastInteraction=lastTick,lastSend=lastTick-INTERVAL;
  let owner=null,client=env.random(),accrued=0,wasActive=false,sending=false,queued=false,hadPulse=false;
  const active=()=>!!owner&&env.eligible()&&env.visible()&&env.focused()&&env.online()&&env.now()-lastInteraction<IDLE;
  async function flush() {
    if(sending){queued=true;return;}
    if(!owner||!env.online()||(!wasActive&&!hadPulse))return;
    sending=true;lastSend=env.now();
    const who=owner,key=client,elapsed=Math.min(30000,Math.floor(accrued)),isActive=wasActive;
    accrued-=elapsed;hadPulse=isActive;
    try {
      const result=await env.request({client_id:key,active:isActive,elapsed_ms:elapsed});
      if(result.error&&owner===who&&client===key)accrued=0;
    } catch {if(owner===who&&client===key)accrued=0;}
    finally {sending=false;if(queued){queued=false;await flush();}}
  }
  function tick() {
    const moment=env.now(),delta=moment-lastTick,nextOwner=env.owner();lastTick=moment;
    if(nextOwner!==owner){owner=nextOwner;client=env.random();accrued=0;wasActive=false;hadPulse=false;lastSend=moment-INTERVAL;}
    if(wasActive&&delta>0&&delta<=5000)accrued+=Math.max(0,Math.min(moment,lastInteraction+IDLE)-(moment-delta));
    const next=active(),changed=next!==wasActive;wasActive=next;
    if(!env.online()){accrued=0;hadPulse=false;return Promise.resolve();}
    if(changed||(next&&moment-lastSend>=INTERVAL))return flush();
    return Promise.resolve();
  }
  function touch(){const pending=tick();lastInteraction=env.now();return Promise.resolve(pending).then(tick);}
  return {tick,touch,state:()=>({active:wasActive,accrued,owner})};
}
if(typeof module==='object'&&module.exports)module.exports=createLearningStudyClock;
if(typeof window!=='undefined'&&window.LEARNING_CLOUD){
  const cloud=window.LEARNING_CLOUD;
  const timer=createLearningStudyClock({now:()=>performance.now(),random:()=>crypto.randomUUID(),
    owner:()=>cloud.getStatus().verified?window.LEARNING_STORE?.owner()?.id:null,
    eligible:()=>['first','next','continuation','loops','theory','javascript','javascript-theory','pythonadvanced','pythonadvanced-theory','pythonadvanced-guide','csharp','csharp-theory','cpp','cpp-theory'].includes(document.documentElement.dataset.course),
    visible:()=>document.visibilityState==='visible',focused:()=>document.hasFocus(),online:()=>navigator.onLine!==false,
    request:args=>cloud.studyRequest('record_study_time',args)});
  window.LEARNING_STUDY_TIME=timer;
  let touchedAt=-Infinity;
  const interact=()=>{const now=performance.now();if(now-touchedAt<500)return;touchedAt=now;void timer.touch();};
  for(const event of ['pointerdown','pointermove','keydown','scroll','wheel'])document.addEventListener(event,interact,{passive:true,capture:true});
  for(const event of ['learning-cloud-status','learning-store-scope','offline','blur','pagehide'])window.addEventListener(event,()=>void timer.tick());
  for(const event of ['online','focus'])window.addEventListener(event,()=>void timer.touch());
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')void timer.touch();else void timer.tick();});
  document.addEventListener('DOMContentLoaded',()=>{void timer.tick();setInterval(()=>void timer.tick(),1000);});
}

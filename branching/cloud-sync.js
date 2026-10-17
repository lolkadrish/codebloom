'use strict';
(() => {
  const store=window.LEARNING_STORE,config=window.LEARNING_ACCOUNT_CONFIG||{},assetRoot=new URL('.',document.currentScript.src),AUTH_KEY='python-learning-auth-v1';
  let client=null,verified=false,status='local',connecting=null,sdkPromise=null,running=false,again=false,timer=null,signingOut=false,authSubscription=null;
  const text=(key,values)=>window.LEARNING_ACCOUNT_TEXT(key,values);
  function configurationValid(){
    if(!config.enabled)return false;
    try{
      const url=new URL(config.url);if(url.protocol!=='https:'||url.username||url.password||url.pathname!=='/'||url.search||url.hash)return false;
      if(typeof config.publishableKey!=='string'||config.publishableKey.length<20||config.publishableKey.startsWith('sb_secret_'))return false;
      if(!config.publishableKey.startsWith('sb_publishable_')){const payload=JSON.parse(atob(config.publishableKey.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')));if(payload.role!=='anon')return false;}
      return true;
    }catch{return false;}
  }
  const enabled=!!store&&configurationValid();
  function renderNav(){
    const link=document.getElementById('account-open');
    if(link){link.hidden=!enabled&&!store?.owner();link.textContent=text(store?.owner()?'account':'signIn');link.title=text(status);link.href=new URL('../account.html',assetRoot).href;}
    if(store?.owner())document.querySelectorAll('[data-i18n="savedLocally"]').forEach(scope=>scope.textContent=text('accountScope',{status:text(status)}));
  }
  function setStatus(next){status=next;renderNav();window.dispatchEvent(new CustomEvent('learning-cloud-status',{detail:{status,verified}}));}
  function loadSDK(){
    if(window.supabase)return Promise.resolve(window.supabase);
    if(sdkPromise)return sdkPromise;
    sdkPromise=new Promise((resolve,reject)=>{
      const script=document.createElement('script'),timeout=setTimeout(()=>{script.remove();sdkPromise=null;reject(new Error('SDK unavailable'));},15000);
      script.src=new URL('vendor/supabase-2.118.0.js',assetRoot).href;
      script.onload=()=>{clearTimeout(timeout);if(window.supabase)resolve(window.supabase);else{sdkPromise=null;reject(new Error('SDK unavailable'));}};
      script.onerror=()=>{clearTimeout(timeout);sdkPromise=null;reject(new Error('SDK unavailable'));};document.head.append(script);
    });return sdkPromise;
  }
  async function ensureClient(){
    if(!enabled)throw new Error('Accounts unavailable');if(client)return client;
    const sdk=await loadSDK();
    client=sdk.createClient(config.url,config.publishableKey,{auth:{storageKey:AUTH_KEY,persistSession:true,autoRefreshToken:true,detectSessionInUrl:false,flowType:'pkce'}});
    authSubscription=client.auth.onAuthStateChange(event=>{if(signingOut)return;if(['SIGNED_IN','TOKEN_REFRESHED','SIGNED_OUT'].includes(event))setTimeout(()=>{if(!signingOut)connect();},0);}).data.subscription;
    return client;
  }
  async function connect(){
    if(!enabled||signingOut)return false;if(connecting)return connecting;
    connecting=(async()=>{
      setStatus('connecting');
      try{
        const auth=await ensureClient(),{data,error}=await auth.auth.getSession();
        if(error||!data.session){verified=false;setStatus(store.owner()?'reauth':'local');return false;}
        const checked=await auth.auth.getUser();if(checked.error||!checked.data.user){verified=false;setStatus(store.owner()?'reauth':'local');return false;}
        if(signingOut)return false;
        const previous=store.owner()?.id,user=checked.data.user;verified=true;
        if(previous!==user.id)store.activate(user);
        await sync();return true;
      }catch{verified=false;setStatus(store.owner()?'offline':'error');return false;}
      finally{connecting=null;}
    })();return connecting;
  }
  async function sync(){
    const user=store?.owner();if(!enabled||!user||signingOut)return false;
    if(!verified){setStatus('reauth');return false;}
    if(running){again=true;return false;}if(navigator.onLine===false){setStatus('offline');return false;}
    running=true;setStatus('syncing');let ok=false;
    try{
      const sent=store.pending(user.id),request=client.rpc('sync_learning_progress',{changes:sent});
      const result=await request.abortSignal(AbortSignal.timeout(15000));
      if(result.error)throw result.error;
      if(signingOut||store.owner()?.id!==user.id)return false;
      store.accept(user.id,result.data,sent);setStatus(Object.keys(store.pending(user.id)).length?'pending':'synced');ok=true;
    }catch(error){if(!signingOut)setStatus(error?.code==='PGRST301'||error?.status===401?'reauth':navigator.onLine===false?'offline':'pending');}
    finally{running=false;if(again){again=false;if(ok)schedule();}}
    return ok;
  }
  function schedule(){clearTimeout(timer);timer=setTimeout(()=>{if(verified)sync();else if(store?.owner())connect();},900);}
  async function requestCode(email){
    const auth=await ensureClient();return auth.auth.signInWithOtp({email,options:{shouldCreateUser:true}});
  }
  async function verifyCode(email,token){
    const auth=await ensureClient(),result=await auth.auth.verifyOtp({email,token,type:'email'});
    if(result.error)return result;await connect();return result;
  }
  async function signOut(){
    signingOut=true;verified=false;clearTimeout(timer);authSubscription?.unsubscribe();
    try{client?.auth.stopAutoRefresh();if(client)await client.auth.signOut({scope:'local'});}catch{}
    // This is our configured SDK storage key, not a Supabase implementation key.
    localStorage.removeItem(AUTH_KEY);localStorage.removeItem(AUTH_KEY+'-code-verifier');
    store.useLocal();setStatus('local');
  }
  window.LEARNING_CLOUD={enabled,connect,sync,requestCode,verifyCode,signOut,renderNav,getStatus:()=>({status,verified,enabled})};
  window.addEventListener('learning-store-write',()=>{setStatus(store.owner()?'pending':'local');if(store.owner())schedule();});
  window.addEventListener('learning-store-scope',()=>{renderNav();if(document.documentElement.dataset.course!=='account')location.reload();});
  window.addEventListener('online',()=>{if(store?.owner())connect();});
  window.addEventListener('offline',()=>{if(store?.owner())setStatus('offline');});
  window.addEventListener('storage',event=>{
    if(event.key==='python-account-mode-v1'){if(document.documentElement.dataset.course!=='account')location.reload();else connect();}
    else if(event.key==='python-account-data-v1:'+store?.owner()?.id)window.dispatchEvent(new CustomEvent('learning-store-synced',{detail:{changed:true}}));
  });
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&store?.owner())connect();});
  if(enabled)setInterval(()=>{if(document.visibilityState==='visible'&&store.owner()){if(verified)sync();else connect();}},30000);
  document.addEventListener('DOMContentLoaded',()=>{
    renderNav();document.getElementById('account-open')?.addEventListener('click',()=>{try{sessionStorage.setItem('python-account-return-v1',location.href);}catch{}});
    new MutationObserver(renderNav).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    if(enabled&&(store.owner()||document.documentElement.dataset.course==='account'))connect();
  });
})();

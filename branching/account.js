'use strict';
(() => {
  const $=id=>document.getElementById(id),store=window.LEARNING_STORE,cloud=window.LEARNING_CLOUD,t=window.LEARNING_ACCOUNT_TEXT;
  let email='',working=false,cooldownUntil=0;
  let preferences={language:'en',theme:'system'};try{preferences={...preferences,...JSON.parse(localStorage.getItem('python-learning-preferences-v1'))};}catch{}
  if(!['ru','uk','en'].includes(preferences.language))preferences.language='en';
  const home=new URL('../index.html',new URL('.',document.currentScript.src)),siteRoot=new URL('.',home);
  let returnURL=home.href;try{const url=new URL(sessionStorage.getItem('python-account-return-v1'));if(url.origin===home.origin){if(url.pathname.startsWith('/python-next-step/'))url.pathname=siteRoot.pathname+url.pathname.slice('/python-next-step/'.length);const route=url.pathname.slice(siteRoot.pathname.length);if(url.pathname.startsWith(siteRoot.pathname)&&['','index.html','python.html','python-path.html','branching/','loops.html','continuation.html','theory.html','leaderboard.html','javascript.html','javascript/','javascript/theory.html'].includes(route)){url.search='';returnURL=url.href;}}}catch{}
  const message=key=>$('account-message').textContent=t(key);
  function render(){
    document.documentElement.lang=preferences.language;$('account-language').value=preferences.language;
    const theme=preferences.theme==='system'?(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'):preferences.theme;document.documentElement.dataset.theme=['light','dark','lavender'].includes(theme)?theme:'light';
    document.title=t('account')+' · CodeBloom';document.querySelectorAll('[data-account-text]').forEach(el=>el.textContent=t(el.dataset.accountText));
    $('account-language').setAttribute('aria-label',t('language'));const {status,verified,enabled}=cloud.getStatus(),user=store?.owner();
    $('account-unavailable').hidden=enabled;$('account-auth-card').hidden=!enabled||verified;
    $('account-profile').hidden=!user;$('account-import-panel').hidden=!user||!verified||!store.guestSummary().some(course=>course.hasData);
    if(user){
      $('account-identity').textContent=t('signedIn',{email:user.email});$('account-sync-state').textContent=t(status);
      const cache=store.cache();$('account-last-sync').textContent=cache.lastSynced?t('lastSync',{time:new Intl.DateTimeFormat(preferences.language,{dateStyle:'short',timeStyle:'short'}).format(new Date(cache.lastSynced))}):'';
      $('account-history').hidden=!cache.conflicts.length;$('account-history-list').replaceChildren();
      for(const record of [...cache.conflicts].reverse()){
        const label=document.createElement('label'),field=document.createElement('textarea');label.textContent=record.path;field.value=String(record.value);field.readOnly=true;field.setAttribute('aria-label',record.path);label.append(field);$('account-history-list').append(label);
      }
    }else $('account-history').hidden=true;
    $('account-continue').href=returnURL;$('guest-continue').href=returnURL;
    for(const id of ['account-email','account-code','account-send','account-verify','account-sync','account-import','account-signout'])$(id).disabled=working||!enabled||(id==='account-import'&&!verified);
    if(email)$('account-sent').textContent=t('sent',{email});updateCooldown();
  }
  function updateCooldown(){const seconds=Math.max(0,Math.ceil((cooldownUntil-Date.now())/1000));$('account-resend').disabled=working||seconds>0;$('account-send').disabled=working||!cloud.enabled||seconds>0;$('account-cooldown').textContent=seconds?t('wait',{n:seconds}):'';}
  function errorKey(error){return error?.status===429||String(error?.code).includes('rate')?'rate':String(error?.code).includes('otp')?'badCode':'error';}
  async function send(){
    if(working||Date.now()<cooldownUntil)return;let sent=false;working=true;render();message('working');
    try{
      const result=await cloud.requestCode(email);if(result.error){message(result.error.status>=500?'sendError':errorKey(result.error));return;}
      cooldownUntil=Date.now()+60000;$('account-code-form').hidden=false;$('account-message').textContent='';$('account-code').value='';sent=true;
    }catch{message('error');}finally{working=false;render();if(sent)$('account-code').focus();}
  }
  $('account-email-form').onsubmit=event=>{event.preventDefault();email=$('account-email').value.trim();if($('account-email-form').reportValidity())send();};
  $('account-code-form').onsubmit=async event=>{
    event.preventDefault();if(working||!$('account-code-form').reportValidity())return;working=true;render();message('working');
    try{const result=await cloud.verifyCode(email,$('account-code').value.trim());if(result.error)message(errorKey(result.error));else{$('account-code').value='';$('account-message').textContent='';}}catch{message('error');}finally{working=false;render();}
  };
  $('account-resend').onclick=send;
  $('account-sync').onclick=async()=>{working=true;render();try{await cloud.connect();}finally{working=false;render();}};
  $('account-import').onclick=async()=>{if(!cloud.getStatus().verified)return;working=true;render();try{store.importLocal();message('imported');await cloud.sync();}catch{message('error');}finally{working=false;render();}};
  $('account-signout').onclick=async()=>{working=true;render();await cloud.signOut();location.reload();};
  $('guest-continue').onclick=async event=>{if(!store?.owner())return;event.preventDefault();working=true;render();await cloud.signOut();location.assign(returnURL);};
  $('account-language').onchange=()=>{preferences.language=$('account-language').value;try{localStorage.setItem('python-learning-preferences-v1',JSON.stringify(preferences));}catch{}render();};
  window.addEventListener('learning-cloud-status',render);window.addEventListener('learning-store-synced',render);
  setInterval(updateCooldown,1000);render();
})();

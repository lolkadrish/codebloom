'use strict';
(() => {
  const key='python-learning-preferences-v1',root=new URL('.',document.currentScript.src),languages=['en','ru','uk'];
  let prefs={language:'en',theme:'system'};try{const saved=JSON.parse(localStorage.getItem(key))||JSON.parse(localStorage.getItem('python-first-step-v1'))||{};if(languages.includes(saved.language))prefs.language=saved.language;if(['system','dark','light','lavender'].includes(saved.theme))prefs.theme=saved.theme;}catch{}
  if(!languages.includes(prefs.language))prefs.language='en';if(!['system','dark','light','lavender'].includes(prefs.theme))prefs.theme='system';
  const media=matchMedia('(prefers-color-scheme:dark)');
  const loc=value=>value&&typeof value==='object'&&!Array.isArray(value)?value[prefs.language]||value.en:value;
  const t=(key,values={})=>{let value=String(loc(window.CB_TEXT?.[key])||key);for(const [name,text]of Object.entries(values))value=value.replaceAll('{'+name+'}',String(text));return value;};
  const escape=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const rich=value=>escape(loc(value)).replace(/`([^`]+)`/g,'<code>$1</code>');
  function apply(){
    document.documentElement.lang=prefs.language;document.documentElement.dataset.theme=prefs.theme==='system'?(media.matches?'dark':'light'):prefs.theme;
    document.querySelectorAll('[data-cb]').forEach(el=>el.textContent=t(el.dataset.cb));
    document.querySelectorAll('[data-cb-label]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.cbLabel)));
    for(const id of ['site-language','site-theme']){const el=document.getElementById(id);if(el)el.value=id==='site-language'?prefs.language:prefs.theme;}
    document.querySelectorAll('[data-site-link]').forEach(el=>el.href=new URL(el.dataset.siteLink,root));
  }
  function save(){try{localStorage.setItem(key,JSON.stringify(prefs));}catch{}}
  window.CB={loc,t,escape,rich,root,get language(){return prefs.language;},get theme(){return prefs.theme;},apply};
  document.getElementById('site-language')?.addEventListener('change',event=>{window.dispatchEvent(new CustomEvent('codebloom-before-language'));prefs.language=event.target.value;save();apply();window.dispatchEvent(new CustomEvent('codebloom-language'));});
  document.getElementById('site-theme')?.addEventListener('change',event=>{prefs.theme=event.target.value;save();apply();});
  media.addEventListener('change',()=>{if(prefs.theme==='system')apply();});apply();
})();

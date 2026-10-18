'use strict';
(() => {
  if(!document.body.classList.contains('bloom-path'))return;
  const root=document.documentElement,button=document.getElementById('route-motion'),key='codebloom-home-motion-v1';
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let paused=reduced.matches;
  try{const saved=localStorage.getItem(key);if(saved==='paused')paused=true;else if(saved==='running'&&!reduced.matches)paused=false;}catch{}
  function render(){
    root.dataset.pathMotion=paused?'paused':'running';button.setAttribute('aria-pressed',String(paused));
    document.getElementById('route-motion-label').textContent=CB.t(paused?'routePlay':'routePause');
    document.getElementById('route-motion-icon').textContent=paused?'▷':'Ⅱ';
  }
  button.addEventListener('click',()=>{paused=!paused;try{localStorage.setItem(key,paused?'paused':'running');}catch{}render();});
  window.addEventListener('codebloom-language',render);
  reduced.addEventListener('change',event=>{if(event.matches){paused=true;render();}});
  document.addEventListener('visibilitychange',()=>{root.dataset.pathVisible=String(!document.hidden);});
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{root.dataset.pathArtVisible=String(entries[0].isIntersecting);}).observe(document.querySelector('.route-overview'));
  root.dataset.pathVisible=String(!document.hidden);render();
})();

'use strict';
(() => {
  const key='python-learning-start-choice-v1',returnKey='python-account-return-v1',cookieName='python_learning_start_choice_v1';
  const accountURL=new URL('../account.html',new URL('.',document.currentScript.src));
  const cookiePath=new URL('.',accountURL).pathname;
  const texts={
    eyebrow:['ПЕРЕД НАЧАЛОМ','ПЕРЕД ПОЧАТКОМ','BEFORE YOU START'],
    title:['Где сохранять твой прогресс?','Де зберігати твій прогрес?','Where should your progress be saved?'],
    intro:['Выбери удобный вариант. Задания доступны и без аккаунта.','Обери зручний варіант. Завдання доступні й без акаунта.','Choose what suits you. Exercises are available without an account too.'],
    localTitle:['В этом браузере','У цьому браузері','In this browser'],
    localHelp:['Код и пройденные задания сохраняются на этом устройстве, в этом браузере. На другом устройстве этот прогресс не появится.','Код і пройдені завдання зберігаються на цьому пристрої, у цьому браузері. На іншому пристрої цей прогрес не з’явиться.','Your code and completed exercises stay in this browser on this device. This progress will not appear on another device.'],
    localNote:['Очистка данных браузера может удалить сохранение.','Очищення даних браузера може видалити збереження.','Clearing browser data may delete this save.'],
    localButton:['Продолжить без аккаунта','Продовжити без акаунта','Continue without an account'],
    accountTitle:['С аккаунтом','З акаунтом','With an account'],
    accountHelp:['Прогресс сохраняется в аккаунте. Войди с той же почтой на другом устройстве и продолжай с места, где остановился.','Прогрес зберігається в акаунті. Увійди з тією самою поштою на іншому пристрої та продовжуй з місця, де зупинився.','Your progress is saved to your account. Sign in with the same email on another device to pick up where you left off.'],
    accountNote:['Вход по коду на почту. Пароль придумывать не нужно.','Вхід за кодом на пошту. Пароль вигадувати не потрібно.','Sign in with a code sent to your email. No password needed.'],
    accountButton:['Войти или создать аккаунт','Увійти або створити акаунт','Sign in or create an account'],
    later:['Окно показывается только один раз. Войти позже можно кнопкой «Войти» вверху сайта и перенести свой локальный прогресс в аккаунт.','Вікно показується лише один раз. Увійти пізніше можна кнопкою «Увійти» вгорі сайту й перенести свій локальний прогрес до акаунта.','This window appears only once. You can sign in later using “Sign in” at the top of the site and import your own local progress.']
  };
  let dialog=null;
  const valid=value=>value==='local'||value==='account'||value==='seen';
  function chosen(){
    for(const storage of ['localStorage','sessionStorage']){try{const value=window[storage].getItem(key);if(valid(value))return value;}catch{}}
    try{const entry=document.cookie.split(';').map(value=>value.trim()).find(value=>value.startsWith(cookieName+'=')),value=entry?.slice(cookieName.length+1);if(valid(value))return value;}catch{}
    return null;
  }
  function remember(value){
    for(const storage of ['localStorage','sessionStorage']){try{window[storage].setItem(key,value);}catch{}}
    try{document.cookie=cookieName+'='+value+'; Path='+cookiePath+'; Max-Age=34560000; SameSite=Lax'+(accountURL.protocol==='https:'?'; Secure':'');}catch{}
  }
  function dismiss(){if(!dialog)return;if(dialog.open)dialog.close();document.documentElement.classList.remove('start-choice-open');}
  function chooseLocal(){remember('local');dismiss();}
  function render(){
    const index={ru:0,uk:1,en:2}[document.documentElement.lang]??2;
    dialog.querySelectorAll('[data-start-text]').forEach(el=>el.textContent=texts[el.dataset.startText][index]);
    dialog.querySelector('#start-choice-close').setAttribute('aria-label',texts.localButton[index]);
  }
  function start(){
    if(window.LEARNING_STORE?.owner()){remember('account');return;}
    if(document.documentElement.dataset.course==='account'){
      remember(chosen()||'seen');
      document.getElementById('guest-continue')?.addEventListener('click',()=>remember('local'));
      return;
    }
    const previous=chosen();if(previous){remember(previous);return;}
    if(!window.LEARNING_CLOUD?.enabled)return;
    dialog=document.createElement('dialog');dialog.id='start-choice';dialog.className='start-choice';
    dialog.setAttribute('aria-labelledby','start-choice-title');dialog.setAttribute('aria-describedby','start-choice-intro');
    dialog.innerHTML=`<div class="start-choice-heading"><p class="eyebrow" data-start-text="eyebrow"></p><button type="button" class="icon-button" id="start-choice-close">×</button></div>
      <h2 id="start-choice-title" tabindex="-1" autofocus data-start-text="title"></h2><p id="start-choice-intro" data-start-text="intro"></p>
      <div class="start-choice-options">
        <section><span class="summary-icon" aria-hidden="true">⌂</span><h3 data-start-text="localTitle"></h3><p data-start-text="localHelp"></p><p class="start-choice-note" data-start-text="localNote"></p><button type="button" id="start-choice-local" class="secondary-button" data-start-text="localButton"></button></section>
        <section><span class="summary-icon" aria-hidden="true">◎</span><h3 data-start-text="accountTitle"></h3><p data-start-text="accountHelp"></p><p class="start-choice-note" data-start-text="accountNote"></p><a id="start-choice-account" class="primary-button" data-start-text="accountButton"></a></section>
      </div><p class="start-choice-later" data-start-text="later"></p>`;
    const account=dialog.querySelector('#start-choice-account');account.href=accountURL.href;
    account.addEventListener('click',()=>{remember('account');try{sessionStorage.setItem(returnKey,location.href);}catch{}dismiss();});
    dialog.querySelector('#start-choice-local').addEventListener('click',chooseLocal);
    dialog.querySelector('#start-choice-close').addEventListener('click',chooseLocal);
    dialog.addEventListener('cancel',event=>{event.preventDefault();chooseLocal();});
    dialog.addEventListener('close',()=>document.documentElement.classList.remove('start-choice-open'));
    document.body.append(dialog);render();
    if(typeof dialog.showModal!=='function'){dialog.remove();return;}
    dialog.showModal();remember('seen');document.documentElement.classList.add('start-choice-open');
    new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  }
  window.addEventListener('storage',event=>{if(event.key===key&&valid(event.newValue))dismiss();});
  window.addEventListener('learning-cloud-status',()=>{if(window.LEARNING_CLOUD?.getStatus().verified&&window.LEARNING_STORE?.owner()){remember('account');dismiss();}});
  document.addEventListener('DOMContentLoaded',start);
})();

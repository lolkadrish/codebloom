/* Explicit feedback only. No account session, editor contents or progress are read. */
(() => {
  'use strict';
  const root=new URL('.',document.currentScript.src),header=document.querySelector('.topbar,.home-nav,.route-nav');
  const controls=header?.querySelector('.top-controls,.home-nav-tools,.route-nav-tools');
  if(!controls||document.getElementById('bloom-feedback-dialog'))return;
  const words={
    en:{title:'Help CodeBloom grow',intro:'Found a problem, got stuck, or have an idea? Tell us.',category:'What is it about?',bug:'Something is broken',lesson:'A lesson is unclear',idea:'An idea or suggestion',other:'Something else',message:'Your message',placeholder:'What happened, and what did you expect?',email:'Email for a reply (optional)',attach:'Include a link to this page',privacy:'Your message is private. Your email is used only to reply.',send:'Send feedback',sending:'Sending…',cancel:'Cancel',close:'Close',details:'Please write at least 10 characters.',error:'Could not confirm delivery. Your text is still here. Check your connection and try again.',rate:'Too many messages from this connection. Please try again later.',unavailable:'Feedback is temporarily unavailable. Your text is still here.',thanks:'Thanks for your feedback!',saved:'Your message has been saved for the CodeBloom team.',done:'Done'},
    ru:{title:'Помоги CodeBloom стать лучше',intro:'Нашёл ошибку, запутался в уроке или есть идея? Расскажи.',category:'О чём хочешь сообщить?',bug:'Что-то не работает',lesson:'Непонятно объяснение',idea:'Идея или предложение',other:'Другое',message:'Твоё сообщение',placeholder:'Что произошло и чего ты ожидал?',email:'Почта для ответа (необязательно)',attach:'Приложить ссылку на эту страницу',privacy:'Отзыв виден только команде CodeBloom. Почта нужна только для ответа.',send:'Отправить отзыв',sending:'Отправляем…',cancel:'Отмена',close:'Закрыть',details:'Напиши хотя бы 10 символов.',error:'Не удалось подтвердить отправку. Текст остался в форме. Проверь соединение и попробуй ещё раз.',rate:'С этого подключения отправлено слишком много сообщений. Попробуй позже.',unavailable:'Обратная связь временно недоступна. Текст остался в форме.',thanks:'Спасибо за отзыв!',saved:'Сообщение сохранено для команды CodeBloom.',done:'Готово'},
    uk:{title:'Допоможи CodeBloom стати кращим',intro:'Знайшов помилку, заплутався в уроці чи маєш ідею? Розкажи.',category:'Про що хочеш повідомити?',bug:'Щось не працює',lesson:'Незрозуміле пояснення',idea:'Ідея чи пропозиція',other:'Інше',message:'Твоє повідомлення',placeholder:'Що сталося і на що ти очікував?',email:'Пошта для відповіді (необов’язково)',attach:'Додати посилання на цю сторінку',privacy:'Відгук бачить лише команда CodeBloom. Пошта потрібна тільки для відповіді.',send:'Надіслати відгук',sending:'Надсилаємо…',cancel:'Скасувати',close:'Закрити',details:'Напиши хоча б 10 символів.',error:'Не вдалося підтвердити надсилання. Текст залишився у формі. Перевір з’єднання та спробуй знову.',rate:'З цього підключення надіслано забагато повідомлень. Спробуй пізніше.',unavailable:'Зворотний зв’язок тимчасово недоступний. Текст залишився у формі.',thanks:'Дякуємо за відгук!',saved:'Повідомлення збережено для команди CodeBloom.',done:'Готово'}
  };
  const language=()=>['en','ru','uk'].includes(document.documentElement.lang)?document.documentElement.lang:'en';
  const t=key=>words[language()][key];
  const button=document.createElement('button');button.type='button';button.className='bloom-feedback-open';button.setAttribute('aria-label','Feedback');button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls','bloom-feedback-dialog');
  button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l-3 3V11.5A7.5 7.5 0 0 1 9.5 4h3a7.5 7.5 0 0 1 7.5 7.5Z"/><path d="M7 10h8M7 14h5"/></svg><span>Feedback</span>';
  controls.append(button);
  const dialog=document.createElement('dialog');dialog.id='bloom-feedback-dialog';dialog.className='bloom-feedback-dialog';dialog.setAttribute('aria-labelledby','bloom-feedback-title');dialog.setAttribute('aria-describedby','bloom-feedback-intro');
  dialog.innerHTML=`<button type="button" class="bloom-feedback-close" data-feedback-close>×</button>
    <div class="bloom-feedback-kicker">CODEBLOOM / FEEDBACK</div><h2 id="bloom-feedback-title" data-feedback-text="title"></h2><p id="bloom-feedback-intro" data-feedback-text="intro"></p>
    <form id="bloom-feedback-form">
      <label for="bloom-feedback-category" data-feedback-text="category"></label><select id="bloom-feedback-category" name="category"><option value="bug" data-feedback-text="bug"></option><option value="lesson" data-feedback-text="lesson"></option><option value="idea" data-feedback-text="idea"></option><option value="other" data-feedback-text="other"></option></select>
      <label for="bloom-feedback-message" data-feedback-text="message"></label><textarea id="bloom-feedback-message" name="message" minlength="10" maxlength="4000" rows="5" required></textarea><span class="bloom-feedback-count" id="bloom-feedback-count">0 / 4000</span>
      <label for="bloom-feedback-email" data-feedback-text="email"></label><input id="bloom-feedback-email" name="email" type="email" autocomplete="email" maxlength="254">
      <label class="bloom-feedback-attach"><input id="bloom-feedback-attach" name="attach" type="checkbox" checked><span data-feedback-text="attach"></span></label>
      <div class="bloom-feedback-trap" aria-hidden="true"><input name="website" type="text" tabindex="-1" autocomplete="off"></div>
      <p class="bloom-feedback-privacy" data-feedback-text="privacy"></p><p id="bloom-feedback-status" class="bloom-feedback-status" role="status" aria-live="polite"></p>
      <div class="bloom-feedback-actions"><button type="button" class="bloom-feedback-cancel" data-feedback-close data-feedback-text="cancel"></button><button type="submit" class="bloom-feedback-send" data-feedback-text="send"></button></div>
    </form><section id="bloom-feedback-success" class="bloom-feedback-success" hidden><span aria-hidden="true">✓</span><h3 data-feedback-text="thanks"></h3><p data-feedback-text="saved"></p><button type="button" class="bloom-feedback-send" data-feedback-close data-feedback-text="done"></button></section>`;
  document.body.append(dialog);
  const $=id=>document.getElementById('bloom-feedback-'+id),form=$('form'),field=$('message'),send=form.querySelector('[type=submit]');
  let working=false,sent=false,status='',request=null;
  function translate(){
    dialog.querySelectorAll('[data-feedback-text]').forEach(el=>el.textContent=t(el.dataset.feedbackText));
    dialog.querySelector('.bloom-feedback-close').setAttribute('aria-label',t('close'));
    field.placeholder=t('placeholder');send.textContent=t(working?'sending':'send');
    $('status').textContent=status?t(status):'';
  }
  function report(key){status=key;translate();}
  function pageLink(){
    const relative=location.pathname.startsWith(root.pathname)?location.pathname.slice(root.pathname.length):'';
    const hash=/^#[a-z0-9_-]+$/i.test(location.hash)?location.hash:'';
    return (relative||'index.html')+hash;
  }
  button.onclick=()=>{
    if(sent){form.reset();form.hidden=false;$('success').hidden=true;sent=false;status='';request=null;$('count').textContent='0 / 4000';}
    translate();document.body.classList.add('bloom-feedback-active');dialog.showModal();field.focus();
  };
  dialog.querySelectorAll('[data-feedback-close]').forEach(el=>el.onclick=()=>dialog.close());
  dialog.addEventListener('close',()=>{document.body.classList.remove('bloom-feedback-active');button.focus();});
  field.addEventListener('input',()=>$('count').textContent=field.value.length+' / 4000');
  form.onsubmit=async event=>{
    event.preventDefault();if(working||!form.reportValidity())return;
    const message=field.value.trim();if(message.length<10){report('details');field.focus();return;}
    const config=window.LEARNING_ACCOUNT_CONFIG||{};
    if(!config.url||!config.publishableKey){report('unavailable');return;}
    const payload={category:$('category').value,message,email:$('email').value.trim(),page:$('attach').checked?pageLink():null,language:language(),website:form.elements.website.value};
    const signature=JSON.stringify(payload);if(request?.signature!==signature)request={signature,id:crypto.randomUUID()};
    const id=request.id;working=true;status='';form.querySelectorAll('input,textarea,select,button[type=submit]').forEach(el=>el.disabled=true);translate();
    try{
      const endpoint=new URL('functions/v1/site-feedback',config.url);
      const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','apikey':config.publishableKey},body:JSON.stringify({id,...payload}),credentials:'omit',referrerPolicy:'no-referrer',cache:'no-store',signal:AbortSignal.timeout(15000)});
      const result=await response.json();
      if(!response.ok){report(response.status===429?'rate':'error');return;}
      if(result.ok!==true||result.id!==id)throw new Error('Unconfirmed feedback');
      sent=true;form.hidden=true;$('success').hidden=false;$('success').querySelector('button').focus();
    }catch{report('error');}
    finally{working=false;form.querySelectorAll('input,textarea,select,button[type=submit]').forEach(el=>el.disabled=false);translate();}
  };
  translate();new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();

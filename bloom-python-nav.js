/* One Python outline. Controllers retain ownership of exercises and saved work. */
(() => {
  'use strict';
  const course=document.documentElement.dataset.course;
  const original=['first','next','continuation','loops'].indexOf(course);
  if(original<0&&course!=='pythonadvanced')return;
  const root=new URL('.',document.currentScript.src),sidebar=document.querySelector('.sidebar,.cb-course-sidebar');
  if(!sidebar)return;
  const stages=[
  {
    "number": 1,
    "title": {
      "en": "First conditions",
      "ru": "Первые условия",
      "uk": "Перші умови"
    },
    "url": "branching/"
  },
  {
    "number": 2,
    "title": {
      "en": "Make decisions confidently",
      "ru": "Решай увереннее",
      "uk": "Ухвалюй рішення впевненіше"
    },
    "url": "python.html"
  },
  {
    "number": 3,
    "title": {
      "en": "Build your toolkit",
      "ru": "Расширяй набор приёмов",
      "uk": "Розширюй набір прийомів"
    },
    "url": "continuation.html"
  },
  {
    "number": 4,
    "title": {
      "en": "Repeat with loops",
      "ru": "Повторяй циклами",
      "uk": "Повторюй циклами"
    },
    "url": "loops.html"
  },
  {
    "number": 5,
    "title": {
      "en": "Functions: one named job",
      "ru": "Функции: действие с именем",
      "uk": "Функції: дія з іменем"
    },
    "url": "python-advanced/#call-function"
  },
  {
    "number": 6,
    "title": {
      "en": "Read and build sequences",
      "ru": "Читай и собирай последовательности",
      "uk": "Читай і збирай послідовності"
    },
    "url": "python-advanced/#text-length"
  },
  {
    "number": 7,
    "title": {
      "en": "Lists: collect and transform",
      "ru": "Списки: собирай и изменяй",
      "uk": "Списки: збирай і змінюй"
    },
    "url": "python-advanced/#append-item"
  },
  {
    "number": 8,
    "title": {
      "en": "Dictionaries, sets and records",
      "ru": "Словари, множества и записи",
      "uk": "Словники, множини й записи"
    },
    "url": "python-advanced/#make-record"
  },
  {
    "number": 9,
    "title": {
      "en": "Files, JSON and recoverable errors",
      "ru": "Файлы, JSON и обработка ошибок",
      "uk": "Файли, JSON та обробка помилок"
    },
    "url": "python-advanced/#json-read"
  },
  {
    "number": 10,
    "title": {
      "en": "Modules and standard tools",
      "ru": "Модули и стандартные инструменты",
      "uk": "Модулі й стандартні інструменти"
    },
    "url": "python-advanced/#import-math"
  },
  {
    "number": 11,
    "title": {
      "en": "Objects, classes and types",
      "ru": "Объекты, классы и типы",
      "uk": "Об’єкти, класи й типи"
    },
    "url": "python-advanced/#class-field"
  },
  {
    "number": 12,
    "title": {
      "en": "Understand Python’s behavior",
      "ru": "Пойми поведение Python",
      "uk": "Зрозумій поведінку Python"
    },
    "url": "python-advanced/#unpack-pair"
  },
  {
    "number": 13,
    "title": {
      "en": "Test, debug and choose an algorithm",
      "ru": "Тесты, отладка и алгоритмы",
      "uk": "Тести, налагодження й алгоритми"
    },
    "url": "python-advanced/#assert-boundary"
  },
  {
    "number": 14,
    "title": {
      "en": "SQL databases and API data",
      "ru": "Базы SQL и данные API",
      "uk": "Бази SQL та дані API"
    },
    "url": "python-advanced/#sql-one-value"
  },
  {
    "number": 15,
    "title": {
      "en": "Async work and reliable boundaries",
      "ru": "Асинхронность и надёжные границы",
      "uk": "Асинхронність і надійні межі"
    },
    "url": "python-advanced/#await-function"
  },
  {
    "number": 16,
    "title": {
      "en": "Build, test and extend projects",
      "ru": "Создавай, проверяй и развивай проекты",
      "uk": "Створюй, перевіряй і розвивай проєкти"
    },
    "url": "python-advanced/#project-expenses"
  }
];
  const words={
    en:{path:'Your Python path',overview:'All 16 stages →',stage:'Stage',outline:'Stages and exercises'},
    ru:{path:'Твой путь в Python',overview:'Все 16 этапов →',stage:'Этап',outline:'Этапы и задания'},
    uk:{path:'Твій шлях у Python',overview:'Усі 16 етапів →',stage:'Етап',outline:'Етапи та завдання'}
  };
  const language=()=>['en','ru','uk'].includes(document.documentElement.lang)?document.documentElement.lang:'en';
  const t=()=>words[language()];
  const heading=document.createElement('div');heading.className='bloom-python-heading';
  const eyebrow=document.createElement('p');eyebrow.className='eyebrow';eyebrow.textContent='PYTHON / CODEBLOOM';
  const title=document.createElement('h2');
  const overview=sidebar.querySelector('a[href$="python-path.html"]')||document.createElement('a');
  overview.href=new URL('python-path.html',root);overview.className='secondary-button bloom-python-overview-link';
  heading.append(eyebrow,title,overview);
  sidebar.prepend(heading);sidebar.classList.add('bloom-python-sidebar');
  const nav=original>=0?document.createElement('nav'):document.getElementById('js-nav');
  const currentTasks=original>=0?document.getElementById('course-nav'):null;
  if(!nav)return;
  nav.classList.add('bloom-python-nav');
  heading.after(nav);
  let active=original,lastScrolled=-1;
  function translate(){
    title.textContent=t().path;overview.textContent=t().overview;nav.setAttribute('aria-label',t().outline);
    nav.querySelectorAll('[data-python-stage]').forEach(row=>{
      const index=Number(row.dataset.pythonStage),name=stages[index].title[language()]||stages[index].title.en;
      row.querySelector('.bloom-stage-name').textContent=name;
      row.querySelector('.bloom-stage-row').setAttribute('aria-label',t().stage+' '+(index+1)+': '+name);
    });
  }
  function render(index,contents){
    const previous=nav.querySelector('.is-current');
    const open=active===index&&previous?previous.classList.contains('is-open'):true;
    active=index;const fragment=document.createDocumentFragment();
    for(const [position,stage]of stages.entries()){
      const item=document.createElement(position===index?'section':'div');item.className='bloom-python-stage';item.dataset.pythonStage=String(position);
      const row=document.createElement(position===index?'button':'a');row.className='bloom-stage-row';
      if(position===index){row.type='button';item.classList.add('is-current');item.classList.toggle('is-open',open);row.setAttribute('aria-current','step');row.setAttribute('aria-expanded',String(open));row.setAttribute('aria-controls','bloom-python-tasks-'+index);}
      else row.href=new URL(stage.url,root);
      const number=document.createElement('span');number.className='bloom-stage-number';number.textContent=String(stage.number).padStart(2,'0');
      const name=document.createElement('span');name.className='bloom-stage-name';
      row.append(number,name);item.append(row);
      if(position===index){
        const body=document.createElement('div');body.className='bloom-python-tasks';body.id='bloom-python-tasks-'+index;body.hidden=!open;
        if(typeof contents==='string')body.innerHTML=contents;
        else if(contents)body.append(contents);
        row.addEventListener('click',()=>{const expanded=body.hidden;body.hidden=!expanded;item.classList.toggle('is-open',expanded);row.setAttribute('aria-expanded',String(expanded));});
        item.append(body);
      }
      fragment.append(item);
    }
    nav.replaceChildren(fragment);translate();
    if(lastScrolled!==index&&matchMedia('(min-width:651px)').matches){
      lastScrolled=index;
      requestAnimationFrame(()=>{
        const current=nav.querySelector('.is-current');if(!current)return;
        const offset=current.getBoundingClientRect().top-sidebar.getBoundingClientRect().top;
        if(offset>sidebar.clientHeight*.7)sidebar.scrollTop+=offset-sidebar.clientHeight*.3;
      });
    }
  }
  if(original>=0)render(original,currentTasks);
  else window.CODEBLOOM_PYTHON_NAV={render:(stage,html)=>render(stage+4,html)};
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();

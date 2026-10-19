/* Presentation only: shared navigation. Learning and account state stay in their existing modules. */
(() => {
  'use strict';
  const root = new URL('.', document.currentScript.src);
  const header = document.querySelector('.bloom-app .topbar');
  if (!header) return;
  const words = {
    en: {languages:'Languages', leaderboard:'Study leaderboard', navigation:'Main navigation', outline:'Topics and exercises', pythonOutline:'Stages and exercises'},
    ru: {languages:'Языки', leaderboard:'Рейтинг занятий', navigation:'Основная навигация', outline:'Темы и задания', pythonOutline:'Этапы и задания'},
    uk: {languages:'Мови', leaderboard:'Рейтинг занять', navigation:'Головна навігація', outline:'Теми й завдання', pythonOutline:'Етапи та завдання'}
  };
  const symbol = header.querySelector('.bloom-symbol');
  if (symbol) symbol.innerHTML = '<svg viewBox="0 0 32 36" aria-hidden="true"><path d="M6 4c0 14 20 14 20 28M26 4C26 18 6 18 6 32M8 8h16M11 14h10M11 22h10M8 28h16"/></svg>';
  let nav = header.querySelector('.cb-header-links');
  if (!nav) {
    nav = document.createElement('nav');
    header.insertBefore(nav, header.querySelector('.top-controls'));
  }
  nav.className = 'bloom-app-nav';
  nav.replaceChildren();
  [['languages','index.html#languages'],['Python','python-path.html'],['JavaScript','javascript.html'],['C#','csharp.html'],['C++','cpp.html'],['leaderboard','leaderboard.html']].forEach(([key,path]) => {
    const link = document.createElement('a');
    link.href = new URL(path, root).href;
    link.dataset.bloomNav = key;
    link.textContent = key;
    const course = document.documentElement.dataset.course || '';
    if ((key === 'Python' && /^(first|next|continuation|loops|theory|pythonadvanced)/.test(course)) || (key === 'JavaScript' && course.startsWith('javascript')) || (key === 'C#' && course.startsWith('csharp')) || (key === 'C++' && course.startsWith('cpp')) || (key === 'leaderboard' && location.pathname.endsWith('/leaderboard.html'))) link.setAttribute('aria-current','page');
    nav.append(link);
  });
  const sidebar = document.querySelector('.sidebar,.cb-course-sidebar');
  let outlineLabel;
  if (sidebar) {
    const outline = document.createElement('details');
    outline.className = 'bloom-outline';
    const summary = document.createElement('summary');
    summary.className = 'bloom-outline-toggle';
    const icon = document.createElement('span');
    icon.textContent = '</>';
    icon.setAttribute('aria-hidden','true');
    outlineLabel = document.createElement('span');
    summary.append(icon,outlineLabel);
    const content = document.createElement('div');
    content.className = 'bloom-outline-content';
    while (sidebar.firstChild) content.append(sidebar.firstChild);
    outline.append(summary,content);
    sidebar.append(outline);
    const mobile = matchMedia('(max-width:650px)');
    const fitOutline = () => { outline.open = !mobile.matches; };
    fitOutline();
    mobile.addEventListener('change',fitOutline);
  }
  function translate() {
    const t = words[document.documentElement.lang] || words.en;
    nav.setAttribute('aria-label',t.navigation);
    if (outlineLabel) outlineLabel.textContent = sidebar.classList.contains('bloom-python-sidebar') ? t.pythonOutline : t.outline;
    nav.querySelectorAll('[data-bloom-nav]').forEach(link => { link.textContent = t[link.dataset.bloomNav] || link.dataset.bloomNav; });
    header.querySelectorAll('#language option,#site-language option,#account-language option,#rank-language option').forEach(option => {
      if (['en','ru','uk'].includes(option.value)) option.textContent = option.value.toUpperCase();
    });
  }
  translate();
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();

/* Small compositor-only particles. No canvas, frame loop, or learning-state access. */
(() => {
  'use strict';
  const page = document.querySelector('.bloom-app');
  if (!page || document.querySelector('.bloom-particles')) return;
  const field = document.createElement('div');
  field.className = 'bloom-particles';
  field.setAttribute('aria-hidden','true');
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < 48; index++) {
    const particle = document.createElement('i');
    particle.className = 'bloom-particle' + (index % 9 === 0 ? ' bloom-particle--ring' : index % 7 === 0 ? ' bloom-particle--cool' : '');
    const values = {
      x: ((index * .61803398875 + .035) % 1 * 100).toFixed(2) + '%',
      y: ((index * .41421356237 + .067) % 1 * 100).toFixed(2) + '%',
      size: (index % 9 === 0 ? 6 : index % 3 === 0 ? 4 : 2) + 'px',
      alpha: (.24 + index % 5 * .065).toFixed(3),
      dx: (18 + index % 6 * 5) + 'px',
      dy: (16 + index % 7 * 4) + 'px',
      duration: (28 + index % 9 * 3) + 's',
      delay: (-index * 3.7).toFixed(1) + 's'
    };
    for (const [key,value] of Object.entries(values)) particle.style.setProperty('--particle-' + key,value);
    fragment.append(particle);
  }
  field.append(fragment);
  page.prepend(field);
  const visibility = () => field.classList.toggle('is-paused',document.hidden);
  visibility();
  document.addEventListener('visibilitychange',visibility);
})();

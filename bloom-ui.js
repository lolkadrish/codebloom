/* Presentation only: shared navigation. Learning and account state stay in their existing modules. */
(() => {
  'use strict';
  const root = new URL('.', document.currentScript.src);
  const header = document.querySelector('.bloom-app .topbar');
  if (!header) return;
  const words = {
    en: {languages:'Languages', leaderboard:'Study leaderboard', navigation:'Main navigation', outline:'Topics and exercises'},
    ru: {languages:'Языки', leaderboard:'Рейтинг занятий', navigation:'Основная навигация', outline:'Темы и задания'},
    uk: {languages:'Мови', leaderboard:'Рейтинг занять', navigation:'Головна навігація', outline:'Теми й завдання'}
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
  [['languages','index.html#languages'],['Python','python-path.html'],['JavaScript','javascript.html'],['leaderboard','leaderboard.html']].forEach(([key,path]) => {
    const link = document.createElement('a');
    link.href = new URL(path, root).href;
    link.dataset.bloomNav = key;
    link.textContent = key;
    const course = document.documentElement.dataset.course || '';
    if ((key === 'Python' && /^(first|next|continuation|loops|theory|pythonadvanced)/.test(course)) || (key === 'JavaScript' && course.startsWith('javascript')) || (key === 'leaderboard' && location.pathname.endsWith('/leaderboard.html'))) link.setAttribute('aria-current','page');
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
    if (outlineLabel) outlineLabel.textContent = t.outline;
    nav.querySelectorAll('[data-bloom-nav]').forEach(link => { link.textContent = t[link.dataset.bloomNav] || link.dataset.bloomNav; });
    header.querySelectorAll('#language option,#site-language option,#account-language option,#rank-language option').forEach(option => {
      if (['en','ru','uk'].includes(option.value)) option.textContent = option.value.toUpperCase();
    });
  }
  translate();
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();

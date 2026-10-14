'use strict';
(() => {
  const $=id=>document.getElementById(id),languages=['ru','uk','en'],preferenceKey='python-learning-preferences-v1';
  let language='ru',theme='system';
  try{const saved=JSON.parse(localStorage.getItem(preferenceKey))||JSON.parse(localStorage.getItem('python-first-step-v1'))||{};if(languages.includes(saved.language))language=saved.language;if(['system','light','dark','lavender'].includes(saved.theme))theme=saved.theme;}catch{}
  const topics=[['basics','basicsTopic'],['update','topicUpdate'],['if','topicIf'],['else','topicElse'],['elif','topicElif'],['nested','topicNested'],['ternary','topicTernary'],['logic','topicLogic'],['boundaries','topicBoundaries'],['ordering','topicOrdering'],['integer-parts','topicIntegerParts'],['clean-text','topicCleanText'],['saved-conditions','topicSavedConditions'],['several-actions','topicSeveralActions'],['while','topicWhile'],['for','topicFor'],['accumulator','topicAccumulator'],['control','topicControl'],['nested-loops','topicNestedLoops']];
  const loc=value=>Array.isArray(value)?value[languages.indexOf(language)]:value;
  const t=key=>loc(UI[key])||key,escape=GUIDE_RENDERER.escape;
  const lesson=id=>LEARNING_GUIDE.lessons.continuation?.[id]||LEARNING_GUIDE.lessons.loops?.[id]||(['logic','boundaries','ordering'].includes(id)?LEARNING_GUIDE.lessons.next[id]:LEARNING_GUIDE.lessons.first[id]);
  const media=matchMedia('(prefers-color-scheme:dark)');
  function savePreferences(){try{localStorage.setItem(preferenceKey,JSON.stringify({language,theme}));}catch{}}
  function applyTheme(){const mode=theme==='system'?(media.matches?'dark':'light'):theme;document.documentElement.dataset.theme=mode;$('theme').value=theme;$('theme-icon').textContent=mode==='dark'?'☾':mode==='lavender'?'✦':'◐';document.querySelector('meta[name="theme-color"]').content=mode==='dark'?'#1d1e2b':'#7255db';}
  function bindWalkthrough(model){
    if(!model?.walkthrough)return;
    let position=0;
    const update=()=>{
      const view=GUIDE_RENDERER.walkthroughState(model,LEARNING_GUIDE.labels,language,position);
      $('guide-walk-code').innerHTML=view.code;$('guide-walk-variables').innerHTML=view.variables;
      $('guide-walk-output').textContent=view.output;$('guide-walk-note').textContent=view.note;$('guide-walk-count').textContent=view.count;
      $('guide-walk-reset').disabled=view.first;$('guide-walk-next').disabled=view.last;
    };
    $('guide-walk-next').onclick=()=>{position=Math.min(position+1,model.walkthrough.frames.length-1);update();};
    $('guide-walk-reset').onclick=()=>{position=0;update();};
    update();
  }
  function render({focus=false}={}){
    const requested=location.hash.slice(1),index=Math.max(0,topics.findIndex(([id])=>id===requested)),[id,title]=topics[index];
    document.documentElement.lang=language;document.title=t('theoryLibraryTitle')+' · '+t(title);
    document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
    document.querySelectorAll('[data-i18n-title]').forEach(el=>el.title=t(el.dataset.i18nTitle));
    $('language').value=language;applyTheme();
    $('theory-nav').innerHTML=topics.map(([topic,label],i)=>'<a class="theory-topic-link" href="#'+topic+'"'+(topic===id?' aria-current="page"':'')+'><span>'+String(i).padStart(2,'0')+'</span>'+escape(t(label))+'</a>').join('');
    $('topic-name').textContent=t(title);$('theory-title').textContent=id==='basics'?loc(LEARNING_GUIDE.labels.start):t(title);$('theory-intro').textContent=t(id==='basics'?'basicsTopicIntro':'topicIntro');
    $('theory-content').innerHTML=id==='basics'?GUIDE_RENDERER.basics(LEARNING_GUIDE,language):GUIDE_RENDERER.lesson(lesson(id),LEARNING_GUIDE.labels,language);
    if(id!=='basics')bindWalkthrough(lesson(id));
    for(const [direction,offset] of [['previous',-1],['next',1]]){const link=$('theory-'+direction),target=topics[index+offset];link.hidden=!target;if(target){link.href='#'+target[0];link.textContent=t(direction==='next'?'nextTopic':'previousTopic');}}
    const firstTasks={basics:'positive',if:'positive',else:'admission',elif:'grade',nested:'login',ternary:'maximum'};
    const nextTasks={update:'tariff',ternary:'label',logic:'weekend',boundaries:'divisible',ordering:'robot'};
    const loopTasks={while:'count-up',for:'repeat-word',accumulator:'sum',control:'skip','nested-loops':'pairs'};const links=[];if(loopTasks[id])links.push(['loops.html#'+loopTasks[id],'thirdCourse']);
    const continuationTasks={'integer-parts':'time-parts','clean-text':'command-word','saved-conditions':'club-flag','several-actions':'delivery-price'};if(continuationTasks[id])links.push(['continuation.html#'+continuationTasks[id],'continuationCourse']);
    if(firstTasks[id])links.push(['branching/#'+firstTasks[id],'firstCourse']);
    if(nextTasks[id])links.push(['./#'+nextTasks[id],'secondCourse']);
    if(!links.length)links.push(['branching/','firstCourse'],['./','secondCourse']);
    $('theory-practice-links').innerHTML=links.map(([url,label])=>'<a class="primary-button" href="'+url+'">'+escape(t(label))+' →</a>').join('');
    if(focus){$('theory-title').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
  }
  $('language').onchange=()=>{language=$('language').value;savePreferences();render();};
  $('theme').onchange=()=>{theme=$('theme').value;applyTheme();savePreferences();};
  $('practice-open').onclick=()=>location.assign('branching/');
  media.addEventListener('change',()=>{if(theme==='system')applyTheme();});
  window.addEventListener('hashchange',()=>render({focus:true}));
  render();
})();

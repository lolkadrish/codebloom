'use strict';
(() => {
  const $=id=>document.getElementById(id),cloud=window.LEARNING_CLOUD,t=window.LEARNING_RANK_TEXT;
  let profile=null,rows=[],loading=false,saving=false,dirty=false,requestedOwner=null,loaded=false,message='';
  let prefs={language:'ru',theme:'system'};try{prefs={...prefs,...JSON.parse(localStorage.getItem('python-learning-preferences-v1'))};}catch{}
  if(!['ru','uk','en'].includes(prefs.language))prefs.language='ru';
  function duration(value){const seconds=Math.max(0,Number(value)||0),minutes=Math.floor(seconds/60);return !seconds?t('minutes',{n:0}):!minutes?t('underMinute'):minutes<60?t('minutes',{n:minutes}):t('hours',{h:Math.floor(minutes/60),m:minutes%60});}
  const owner=()=>cloud.getStatus().verified?window.LEARNING_STORE?.owner()?.id:null;
  function render(){
    document.documentElement.lang=prefs.language;$('rank-language').value=prefs.language;
    const theme=prefs.theme==='system'?(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'):prefs.theme;
    document.documentElement.dataset.theme=['light','dark','lavender'].includes(theme)?theme:'light';document.title=t('title')+' · Python';
    document.querySelectorAll('[data-rank-text]').forEach(el=>el.textContent=t(el.dataset.rankText));
    $('rank-language').setAttribute('aria-label',window.LEARNING_ACCOUNT_TEXT('language'));
    const signed=!!owner();$('rank-member').hidden=!signed;$('rank-guest').hidden=signed;$('rank-unavailable').hidden=cloud.enabled;
    $('rank-refresh').disabled=loading||!cloud.enabled;$('rank-save').disabled=loading||saving||!profile||!signed;
    $('rank-nickname').disabled=saving||!profile;$('rank-public').disabled=saving||!profile;
    $('rank-own-time').textContent=duration(profile?.total_seconds);
    $('rank-own-place').textContent=profile?.is_public?t('yourPlace',{n:profile.rank}):t('private');
    $('rank-empty').hidden=!loaded||rows.length>0;$('rank-table-wrap').hidden=!rows.length;
    $('rank-list-status').textContent=loading?t('loading'):message?t(message):'';
    $('rank-rows').replaceChildren();
    for(const item of rows){
      const tr=document.createElement('tr'),place=document.createElement('td'),name=document.createElement('td'),time=document.createElement('td');
      place.textContent=String(item.rank);name.textContent=item.nickname;time.textContent=duration(item.total_seconds);
      if(profile?.is_public&&profile.nickname===item.nickname){tr.className='rank-is-you';const tag=document.createElement('span');tag.className='rank-you';tag.textContent=t('you');name.append(tag);}
      tr.append(place,name,time);$('rank-rows').append(tr);
    }
    cloud.renderNav();
  }
  async function load(){
    if(loading||!cloud.enabled)return;loading=true;message='';render();const who=owner();requestedOwner=who;
    try{
      const [board,mine]=await Promise.all([cloud.studyRequest('study_leaderboard'),who?cloud.studyRequest('study_profile'):Promise.resolve(null)]);
      if(board.error)throw board.error;rows=Array.isArray(board.data)?board.data:[];loaded=true;
      if(who&&who===owner()&&mine&&!mine.error){profile=mine.data;if(!dirty){$('rank-nickname').value=profile.nickname||'';$('rank-public').checked=profile.is_public;}}
      else if(mine?.error)message='error';
    }catch{message='error';}finally{loading=false;render();if(owner()&&owner()!==who)void load();}
  }
  $('rank-profile-form').onsubmit=async event=>{
    event.preventDefault();if(saving||loading||!owner()||!profile)return;
    const nickname=$('rank-nickname').value.trim().replace(/\s+/g,' '),participate=$('rank-public').checked;
    if((participate||nickname)&&!/^\p{L}[\p{L}\p{N} _-]{1,23}$|^\p{N}[\p{L}\p{N} _-]{1,23}$/u.test(nickname)){$('rank-profile-message').textContent=t('invalid');return;}
    saving=true;render();$('rank-profile-message').textContent=t('loading');const who=owner();
    try{
      const result=await cloud.studyRequest('save_study_profile',{display_name:nickname||null,participate});
      if(result.error)throw result.error;if(who!==owner())return;
      profile=result.data;dirty=false;$('rank-nickname').value=profile.nickname||'';$('rank-public').checked=profile.is_public;$('rank-profile-message').textContent=t('saved');await load();
    }catch(error){$('rank-profile-message').textContent=t(error?.code==='23505'?'taken':error?.code==='22023'?'invalid':'error');}
    finally{saving=false;render();}
  };
  for(const id of ['rank-nickname','rank-public'])$(id).addEventListener('input',()=>{dirty=true;$('rank-profile-message').textContent='';});
  $('rank-refresh').onclick=load;
  $('rank-sign-in').onclick=()=>{try{sessionStorage.setItem('python-account-return-v1',location.href);}catch{}};
  $('rank-language').onchange=()=>{prefs.language=$('rank-language').value;try{localStorage.setItem('python-learning-preferences-v1',JSON.stringify(prefs));}catch{}render();};
  window.addEventListener('learning-cloud-status',()=>{render();if(owner()&&owner()!==requestedOwner)void load();});
  render();void load();
})();

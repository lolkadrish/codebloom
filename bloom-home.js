'use strict';
(() => {
  const root=document.documentElement,story=document.getElementById('home-story'),pin=document.getElementById('hero-pin'),canvas=document.getElementById('code-bloom'),fragmentsCanvas=document.getElementById('code-fragments');
  if(!story||!pin||!canvas)return;
  const motionKey='codebloom-home-motion-v1',reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(pointer: fine)');
  const clamp=value=>Math.min(1,Math.max(0,value));
  const modest=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4;
  let quality=modest?1:2,pendingQuality=false,paused=reduce.matches,frozen=reduce.matches?1:0,progress=0,visible=true,raf=0,resizeFrame=0,scrollFrame=0,lastDraw=0,time=0,width=1,height=1,ratio=1,mobile=false;
  let pointer={x:0,y:0},target={x:0,y:0},frameCount=0,copyArea=null,rows=[],letters=[],fragments=[],lastFragments=-Infinity,lastStats=0,averageCost=0,lastVisual='',cadenceFrames=0,lateFrames=0;
  const profiles=[{segments:52,steps:6,fps:18,pixels:700000},{segments:72,steps:8,fps:24,pixels:1000000},{segments:96,steps:10,fps:24,pixels:1400000}];
  let profile=profiles[quality];
  try{const saved=localStorage.getItem(motionKey);if(saved==='paused')paused=true;else if(saved==='running'&&!reduce.matches)paused=false;}catch{}
  let context=null,fragmentsContext=null;try{context=canvas.getContext('2d',{alpha:true});fragmentsContext=fragmentsCanvas?.getContext('2d',{alpha:true});}catch{}
  if(context)root.classList.add('has-canvas');
  const motionButton=document.getElementById('motion-toggle');
  function labels(){
    motionButton.setAttribute('aria-pressed',String(paused));document.getElementById('motion-label').textContent=CB.t(paused?'homePlay':'homePause');document.getElementById('motion-icon').textContent=paused?'▷':'Ⅱ';
    root.dataset.motion=paused?'paused':'running';canvas.dataset.state=paused?'paused':'running';
  }
  // Rasterize each glowing character once instead of re-rasterizing hundreds per frame.
  const atlas=document.createElement('canvas'),symbols=[...new Set('01{}<>/+=')],cells=new Map(symbols.map((symbol,index)=>[symbol,index]));
  atlas.width=symbols.length*32;atlas.height=80;
  const ink=atlas.getContext('2d');
  if(ink){ink.font='16px Consolas,monospace';ink.textAlign='center';ink.textBaseline='middle';for(let palette=0;palette<2;palette++){ink.fillStyle=palette?'#ffc77a':'#b6dfec';ink.shadowColor=ink.fillStyle;ink.shadowBlur=3;symbols.forEach((symbol,index)=>ink.fillText(symbol,index*32+16,palette*40+20));}}
  function configure(){
    profile=profiles[quality];mobile=width<600;
    ratio=Math.min(window.devicePixelRatio||1,1.25,Math.sqrt(profile.pixels/(width*height)));
    canvas.width=Math.max(1,Math.round(width*ratio));canvas.height=Math.max(1,Math.round(height*ratio));
    context?.setTransform(ratio,0,0,ratio,0,0);
    if(fragmentsCanvas){fragmentsCanvas.width=canvas.width;fragmentsCanvas.height=canvas.height;fragmentsContext?.setTransform(ratio,0,0,ratio,0,0);}
    const count=mobile?Math.min(profile.segments,72):profile.segments,steps=mobile?Math.min(profile.steps,8):profile.steps;
    rows=Array.from({length:count+1},(_,index)=>{const t=-1.2+index/count*2.4;return {t,base:t*Math.PI*1.65,y:t*1.9,x:0,z:0,cos:1,sin:0,a:{},b:{}};});
    const code='01{}10<>01/+=0101';letters=[];
    rows.forEach((row,index)=>{if(index%2)return;for(let col=1;col<steps;col++)letters.push({row,side:1-2*col/steps,cell:cells.get(code[(index*3+col)%code.length]),warm:(index+col)%7<2,x:0,y:0,z:0,pr:1});});
    root.dataset.renderQuality=['low','balanced','full'][quality];canvas.dataset.fpsTarget=String(profile.fps);
    lastFragments=-Infinity;pendingQuality=false;measureCopy();prepareFragments();
  }
  function measureCopy(){
    const copy=pin.querySelector('.hero-copy-block');if(!copy)return;
    const rect=copy.getBoundingClientRect(),base=pin.getBoundingClientRect();
    copyArea={left:rect.left-base.left-20,right:rect.right-base.left+20,top:rect.top-base.top-15,bottom:rect.bottom-base.top+15};
  }
  function prepareFragments(){
    const all=[
      {x:.06,y:.20,angle:.035,lines:['const idea = "yours";']},{x:.30,y:.14,angle:-.03,lines:['def begin():','    return "Hello!"']},
      {x:.53,y:.26,angle:-.045,lines:['def grow(skill):','    return skill + 1']},{x:.86,y:.37,angle:.055,lines:['const next = "practice";']},
      {x:.04,y:.73,angle:-.04,lines:['if curious:','    keep_learning()']},{x:.32,y:.85,angle:.035,lines:['const skills = [...ideas];']},
      {x:.58,y:.66,angle:-.025,lines:['for step in path:','    learn(step)']},{x:.87,y:.77,angle:.04,lines:['if ready:','    build()']},{x:.69,y:.91,angle:-.04,lines:['console.log("Hello!");']}
    ];
    fragments=mobile?[{...all[0],x:.05,y:.18},{...all[2],x:.56,y:.41},{...all[4],x:.06,y:.73},{...all[7],x:.58,y:.87}]:all;
    if(fragmentsContext){fragmentsContext.font=`${mobile?9.5:13.5}px Consolas,monospace`;fragments.forEach(fragment=>fragment.textWidth=Math.max(...fragment.lines.map(line=>fragmentsContext.measureText(line).width)));}
    canvas.dataset.codeFragments=String(fragments.length);if(fragmentsCanvas)fragmentsCanvas.dataset.coverage='full';
  }
  function updateScroll(){
    const rect=story.getBoundingClientRect(),distance=Math.max(1,story.offsetHeight-pin.offsetHeight);progress=clamp(-rect.top/distance);
    const visual=(paused?frozen:progress).toFixed(4);
    if(visual!==lastVisual){pin.style.setProperty('--story-progress',visual);story.dataset.progress=String(Math.round((paused?frozen:progress)*100));lastVisual=visual;}
  }
  function resize(){
    width=pin.clientWidth;height=pin.clientHeight;configure();updateScroll();if(context)draw();schedule();
  }
  function drawCodeFragments(){
    if(!fragmentsContext)return;
    const c=fragmentsContext,fontSize=mobile?9.5:13.5;c.clearRect(0,0,width,height);c.font=`${fontSize}px Consolas,monospace`;c.textBaseline='top';
    fragments.forEach((fragment,index)=>{
      const phase=time*.16+index*1.7,x=Math.max(14,Math.min(width-fragment.textWidth-22,width*fragment.x+Math.sin(phase)*8)),y=height*fragment.y+Math.cos(phase*.8)*22-pointer.y*4;
      const behind=copyArea&&x<copyArea.right&&x+fragment.textWidth>copyArea.left&&y<copyArea.bottom&&y+fragment.lines.length*(fontSize+6)>copyArea.top;
      const alpha=(mobile?.25:.30+Math.sin(phase)*.035)*(behind?.25:1);
      c.save();c.translate(x,y);c.rotate(fragment.angle+Math.sin(phase*.5)*.01);fragment.lines.forEach((line,row)=>{c.fillStyle=row===0?`rgba(146,188,175,${alpha})`:`rgba(175,197,142,${alpha*.8})`;c.fillText(line,0,row*(fontSize+6));});c.restore();
    });
  }
  function edgeFade(x){
    const t=x/width;
    if(mobile)return t<.6?clamp((t-.25)/.35)*.333:.333+clamp((t-.6)/.4)*.667;
    if(width<=850)return t<.57?clamp((t-.3)/.27)*.533:.533+clamp((t-.57)/.43)*.467;
    return clamp((t-.27)/.27);
  }
  function draw(){
    if(!context)return;
    if(pendingQuality)configure();
    const started=performance.now(),c=context,p=paused?frozen:progress;
    c.setTransform(ratio,0,0,ratio,0,0);c.globalAlpha=1;c.clearRect(0,0,width,height);
    // The almost-static code snippets need only four updates per second.
    if(started-lastFragments>=250||paused){drawCodeFragments();lastFragments=started;}
    const cx=width*(mobile?.76:.765),cy=height*(mobile?.64:.52),scale=Math.min(width*(mobile?.47:.30),height*(mobile?.31:.34));
    const rotation=time*.42+p*1.8+pointer.x*.18,tilt=-.27+pointer.y*.045,cs=Math.cos(tilt),sn=Math.sin(tilt);
    function project(x,y,z,out){const pr=4.6/(4.6-z);out.x=cx+(x*cs-y*sn)*scale*pr;out.y=cy+(x*sn+y*cs)*scale*pr;out.z=z;out.pr=pr;}
    for(const row of rows){
      const phase=row.base+rotation,radius=.59+.045*Math.sin(row.t*3+time*.12);row.x=radius*Math.cos(phase);row.z=radius*Math.sin(phase)*1.3;
      project(row.x,row.y,row.z,row.a);project(-row.x,row.y,-row.z,row.b);
      const dx=row.b.x-row.a.x,dy=row.b.y-row.a.y,length=Math.hypot(dx,dy)||1,direction=dx<0?-1:1;row.cos=dx/length*direction;row.sin=dy/length*direction;
    }
    // Batched translucent strokes replace a separate blur for every rail segment.
    c.lineCap='round';
    for(const side of ['a','b']){
      c.strokeStyle=side==='a'?'#59c0ff':'#c9fb68';
      for(let band=0;band<8;band++){
        c.beginPath();let hasSegments=false;
        for(let i=1;i<rows.length;i++){const a=rows[i-1][side],b=rows[i][side],front=clamp((a.z+.65)/1.3),alpha=(.16+front*.65)*edgeFade((a.x+b.x)/2);if(alpha<.025||Math.min(7,Math.floor(alpha*8))!==band)continue;c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);hasSegments=true;}
        if(!hasSegments)continue;
        c.globalAlpha=(band+.5)/8*.16;c.lineWidth=7;c.stroke();c.globalAlpha=(band+.5)/8;c.lineWidth=1+band*.19;c.stroke();
      }
    }
    for(const glyph of letters)project(glyph.row.x*glyph.side,glyph.row.y,glyph.row.z*glyph.side,glyph);
    letters.sort((a,b)=>a.z-b.z);
    if(ink)for(const glyph of letters){
      if(glyph.x<0||glyph.x>width||glyph.y<0||glyph.y>height)continue;
      const fade=edgeFade(glyph.x);if(fade<.02)continue;
      const size=(mobile?8:10.6)*glyph.pr/16,co=glyph.row.cos*size*ratio,si=glyph.row.sin*size*ratio;
      c.setTransform(co,si,-si,co,glyph.x*ratio,glyph.y*ratio);c.globalAlpha=(.18+clamp((glyph.z+.65)/1.3)*.70)*fade;
      c.drawImage(atlas,glyph.cell*32,glyph.warm?40:0,32,40,-16,-20,32,40);
    }
    c.setTransform(ratio,0,0,ratio,0,0);
    for(const side of ['a','b']){c.fillStyle=side==='a'?'#69d1ff':'#d7fc70';for(let i=0;i<rows.length;i+=2){const q=rows[i][side],front=clamp((q.z+.65)/1.3);c.globalAlpha=(.2+front*.65)*edgeFade(q.x);c.beginPath();c.arc(q.x,q.y,(1+front*.8)*q.pr,0,Math.PI*2);c.fill();}}
    c.fillStyle='#a1d0c4';
    for(let i=0;i<(mobile?18:32);i++){const drift=(i*.618033+time*.013)%1,x=cx+Math.sin(i*5.33)*scale*.91,y=height*(1.1-drift*1.2);c.globalAlpha=(.05+.12*(.5+.5*Math.sin(i+time*.5)))*edgeFade(x);c.beginPath();c.arc(x,y,i%3===0?1.1:.55,0,Math.PI*2);c.fill();}
    c.globalAlpha=1;frameCount++;
    const cost=performance.now()-started;averageCost=averageCost?averageCost*.9+cost*.1:cost;
    if(started-lastStats>=1000||paused||frameCount===1){canvas.dataset.frames=String(frameCount);canvas.dataset.renderMs=averageCost.toFixed(2);lastStats=started;}
    if(frameCount%48===0&&averageCost>9&&quality>0){quality--;pendingQuality=true;}
  }
  function stop(){if(raf)cancelAnimationFrame(raf);raf=0;lastDraw=0;}
  function animate(timestamp){
    raf=0;if(paused||!visible||document.hidden||!context)return;
    if(lastDraw&&timestamp-lastDraw<1000/profile.fps-1){schedule();return;}
    if(lastDraw){const gap=timestamp-lastDraw;time+=Math.min(.15,gap/1000);cadenceFrames++;if(gap>1000/profile.fps*1.7)lateFrames++;if(cadenceFrames>=48){if(lateFrames>14&&quality>0){quality--;pendingQuality=true;}cadenceFrames=0;lateFrames=0;}}lastDraw=timestamp;
    pointer.x+=(target.x-pointer.x)*.08;pointer.y+=(target.y-pointer.y)*.08;
    draw();schedule();
  }
  function schedule(){if(!raf&&!paused&&visible&&!document.hidden&&context)raf=requestAnimationFrame(animate);}
  motionButton.addEventListener('click',()=>{if(!paused)frozen=progress;paused=!paused;try{localStorage.setItem(motionKey,paused?'paused':'running');}catch{}stop();labels();updateScroll();draw();schedule();});
  window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(()=>{scrollFrame=0;updateScroll();});},{passive:true});
  window.addEventListener('resize',()=>{if(!resizeFrame)resizeFrame=requestAnimationFrame(()=>{resizeFrame=0;resize();});},{passive:true});
  pin.addEventListener('pointermove',event=>{if(fine.matches&&!paused){target.x=(event.clientX/width-.5)*2;target.y=(event.clientY/height-.5)*2;}},{passive:true});
  pin.addEventListener('pointerleave',()=>{target={x:0,y:0};});
  window.addEventListener('codebloom-language',()=>{labels();measureCopy();lastFragments=-Infinity;if(paused)draw();});
  document.addEventListener('visibilitychange',()=>{root.dataset.pageVisible=String(!document.hidden);if(document.hidden)stop();else schedule();});
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting&&entries[0].intersectionRatio>.15;root.dataset.heroVisible=String(visible);if(visible)schedule();else stop();},{threshold:[0,.15]}).observe(pin);
  reduce.addEventListener('change',event=>{if(event.matches){paused=true;frozen=1;stop();labels();updateScroll();draw();}});
  window.addEventListener('pagehide',()=>{stop();if(scrollFrame)cancelAnimationFrame(scrollFrame);if(resizeFrame)cancelAnimationFrame(resizeFrame);});
  labels();resize();
})();


// A small, deterministic greeting demonstration; this does not execute learner code.
(() => {
  const name=document.getElementById('demo-name'),output=document.getElementById('demo-output'),source=document.getElementById('demo-source');
  if(!name||!output||!source)return;
  const examples={python:'name = input()\ngreeting = "Hello, " + name\nprint(greeting)',javascript:'const name = prompt("Your name?");\nconst greeting = "Hello, " + name;\nconsole.log(greeting);'};
  function preview(){
    output.textContent='Hello, '+name.value;
    const panel=output.closest('.demo-console');
    panel.removeAttribute('data-changed');
    requestAnimationFrame(()=>panel.setAttribute('data-changed','true'));
  }
  document.getElementById('demo-run').addEventListener('click',preview);
  name.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();preview();}});
  document.querySelectorAll('[data-demo-language]').forEach(button=>button.addEventListener('click',()=>{
    const language=button.dataset.demoLanguage;
    if(!Object.hasOwn(examples,language))return;
    source.textContent=examples[language];
    document.getElementById('demo-filename').textContent=language==='python'?'hello.py':'hello.js';
    document.querySelectorAll('[data-demo-language]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  }));
})();

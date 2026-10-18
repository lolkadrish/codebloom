'use strict';
(() => {
  const root=document.documentElement,story=document.getElementById('home-story'),pin=document.getElementById('hero-pin'),canvas=document.getElementById('code-bloom'),fragmentsCanvas=document.getElementById('code-fragments');
  if(!story||!pin||!canvas)return;
  const motionKey='codebloom-home-motion-v1',reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(pointer: fine)');
  const clamp=value=>Math.min(1,Math.max(0,value));
  let paused=reduce.matches,frozen=reduce.matches?1:0,progress=0,visible=true,raf=0,scrollFrame=0,lastDraw=-Infinity,time=0,lastTime=0,width=1,height=1;
  let pointer={x:0,y:0},target={x:0,y:0},frameCount=0,copyArea=null;
  try{const saved=localStorage.getItem(motionKey);if(saved==='paused')paused=true;else if(saved==='running'&&!reduce.matches)paused=false;}catch{}
  let context=null,fragmentsContext=null;try{context=canvas.getContext('2d',{alpha:true});fragmentsContext=fragmentsCanvas?.getContext('2d',{alpha:true});}catch{}
  if(context)root.classList.add('has-canvas');
  const motionButton=document.getElementById('motion-toggle');
  function labels(){
    motionButton.setAttribute('aria-pressed',String(paused));document.getElementById('motion-label').textContent=CB.t(paused?'homePlay':'homePause');document.getElementById('motion-icon').textContent=paused?'▷':'Ⅱ';
    root.dataset.motion=paused?'paused':'running';canvas.dataset.state=paused?'paused':'running';
  }
  function resize(){
    width=pin.clientWidth;height=pin.clientHeight;
    const ratio=Math.min(window.devicePixelRatio||1,1.7);canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);context?.setTransform(ratio,0,0,ratio,0,0);
    if(fragmentsCanvas){fragmentsCanvas.width=canvas.width;fragmentsCanvas.height=canvas.height;fragmentsContext?.setTransform(ratio,0,0,ratio,0,0);}
    measureCopy();
    updateScroll();if(context)draw();schedule();
  }
  function measureCopy(){
    const copy=pin.querySelector('.hero-copy-block');if(!copy)return;
    const rect=copy.getBoundingClientRect(),base=pin.getBoundingClientRect();
    copyArea={left:rect.left-base.left-20,right:rect.right-base.left+20,top:rect.top-base.top-15,bottom:rect.bottom-base.top+15};
  }
  function updateScroll(){
    const rect=story.getBoundingClientRect(),distance=Math.max(1,story.offsetHeight-pin.offsetHeight);progress=clamp(-rect.top/distance);
    const visual=paused?frozen:progress;
    pin.style.setProperty('--story-progress',visual.toFixed(4));
    story.dataset.progress=String(Math.round(visual*100));
  }
  function drawCodeFragments(c,mobile){
    // Code spans the full hero, independently of the helix's right-side mask.
    const fragments=[
      {x:.06,y:.20,angle:.035,lines:['const idea = "yours";']},
      {x:.30,y:.14,angle:-.03,lines:['def begin():','    return "Hello!"']},
      {x:.53,y:.26,angle:-.045,lines:['def grow(skill):','    return skill + 1']},
      {x:.86,y:.37,angle:.055,lines:['const next = "practice";']},
      {x:.04,y:.73,angle:-.04,lines:['if curious:','    keep_learning()']},
      {x:.32,y:.85,angle:.035,lines:['const skills = [...ideas];']},
      {x:.58,y:.66,angle:-.025,lines:['for step in path:','    learn(step)']},
      {x:.87,y:.77,angle:.04,lines:['if ready:','    build()']},
      {x:.69,y:.91,angle:-.04,lines:['console.log("Hello!");']}
    ];
    const selected=mobile?[
      {...fragments[0],x:.05,y:.18},
      {...fragments[2],x:.56,y:.41},
      {...fragments[4],x:.06,y:.73},
      {...fragments[7],x:.58,y:.87}
    ]:fragments;
    c.save();c.globalCompositeOperation='source-over';c.textAlign='left';c.textBaseline='top';c.shadowBlur=0;
    selected.forEach((fragment,index)=>{
      const phase=time*.16+index*1.7;
      const fontSize=mobile?9.5:13.5;
      c.font=`${fontSize}px Consolas,monospace`;
      const textWidth=Math.max(...fragment.lines.map(line=>c.measureText(line).width));
      const x=Math.max(14,Math.min(width-textWidth-22,width*fragment.x+Math.sin(phase)*8));
      const y=height*fragment.y+Math.cos(phase*.8)*22-pointer.y*4;
      const behindCopy=copyArea&&x<copyArea.right&&x+textWidth>copyArea.left&&y<copyArea.bottom&&y+fragment.lines.length*(fontSize+6)>copyArea.top;
      const alpha=(mobile?.25:.30+Math.sin(phase)*.035)*(behindCopy?.25:1);
      c.save();c.translate(x,y);c.rotate(fragment.angle+Math.sin(phase*.5)*.01);
      c.font=`${fontSize}px Consolas,monospace`;
      fragment.lines.forEach((line,row)=>{
        c.fillStyle=row===0?`rgba(146,188,175,${alpha})`:`rgba(175,197,142,${alpha*.8})`;
        c.fillText(line,0,row*(fontSize+6));
      });
      c.restore();
    });
    c.restore();canvas.dataset.codeFragments=String(selected.length);if(fragmentsCanvas)fragmentsCanvas.dataset.coverage='full';
  }
  function draw(){
    if(!context)return;
    const c=context,p=paused?frozen:progress,mobile=width<600;
    c.clearRect(0,0,width,height);
    if(fragmentsContext){fragmentsContext.clearRect(0,0,width,height);drawCodeFragments(fragmentsContext,mobile);}
    const cx=width*(mobile?.76:.765),cy=height*(mobile?.64:.52);
    const scale=Math.min(width*(mobile?.47:.30),height*(mobile?.31:.34));
    const rotation=time*.42+p*1.8+pointer.x*.18,tilt=-.27+pointer.y*.045;
    const cs=Math.cos(tilt),sn=Math.sin(tilt),segments=mobile?78:112,steps=mobile?8:11,railA=[],railB=[],letters=[];
    const project=(x,y,z)=>{
      const rx=x*cs-y*sn,ry=x*sn+y*cs,pr=4.6/(4.6-z);
      return {x:cx+rx*scale*pr,y:cy+ry*scale*pr,z,pr};
    };
    const point=(t,side)=>{
      const phase=t*Math.PI*1.65+rotation;
      const radius=.59+.045*Math.sin(t*3+time*.12);
      return {x:side*radius*Math.cos(phase),y:t*1.90,z:side*radius*Math.sin(phase)*1.3};
    };
    const mix=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t,z:a.z+(b.z-a.z)*t});
    const code='01{}10<>01/+=0101';
    for(let row=0;row<=segments;row++){
      const t=-1.2+row/segments*2.4,a=point(t,1),b=point(t,-1),pa=project(a.x,a.y,a.z),pb=project(b.x,b.y,b.z);
      railA.push(pa);railB.push(pb);
      if(row%2!==0)continue;
      const angle=Math.atan2(pb.y-pa.y,pb.x-pa.x);
      const readable=angle>Math.PI/2?angle-Math.PI:angle< -Math.PI/2?angle+Math.PI:angle;
      for(let col=1;col<steps;col++){
        const q=mix(a,b,col/steps),screen=project(q.x,q.y,q.z);
        letters.push({...screen,angle:readable,character:code[(row*3+col)%code.length],warm:(row+col)%7<2});
      }
    }
    // Distant code dust drifts along the same flow, without covering the reading area.
    c.globalCompositeOperation='lighter';
    for(let i=0;i<(mobile?22:42);i++){
      const drift=((i*.618033+time*.013)%1),x=cx+Math.sin(i*5.33)*scale*.91,y=height*(1.1-drift*1.2);
      const alpha=.05+.12*(.5+.5*Math.sin(i+time*.5));
      c.fillStyle=`rgba(161,208,196,${alpha})`;
      if(i%7===0){c.font='8px Consolas,monospace';c.fillText(i%2?'01':'{}',x,y);}else{c.beginPath();c.arc(x,y,i%3===0?1.1:.55,0,Math.PI*2);c.fill();}
    }
    function rail(points,color){
      for(let i=1;i<points.length;i++){
        const a=points[i-1],b=points[i],front=clamp((a.z+.65)/1.3),alpha=.16+front*.65;
        c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);
        c.strokeStyle=`rgba(${color},${alpha})`;c.lineWidth=(1.0+front*1.4)*a.pr;
        c.shadowColor=`rgb(${color})`;c.shadowBlur=front*15+3;c.stroke();
      }
    }
    rail(railA,'89,192,255');rail(railB,'201,251,104');c.shadowBlur=0;
    letters.sort((a,b)=>a.z-b.z);
    for(const glyph of letters){
      const front=clamp((glyph.z+.65)/1.3),alpha=.18+front*.70;
      if(glyph.x<0||glyph.x>width||glyph.y<0||glyph.y>height)continue;
      c.save();c.translate(glyph.x,glyph.y);c.rotate(glyph.angle);
      c.font=`${(mobile?8:10.6)*glyph.pr}px Consolas,monospace`;c.textAlign='center';c.textBaseline='middle';
      c.fillStyle=glyph.warm?`rgba(255,199,122,${alpha})`:`rgba(182,223,236,${alpha})`;
      c.shadowColor=glyph.warm?'#ffc176':'#80daff';c.shadowBlur=front>.65?4:0;
      c.fillText(glyph.character,0,0);c.restore();
    }
    // Beads make the two interwoven rails legible as they turn through depth.
    for(const [points,color] of [[railA,'105,209,255'],[railB,'215,252,112']]){
      for(let i=0;i<points.length;i+=2){const q=points[i],front=clamp((q.z+.65)/1.3);c.beginPath();c.arc(q.x,q.y,(1+front*.8)*q.pr,0,Math.PI*2);c.fillStyle=`rgba(${color},${.2+front*.65})`;c.fill();}
    }
    c.shadowBlur=0;c.globalCompositeOperation='source-over';frameCount++;canvas.dataset.frames=String(frameCount);
  }
  function stop(){if(raf)cancelAnimationFrame(raf);raf=0;lastTime=0;}
  function animate(timestamp){
    raf=0;if(paused||!visible||document.hidden||!context)return;
    if(lastTime)time+=Math.min(.06,(timestamp-lastTime)/1000);lastTime=timestamp;
    pointer.x+=(target.x-pointer.x)*.035;pointer.y+=(target.y-pointer.y)*.035;
    pin.style.setProperty('--pointer-x',pointer.x.toFixed(3));pin.style.setProperty('--pointer-y',pointer.y.toFixed(3));
    if(timestamp-lastDraw>32){draw();lastDraw=timestamp;}
    raf=requestAnimationFrame(animate);
  }
  function schedule(){if(!raf&&!paused&&visible&&!document.hidden&&context)raf=requestAnimationFrame(animate);}
  motionButton.addEventListener('click',()=>{
    if(!paused)frozen=progress;paused=!paused;
    try{localStorage.setItem(motionKey,paused?'paused':'running');}catch{}
    stop();labels();updateScroll();draw();schedule();
  });
  window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(()=>{scrollFrame=0;updateScroll();if(paused)draw();});},{passive:true});
  window.addEventListener('resize',resize,{passive:true});
  pin.addEventListener('pointermove',event=>{if(fine.matches&&!paused){target.x=(event.clientX/width-.5)*2;target.y=(event.clientY/height-.5)*2;}},{passive:true});
  pin.addEventListener('pointerleave',()=>{target={x:0,y:0};});
  window.addEventListener('codebloom-language',()=>{labels();measureCopy();if(paused)draw();});
  document.addEventListener('visibilitychange',()=>{root.dataset.pageVisible=String(!document.hidden);if(document.hidden)stop();else schedule();});
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting&&entries[0].intersectionRatio>.15;root.dataset.heroVisible=String(visible);if(visible)schedule();else stop();},{threshold:[0,.15]}).observe(pin);
  reduce.addEventListener('change',event=>{if(event.matches){paused=true;frozen=1;stop();labels();updateScroll();draw();}});
  window.addEventListener('pagehide',()=>{stop();if(scrollFrame)cancelAnimationFrame(scrollFrame);});
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

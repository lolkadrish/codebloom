'use strict';
(() => {
const escapeHTML=value=>String(value).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
function highlight(code){
  const pattern=/(#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:if|elif|else|and|or|not|True|False|for|while|in|break|continue)\b|\b(?:print|input|int|str|range)\b|\b\d+\b)/g;
  let end=0,result='';for(const match of code.matchAll(pattern)){result+=escapeHTML(code.slice(end,match.index));const token=match[0];const kind=token.startsWith('#')?'comment':/^['"]/.test(token)?'string':/^\d/.test(token)?'num':/^(print|input|int|str|range)$/.test(token)?'func':'key';result+=`<span class="tok-${kind}">${escapeHTML(token)}</span>`;end=match.index+token.length;}return result+escapeHTML(code.slice(end))+'\n';
}

function helpers(labels,language){
  const loc=value=>Array.isArray(value)?value[['ru','uk','en'].indexOf(language)]:value;
  const rich=value=>escapeHTML(loc(value)).replace(/`([^`]+)`/g,'<code>$1</code>');
  const label=key=>escapeHTML(loc(labels[key]));
  const paragraphs=items=>items.map(text=>'<p>'+rich(text)+'</p>').join('');
  const codeBlock=code=>'<pre class="guide-code"><code>'+highlight(loc(code))+'</code></pre>';
  return {loc,rich,label,paragraphs,codeBlock};
}
window.GUIDE_RENDERER={escape:escapeHTML,
  basics(guide,language){const {loc,rich,label,paragraphs,codeBlock}=helpers(guide.labels,language);return '<div class="basics-content">'+guide.basics.map(part=>`<section class="basics-part"><h3>${escapeHTML(loc(part.title))}</h3>${paragraphs(part.paragraphs)}${part.code?codeBlock(part.code):''}${part.steps?paragraphs(part.steps):''}${part.operators?`<dl class="operator-list">${part.operators.map(([symbol,meaning])=>`<div><dt><code>${escapeHTML(symbol)}</code></dt><dd>${rich(meaning)}</dd></div>`).join('')}</dl>`:''}${part.online?`<a class="guide-online" href="https://lolkadrish.github.io/python-next-step/branching/">${label('online')} ↗</a>`:''}</section>`).join('')+'</div>';},
  lesson(lesson,labels,language){const {loc,rich,label,paragraphs,codeBlock}=helpers(labels,language),example=lesson.example,lines=loc(example.code).split('\n');return '<div class="lesson-guide">'+`<h2>${label('detail')}</h2>${paragraphs(lesson.paragraphs)}${lesson.before?codeBlock(lesson.before):''}<h3>${label('example')}</h3>${codeBlock(example.code)}<details class="line-explanations" open><summary>${label('lines')}<span class="chevron">⌄</span></summary><ol class="line-walk">${example.lines.map((text,index)=>`<li><div class="walk-code"><span aria-label="${label('line')} ${index+1}">${index+1}</span><code>${escapeHTML(lines[index])}</code></div><p>${rich(text)}</p></li>`).join('')}</ol></details><h3>${label('runs')}</h3><div class="guide-table-wrap"><table class="guide-table"><thead><tr><th scope="col">${label('input')}</th><th scope="col">${label('output')}</th><th scope="col">${label('why')}</th></tr></thead><tbody>${example.runs.map(([input,output,reason])=>`<tr><td><pre>${escapeHTML(loc(input))}</pre></td><td><pre>${escapeHTML(loc(output))}</pre></td><td>${rich(reason)}</td></tr>`).join('')}</tbody></table></div><div class="guide-rules"><h3>${label('rules')}</h3><ul>${lesson.rules.map(text=>'<li>'+rich(text)+'</li>').join('')}</ul></div><div class="guide-mistakes"><h3>${label('mistakes')}</h3>${paragraphs(lesson.mistakes)}</div><div class="guide-think"><h3>${label('think')}</h3><p>${rich(lesson.think)}</p></div>`+'</div>';}
};
})();

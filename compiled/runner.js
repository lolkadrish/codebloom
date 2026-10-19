'use strict';
(() => {
  const endpoint='https://wandbox.org/api/compile.json';
  let active=null,memoryConsent=null;
  function tokens(source){
    // Strip comments and literals before checking a requested learning tool.
    // Correctness is always decided by the real compiler and real outputs.
    let out='',i=0;
    while(i<source.length){
      if(source.startsWith('//',i)){while(i<source.length&&source[i]!=='\n')i++;continue;}
      if(source.startsWith('/*',i)){i+=2;while(i<source.length&&!source.startsWith('*/',i))i++;i+=2;out+=' ';continue;}
      if(source[i]==='"'||source[i]==="'"){
        const quote=source[i++],verbatim=quote==='"'&&source[i-2]==='@';out+=' ';
        while(i<source.length){if(verbatim&&source[i]===quote&&source[i+1]===quote){i+=2;continue;}if(source[i]==='\\'&&!verbatim){i+=2;continue;}if(source[i++]===quote)break;}
        continue;
      }
      out+=source[i++];
    }return out;
  }
  const rules={
    multiply:/\*/,variable:/\bint\s+coins\b/,update:/\b(coins|price)\s*(?:\+=|=\s*\1\s*\+)/,
    if:/\bif\s*\(/,and:/&&/,while:/\bwhile\s*\(/,loop:/\b(?:for|while)\s*\(/,
    function:/\b(?:int|bool)\s+(?:Double|Add|IsEven|Nonnegative|Square)\s*\(/,
    list:/\bList\s*</,dictionary:/\bDictionary\s*</,set:/\b(?:HashSet\s*<|std\s*::\s*set\s*<)/,
    class:/\bclass\s+(?!Program\b)\w+/,struct:/\bstruct\s+\w+/,override:/\boverride\b/,interface:/\binterface\s+\w+/,
    lambda:/(?:=>|\[[^\]]*\]\s*\()/,where:/\.\s*Where\s*\(/,select:/\.\s*Select\s*\(/,orderby:/\.\s*OrderBy\s*\(/,
    generic:/\bFirst\s*<\s*T\s*>/,tryparse:/\bTryParse\s*\(/,catch:/\bcatch\s*\(/,
    stringreader:/\bStringReader\b/,file:/(?:\bFile\s*\.\s*WriteAllText|\bstd\s*::\s*ofstream)/,
    await:/\bawait\b/,whenall:/\bTask\s*\.\s*WhenAll\s*\(/,cancellation:/\bThrowIfCancellationRequested\s*\(/,throw:/\bthrow\b/,
    vector:/\bstd\s*::\s*vector\s*</,map:/\bstd\s*::\s*map\s*</,popback:/\.\s*pop_back\s*\(/,
    reference:/\bint\s*&\s*\w+/,constref:/\bconst\s+std\s*::\s*vector\s*<[^>]+>\s*&/,
    pointer:/\bint\s*\*\s*\w+/,destructor:/~\s*\w+\s*\(/,unique:/\bmake_unique\s*</,
    countif:/\bcount_if\s*\(/,sort:/\bsort\s*\(/,accumulate:/\baccumulate\s*\(/,
    template:/\btemplate\s*</,stringstream:/\bistringstream\b/,async:/\basync\s*\(/
  };
  function missing(code,features=[]){const text=tokens(code);return features.filter(name=>!rules[name]||!rules[name].test(text));}
  function consent(){if(memoryConsent!==null)return memoryConsent;try{return localStorage.getItem('codebloom-compiler-consent-v1')==='allowed';}catch{return false;}}
  function setConsent(value){try{localStorage.setItem('codebloom-compiler-consent-v1',value?'allowed':'denied');memoryConsent=null;}catch{memoryConsent=!!value;}}
  function stop(){active?.abort();}
  async function run(course,code,cases,onProgress=()=>{}){
    if(!consent())throw {kind:'consent'};
    if(active)throw {kind:'busy'};
    if(typeof code!=='string'||code.length>40000||cases.length>6||cases.some(test=>typeof test.input!=='string'||test.input.length>8000))throw {kind:'limit'};
    const controller=new AbortController();active=controller;
    const results=[];
    try{
      for(let index=0;index<cases.length;index++){
        if(controller.signal.aborted)throw {kind:'stopped'};
        let timedOut=false;
        const timeout=setTimeout(()=>{timedOut=true;controller.abort();},45000);
        let response,body;
        try{
          response=await fetch(endpoint,{method:'POST',credentials:'omit',referrerPolicy:'no-referrer',headers:{'Content-Type':'application/json'},signal:controller.signal,
            body:JSON.stringify({compiler:course.compiler,options:course.id==='cpp'?'warning,c++17,boost-nothing-gcc-13.2.0':'',code,stdin:cases[index].input,save:false})});
          if(!response.ok)throw {kind:response.status===429?'rate':'service',status:response.status};
          // Bound diagnostics even if the remote service returns an oversized body.
          const text=await response.text();if(text.length>250000)throw {kind:'limit'};
          try{body=JSON.parse(text);}catch{throw {kind:'service'};}
        }catch(error){
          if(error.kind)throw error;
          if(controller.signal.aborted)throw {kind:timedOut?'timeout':'stopped'};
          throw {kind:'network'};
        }finally{clearTimeout(timeout);}
        if(!body||typeof body.status!=='string'||typeof body.program_output!=='string')throw {kind:'service'};
        const output=body.program_output.slice(0,32000),diagnostics=[body.compiler_error||body.compiler_message,body.program_error||body.program_message,body.signal].filter(Boolean).join('\n').slice(0,16000);
        const runtimeFailed=!!(body.program_error||body.signal||body.program_output)||!(body.compiler_error||body.compiler_message);
        const error=body.status==='0'?null:{kind:runtimeFailed?'runtime':'compile',message:diagnostics,status:body.status};
        results.push({output,error});onProgress({completed:index+1,total:cases.length,result:results.at(-1)});
        if(error)break;
      }
      return results;
    }finally{if(active===controller)active=null;}
  }
  const normalize=value=>String(value).replace(/\r\n/g,'\n');
  const matches=(actual,expected)=>{actual=normalize(actual);expected=normalize(expected);return actual===expected||(expected.endsWith('\n')&&expected!=='\n'&&actual===expected.slice(0,-1));};
  window.CB_COMPILER={run,stop,missing,tokens,matches,consent,setConsent};
  if(typeof module==='object'&&module.exports)module.exports=window.CB_COMPILER;
})();

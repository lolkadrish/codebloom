/* CodeBloom JavaScript exercises. Student programs run only in an opaque sandbox. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.CODEBLOOM_ENGINE=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  function prepare(source,parser,required=[]){
    if(typeof source!=='string'||source.length>60000)throw Object.assign(new Error('CODE_LIMIT'),{line:1});
    const ast=parser.parse(source,{ecmaVersion:2022,sourceType:'module',locations:true}),features=new Set(),edits=[];let isModule=false;
    const insert=(at,text)=>edits.push({at,text,end:at});
    function visit(node){
      if(!node||typeof node!=='object')return;
      if(node.type){features.add(node.type);if(node.type==='VariableDeclaration')features.add(node.kind);if(node.operator)features.add(node.operator);if(node.async)features.add('async');
        if(node.type==='CallExpression'&&node.callee?.type==='MemberExpression')features.add(node.callee.property?.name||'');
        if(['CallExpression','NewExpression'].includes(node.type)&&node.callee?.type==='Identifier')features.add(node.callee.name);
        if(node.type==='Identifier'&&node.name.startsWith('__cb'))throw Object.assign(new Error('RESERVED_NAME'),{line:node.loc.start.line});
        if(['WhileStatement','DoWhileStatement','ForStatement','ForInStatement','ForOfStatement'].includes(node.type)){
          const body=node.body;if(body.type==='BlockStatement')insert(body.start+1,'__cbTick();');else{insert(body.start,'{__cbTick();');insert(body.end,'}');}
        }
        if(['FunctionDeclaration','FunctionExpression','ArrowFunctionExpression'].includes(node.type)&&node.body?.type==='BlockStatement')insert(node.body.start+1,'__cbTick();');
        if(node.type==='ArrowFunctionExpression'&&node.body?.type!=='BlockStatement'){insert(node.body.start,'(__cbTick(),');insert(node.body.end,')');}
        if(node.type.startsWith('Export'))isModule=true;
        if(node.type==='ImportDeclaration'){
          isModule=true;if(node.source.value!=='helpers')throw Object.assign(new Error('IMPORT_NOT_AVAILABLE'),{line:node.loc.start.line});
          edits.push({at:node.source.start,end:node.source.end,text:'"__CB_HELPERS_URL__"'});
        }
        if(node.type==='ImportExpression')throw Object.assign(new Error('IMPORT_NOT_AVAILABLE'),{line:node.loc.start.line});
      }
      for(const [key,value]of Object.entries(node)){if(['loc','start','end'].includes(key))continue;if(Array.isArray(value))value.forEach(visit);else if(value&&typeof value==='object')visit(value);}
    }
    visit(ast);let code=source;for(const edit of edits.sort((a,b)=>b.at-a.at))code=code.slice(0,edit.at)+edit.text+code.slice(edit.end);
    return {code,isModule,features:[...features],missing:required.filter(feature=>!features.has(feature))};
  }
  async function execute(prepared,test,environment={}){
    let lines=0,steps=0,assertions=0,output=[];const nativeTimer=setTimeout;
    const tick=()=>{if(++steps>100000)throw new Error('STEP_LIMIT');};
    const format=value=>typeof value==='string'?value:typeof value==='undefined'?'undefined':typeof value==='bigint'?String(value):typeof value==='object'&&value!==null?JSON.stringify(value):String(value);
    const consoleView={log:(...values)=>{const line=values.map(format).join(' ');if(output.join('\n').length+line.length>10000||output.length>=1000)throw new Error('OUTPUT_LIMIT');output.push(line);},warn:(...values)=>consoleView.log(...values),error:(...values)=>consoleView.log(...values)};
    const input=()=>{if(lines>=(test.input||[]).length)throw new Error('INPUT_EMPTY');return String(test.input[lines++]);};
    const wait=ms=>new Promise(resolve=>nativeTimer(resolve,Math.min(50,Math.max(0,Number(ms)||0))));
    const fetchFixture=async path=>{const fixture=test.responses?.[path];if(!fixture)throw new Error('NETWORK_NOT_AVAILABLE');const status=fixture.status??200;return {ok:status>=200&&status<300,status,json:async()=>JSON.parse(JSON.stringify(fixture.body))};};
    const assert=(condition,message='Assertion failed')=>{assertions++;if(!condition)throw new Error(String(message));};
    let error=null;
    try{
      if(prepared.isModule){
        if(environment.document)throw new Error('MODULE_DOM_UNAVAILABLE');
        Object.assign(globalThis,{input,console:consoleView,wait,fetch:fetchFixture,assert,__cbTick:tick});
        const helper=URL.createObjectURL(new Blob(['export const add=(a,b)=>a+b; export const double=n=>n*2;'],{type:'text/javascript'}));
        const url=URL.createObjectURL(new Blob([prepared.code.replaceAll('__CB_HELPERS_URL__',helper)],{type:'text/javascript'}));
        try{const exports=await import(url);if(test.exportName){if(typeof exports[test.exportName]!=='function')throw new Error('EXPORT_MISSING');const result=await exports[test.exportName](...(test.args||[]));consoleView.log(result);}}finally{URL.revokeObjectURL(url);URL.revokeObjectURL(helper);}
      }else{
        const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;
        await new AsyncFunction('input','console','document','fetch','wait','assert','__cbTick','"use strict";\n'+prepared.code)(input,consoleView,environment.document,fetchFixture,wait,assert,tick);
      }
      if(environment.document){
        for(const action of test.actions||[]){tick();const el=environment.document.querySelector(action.selector);if(!el)throw new Error('ELEMENT_MISSING');
          if('value'in action)el.value=String(action.value);if('checked'in action)el.checked=!!action.checked;
          el.dispatchEvent(new Event(action.type||'click',{bubbles:true,cancelable:true}));await environment.settle?.();
        }
        await environment.settle?.();if(environment.getError?.())throw environment.getError();
        if(test.inspect){const values=test.inspect.map(({selector,property='textContent'})=>{if(property==='count')return environment.document.querySelectorAll(selector).length;const el=environment.document.querySelector(selector);if(!el)return null;if(property==='className')return el.className;if(property==='disabled')return el.disabled;return el[property];});output=[JSON.stringify(values)];}
      }
    }catch(caught){error={name:caught.name||'Error',message:String(caught.message||caught).slice(0,400)};}
    return {output:output.join('\n'),error,assertions};
  }
  return {prepare,execute};
});

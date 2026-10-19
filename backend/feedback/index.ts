// Public feedback intake. No user sessions, draft collection or public inbox reads.
import {scheduleTelegram} from '../_shared/feedback-telegram.ts';
const siteKey = "sb_publishable_pvvvem6qrBOBa5iNKWgjhA_BJLlou_E";
const projectURL = Deno.env.get('SUPABASE_URL') ?? '';
const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const allowedOrigins = new Set([
  'https://lolkadrish.github.io',
  'http://127.0.0.1:8894','http://localhost:8894','http://127.0.0.1:8898'
]);
const encoder = new TextEncoder();
const hmacKey = crypto.subtle.importKey('raw',encoder.encode(serviceKey),{name:'HMAC',hash:'SHA-256'},false,['sign']);
async function sourceHash(req: Request): Promise<string> {
  const address=req.headers.get('cf-connecting-ip')||req.headers.get('x-forwarded-for')?.split(',')[0].trim()||'unknown';
  const signature=await crypto.subtle.sign('HMAC',await hmacKey,encoder.encode('codebloom-feedback-v1\0'+address));
  return Array.from(new Uint8Array(signature),value=>value.toString(16).padStart(2,'0')).join('');
}
async function readJSON(req: Request) {
  if(Number(req.headers.get('content-length'))>20000)throw new Error('size');
  const reader=req.body?.getReader();if(!reader)throw new Error('body');
  let total=0;const chunks: Uint8Array[]=[];
  while(true){const {value,done}=await reader.read();if(done)break;total+=value.length;if(total>20000){await reader.cancel();throw new Error('size');}chunks.push(value);}
  const bytes=new Uint8Array(total);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
  return JSON.parse(new TextDecoder().decode(bytes));
}
Deno.serve(async (req: Request) => {
  const origin=req.headers.get('origin')||'';
  const cors=allowedOrigins.has(origin)?{'Access-Control-Allow-Origin':origin,'Vary':'Origin'}:{};
  const reply=(status:number,value:unknown)=>new Response(JSON.stringify(value),{status,headers:{...cors,'Content-Type':'application/json','Cache-Control':'no-store'}});
  if(!allowedOrigins.has(origin))return reply(403,{error:'origin'});
  if(req.method==='OPTIONS')return new Response(null,{status:204,headers:{...cors,'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'apikey, content-type','Access-Control-Max-Age':'86400'}});
  if(req.method!=='POST')return reply(405,{error:'method'});
  // The public project key identifies the caller; validated write-only intake is intentional.
  if(!siteKey||req.headers.get('apikey')!==siteKey)return reply(401,{error:'key'});
  if(!serviceKey||!projectURL)return reply(503,{error:'unavailable'});
  if(!req.headers.get('content-type')?.toLowerCase().startsWith('application/json'))return reply(415,{error:'type'});
  let data;
  try{data=await readJSON(req);}catch{return reply(400,{error:'invalid'});}
  if(!data||typeof data!=='object'||Array.isArray(data)||Object.keys(data).some(key=>!['id','category','message','email','page','language','website'].includes(key)))return reply(400,{error:'invalid'});
  const {id,category,language}=data;
  const message=typeof data.message==='string'?data.message.trim():'';
  const email=typeof data.email==='string'?data.email.trim():'';
  const page=data.page===null?null:typeof data.page==='string'?data.page:'';
  if(typeof id!=='string'||!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)
     ||!['bug','lesson','idea','other'].includes(category)||!['en','ru','uk'].includes(language)
     ||message.length<10||message.length>4000||email.length>254||email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
     ||page!==null&&(!page||page.length>300||!/^[a-z0-9][a-z0-9/_-]*(?:\.html)?(?:#[a-z0-9_-]+)?$/.test(page))
     ||data.website)return reply(400,{error:'invalid'});
  try{
    const response=await fetch(projectURL+'/rest/v1/rpc/record_site_feedback',{
      method:'POST',headers:{'apikey':serviceKey,'Authorization':'Bearer '+serviceKey,'Content-Type':'application/json'},
      body:JSON.stringify({p_id:id,p_category:category,p_message:message,p_email:email||null,p_page:page,p_language:language,p_source_hash:await sourceHash(req)}),
      signal:AbortSignal.timeout(10000)
    });
    const result=await response.json();
    if(!response.ok)return reply(result?.code==='P0001'?429:result?.code==='22023'?400:503,{error:result?.code==='P0001'?'rate':'unavailable'});
    if(result!==id)return reply(503,{error:'unavailable'});
    scheduleTelegram(id);
    return reply(200,{ok:true,id});
  }catch{return reply(503,{error:'unavailable'});}
});

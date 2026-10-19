import {authorizedDispatcher,dispatchTelegram,telegramConfigured,pairTelegram} from '../_shared/feedback-telegram.ts';

// Scheduled server-only worker. The dispatch key is generated in Vault, never in the browser.
Deno.serve(async (req: Request) => {
  const reply=(status:number,body:unknown)=>new Response(JSON.stringify(body),{
    status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}
  });
  if(req.method!=='POST')return reply(405,{error:'method'});
  const key=req.headers.get('X-CodeBloom-Dispatch-Key')||'';
  if(!await authorizedDispatcher(key))return reply(401,{error:'unauthorized'});
  if(!telegramConfigured())return reply(503,{error:'not_configured'});
  try{const paired=await pairTelegram();return reply(200,{ok:true,paired,...await dispatchTelegram()});}
  catch{return reply(503,{error:'unavailable'});}
});

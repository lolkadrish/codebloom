// Notification metadata only: feedback contents and email never leave Supabase.
const projectURL = Deno.env.get('SUPABASE_URL') ?? '';
const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const botToken = (Deno.env.get('CODEBLOOM_TELEGRAM_BOT_TOKEN') ?? '').trim();
const inboxURL = 'https://supabase.com/dashboard/project/jtpyocygkyjvljfejuyo/editor/17948?schema=public';
const categories: Record<string,string> = {bug:'Что-то не работает',lesson:'Непонятно объяснение',idea:'Идея или предложение',other:'Другое'};

export function telegramConfigured(): boolean {
  return /^\d{5,20}:[A-Za-z0-9_-]{20,100}$/.test(botToken);
}

export async function pairTelegram(): Promise<boolean> {
  if(!telegramConfigured()||await rpc('site_feedback_telegram_pairing_pending',{})!==true)return false;
  const response=await fetch('https://api.telegram.org/bot'+botToken+'/getUpdates',{
    method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({limit:100,timeout:0,allowed_updates:['message']}),signal:AbortSignal.timeout(6000)
  });
  if(!response.ok)return false;
  const result=await response.json();
  if(result?.ok!==true||!Array.isArray(result.result))return false;
  for(const update of result.result){
    const message=update?.message;
    const match=typeof message?.text==='string'?/^\/start cb_([0-9a-f]{40})$/.exec(message.text):null;
    if(!match||message?.chat?.type!=='private'||!Number.isSafeInteger(message?.chat?.id)||message.chat.id<=0)continue;
    const paired=await rpc('complete_site_feedback_telegram_pairing',{p_code:match[1],p_chat_id:String(message.chat.id)});
    if(paired===true){
      // Only a successfully bound chat receives a confirmation; no unsolicited replies.
      try{await fetch('https://api.telegram.org/bot'+botToken+'/sendMessage',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({chat_id:String(message.chat.id),text:'CodeBloom: уведомления об отзывах подключены. Новые отзывы будут приходить сюда.',protect_content:true}),
        signal:AbortSignal.timeout(6000)
      });}catch{/* The binding remains valid even if this confirmation is delayed. */}
      return true;
    }
  }
  return false;
}

async function rpc(name: string,body: unknown): Promise<unknown> {
  const response=await fetch(projectURL+'/rest/v1/rpc/'+name,{
    method:'POST',headers:{apikey:serviceKey,Authorization:'Bearer '+serviceKey,'Content-Type':'application/json'},
    body:JSON.stringify(body),signal:AbortSignal.timeout(8000)
  });
  if(!response.ok)throw new Error('database');
  return await response.json();
}

export async function authorizedDispatcher(key: string): Promise<boolean> {
  if(!/^[0-9a-f]{64}$/.test(key)||!projectURL||!serviceKey)return false;
  try{return await rpc('authorize_site_feedback_dispatch',{p_key:key})===true;}catch{return false;}
}

type Claim = {feedback_id:string;category:string;created_at:string;lease_id:string};
export async function dispatchTelegram(id: string|null = null): Promise<{configured:boolean;sent:number;failed:number}> {
  if(!telegramConfigured())return {configured:false,sent:0,failed:0};
  const chatID=await rpc('get_site_feedback_telegram_chat',{});
  if(typeof chatID!=='string'||!/^[1-9]\d{0,19}$/.test(chatID))return {configured:false,sent:0,failed:0};
  const rows=await rpc('claim_site_feedback_telegram',{p_id:id}) as Claim[];
  let sent=0,failed=0;
  for(const row of rows){
    let messageID: number|null=null,error='network',retrySeconds: number|null=null;
    try{
      // One bounded plain-text notification. Never interpolate visitor text or links.
      const response=await fetch('https://api.telegram.org/bot'+botToken+'/sendMessage',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({chat_id:chatID,text:'Новый отзыв CodeBloom\n\nКатегория: '+(categories[row.category]||'Другое')+'\nОтзыв: '+row.feedback_id,
          link_preview_options:{is_disabled:true},protect_content:true,
          reply_markup:{inline_keyboard:[[{text:'Открыть отзывы',url:inboxURL}]]}}),
        signal:AbortSignal.timeout(6000)
      });
      const result=await response.json();
      if(response.ok&&result?.ok===true&&Number.isSafeInteger(result?.result?.message_id)&&result.result.message_id>0){
        messageID=result.result.message_id;
      }else{
        const code=Number(result?.error_code||response.status);
        error=[400,401,403,429].includes(code)?'telegram_'+code:code>=500?'telegram_5xx':'telegram_invalid';
        if(code===429&&Number.isInteger(result?.parameters?.retry_after))retrySeconds=Math.max(60,Math.min(86400,result.parameters.retry_after));
      }
    }catch{/* Do not log fetch errors: their URL can contain the bot token. */}
    // A response loss after Telegram accepted a message can lead to a later duplicate.
    const acknowledged=await rpc('finish_site_feedback_telegram',{
      p_id:row.feedback_id,p_lease:row.lease_id,p_sent:messageID!==null,
      p_message_id:messageID,p_error:messageID===null?error:null,p_retry_seconds:retrySeconds
    });
    if(messageID!==null&&acknowledged===true)sent++;else failed++;
  }
  return {configured:true,sent,failed};
}

export function scheduleTelegram(id: string): void {
  if(!telegramConfigured())return;
  const task=dispatchTelegram(id).catch(()=>{console.warn('Feedback notification deferred to retry queue.');});
  try{EdgeRuntime.waitUntil(task);}catch{/* The durable queue remains for the scheduler. */}
}

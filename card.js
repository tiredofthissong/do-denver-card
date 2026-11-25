// Do Denver card. Rendering code only: each run's data is passed in by the page as window.DD.
// Loaded by commit hash and integrity hash, so a push here changes nothing until the loader's pin is updated.
(function boot(n){
const root=document.getElementById("dd"),D=window.DD;
if(!root||!D){if(n<100)setTimeout(boot,50,n+1);return;}
window.DD_READY=1;root.className="dd";
const css=document.createElement("style");css.textContent=String.raw`/* Tokens from claude-personal/design/tokens/tokens.css v0.1, only the ones used, scoped to .dd so they can't touch the host page.
   Accent hue 235 (dusk blue): clear of the green, amber and red used for status. System type: loads inside the widget. */
.dd{color-scheme:light;--accent-h:235;
--font-body:ui-sans-serif,-apple-system,"Segoe UI",system-ui,sans-serif;
--text-xs:.75rem;--text-sm:.875rem;--text-base:1rem;--text-lg:1.25rem;--text-xl:1.5625rem;--leading-tight:1.15;--leading-normal:1.5;--measure:68ch;--weight-regular:400;--weight-medium:500;--weight-semibold:600;
--space-1:.25rem;--space-2:.5rem;--space-3:.75rem;--space-4:1rem;--space-5:1.5rem;--space-8:4rem;--radius-sm:6px;--radius-md:10px;--radius-pill:999px;--hit-min:44px;
--color-surface:oklch(.995 .002 250);--color-surface-2:oklch(.945 .006 250);--color-fg:oklch(.24 .012 250);--color-muted:oklch(.47 .012 250);--color-border:oklch(.885 .006 250);--color-border-strong:oklch(.56 .01 250);
--color-accent:oklch(.47 .08 var(--accent-h));--color-accent-hover:oklch(.42 .07 var(--accent-h));--color-accent-fg:oklch(.99 0 0);--color-accent-soft:oklch(.94 .03 var(--accent-h));
--color-success:oklch(.47 .11 150);--color-warning:oklch(.5 .11 65);--color-danger:oklch(.5 .17 27);
--duration-instant:100ms;--duration-fast:150ms;--ease-out:cubic-bezier(.2,0,0,1);--press-scale:.97}
.dd[data-theme=dark]{color-scheme:dark;
--color-surface:oklch(.215 .009 250);--color-surface-2:oklch(.25 .01 250);--color-fg:oklch(.94 .006 250);--color-muted:oklch(.72 .01 250);--color-border:oklch(.32 .01 250);--color-border-strong:oklch(.55 .012 250);
--color-accent:oklch(.76 .09 var(--accent-h));--color-accent-hover:oklch(.82 .08 var(--accent-h));--color-accent-fg:oklch(.18 .02 var(--accent-h));--color-accent-soft:oklch(.3 .04 var(--accent-h));
--color-success:oklch(.76 .12 150);--color-warning:oklch(.82 .12 75);--color-danger:oklch(.72 .14 27)}
.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}
.dd,.dd *{box-sizing:border-box}
.dd{font:var(--weight-regular) var(--text-base)/var(--leading-normal) var(--font-body);color:var(--color-fg);max-width:var(--measure);padding-block:var(--space-1) var(--space-4)}
.dd-card{background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md);overflow:hidden}
.dd-sec{padding:var(--space-4);border-top:1px solid var(--color-border)}
.dd-sec:first-child{border-top:0}
.dd h3,.dd h4,.dd p,.dd ul{margin:0;padding:0;font:inherit;color:inherit;list-style:none}
.dd p{max-width:var(--measure);text-wrap:pretty}
.dd .dd-scope{font-size:var(--text-lg);font-weight:var(--weight-semibold);line-height:var(--leading-tight)}
.dd .dd-title{font-size:var(--text-xl);font-weight:var(--weight-semibold);line-height:var(--leading-tight);text-wrap:balance}
.dd .dd-lab{font-weight:var(--weight-semibold)}
.dd-stack{display:grid;gap:var(--space-3)}
.dd-tight{display:grid;gap:var(--space-1)}
.dd-line{display:flex;flex-wrap:wrap;gap:var(--space-1) var(--space-3);align-items:center}
.dd-btns{display:flex;flex-wrap:wrap;gap:var(--space-2)}
.dd .dd-sm{font-size:var(--text-sm);color:var(--color-muted)}
.dd-it{display:inline-flex;align-items:baseline;gap:var(--space-1)}
.dd .ti{font-size:1.15em;flex:none}
.dd-ok{color:var(--color-success)}.dd-warn{color:var(--color-warning)}.dd-bad{color:var(--color-danger)}
.dd-num{font-variant-numeric:tabular-nums}
.dd-tag{background:var(--color-accent);color:var(--color-accent-fg);font-size:var(--text-sm);font-weight:var(--weight-semibold);padding:0 var(--space-2);border-radius:var(--radius-sm)}
.dd a{color:var(--color-accent);text-decoration:underline;text-underline-offset:.15em;text-decoration-thickness:1px}
.dd .dd-title a{color:inherit;text-decoration-color:var(--color-border-strong)}
.dd button{font:var(--weight-medium) var(--text-sm)/var(--leading-tight) var(--font-body);display:inline-flex;align-items:center;justify-content:center;gap:var(--space-1);height:auto;min-height:var(--hit-min);margin:0;padding:var(--space-2) var(--space-3);position:relative;background:var(--color-surface);color:var(--color-fg);border:1px solid var(--color-border-strong);border-radius:var(--radius-sm);box-shadow:none;cursor:pointer;touch-action:manipulation}
.dd button[aria-pressed=true]{background:var(--color-accent-soft);border-color:var(--color-accent);font-weight:var(--weight-semibold)}
.dd button.dd-chk{padding-inline:var(--space-4)}
.dd button.dd-chk[aria-pressed=true]::before{content:"\2713";position:absolute;left:var(--space-1);font-size:var(--text-xs);color:var(--color-accent)}
.dd button.dd-main{background:var(--color-accent);border-color:var(--color-accent);color:var(--color-accent-fg);flex:1 1 11rem}
.dd button.dd-quiet{background:none;border-color:transparent;color:var(--color-accent);padding-inline:0;justify-self:start}
.dd button.dd-pend{width:100%;justify-content:flex-start;background:none;border-color:transparent;padding-inline:0;color:var(--color-muted);font-weight:var(--weight-regular)}
.dd button.dd-pend:disabled{cursor:default;opacity:1}
.dd button.dd-pend:not(:disabled){background:var(--color-accent-soft);border-color:var(--color-accent);color:var(--color-fg);font-weight:var(--weight-semibold);padding-inline:var(--space-3)}
.dd input[type=text]{font:var(--weight-regular) var(--text-base)/var(--leading-normal) var(--font-body);width:100%;min-height:var(--hit-min);margin:0;padding:var(--space-2) var(--space-3);background:var(--color-surface);color:var(--color-fg);border:1px solid var(--color-border-strong);border-radius:var(--radius-sm);box-shadow:none}
.dd input::placeholder{color:var(--color-muted);opacity:1}
.dd input[type=checkbox]{accent-color:var(--color-accent);width:var(--space-5);height:var(--space-5);margin:0;flex:none}
.dd-chkrow{display:flex;gap:var(--space-3);align-items:center;min-height:var(--hit-min)}
.dd-chkrow:has(:checked) span{color:var(--color-muted);text-decoration:line-through}
.dd :is(a,button,input,summary):focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}
.dd summary:focus-visible{outline-offset:-2px}
.dd summary{list-style:none;cursor:pointer;padding:var(--space-3) var(--space-4);touch-action:manipulation}
.dd summary::-webkit-details-marker{display:none}
.dd details{border-top:1px solid var(--color-border)}
.dd-row{display:grid;grid-template-columns:var(--space-8) minmax(0,1fr) auto;column-gap:var(--space-3);align-items:start}
.dd-row .dd-track{grid-column:1/-1;margin-top:var(--space-2)}
.dd-meta{grid-column:2/-1;display:grid;gap:var(--space-1);margin-top:var(--space-1)}
.dd-when{grid-row:1/3}
.dd-sub{display:block}
.dd-name{font-weight:var(--weight-semibold);line-height:1.35}
.dd-end{display:inline-flex;gap:var(--space-2);align-items:center;white-space:nowrap}
.dd-body{padding:var(--space-1) var(--space-4) var(--space-4)}
.dd-rowbtn{display:flex;justify-content:space-between;align-items:center;min-height:var(--hit-min)}
.dd .dd-more summary{padding-block:0}
.dd-track{display:block;position:relative;height:var(--space-2);background:var(--color-surface-2);border-radius:var(--radius-pill);overflow:hidden}
.dd-track i{position:absolute;top:0;bottom:0}
.dd-bar{background:var(--color-border-strong);border-radius:var(--radius-pill)}
.dd-hot .dd-bar{background:var(--color-accent)}
.dd-now{width:2px;background:var(--color-fg)}
.dd-axis{position:relative;height:var(--space-4);font-size:var(--text-xs);line-height:var(--space-4);color:var(--color-muted)}
.dd-axis span{position:absolute;transform:translateX(-50%)}
.dd-axis .dd-l{transform:none}.dd-axis .dd-rt{transform:translateX(-100%)}
.dd-axis b{font-weight:var(--weight-semibold);color:var(--color-fg)}
.dd [hidden]{display:none!important}
@media (hover:hover){.dd button:hover:not(:disabled),.dd summary:hover{background:var(--color-surface-2)}.dd button[aria-pressed=true]:hover,.dd button.dd-pend:not(:disabled):hover{background:var(--color-accent-soft);border-color:var(--color-accent-hover)}.dd button.dd-main:hover{background:var(--color-accent-hover)}.dd button.dd-quiet:hover{background:none;color:var(--color-accent-hover);text-decoration:underline}.dd a:hover{text-decoration-thickness:2px}}
@media (prefers-reduced-motion:no-preference){.dd button{transition:transform var(--duration-instant) var(--ease-out)}.dd button:active:not(:disabled){transform:scale(var(--press-scale))}.dd .dd-chev{transition:transform var(--duration-fast) var(--ease-out)}}
.dd details[open]>summary .dd-chev{transform:rotate(180deg)}
`;document.head.appendChild(css);
const mq=matchMedia("(prefers-color-scheme: dark)");
// The host sets the theme, so read its surface color; fall back to the system preference.
const theme=()=>{let dk=mq.matches;try{const p=document.createElement("div");p.style.cssText="position:absolute;width:1px;height:1px;background:var(--surface-2)";document.body.appendChild(p);const c=getComputedStyle(p).backgroundColor;p.remove();const x=document.createElement("canvas").getContext("2d");x.fillStyle=c;x.fillRect(0,0,1,1);const d=x.getImageData(0,0,1,1).data;if(d[3]>=128)dk=d[0]*.299+d[1]*.587+d[2]*.114<128;}catch(_){}root.dataset.theme=dk?"dark":"light";};
theme();mq.addEventListener("change",theme);
const TI={top:["Top pick","ti-star"],strong:["Strong match","ti-circle-check"],decent:["Decent match","ti-circle-half-2"],wild:["Wildcard","ti-cards"]};
const ST={verified:["Verified today","ti-rosette-discount-check","dd-ok"],listed:["Listed, venue not confirmed","ti-list-search","dd-warn"],recurring:["Recurring pattern only","ti-repeat","dd-warn"],call:["Call to confirm","ti-phone","dd-bad"]};
const RE={yes:["Into it","ti-thumb-up"],no:["Not for me","ti-thumb-down"],going:["Going","ti-ticket"]};
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ico=n=>'<i class="ti '+n+'" aria-hidden="true"></i>';
const safe=u=>/^(https:|tel:)/.test(u||"")?u:"#";
const lnk=(u,t)=>'<a href="'+esc(safe(u))+'" target="_blank" rel="noopener">'+esc(t)+"</a>";
const it=(n,t,c)=>'<span class="dd-it '+(c||"")+'">'+ico(n)+"<span>"+esc(t)+"</span></span>";
const tgl=(attrs,t,n)=>'<button type="button" aria-pressed="false" class="'+(n?"":"dd-chk")+'" '+attrs+">"+(n?ico(n):"")+esc(t)+"</button>";
const F={r:{},why:{},last:"",card:new Set()};
const picks=D.picks||[],W0=D.window[0],span=D.window[1]-W0,pct=h=>Math.max(0,Math.min(100,(h-W0)/span*100));
const hl=h=>{const x=((h%24)+24)%24,q=x%12===0?12:x%12;return q+(x<12?"a":"p");};
const hasNow=D.now!=null&&D.now>=W0&&D.now<=D.window[1];
const day=p=>{const m=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\b/.exec(p.short||"");return m?m[0]:"";};
const track=p=>'<span class="dd-track" aria-hidden="true">'+(p.segs||[]).map(s=>'<i class="dd-bar" style="left:'+pct(s[0]).toFixed(1)+"%;width:"+Math.max(2,pct(s[1])-pct(s[0])).toFixed(1)+'%"></i>').join("")+(hasNow?'<i class="dd-now" style="left:'+pct(D.now).toFixed(1)+'%"></i>':"")+"</span>";
const axis=()=>{const st=[2,3,4,6,12,24].find(s=>span/s<=6)||24;let o="";for(let x=Math.ceil(W0);x<=D.window[1];x+=st){const a=pct(x);if(hasNow&&Math.abs(a-pct(D.now))<9)continue;o+='<span class="'+(a<4?"dd-l":a>96?"dd-rt":"")+'" style="left:'+a.toFixed(1)+'%">'+hl(x)+"</span>";}
if(hasNow){const a=pct(D.now);o+='<span class="'+(a<4?"dd-l":a>96?"dd-rt":"")+'" style="left:'+a.toFixed(1)+'%"><b>now</b></span>';}return '<div class="dd-axis dd-num" aria-hidden="true">'+o+"</div>";};
const acts=(p,i)=>'<div class="dd-btns" role="group" aria-label="React to '+esc(p.title)+'">'+Object.keys(RE).map(v=>tgl('data-p="'+i+'" data-v="'+v+'"',RE[v][0],RE[v][1])).join("")+'</div><div class="dd-btns" id="dd-why'+i+'" role="group" aria-label="Why not?" hidden>'+["Price","Distance","Vibe","Timing","Been there"].map(w=>tgl('data-w="'+i+'" data-k="'+w+'"',w)).join("")+'</div><button type="button" class="dd-quiet" data-deep="'+i+'">Dig deeper ↗</button>';
const why=p=>"<p>"+esc(p.why)+"</p>"+(p.note?'<p class="dd-sm">'+esc(p.note)+"</p>":"");
const where=p=>lnk(p.maps,p.venue)+" · "+esc(p.area);
const trip=p=>it("ti-map-pin",[p.mi].concat(p.go||[]).join(" · "));
let ti=picks.findIndex(p=>p.tier==="top");if(ti<0&&picks.length)ti=0;
let h='<div class="dd-card"><header class="dd-sec dd-tight"><div class="dd-line"><h3 class="dd-scope dd-it">'+ico("ti-mountain")+esc(D.scope)+'</h3><span class="dd-sm">'+esc(D.dateLabel)+'</span></div><div class="dd-line dd-sm">'+it("ti-cloud",D.weather)+(D.heads||[]).map(x=>it("ti-alert-triangle",x,"dd-warn")).join("")+it("ti-clock","Checked "+D.checked)+'</div><button type="button" id="dd-pend" class="dd-pend" disabled></button></header>';
if(ti<0)h+='<div class="dd-sec"><p>No picks held up to checking. Try another night or a wider filter.</p></div>';
else{const p=picks[ti],s=ST[p.status]||ST.listed,t=TI[p.tier]||TI.decent;
h+='<section class="dd-sec dd-stack dd-hot"><div class="dd-line"><span class="dd-it dd-tag">'+ico(t[1])+t[0]+'</span><span class="dd-sm">'+it(s[1],s[0],s[2])+'</span></div><div class="dd-tight"><h4 class="dd-title">'+lnk(p.url,p.title)+"</h4><div>"+where(p)+'</div></div><div class="dd-tight dd-num">'+it("ti-clock",(day(p)?day(p)+" · ":"")+p.timeLabel)+trip(p)+it("ti-ticket",p.price)+"</div>"+why(p)+acts(p,ti)+'<div class="dd-tight">'+track(p)+axis()+"</div></section>";}
picks.forEach((p,i)=>{if(i===ti)return;const s=ST[p.status]||ST.listed,t=TI[p.tier]||TI.decent;
h+='<details class="'+(p.tier==="strong"?"dd-hot":"")+'"><summary class="dd-row"><span class="dd-num dd-when"><span class="dd-sm">'+(day(p)?day(p)+"<br>":"")+'</span><span class="dd-name">'+esc(p.big)+'</span><span class="dd-sm dd-sub">'+esc(p.small||"")+'</span></span><span class="dd-name">'+esc(p.title)+'</span><span class="dd-end dd-num">'+esc(p.mi)+'<i class="ti ti-chevron-down dd-chev" aria-hidden="true"></i></span><span class="dd-meta"><span class="dd-sm">'+esc(p.venue)+'</span><span class="dd-line dd-sm">'+it(t[1],t[0])+it(s[1],s[0],s[2])+'</span><span class="dd-sm">'+it("ti-ticket",p.price)+'</span><span class="dd-sm" id="dd-re'+i+'" hidden></span></span>'+track(p)+'</summary><div class="dd-body dd-stack"><div class="dd-tight"><div>'+where(p)+'</div><div class="dd-num">'+it("ti-clock",p.timeLabel)+'</div><div class="dd-num">'+trip(p)+"</div></div>"+why(p)+"<div>"+lnk(p.url,"Event page")+"</div>"+acts(p,i)+"</div></details>";});
if(D.last)h+='<section class="dd-sec dd-stack"><div class="dd-tight"><h4 class="dd-lab">'+esc(D.last.q)+'</h4><div class="dd-sm">Last time · '+esc(D.last.label)+'</div></div><div class="dd-btns">'+["Loved it","It was fine","Meh","Didn't go"].map(o=>tgl('data-last="'+esc(o)+'"',o)).join("")+"</div></section>";
const more=(n,c,label,body)=>'<details><summary><span class="dd-rowbtn"><span class="dd-it '+(c||"")+'">'+ico(n)+esc(label)+'</span><i class="ti ti-chevron-down dd-chev" aria-hidden="true"></i></span></summary><div class="dd-body">'+body+"</div></details>";
h+='<div class="dd-more">';
if(D.unverified&&D.unverified.length)h+=more("ti-alert-circle","dd-warn","Couldn't verify ("+D.unverified.length+")",'<ul class="dd-stack">'+D.unverified.map(u=>"<li>"+esc(u)+"</li>").join("")+"</ul>");
if(D.actions&&D.actions.length)h+=more("ti-checklist","","Before you go ("+D.actions.length+")",D.actions.map(a=>'<label class="dd-chkrow"><input type="checkbox"><span>'+(a.url?lnk(a.url,a.text):esc(a.text))+"</span></label>").join(""));
h+=more("ti-user-heart","","Tuned to you ("+(D.profile||[]).length+")",'<div class="dd-stack"><ul class="dd-tight">'+(D.profile||[]).map(x=>"<li>"+esc(x)+"</li>").join("")+'</ul><div><button type="button" data-prof="1">Edit ↗</button></div></div>');
h+=more("ti-link","","Sources ("+(D.sources||[]).length+")",'<ul class="dd-tight">'+(D.sources||[]).map(s=>"<li>"+lnk(s.url,s.title)+"</li>").join("")+'</ul><div class="dd-sm">Run '+esc(D.run)+"</div>");
h+='</div><section class="dd-sec dd-stack" id="dd-fb"><h4 class="dd-lab">How was this card?</h4><div class="dd-btns">'+["Just right","Too long","More picks","More wildcards"].map(c=>tgl('data-card="'+c+'"',c)).join("")+'</div><div class="dd-tight"><label for="dd-note">Add a note</label><input id="dd-note" type="text" placeholder="Too loud to talk"></div><div class="dd-btns"><button type="button" id="dd-send" class="dd-main"></button><button type="button" id="dd-copy">'+ico("ti-copy")+'Copy for text</button></div><div><div id="dd-err" class="dd-bad" role="alert"></div><div id="dd-ok" class="dd-ok" role="status"></div></div></section></div>';
root.innerHTML=h;
const $=id=>document.getElementById(id),all=q=>root.querySelectorAll(q);
const tog=(el,on)=>{el.setAttribute("aria-pressed",on);const v=el.dataset.v,ic=v&&el.querySelector(".ti");if(ic)ic.className="ti "+(on?"ti-check":RE[v][1]);};
const go=el=>el.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
const count=()=>Object.values(F.r).filter(Boolean).length+(F.last?1:0)+F.card.size+($("dd-note").value.trim()?1:0);
const say=(ok,err)=>{$("dd-ok").textContent=ok||"";$("dd-err").textContent=err||"";};
// Paint every pressed state from F, so a collapsed row still shows its reaction.
function paint(){all("[data-p]").forEach(x=>tog(x,F.r[x.dataset.p]===x.dataset.v));all("[data-w]").forEach(x=>tog(x,!!(F.why[x.dataset.w]&&F.why[x.dataset.w].has(x.dataset.k))));all("[data-last]").forEach(x=>tog(x,x.dataset.last===F.last));all("[data-card]").forEach(x=>tog(x,F.card.has(x.dataset.card)));
picks.forEach((p,i)=>{$("dd-why"+i).hidden=F.r[i]!=="no";const b=$("dd-re"+i);if(b){b.hidden=!F.r[i];b.innerHTML=F.r[i]?it("ti-check","You: "+RE[F.r[i]][0]):"";}});upd();}
function upd(){const n=count(),p=$("dd-pend");p.disabled=!n;p.innerHTML=n?ico("ti-send")+n+(n===1?" tap":" taps")+" not sent yet · go to Send":"Taps stay on this card until you press Send.";$("dd-send").innerHTML=ico("ti-send")+(n?"Send "+n+" to Claude ↗":"Send feedback ↗");}
paint();$("dd-note").addEventListener("input",()=>{say();upd();});
root.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;say();const d=b.dataset;
if(b.id==="dd-pend")return go($("dd-fb"));
if(d.last)F.last=F.last===d.last?"":d.last;
else if(d.p!=null)F.r[d.p]=F.r[d.p]===d.v?"":d.v;
else if(d.w!=null){const s=F.why[d.w]=F.why[d.w]||new Set();s.has(d.k)?s.delete(d.k):s.add(d.k);}
else if(d.card)F.card.has(d.card)?F.card.delete(d.card):F.card.add(d.card);
else if(d.deep!=null){const p=picks[+d.deep];return send(p.deeper||("do denver deeper: "+p.title+" at "+p.venue));}
else if(d.prof)return send("do denver profile: show what you know about me and let me correct it");
else if(b.id==="dd-send"){const note=$("dd-note").value.trim(),parts=[];const by=v=>picks.map((p,i)=>F.r[i]===v?p.id+(v==="no"&&F.why[i]&&F.why[i].size?"["+[...F.why[i]].join(",").toLowerCase()+"]":""):null).filter(Boolean);
const g=by("going"),y=by("yes"),n=by("no");if(!count())return say("","Tap a reaction or add a note first.");
parts.push("do denver feedback","run "+D.run);if(g.length)parts.push("going: "+g.join(", "));if(y.length)parts.push("yes: "+y.join(", "));if(n.length)parts.push("no: "+n.join(", "));if(F.last)parts.push("last ("+D.last.id+"): "+F.last.toLowerCase());if(F.card.size)parts.push("card: "+[...F.card].join(", ").toLowerCase());if(note)parts.push("note: "+note);
if(!send(parts.join(" | ")))return;F.r={};F.why={};F.last="";F.card.clear();$("dd-note").value="";say("Sent. Claude files it to your hub.");}
else if(b.id==="dd-copy"){const t=["Do Denver · "+D.scope+" · "+D.dateLabel].concat(picks.map(p=>"• "+p.timeLabel+" — "+p.title+" @ "+p.venue+" ("+p.mi+") "+p.url)).join("\n"),ok=()=>say("Copied. Paste it in Messages.");try{navigator.clipboard.writeText(t).then(ok,()=>fb(t,ok));}catch(_){fb(t,ok);}return;}
paint();});
function send(t){try{(window.DD_SEND||sendPrompt)(t);return true;}catch(_){say("","Couldn't reach Claude. Your taps are still here; try Send again.");return false;}}
function fb(t,ok){const a=document.createElement("textarea");a.value=t;a.style.position="absolute";a.style.left="-9999px";document.body.appendChild(a);a.select();let k=false;try{k=document.execCommand("copy");}catch(_){}a.remove();k?ok():say("","Couldn't copy. Select the picks and copy them by hand.");}
})(0);

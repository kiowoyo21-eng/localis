const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

const exerciseMeta = {
"Wall Push-up":{
  mistakes:["Hips sagging or piking","Elbows flaring straight sideways","Rushing the lowering phase"],
  regression:"Stand closer to the wall",
  progression:"Higher incline push-up",
  visual:"push"
},
"Chair Sit-to-Stand":{
  mistakes:["Dropping onto the chair","Knees collapsing inward","Using momentum to stand"],
  regression:"Use a higher chair + hand support",
  progression:"Lower chair / supported squat",
  visual:"squat"
},
"Band Row":{
  mistakes:["Shrugging shoulders","Jerking the band","Leaning back to cheat the rep"],
  regression:"Use a lighter band / shorter range",
  progression:"Stronger band / slower tempo",
  visual:"row"
},
"Elevated Plank":{
  mistakes:["Lower back sagging","Hips too high","Holding breath"],
  regression:"Use a higher surface",
  progression:"Lower surface / floor plank",
  visual:"plank"
},
"Incline/Wall Push-up":{
  mistakes:["Body losing a straight line","Surface too low for current strength","Elbows flaring"],
  regression:"Raise the surface",
  progression:"Lower the surface",
  visual:"push"
},
"Supported Squat":{
  mistakes:["Pulling too hard with the hands","Heels lifting","Knees collapsing inward"],
  regression:"Higher seat / shallower depth",
  progression:"Less hand support / deeper squat",
  visual:"squat"
},
"Dead Bug Regression":{
  mistakes:["Lower back arching","Moving too fast","Holding breath"],
  regression:"Move one limb only",
  progression:"Opposite arm + leg together",
  visual:"deadbug"
},
"Feet-Assisted Dip Support":{
  mistakes:["Shoulders shrugged to ears","Feet doing all the work","Elbows bending unintentionally"],
  regression:"More foot support",
  progression:"Lighter foot support / full support hold",
  visual:"support"
},
"Supported Single-Leg Stand":{
  mistakes:["Gripping the floor too hard","Leaning heavily into support","Knee locked rigid"],
  regression:"Use more fingertip support",
  progression:"Less support / eyes forward",
  visual:"balance"
},
"Seated Tuck Compression":{
  mistakes:["Leaning far backward","Swinging the legs","Forcing painful hip range"],
  regression:"Lift one heel at a time",
  progression:"Both heels higher / longer hold",
  visual:"compression"
},
"Dip-Bar Assisted Support":{
  mistakes:["Shoulders shrugged","Feet carrying nearly all load","Unstable wrists"],
  regression:"More foot assistance",
  progression:"Reduce assistance",
  visual:"support"
},
"Frog Stand Lean Prep":{
  mistakes:["Leaning too far too soon","Collapsed fingers/wrists","Trying to balance before control"],
  regression:"Smaller lean",
  progression:"Frog stand with one/both feet briefly light",
  visual:"frog"
},
"Calf Raise Supported":{
  mistakes:["Bouncing","Ankles rolling outward","Dropping quickly"],
  regression:"Smaller range",
  progression:"Single-leg assisted calf raise",
  visual:"calf"
},
"Wrist Controlled Rocks":{
  mistakes:["Sharp wrist pressure","Going too deep","Fast bouncing"],
  regression:"Use a wall or higher surface",
  progression:"Hands-and-knees wrist rocks",
  visual:"wrist"
},
"Band Shoulder Rotation":{
  mistakes:["Using too much resistance","Elbow drifting","Forcing end range"],
  regression:"Lighter band / no band",
  progression:"More control through comfortable range",
  visual:"shoulder"
},
"Cat-Cow":{
  mistakes:["Forcing the neck","Moving too quickly","Holding breath"],
  regression:"Smaller spinal range",
  progression:"Slower segment-by-segment control",
  visual:"catcow"
},
"90/90 Hip Switch":{
  mistakes:["Forcing knees down","Twisting aggressively","Moving through pain"],
  regression:"Use hands behind you",
  progression:"Less hand support",
  visual:"hips"
},
"Supported Deep Squat Hold":{
  mistakes:["Forcing depth","Heels lifting without support","Knee pain ignored"],
  regression:"Higher support / shallower hold",
  progression:"Less support / longer relaxed hold",
  visual:"squat"
},
"Hamstring/Pike Stretch":{
  mistakes:["Bouncing","Rounding aggressively","Chasing pain instead of stretch"],
  regression:"Bend knees more",
  progression:"Straighter knees with same comfort",
  visual:"pike"
},
"Ankle Knee-to-Wall":{
  mistakes:["Heel lifting","Knee collapsing inward","Forcing range"],
  regression:"Move foot closer",
  progression:"Move foot farther while heel stays down",
  visual:"ankle"
}
};

const sessions=[
{type:"BUILD",name:"Build A",desc:"Foundation strength • Push, pull, legs & core",warm:["Wrist circles — 20 sec","Arm swings + shoulder rolls — 30 sec","Easy sit-to-stand — 8 reps","Very easy wall push-up — 6 reps"],work:[
["Wall Push-up","2 × 6–10","reps","Stand facing a wall, hands around chest height. Bend elbows and bring chest toward wall, then press away.","Body straight|Elbows roughly 30–45°|Control both directions"],
["Chair Sit-to-Stand","2 × 8–10","reps","Sit to a stable chair under control, then stand tall without throwing your torso forward.","Knees track with toes|Whole foot planted|Stand tall"],
["Band Row","2 × 8–12","reps","Anchor the band safely around a stable point, pull handles toward your ribs, then return slowly.","Shoulders away from ears|Squeeze shoulder blades|Don't jerk"],
["Elevated Plank","2 × 15–20","sec","Place forearms or hands on a stable elevated surface and hold a straight body line.","Brace abs|Squeeze glutes|Don't sag"]],cool:["Easy chest opening — 30 sec","Slow breathing — 30 sec"]},
{type:"LIGHT",name:"Light A",desc:"Technique • Balance • joint control",warm:["Wrist prep — 30 sec","Shoulder circles — 30 sec","Hip circles — 30 sec"],work:[
["Feet-Assisted Dip Support","3 × 10","sec","Stand between dip bars. Press down with straight arms while feet remain on the floor and assist as much as needed.","Shoulders down|Arms straight but comfortable|Feet control difficulty"],
["Supported Single-Leg Stand","2 × 20","sec","Stand beside a stable support and balance on one leg, using fingertips if needed.","Tall posture|Soft knee|Steady breathing"],
["Seated Tuck Compression","2 × 6–8","reps","Sit with legs in front, hands beside thighs, brace and try to lift one or both heels slightly.","Stay tall|Move from hips/core|No painful forcing"]],cool:["Wrist shakeout — 20 sec","Easy forward fold — 30 sec"]},
{type:"BUILD",name:"Build B",desc:"Foundation strength • Alternate practice",warm:["March in place — 30 sec","Wrist + elbow circles — 30 sec","Shoulder blade squeezes — 30 sec"],work:[
["Incline/Wall Push-up","2 × 6–10","reps","Use the easiest safe incline that lets you keep clean form. Higher surface = easier.","Straight body line|Controlled chest descent|Keep reserve"],
["Supported Squat","2 × 8–12","reps","Hold a stable support lightly, sit hips down between your legs, then stand.","Comfortable depth|Knees follow toes|Don't collapse inward"],
["Band Row","2 × 8–12","reps","Pull a safely anchored band toward the lower ribs and return under control.","Chest proud|No shrugging|Slow return"],
["Dead Bug Regression","2 × 5/side","reps","Lie on your back, brace gently, then move one limb at a time without letting your lower back arch excessively.","Slow movement|Breathe|Stop before control is lost"]],cool:["Child's pose or easy back stretch — 30 sec","Slow breathing — 30 sec"]},
{type:"LIGHT",name:"Light B",desc:"Skill foundations • easy quality work",warm:["Wrist rocks — 30 sec","Scapular movement — 30 sec","Ankle circles — 30 sec"],work:[
["Dip-Bar Assisted Support","3 × 10–15","sec","Use your feet to unload your body while pressing firmly into the bars.","No shoulder shrug|Stable elbows|Easy effort"],
["Frog Stand Lean Prep","3 × 10","sec","Hands on floor, knees remain supported by feet; gently shift weight toward hands without committing to a balance.","Spread fingers|Small lean only|Stop for wrist pain"],
["Calf Raise Supported","2 × 12–15","reps","Hold support and rise onto the balls of your feet, pause, then lower slowly.","Even pressure|No bouncing|Full comfortable range"]],cool:["Forearm stretch — 30 sec","Calf stretch — 30 sec"]},
{type:"REHAB",name:"Full-Body Rehab",desc:"Prehab • mobility • flexibility • recovery",warm:["Easy march + breathing — 45 sec","Gentle whole-body joint circles — 45 sec"],work:[
["Wrist Controlled Rocks","1 × 8","reps","Hands on a stable surface, gently shift weight forward and back through a pain-free range.","Gentle pressure|No sharp pain|Slow"],
["Band Shoulder Rotation","1 × 10","reps","Use a very light band and rotate through a comfortable shoulder range.","Light resistance|Elbow controlled|No forcing"],
["Cat-Cow","1 × 8","reps","On hands and knees, slowly alternate comfortable spinal rounding and extension.","Move segmentally|Breathe|Pain-free range"],
["90/90 Hip Switch","1 × 6","reps","Sit with knees bent and gently rotate both legs side to side within your available range.","Stay controlled|Don't force knees|Use hands if needed"],
["Supported Deep Squat Hold","2 × 20","sec","Hold a stable support and sink only as deep as comfortable.","Heels supported if needed|Relax gradually|No joint pain"],
["Hamstring/Pike Stretch","2 × 20","sec","Hinge forward gently with a long spine until a mild stretch is felt.","No bouncing|Mild stretch only|Breathe"],
["Ankle Knee-to-Wall","1 × 8/side","reps","Drive knee gently forward over toes while keeping heel down.","Heel stays down|Knee follows toes|Comfortable range"]],cool:["Relaxed full-body breathing — 60 sec"]}] ;

const defaultState={profile:{height:"",weight:""},sessionIndex:0,history:[],exercise:{},skills:{push:"training",pull:"training",support:"training",core:"training",squat:"training",lSit:"locked",handstand:"locked",dip:"locked"}};
let state=JSON.parse(localStorage.getItem("localisthenics")||"null")||defaultState;
const save=()=>localStorage.setItem("localisthenics",JSON.stringify(state));

function parseTarget(t){
  const m=t.match(/^(\d+)\s*×\s*([0-9]+)(?:[–-]([0-9]+))?(?:\/side)?$/);
  if(!m) return {sets:1,min:1,max:99};
  return {sets:+m[1],min:+m[2],max:+(m[3]||m[2])};
}
function stickFigure(type){
 const base=`<svg viewBox="0 0 520 210" role="img" aria-label="Movement illustration"><defs><filter id="g"><feGaussianBlur stdDeviation="5"/></filter></defs>
 <line x1="40" y1="180" x2="480" y2="180" stroke="#6f5b83" stroke-width="4" stroke-linecap="round"/>`;
 const person=(x,y,pose="stand")=>{
   if(pose==="push") return `<circle cx="${x}" cy="${y-55}" r="14"/><line x1="${x-2}" y1="${y-40}" x2="${x+35}" y2="${y-5}"/><line x1="${x+35}" y1="${y-5}" x2="${x+70}" y2="${y+35}"/><line x1="${x+15}" y1="${y-25}" x2="${x+65}" y2="${y-25}"/><line x1="${x+70}" y1="${y+35}" x2="${x+98}" y2="${y+70}"/>`;
   if(pose==="squat") return `<circle cx="${x}" cy="${y-60}" r="14"/><line x1="${x}" y1="${y-45}" x2="${x}" y2="${y}"/><line x1="${x}" y1="${y-22}" x2="${x-34}" y2="${y-2}"/><line x1="${x}" y1="${y}" x2="${x-30}" y2="${y+35}"/><line x1="${x-30}" y1="${y+35}" x2="${x+5}" y2="${y+68}"/><line x1="${x}" y1="${y}" x2="${x+32}" y2="${y+35}"/><line x1="${x+32}" y1="${y+35}" x2="${x+68}" y2="${y+68}"/>`;
   if(pose==="row") return `<circle cx="${x}" cy="${y-60}" r="14"/><line x1="${x}" y1="${y-45}" x2="${x}" y2="${y+20}"/><line x1="${x}" y1="${y-15}" x2="${x-38}" y2="${y}"/><line x1="${x}" y1="${y-15}" x2="${x+38}" y2="${y}"/><line x1="${x}" y1="${y+20}" x2="${x-24}" y2="${y+68}"/><line x1="${x}" y1="${y+20}" x2="${x+24}" y2="${y+68}"/><line x1="${x-38}" y1="${y}" x2="${x-88}" y2="${y}" stroke-dasharray="7 6"/>`;
   return `<circle cx="${x}" cy="${y-60}" r="14"/><line x1="${x}" y1="${y-45}" x2="${x}" y2="${y+20}"/><line x1="${x}" y1="${y-20}" x2="${x-35}" y2="${y+5}"/><line x1="${x}" y1="${y-20}" x2="${x+35}" y2="${y+5}"/><line x1="${x}" y1="${y+20}" x2="${x-22}" y2="${y+68}"/><line x1="${x}" y1="${y+20}" x2="${x+22}" y2="${y+68}"/>`;
 };
 let content="";
 if(type==="push") content=`<line x1="420" y1="28" x2="420" y2="180" stroke="#76559b" stroke-width="8"/>${person(165,95,"push")}${person(305,95,"push")}<path d="M230 60 L260 60" marker-end="url(#a)"/>`;
 else if(type==="squat") content=`${person(155,85)}${person(335,110,"squat")}`;
 else if(type==="row") content=`${person(180,85,"row")}${person(350,85,"row")}`;
 else if(type==="plank") content=`<circle cx="145" cy="92" r="14"/><line x1="160" y1="102" x2="330" y2="135"/><line x1="330" y1="135" x2="395" y2="176"/><line x1="190" y1="108" x2="160" y2="176"/>`;
 else if(type==="support") content=`<line x1="140" y1="70" x2="140" y2="180" stroke="#6b4c8d" stroke-width="7"/><line x1="380" y1="70" x2="380" y2="180" stroke="#6b4c8d" stroke-width="7"/>${person(260,82)}`;
 else if(type==="balance") content=`${person(260,85)}<line x1="260" y1="105" x2="305" y2="145"/>`;
 else if(type==="compression") content=`<circle cx="230" cy="70" r="14"/><line x1="230" y1="84" x2="230" y2="130"/><line x1="230" y1="130" x2="315" y2="145"/><line x1="230" y1="130" x2="285" y2="118"/><line x1="230" y1="105" x2="195" y2="155"/>`;
 else if(type==="frog") content=`<circle cx="250" cy="70" r="14"/><line x1="250" y1="84" x2="260" y2="125"/><line x1="260" y1="125" x2="220" y2="155"/><line x1="260" y1="125" x2="300" y2="155"/><line x1="248" y1="102" x2="205" y2="170"/><line x1="272" y1="102" x2="315" y2="170"/>`;
 else if(type==="calf") content=`${person(195,85)}${person(330,75)}<line x1="308" y1="170" x2="352" y2="170" stroke-width="7"/>`;
 else if(type==="deadbug") content=`<circle cx="190" cy="120" r="14"/><line x1="205" y1="120" x2="310" y2="120"/><line x1="250" y1="120" x2="220" y2="65"/><line x1="270" y1="120" x2="310" y2="70"/><line x1="285" y1="120" x2="330" y2="155"/>`;
 else if(type==="catcow") content=`<circle cx="155" cy="105" r="14"/><path d="M170 110 Q255 65 330 118" fill="none"/><line x1="210" y1="105" x2="195" y2="175"/><line x1="300" y1="108" x2="315" y2="175"/>`;
 else if(type==="hips") content=`<circle cx="260" cy="60" r="14"/><line x1="260" y1="74" x2="260" y2="125"/><line x1="260" y1="125" x2="205" y2="155"/><line x1="205" y1="155" x2="160" y2="150"/><line x1="260" y1="125" x2="310" y2="155"/><line x1="310" y1="155" x2="355" y2="145"/>`;
 else if(type==="pike") content=`<circle cx="235" cy="80" r="14"/><line x1="245" y1="92" x2="300" y2="125"/><line x1="300" y1="125" x2="390" y2="160"/><line x1="300" y1="125" x2="195" y2="165"/>`;
 else if(type==="ankle") content=`<line x1="390" y1="45" x2="390" y2="180" stroke="#76559b" stroke-width="7"/><line x1="250" y1="165" x2="360" y2="165"/><line x1="275" y1="165" x2="345" y2="95"/>`;
 else if(type==="wrist") content=`<line x1="160" y1="150" x2="360" y2="150"/><line x1="210" y1="70" x2="235" y2="150"/><line x1="310" y1="70" x2="285" y2="150"/><path d="M245 95 Q260 70 275 95" fill="none"/>`;
 else if(type==="shoulder") content=`${person(260,85)}<path d="M205 90 Q260 25 315 90" fill="none"/>`;
 else content=person(260,85);
 return base+`<g fill="none" stroke="#c69cff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">${content}</g></svg>`;
}

function renderToday(){
 let s=sessions[state.sessionIndex%5];
 $("#sessionType").textContent=s.type; $("#sessionName").textContent=s.name; $("#sessionDesc").textContent=s.desc;
 $("#warmup").innerHTML=s.warm.map(x=>`<div class="simple">✓ ${x}</div>`).join("");
 $("#cooldown").innerHTML=s.cool.map(x=>`<div class="simple">○ ${x}</div>`).join(""); $("#doneCount").textContent=0;
 $("#workout").innerHTML=s.work.map((e,i)=>{
   const t=parseTarget(e[1]), sets=Array.from({length:t.sets},(_,si)=>`<div class="set-card" data-set="${si}">
     <div class="set-title">Set ${si+1}</div>
     <div class="log">
       <label>Actual ${e[2]}<input class="actual" inputmode="numeric" type="number" min="0" placeholder="${e[2]}"></label>
       <label>RIR<input class="rir" inputmode="numeric" type="number" min="0" max="10" placeholder="2–4"></label>
       <label>Form<select class="form"><option>Clean</option><option>Shaky</option><option>Broke down</option></select></label>
       <label>Pain<select class="pain"><option>No</option><option>Mild</option><option>Sharp</option></select></label>
     </div>
   </div>`).join("");
   return `<div class="exercise" data-i="${i}"><div class="ex-top"><div><div class="ex-name">${e[0]}</div><div class="target">Target: ${e[1]}</div></div><button class="ref">How?</button></div>${sets}<div class="feedback"></div></div>`
 }).join("");
 $$(".exercise").forEach(el=>{
   let e=s.work[+el.dataset.i];
   el.querySelector(".ref").onclick=()=>showRef(e);
   ["input","change"].forEach(ev=>el.addEventListener(ev,()=>feedback(el,e)));
 });
}

function feedback(el,e){
 const t=parseTarget(e[1]), rows=[...el.querySelectorAll(".set-card")];
 const vals=rows.map(r=>({n:+r.querySelector(".actual").value||0,rir:+r.querySelector(".rir").value||0,form:r.querySelector(".form").value,pain:r.querySelector(".pain").value}));
 if(!vals.some(v=>v.n>0)){el.querySelector(".feedback").textContent="";return}
 let out="";
 if(vals.some(v=>v.pain==="Sharp")) out="Pause this movement. Do not progress it. Use a comfortable substitute or easier variation.";
 else if(vals.some(v=>v.n===1)) out="A set reached only 1 rep → regress this movement next time.";
 else if(vals.some(v=>v.n>0 && v.n<t.min)) out="Below the target range → use an easier variation or more assistance next time.";
 else if(vals.every(v=>v.n>=t.max && v.rir>=3 && v.form==="Clean")) out="All sets were clean at the top of the range with reserve → progress the variation next time.";
 else if(vals.some(v=>v.rir<=1 && v.n>0)) out="Very close to failure → keep the variation or slightly regress. We want reserve for frequent practice.";
 else out="Good working range → keep this variation and build clean capacity.";
 el.querySelector(".feedback").textContent=out;
 $("#doneCount").textContent=$$(".set-card .actual").filter(x=>x.value!=="").length;
}

function showRef(e){
 const meta=exerciseMeta[e[0]]||{mistakes:["Move slowly and stay in a comfortable range"],regression:"Use an easier version",progression:"Use a slightly harder version",visual:"stand"};
 $("#refTitle").textContent=e[0];
 $("#refDemo").innerHTML=stickFigure(meta.visual);
 $("#refHow").textContent=e[3];
 $("#refCues").innerHTML=e[4].split("|").map(x=>`<li>${x}</li>`).join("");
 $("#refMistakes").innerHTML=meta.mistakes.map(x=>`<li>${x}</li>`).join("");
 $("#refRegression").textContent=meta.regression;
 $("#refProgression").textContent=meta.progression;
 $("#refDialog").showModal();
}

$("#finish").onclick=()=>{
 let s=sessions[state.sessionIndex%5],logs=[];
 $$(".exercise").forEach((el,i)=>{
   const sets=[...el.querySelectorAll(".set-card")].map((r,si)=>({
     set:si+1,actual:r.querySelector(".actual").value,rir:r.querySelector(".rir").value,
     form:r.querySelector(".form").value,pain:r.querySelector(".pain").value
   }));
   logs.push({name:s.work[i][0],sets});
 });
 state.history.push({date:new Date().toISOString().slice(0,10),type:s.type,name:s.name,logs});
 state.sessionIndex=(state.sessionIndex+1)%5; save(); renderAll();
};

function renderSkills(){let defs=[["Push Foundation","push"],["Band Pull Foundation","pull"],["Dip-Bar Support","support"],["Core Foundation","core"],["Squat Foundation","squat"],["L-Sit","lSit"],["Handstand","handstand"],["Full Dip","dip"]];$("#skillTree").innerHTML=defs.map(([n,k])=>`<div class="skill ${state.skills[k]}"><b>${n}</b><div class="muted">${state.skills[k].toUpperCase()}</div></div>`).join("")}
let view=new Date();
function renderCalendar(){let y=view.getFullYear(),m=view.getMonth();$("#monthTitle").textContent=view.toLocaleString(undefined,{month:"long",year:"numeric"});let first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate(),h="";for(let i=0;i<first;i++)h+="<div></div>";for(let d=1;d<=days;d++){let ds=`${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`,rec=state.history.find(x=>x.date===ds),today=ds===new Date().toISOString().slice(0,10);h+=`<div class="day ${rec?"done "+rec.type.toLowerCase():""} ${today?"today":""}">${d}${rec?`<small style="display:block;color:#a99bb8">${rec.type}</small>`:""}</div>`}$("#calendarGrid").innerHTML=h}
function renderHistory(){
 $("#historyList").innerHTML=state.history.length?state.history.slice().reverse().map(x=>{
   let count=x.logs.reduce((a,l)=>a+(l.sets?l.sets.filter(s=>s.actual).length:0),0);
   return `<div class="skill unlocked"><b>${x.date} • ${x.name}</b><div class="muted">${count} sets logged</div></div>`
 }).join(""):`<p class="muted">No sessions logged yet. Your first one starts today.</p>`
}
function renderAll(){renderToday();renderSkills();renderCalendar();renderHistory()}
$$(".tab").forEach(b=>b.onclick=()=>{$$(".tab,.panel").forEach(x=>x.classList.remove("active"));b.classList.add("active");$("#"+b.dataset.tab).classList.add("active");if(b.dataset.tab==="calendar")renderCalendar()});
$("#profileBtn").onclick=()=>{$("#height").value=state.profile.height;$("#weight").value=state.profile.weight;$("#profileDialog").showModal()};
$("#saveProfile").onclick=()=>{state.profile.height=$("#height").value;state.profile.weight=$("#weight").value;save()};
$("#prevMonth").onclick=()=>{view.setMonth(view.getMonth()-1);renderCalendar()};
$("#nextMonth").onclick=()=>{view.setMonth(view.getMonth()+1);renderCalendar()};
renderAll();
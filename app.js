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


const movementGuide = {
"Wall Push-up":{
 start:"Stand tall facing the wall. Hands at chest height, slightly wider than shoulders. Arms straight.",
 end:"Bring your chest toward the wall by bending the elbows, then press back to the start.",
 motion:"Chest moves toward wall, then away",
 startIcon:"🧍‍♂️  🤲  │",
 endIcon:"🧍‍♂️↘  🤲│"
},
"Chair Sit-to-Stand":{
 start:"Sit near the front of a stable chair. Feet flat, about hip-width apart.",
 end:"Lean slightly forward, drive through the whole foot, and stand tall.",
 motion:"Sit → stand",
 startIcon:"🪑🧍",
 endIcon:"🧍‍♂️"
},
"Band Row":{
 start:"Stand or sit tall with the band securely anchored in front. Arms extended.",
 end:"Pull hands toward your lower ribs while squeezing the shoulder blades, then return slowly.",
 motion:"Hands travel toward ribs",
 startIcon:"🧍‍♂️━━",
 endIcon:"🧍‍♂️≪"
},
"Elevated Plank":{
 start:"Hands or forearms on a stable elevated surface. Step feet back until your body forms a straight line.",
 end:"Hold that straight line without sagging or piking.",
 motion:"Hold position",
 startIcon:"▰  🧍‍♂️",
 endIcon:"▰  ━━━"
},
"Incline/Wall Push-up":{
 start:"Hands on a stable wall or elevated surface. Step back until your body is in one straight line.",
 end:"Lower your chest toward the surface, then press away without losing body position.",
 motion:"Chest toward surface → press away",
 startIcon:"🧍‍♂️  🤲▰",
 endIcon:"🧍‍♂️↘🤲▰"
},
"Supported Squat":{
 start:"Stand with feet comfortable, lightly holding a stable support in front.",
 end:"Sit hips down and back to a comfortable depth, then stand tall.",
 motion:"Hips travel down, then up",
 startIcon:"🧍‍♂️🤝",
 endIcon:"🏋️‍♂️↘"
},
"Dead Bug Regression":{
 start:"Lie on your back with knees bent. Gently brace your core and keep your back controlled.",
 end:"Move one limb slowly away, then return without letting your lower back arch.",
 motion:"One limb moves away and returns",
 startIcon:"🛌",
 endIcon:"🛌↗"
},
"Feet-Assisted Dip Support":{
 start:"Stand between dip bars with both feet on the floor. Grip the bars and straighten your arms.",
 end:"Press down into the bars and unload some bodyweight while your feet still assist.",
 motion:"Push bars down, body becomes lighter",
 startIcon:"║🧍‍♂️║",
 endIcon:"║⬆️║"
},
"Supported Single-Leg Stand":{
 start:"Stand beside a stable support with fingertips available.",
 end:"Lift one foot slightly and balance on the other leg while staying tall.",
 motion:"One foot leaves floor",
 startIcon:"🧍‍♂️🤏",
 endIcon:"🦩🤏"
},
"Seated Tuck Compression":{
 start:"Sit tall with legs in front and hands beside your thighs.",
 end:"Brace and lift one or both heels slightly from the floor without leaning far back.",
 motion:"Heels lift upward",
 startIcon:"🧘‍♂️",
 endIcon:"🧘‍♂️⬆️"
},
"Dip-Bar Assisted Support":{
 start:"Stand between the dip bars with feet on the floor and arms straight.",
 end:"Press firmly into the bars while reducing how much help your feet provide.",
 motion:"Feet assist less as arms support more",
 startIcon:"║🧍‍♂️║",
 endIcon:"║⬆️║"
},
"Frog Stand Lean Prep":{
 start:"Hands flat on the floor, fingers spread. Knees bent, feet remain on the floor.",
 end:"Shift your shoulders slightly forward over your hands while keeping your feet down.",
 motion:"Shoulders shift forward",
 startIcon:"🐸  🤲",
 endIcon:"🐸↘🤲"
},
"Calf Raise Supported":{
 start:"Stand tall while lightly holding a support. Feet flat.",
 end:"Rise onto the balls of your feet, pause, then lower slowly.",
 motion:"Heels rise and lower",
 startIcon:"🧍‍♂️",
 endIcon:"🧍‍♂️⬆️"
},
"Wrist Controlled Rocks":{
 start:"Hands on a wall, bench, or floor with fingers spread.",
 end:"Gently shift bodyweight forward and backward through a comfortable wrist range.",
 motion:"Weight shifts over wrists",
 startIcon:"🤲",
 endIcon:"🤲↔"
},
"Band Shoulder Rotation":{
 start:"Hold a very light band with the elbow controlled and shoulder relaxed.",
 end:"Rotate through a comfortable range without letting the elbow drift.",
 motion:"Forearm rotates around elbow",
 startIcon:"💪",
 endIcon:"💪↪"
},
"Cat-Cow":{
 start:"Begin on hands and knees with a neutral spine.",
 end:"Slowly round the spine, then reverse into a comfortable extension.",
 motion:"Spine rounds ↔ extends",
 startIcon:"🐈",
 endIcon:"🐈↕"
},
"90/90 Hip Switch":{
 start:"Sit with both knees bent in a 90/90 position. Hands may support you behind.",
 end:"Rotate both knees toward the opposite side under control.",
 motion:"Knees rotate side to side",
 startIcon:"🧘",
 endIcon:"🧘↔"
},
"Supported Deep Squat Hold":{
 start:"Stand holding a stable support. Feet in a comfortable squat stance.",
 end:"Lower into your comfortable squat depth and relax there while staying supported.",
 motion:"Lower and hold",
 startIcon:"🧍‍♂️🤝",
 endIcon:"🏋️‍♂️⏸"
},
"Hamstring/Pike Stretch":{
 start:"Sit or stand with knees softly bent and spine long.",
 end:"Hinge forward from the hips until you feel a mild hamstring stretch.",
 motion:"Torso hinges forward",
 startIcon:"🧍‍♂️",
 endIcon:"🙇‍♂️"
},
"Ankle Knee-to-Wall":{
 start:"Face a wall with one foot flat and toes a short distance away.",
 end:"Drive the knee toward the wall while keeping the heel planted.",
 motion:"Knee travels forward, heel stays down",
 startIcon:"🦶│",
 endIcon:"🦵→│"
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
 const meta=exerciseMeta[e[0]]||{mistakes:["Move slowly and stay in a comfortable range"],regression:"Use an easier version",progression:"Use a slightly harder version"};
 const guide=movementGuide[e[0]]||{
   start:"Set up in a comfortable, stable position.",
   end:"Move slowly through the described range while keeping control.",
   motion:"Controlled movement",
   startIcon:"START",
   endIcon:"END"
 };
 $("#refTitle").textContent=e[0];
 $("#refStartIcon").textContent=guide.startIcon;
 $("#refEndIcon").textContent=guide.endIcon;
 $("#refStart").textContent=guide.start;
 $("#refEnd").textContent=guide.end;
 $("#refMotion").textContent=guide.motion;
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
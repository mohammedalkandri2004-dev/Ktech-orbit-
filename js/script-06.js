
(function(){
  'use strict';
  const $=id=>document.getElementById(id),ns='http://www.w3.org/2000/svg';
  const map=$('mapView'),layer=$('orbitParkingLayer'),panel=$('orbitParkingPanel');
  if(!map||!layer||!panel)return;
  const ar=()=>document.documentElement.lang==='ar';
  const words={
    en:{title:'🚗 Smart Parking',sub:'See which spaces are free across the campus.',badge:'REFERENCE MAP · PARKING STATUS NOT LIVE',free:'Available',busy:'Occupied',access:'Accessible available ♿',green:'Green = available',red:'Red = occupied',blue:'♿ = accessible space',instruction:'Tap any colored bay to change its status. There are four accessible bays: two by G4 and two by G6.',find:'📍 Find a free space',findAccess:'♿ Find accessible',arrive:'🚘 Simulate arrival',leave:'↗ Simulate departure',reset:'↺ Reset demo',note:'Concept demo: occupancy is simulated. Sensors and a connected service would be needed for live data. Gate and accessible-bay positions are mapped from the supplied ground-floor and campus illustrations; confirm exact locations with KTECH.',toggle:'Change status',available:'Available',occupied:'Occupied',accessible:'Accessible space',regular:'Regular space',allFull:'No available spaces in this demo.',accessFull:'No available accessible spaces in this demo.',allEmpty:'No occupied spaces in this demo.',selected:'Selected',north:'North',east:'East',west:'West',center:'Center',south:'South',sports:'Sports',gate:'Gate',spacesFree:'free of 2'},
    ar:{title:'🚗 المواقف الذكية',sub:'شوف المواقف المتاحة في جميع أنحاء الحرم.',badge:'عرض تفاعلي · بيانات تجريبية',free:'متاح',busy:'مشغول',access:'مواقف مهيأة متاحة ♿',green:'الأخضر = متاح',red:'الأحمر = مشغول',blue:'♿ = موقف مهيأ',instruction:'اضغط على أي موقف ملون لتغيير حالته. هناك أربعة مواقف مهيأة فقط: موقفان قرب G4 وموقفان قرب G6.',find:'📍 ابحث عن موقف متاح',findAccess:'♿ ابحث عن موقف مهيأ',arrive:'🚘 محاكاة دخول سيارة',leave:'↗ محاكاة خروج سيارة',reset:'↺ إعادة العرض',note:'هذا عرض تجريبي وحالة المواقف محاكاة. التحديث المباشر يحتاج حساسات وخدمة متصلة. حُددت مواقع البوابات والمواقف المهيأة وفق خرائط الطابق الأرضي والحرم المرسلة؛ تأكد من مواقعها الدقيقة مع KTECH.',toggle:'تغيير الحالة',available:'متاح',occupied:'مشغول',accessible:'موقف مهيأ',regular:'موقف عادي',allFull:'لا توجد مواقف متاحة في هذا العرض.',accessFull:'لا توجد مواقف مهيأة متاحة في هذا العرض.',allEmpty:'لا توجد مواقف مشغولة في هذا العرض.',selected:'المحدد',north:'الشمال',east:'الشرق',west:'الغرب',center:'الوسط',south:'الجنوب',sports:'الملاعب',gate:'بوابة',spacesFree:'متاح من ٢'}
  };
  const t=k=>words[ar()?'ar':'en'][k];
  // Bay positions are measured against the actual 1672 x 941 clean campus image.
  // Never generate spots across walkways, roads, grass, roofs or medians.
  // Convert image pixels into the SVG's 1536 x 864 coordinate system.
  const scaleX=1536/1672, scaleY=864/941;
  const rows=[];
  function horizontal(code,area,x1,x2,y,step=16,depth=24){
    const count=Math.max(0,Math.floor((x2-x1)/step));
    if(count)rows.push({code,area,count,x:x1*scaleX,y:y*scaleY,dx:step*scaleX,dy:0,w:(step-3)*scaleX,h:depth*scaleY});
  }
  function vertical(code,area,x,y1,y2,step=16,depth=25){
    const count=Math.max(0,Math.floor((y2-y1)/step));
    if(count)rows.push({code,area,count,x:x*scaleX,y:y1*scaleY,dx:0,dy:step*scaleY,w:depth*scaleX,h:(step-3)*scaleY});
  }
  // Perimeter, top: separate banks and the crossing gap.
  horizontal('N1','north',118,211,56,16,25);
  horizontal('N2','north',248,1515,56,16,25);
  horizontal('N3','north',299,613,94,16,20);
  horizontal('N4','north',915,1093,94,16,20);
  horizontal('N5','north',1104,1480,94,16,20);
  // West car park: two sides of the landscaped islands and building-side row.
  vertical('W1','west',85,125,420,16,29);
  vertical('W2','west',143,125,428,16,24);
  vertical('W3','west',185,125,428,16,24);
  vertical('W4','west',238,125,270,16,25);
  horizontal('W5','west',97,219,539,16,23);
  // West-facing campus building bays, separated by entrances and structures.
  vertical('B1','west',659,138,252,16,20);
  // Fill the painted regular bays between the G6 accessible pair and G5.
  vertical('B6F','west',659,290,349,16,20);
  vertical('B2','west',659,397,492,16,20);
  // Fill the painted regular bays leading down toward G4.
  vertical('B4F','west',659,501,547,16,20);
  vertical('B3','west',659,566,685,16,20);
  // Central islands: both sides, with breaks at circular trees and crossings.
  for(const [n,y1,y2] of [['A',138,195],['B',224,339],['C',389,486],['D',516,559],['E',607,677]]){
    vertical('C'+n+'L','center',706,y1,y2,16,22);
    vertical('C'+n+'R','center',751,y1,y2,16,22);
    vertical('D'+n+'L','center',795,y1,y2,16,22);
    vertical('D'+n+'R','center',842,y1,y2,16,22);
  }
  // Football pitch and sports wing: horizontal banks on both sides of islands.
  horizontal('E1','east',917,1084,130,16,24);
  horizontal('E2','east',917,1084,171,16,24);
  horizontal('E3','east',917,1084,213,16,24);
  horizontal('E4','east',917,1084,251,16,24);
  horizontal('E5','east',919,1090,530,16,24);
  horizontal('E6','east',919,1081,566,16,24);
  horizontal('E7','east',919,1082,611,16,24);
  horizontal('E8','east',919,1082,649,16,24);
  horizontal('E9','east',918,1481,697,16,24);
  // Short inner rows between the soccer pitch and the sports building.
  // E10 removed: row overlapped the soccer pitch entrance and road.
  // E11 removed: row overlapped the soccer pitch entrance and road.
  // Right boundary: single bay row on the inner side of the road.
  vertical('R1','east',1506,127,691,16,24);
  // Opposite side of the eastern driving aisle, following the second set of painted bays.
  vertical('R2','east',1548,127,691,16,24);
  // The football pitch has a narrow row along its western edge.
  vertical('P1','sports',900,285,507,16,22);
  // South boundary: no slots on the main driving lane or building.
  horizontal('S1','south',331,629,694,16,19);
  // South-west entrance short bank and south edge of the campus building.
  horizontal('SW1','south',105,226,544,16,23);
  // S0 removed: duplicates southern campus parking bays.
  horizontal('S2','south',285,1495,740,16,25);
  // Exactly four accessible bays, two at G6 and two at G4.
  // The regular B1/B2/B3 rows no longer inherit accessibility flags.
  const spots=rows.flatMap(row=>Array.from({length:row.count},(_,i)=>({
    id:row.code+String(i+1).padStart(2,'0'),area:row.area,
    x:row.x+i*row.dx,y:row.y+i*row.dy,w:row.w,h:row.h,
    gate:null,accessible:false,occupied:Math.random()<0.52
  })));
  // Avoid stacking bays: keep only one status marker in any mapped position.
  const intersects=(a,b)=>a.x<b.x+b.w-2 && a.x+a.w>b.x+2 && a.y<b.y+b.h-2 && a.y+a.h>b.y+2;
  for(let i=spots.length-1;i>=0;i--){
    if(spots.slice(0,i).some(other=>intersects(spots[i],other)))spots.splice(i,1);
  }
  // Exactly two adjacent accessible bays beside G6, and two beside G4.
  // Coordinates are in the 1672 x 941 reference map; converted to SVG units.
  const accessibleBays=[
    {id:'G6-A1',gate:6,x:661,y:255},
    {id:'G6-A2',gate:6,x:661,y:271},
    {id:'G4-A1',gate:4,x:661,y:552},
    {id:'G4-A2',gate:4,x:661,y:568}
  ];
  for(const bay of accessibleBays){
    const spot={id:bay.id,area:'center',gate:bay.gate,accessible:true,
      x:bay.x*scaleX,y:bay.y*scaleY,w:22*scaleX,h:14*scaleY,
      occupied:Math.random()<0.5};
    for(let i=spots.length-1;i>=0;i--){if(intersects(spot,spots[i]))spots.splice(i,1);}
    spots.push(spot);
  }
  if(spots.filter(s=>s.accessible).length!==4)console.warn('Accessible bays must total four');
  const initial=spots.map(spot=>spot.occupied);
  let selected=null, message='';
  const nodes=new Map();
  const gateLocations=[{number:8,x:279,y:227},{number:1,x:269,y:356},{number:2,x:278,y:492},{number:7,x:423,y:119},{number:6,x:601,y:229},{number:5,x:615,y:359},{number:4,x:608,y:497},{number:3,x:425,y:612}];
  spots.forEach(spot=>{
    const rect=document.createElementNS(ns,'rect');
    for(const [key,value] of Object.entries({x:spot.x,y:spot.y,width:spot.w,height:spot.h,rx:2,tabindex:0,role:'button','data-spot':spot.id}))rect.setAttribute(key,String(value));
    rect.classList.add('orbit-parking-spot');
    const title=document.createElementNS(ns,'title');rect.append(title);layer.append(rect);
    // Accessible status belongs to the bay only; no floating wheelchair text overlay.
    if(spot.accessible){
      rect.setAttribute('data-accessible','true');rect.style.stroke='#2378ff';rect.style.strokeWidth='3px';
      // The wheelchair icon is drawn INSIDE each blue bay, never floating near a gate.
      const symbol=document.createElementNS(ns,'text');
      symbol.setAttribute('x',String(spot.x+spot.w/2));
      symbol.setAttribute('y',String(spot.y+spot.h/2));
      symbol.setAttribute('text-anchor','middle');
      symbol.setAttribute('dominant-baseline','central');
      symbol.setAttribute('font-size',String(Math.min(spot.w*.73,spot.h*.88)));
      symbol.setAttribute('font-family','Arial, sans-serif');
      symbol.setAttribute('fill','#fff');
      symbol.setAttribute('stroke','#1246a1');
      symbol.setAttribute('stroke-width','.45');
      symbol.setAttribute('paint-order','stroke');
      symbol.setAttribute('pointer-events','none');
      symbol.textContent='♿';
      layer.append(symbol);
    }
    rect.addEventListener('click',event=>{event.stopPropagation();spot.occupied=!spot.occupied;select(spot,false);});
    rect.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();spot.occupied=!spot.occupied;select(spot,false);}});
    nodes.set(spot.id,{rect,title});
  });
  // High-contrast gate badges stay above parking spaces, aligned with the reference map.
  gateLocations.forEach(({number,x,y})=>{
    const group=document.createElementNS(ns,'g');
    group.setAttribute('class','orbit-visible-gate');
    group.setAttribute('pointer-events','none');
    const badge=document.createElementNS(ns,'rect');
    for(const [key,value] of Object.entries({x:x-27,y:y-20,width:54,height:34,rx:6,fill:'#101820',stroke:'#ffffff','stroke-width':3}))badge.setAttribute(key,String(value));
    const label=document.createElementNS(ns,'text');
    for(const [key,value] of Object.entries({x,y:y+4,fill:'#ffffff','font-size':22,'font-weight':900,'text-anchor':'middle','font-family':'Arial, sans-serif'}))label.setAttribute(key,String(value));
    label.textContent='G'+number;
    group.append(badge,label);layer.append(group);
  });
  function label(spot){return (spot.gate?t('gate')+' '+spot.gate+' · ':'')+t(spot.area)+' '+spot.id;}
  function renderGates(){
    const container=$('orbitParkingGates');container.replaceChildren();
    container.setAttribute('aria-label',ar()?'المواقف المهيأة حسب البوابة':'Accessible spaces by gate');
    [4,6].forEach(gate=>{
      const free=spots.filter(s=>s.gate===gate&&!s.occupied).length;
      const button=document.createElement('button');button.type='button';
      button.textContent='♿ '+t('gate')+' '+gate+' · '+free+' '+t('spacesFree');
      button.addEventListener('click',()=>{
        const spot=spots.find(s=>s.gate===gate&&!s.occupied);
        if(spot)select(spot,true);else{selected=null;message=t('gate')+' '+gate+' · '+t('accessFull');render();}
      });
      container.append(button);
    });
  }
  function render(){
    const free=spots.filter(s=>!s.occupied).length,busy=spots.length-free;
    $('orbitParkingFree').textContent=free;
    $('orbitParkingBusy').textContent=busy;
    $('orbitParkingAccess').textContent=spots.filter(s=>s.accessible&&!s.occupied).length;
    $('orbitParkingMeter').style.width=(free/spots.length*100)+'%';
    renderGates();
    spots.forEach(spot=>{
      const {rect,title}=nodes.get(spot.id);
      rect.classList.toggle('free',!spot.occupied);rect.classList.toggle('busy',spot.occupied);
      rect.classList.toggle('accessible',spot.accessible);rect.classList.toggle('selected',selected===spot.id);
      const description=label(spot)+' · '+t(spot.occupied?'occupied':'available')+' · '+t(spot.accessible?'accessible':'regular');
      rect.setAttribute('aria-label',description);rect.setAttribute('aria-pressed',String(selected===spot.id));title.textContent=description;
    });
    const spot=spots.find(s=>s.id===selected),selection=$('orbitParkingSelection');
    selection.hidden=!spot&&!message;
    $('orbitParkingSpotName').textContent=spot?label(spot):message;
    $('orbitParkingSpotStatus').textContent=spot?t(spot.occupied?'occupied':'available')+' · '+t(spot.accessible?'accessible':'regular'):'';
    $('orbitParkingToggle').hidden=!spot;
  }
  function select(spot,move){selected=spot.id;message='';render();
    if(move){const stage=$('orbitMapStage'),rect=nodes.get(spot.id).rect.getBoundingClientRect(),box=stage.getBoundingClientRect();
      stage.scrollTo({left:stage.scrollLeft+rect.left-box.left-stage.clientWidth/2,top:stage.scrollTop+rect.top-box.top-stage.clientHeight/2,behavior:'smooth'});
    }
  }
  function event(kind){const pool=spots.filter(s=>kind==='arrive'?!s.occupied:s.occupied);
    if(!pool.length){selected=null;message=t(kind==='arrive'?'allFull':'allEmpty');render();return;}
    const spot=(selected&&pool.find(s=>s.id===selected))||pool[Math.floor(Math.random()*pool.length)];
    spot.occupied=kind==='arrive';select(spot,true);
  }
  function find(accessible){const spot=spots.find(s=>!s.occupied&&(!accessible||s.accessible));
    if(spot)select(spot,true);else{selected=null;message=t(accessible?'accessFull':'allFull');render();}
  }
  function translate(){
    const labels={orbitParkingTitle:'title',orbitParkingSub:'sub',orbitParkingBadge:'badge',orbitParkingFreeLabel:'free',orbitParkingBusyLabel:'busy',orbitParkingAccessLabel:'access',orbitParkingGreen:'green',orbitParkingRed:'red',orbitParkingBlue:'blue',orbitParkingInstruction:'instruction',orbitParkingFind:'find',orbitParkingFindAccess:'findAccess',orbitParkingArrive:'arrive',orbitParkingLeave:'leave',orbitParkingReset:'reset',orbitParkingNote:'note',orbitParkingToggle:'toggle'};
    Object.entries(labels).forEach(([id,key])=>$(id).textContent=t(key));render();
  }
  $('orbitParkingFind').addEventListener('click',()=>find(false));
  $('orbitParkingFindAccess').addEventListener('click',()=>find(true));
  $('orbitParkingArrive').addEventListener('click',()=>event('arrive'));
  $('orbitParkingLeave').addEventListener('click',()=>event('leave'));
  $('orbitParkingReset').addEventListener('click',()=>{spots.forEach((s,i)=>s.occupied=initial[i]);selected=null;message='';render();});
  $('orbitParkingToggle').addEventListener('click',()=>{const spot=spots.find(s=>s.id===selected);if(spot){spot.occupied=!spot.occupied;render();}});
  window.orbitParkingDemo={sync(f){const campus=f==='campus';map.classList.toggle('parking-mode',campus);panel.hidden=!campus;layer.style.display=campus?'block':'none';layer.style.visibility=campus?'visible':'hidden';if(campus){$('orbitFloorCurrentLabel').textContent=ar()?'مواقف الحرم':'Campus parking';render();}},snapshot(){return spots.map(({id,occupied,accessible,gate,x,y})=>({id,occupied,accessible,gate,x,y}));}};
  ['langEn','langAr'].forEach(id=>$(id)?.addEventListener('click',()=>setTimeout(()=>{translate();window.orbitParkingDemo.sync(window.orbitNavigationTest?.getState().floor);},0)));
  // Independent occupancy state for every mapped bay. Simulation runs only for Campus.
  window.setInterval(()=>{
    if(window.orbitNavigationTest?.getState().floor!=='campus')return;
    const changes=8+Math.floor(Math.random()*22);
    for(let k=0;k<changes;k++){
      const spot=spots[Math.floor(Math.random()*spots.length)];
      if(spot)spot.occupied=!spot.occupied;
    }
    render();
  },3000);
  translate();window.orbitParkingDemo.sync(window.orbitNavigationTest?.getState().floor||'one');
})();

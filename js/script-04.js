
(function(){
 'use strict';
 const $=id=>document.getElementById(id),NS='http://www.w3.org/2000/svg';
 const en=(english,arabic)=>document.documentElement.lang==='ar'?arabic:english;
 const mapLanguage={
  en:{navMap:'KTECH Map',navMapBio:'Explore rooms and campus maps.',eyebrow:'KTECH ORBIT · INDOOR WAYFINDING',title:'🗺️ KTECH Campus Map',subtitle:'Find classrooms and services, with routes that follow the corridors.',chip:'INTERACTIVE 2D MAP',starting:'Starting location',destination:'Destination',accessible:'♿ Accessible route — use wheelchair-accessible elevators, not stairs',directions:'Get Directions',mapKey:'Map Key',tap:'Tap a room or its yellow door dot',mapOnly:'Map view only',chooseTwo:'Choose two locations; the yellow dots indicate classroom doors.',warning:'Map-based route preview, not live GPS. Yellow dots represent classroom doors; confirm precise doorway positions and accessibility onsite.',route:'Route',clearRoute:'Clear route',previous:'← Previous',next:'Next step →',finished:'Finished',find:'Find Location',change:'Change Floor',locationList:'Location List',mapInfo:'Map Info',roomList:'Room list',info:'This is a manually selected starting-point route preview, not real-time GPS tracking. The yellow dots represent classroom doors. Routes follow white corridors to these entrances; confirm exact entrances and accessibility onsite.',it:'IT Department',finance:'Finance Department',library:'Library',floorLibrary:'Library (Floor 2)',campusDirections:'♿ Campus directions / Accessible elevators',fromPlaceholder:'Select starting location…',toPlaceholder:'Select destination…',labSuffix:' (lab)',floorGround:'Ground Floor',floorOne:'Floor 1',floorTwo:'Floor 2',floorCampus:'Campus',labs:'Labs (CLxxx)',classrooms:'Classrooms (Cxxx)',women:'Women’s bathroom',men:'Men’s bathroom',doors:'Classroom doors (yellow dots)',stairs:'Stairs',elevator:'Elevator',accessibleElevator:'Accessible elevator',offices:'Faculty offices',services:'IT / Finance departments',campusMap:'Campus map view',select:'Select',door:'Door',sectionMap:'Interactive map with selectable rooms',roomsDirections:'Room selection and directions',zoomIn:'Zoom in',zoomOut:'Zoom out',swap:'Swap start and destination',chooseFloor:'Choose a floor',mapTools:'Map tools',chooseStart:'Choose your starting location',chooseEnd:'Choose your destination',mapAlt:'KTECH {floor} floor map',selectionStart:'Starting at {room}. Select a destination.',selectionBoth:'Selected {from} → {to}. Tap Get Directions.',selectionTo:'Destination: {room}. Choose your starting location and tap Get Directions.',chooseToDraw:'Choose Get Directions to draw a corridor route.',chooseBoth:'Choose a starting location and destination first.',alreadyHere:'You are already at that location.',routeFail:'A safe corridor route could not be calculated from the mapped locations. Check the destination or ask campus staff.',routeCleared:'Route cleared. Choose another starting point and destination.',accessibleSelected:'Accessible mode selected. Choose a starting room and destination.',statusRoute:'{from} → {to} · {floor} · Yellow line follows the corridors and finishes at the destination door.',stepProgress:'Step {n} of {total}',sameFloorFirst:'On {floor}, follow the highlighted route from {from} toward the entrance for {to}.',sameFloorLast:'Stop at the marked entrance for {to}; check the room sign.',multiFirst:'On {floor}, follow the highlighted corridor to the {portal} {device}.',multiChange:'Take the {device} {move} to {floor}. The map is showing this floor for the next route step.',multiLast:'Continue along the white corridor and stop at the marked entrance for {to}.',up:'up',down:'down',accessibleDevice:'wheelchair-accessible elevator',stairsDevice:'stairs',descriptorAccessible:'♿ Accessible route via the {portal} elevator.',descriptorElevator:'🚶 Elevator route via the {portal} elevator.',descriptorStairs:'🚶 Stair route via the {portal} staircase.',descriptorSame:'Same-floor route, following hallway centre-lines.',northwest:'northwest',northeast:'northeast',southwest:'southwest',southeast:'southeast',middleLeft:'middle-left',middleRight:'middle-right',bathmen:'Men’s bathroom',bathwomen:'Women’s bathroom',nearC210:'Men’s bathroom (near C210)',nearC262:'Women’s bathroom (near C262)',nameLab:'Lab',unknown:'Location'},
  ar:{navMap:'خريطة KTECH',navMapBio:'استكشف قاعات الكلية ومرافقها وخريطة الحرم.',eyebrow:'KTECH ORBIT · الإرشاد داخل الكلية',title:'🗺️ خريطة كلية KTECH',subtitle:'اعرف أماكن القاعات والمرافق، وتابع مسارات المشي داخل الممرات.',chip:'خريطة تفاعلية ثنائية الأبعاد',starting:'موقع البداية',destination:'الوجهة',accessible:'♿ مسار مناسب لذوي الإعاقة — استخدم المصاعد المخصصة للكراسي المتحركة بدلاً من الدرج',directions:'عرض الاتجاهات',mapKey:'دليل الخريطة',tap:'اضغط على القاعة أو نقطة بابها الصفراء',mapOnly:'عرض الخريطة فقط',chooseTwo:'اختر موقع البداية والوجهة؛ النقاط الصفراء توضح أبواب القاعات.',warning:'المسار المعروض إرشادي وليس تتبع GPS مباشر. النقاط الصفراء تشير إلى أبواب القاعات؛ تأكد من مواقع الأبواب وإمكانية الوصول داخل الكلية.',route:'المسار',clearRoute:'مسح المسار',previous:'السابق →',next:'← الخطوة التالية',finished:'انتهى',find:'ابحث عن موقع',change:'تغيير الطابق',locationList:'قائمة المواقع',mapInfo:'معلومات الخريطة',roomList:'قائمة القاعات',info:'الخريطة تعرض مساراً إرشادياً يحدد المستخدم نقطة بدايته، وليست نظام GPS مباشراً. تشير النقاط الصفراء إلى أبواب القاعات، وتتبع المسارات الممرات البيضاء. تأكد من المداخل وإمكانية الوصول داخل الكلية.',it:'قسم تقنية المعلومات',finance:'القسم المالي',library:'المكتبة',floorLibrary:'المكتبة (الطابق الثاني)',campusDirections:'♿ الاتجاهات داخل الكلية / المصاعد المهيأة',fromPlaceholder:'اختر موقع البداية…',toPlaceholder:'اختر الوجهة…',labSuffix:' (مختبر)',floorGround:'الطابق الأرضي',floorOne:'الطابق الأول',floorTwo:'الطابق الثاني',floorCampus:'الحرم الجامعي',labs:'المختبرات (CLxxx)',classrooms:'القاعات الدراسية (Cxxx)',women:'حمام النساء',men:'حمام الرجال',doors:'أبواب القاعات (النقاط الصفراء)',stairs:'الدرج',elevator:'المصعد',accessibleElevator:'مصعد مهيأ لذوي الإعاقة',offices:'مكاتب الدكاترة',services:'قسما تقنية المعلومات والمالية',campusMap:'عرض خريطة الحرم',select:'اختر',door:'باب',sectionMap:'خريطة تفاعلية لاختيار القاعات',roomsDirections:'اختيار القاعات والاتجاهات',zoomIn:'تكبير',zoomOut:'تصغير',swap:'تبديل البداية والوجهة',chooseFloor:'اختر الطابق',mapTools:'أدوات الخريطة',chooseStart:'اختر موقع البداية',chooseEnd:'اختر الوجهة',mapAlt:'خريطة KTECH - {floor}',selectionStart:'نقطة البداية: {room}. اختر الوجهة.',selectionBoth:'تم اختيار {from} ← {to}. اضغط عرض الاتجاهات.',selectionTo:'الوجهة: {room}. اختر موقع البداية واضغط عرض الاتجاهات.',chooseToDraw:'اضغط عرض الاتجاهات لإظهار المسار داخل الممرات.',chooseBoth:'اختر موقع البداية والوجهة أولاً.',alreadyHere:'أنت موجود بالفعل في هذا الموقع.',routeFail:'تعذر حساب مسار آمن عبر الممرات المتاحة على الخريطة. تأكد من الوجهة أو اسأل موظفي الكلية.',routeCleared:'تم مسح المسار. اختر نقطة بداية ووجهة جديدتين.',accessibleSelected:'تم تفعيل المسار المهيأ. اختر قاعة البداية والوجهة.',statusRoute:'{from} ← {to} · {floor} · الخط الأصفر يمر بالممرات وينتهي عند باب الوجهة.',stepProgress:'الخطوة {n} من {total}',sameFloorFirst:'في {floor}، اتبع الخط الأصفر داخل الممر الأبيض من {from} باتجاه مدخل {to}.',sameFloorLast:'توقف عند الباب المحدد لـ {to}، وتأكد من لوحة القاعة.',multiFirst:'في {floor}، اتبع المسار المميز عبر الممر إلى {device} في الجهة {portal}.',multiChange:'استخدم {device} واذهب {move} إلى {floor}. ستظهر خريطة هذا الطابق.',multiLast:'تابع عبر الممر الأبيض وتوقف عند المدخل المحدد لـ {to}.',up:'صعوداً',down:'نزولاً',accessibleDevice:'المصعد المهيأ للكراسي المتحركة',stairsDevice:'الدرج',descriptorAccessible:'♿ مسار مهيأ يمر عبر المصعد في الجهة {portal}.',descriptorElevator:'🚶 المسار عبر المصعد في الجهة {portal}.',descriptorStairs:'🚶 المسار عبر الدرج في الجهة {portal}.',descriptorSame:'المسار في الطابق نفسه ويتبع الممرات.',northwest:'الشمالية الغربية',northeast:'الشمالية الشرقية',southwest:'الجنوبية الغربية',southeast:'الجنوبية الشرقية',middleLeft:'الوسطى اليسرى',middleRight:'الوسطى اليمنى',bathmen:'حمام الرجال',bathwomen:'حمام النساء',nearC210:'حمام الرجال (قرب C210)',nearC262:'حمام النساء (قرب C262)',nameLab:'مختبر',unknown:'موقع'}
 };
 const ar=()=>document.documentElement.lang==='ar';
 const mt=(key,fields={})=>{let s=(mapLanguage[ar()?'ar':'en'][key]||mapLanguage.en[key]||key);return s.replace(/\{([A-Za-z]+)\}/g,(_,k)=>fields[k]??'');};
 const floorLabel=(f)=>mt(({one:'floorOne',two:'floorTwo',ground:'floorGround',campus:'floorCampus'})[f]||'floorOne');
 const placeLabel=(id)=>({"IT Department":mt('it'),"Finance Department":mt('finance'),"Library":mt('library'),"Men's Bathroom":mt('men'),"Women's Bathroom":mt('women'),"Men's Bathroom (Floor 2)":mt('men')+' · '+floorLabel('two'),"Women's Bathroom (Floor 2)":mt('women')+' · '+floorLabel('two'),"Men's Bathroom (near C210)":mt('nearC210'),"Women's Bathroom (near C262)":mt('nearC262')})[id]||id;
 const portalLabel=(name)=>mt(({northwest:'northwest',northeast:'northeast',southwest:'southwest',southeast:'southeast','middle-left':'middleLeft','middle-right':'middleRight'})[name]||'northwest');
 let statusState={key:'chooseTwo',fields:{}};
 function statusText(key,fields={}){statusState={key,fields};refs.status.textContent=mt(key,fields);}
 function updateMapLanguage(){
   const map=$('mapView');
   const text=(selector,value)=>{const node=map.querySelector(selector)||document.querySelector(selector);if(node)node.textContent=value;};
   const aria=(selector,value)=>{const node=map.querySelector(selector)||document.querySelector(selector);if(node)node.setAttribute('aria-label',value);};
   text('#navMap',mt('navMap'));text('#navMapBio',mt('navMapBio'));
   text('.orbit-map-eyebrow',mt('eyebrow'));text('#orbitMapTitle',mt('title'));text('.orbit-map-subtitle',mt('subtitle'));text('.orbit-map-v2-chip',mt('chip'));
   for(const [f,k] of Object.entries({ground:'floorGround',one:'floorOne',two:'floorTwo',campus:'floorCampus'})){const b=map.querySelector(`.orbit-floor-btn[data-floor="${f}"]`);if(b)b.textContent=mt(k);}
   const labels=map.querySelectorAll('.orbit-nav-v2-location label');if(labels[0]){const dot=labels[0].querySelector('span');labels[0].textContent='';if(dot)labels[0].append(dot);labels[0].append(' '+mt('starting'));}if(labels[1]){const dot=labels[1].querySelector('span');labels[1].textContent='';if(dot)labels[1].append(dot);labels[1].append(' '+mt('destination'));}
   text('.orbit-access-toggle span',mt('accessible'));text('#orbitFindRoute',mt('directions')+' →');
   text('.orbit-map-v2-key summary',mt('mapKey'));text('.orbit-map-v2-caution',mt('warning'));text('#orbitStopNavigation',mt('clearRoute'));
   text('#orbitStepBack',mt('previous'));text('#orbitActionDirections span',mt('directions'));text('#orbitActionFind span',mt('find'));text('#orbitActionFloor span',mt('change'));text('#orbitActionList span',mt('locationList'));text('#orbitActionInfo span',mt('mapInfo'));
   text('#orbitMapInfoPanel',mt('info'));text('#orbitShowRooms',mt('roomList'));
   map.querySelectorAll('[data-locate]').forEach(b=>{const id=b.dataset.locate.split('|')[1];b.textContent=id==='Library'?mt('floorLibrary'):placeLabel(id);});
   aria('.orbit-floors-v2',mt('chooseFloor'));aria('#orbitNavFrom',mt('chooseStart'));aria('#orbitNavTo',mt('chooseEnd'));aria('#orbitSwapRoute',mt('swap'));aria('#orbitMapStage',mt('sectionMap'));aria('#orbitFloorOverlay',mt('roomsDirections'));aria('#orbitZoomIn',mt('zoomIn'));aria('#orbitZoomOut',mt('zoomOut'));aria('.orbit-map-v2-key',mt('mapKey'));aria('.orbit-map-v2-actionbar',mt('mapTools'));
   map.setAttribute('lang',ar()?'ar':'en');
   // Preserve route selections (English IDs) while re-rendering their readable labels.
   fillOptions();
   showFloor(state.floor,false);
   if(state.route){renderSteps();draw();}
   else {refs.status.textContent=mt(statusState.key,statusState.fields);}
   if(!$('orbitRoomList').hidden)fillRoomList();
   if(guideQuick)guideQuick.textContent=mt('campusDirections');
 }
 const refs={map:$('orbitFloorImage'),canvas:$('orbitMapCanvas'),stage:$('orbitMapStage'),svg:$('orbitFloorOverlay'),overlay:$('orbitRoomLayer'),lines:$('orbitRouteGraphics'),key:$('orbitMapKeyRows'),status:$('orbitMapSelection'),from:$('orbitNavFrom'),to:$('orbitNavTo'),accessible:$('orbitAccessible'),sheet:$('orbitDirectionsSheet')};
 const assets={"one":"assets/image-02-cec9e531c7.jpg","two":"assets/image-03-b5325f6e63.jpg","ground":"assets/image-04-4fc850b02d.jpg","campus":"assets/image-05-e66e7e3cbe.jpg"};
 const assetsAR={one:'assets/image-06-9e72d028ee.jpg',two:'assets/image-07-cecfcf44eb.jpg'};
 const floors={
  one:{key:'one',label:'Floor 1',image:assets.one,crop:[64,124,1120,747],width:1056,height:623},
  two:{key:'two',label:'Floor 2',image:assets.two,crop:[38,201,1041,900],width:1003,height:699},
  ground:{key:'ground',label:'Ground Floor',image:'assets/image-08-995faac9a8.jpg',crop:[0,0,1619,972],width:1619,height:972},
  campus:{key:'campus',label:'Campus',image:assets.campus,crop:[0,0,1536,864],width:1536,height:864}
 };
 // All positions are measured against the supplied floor-map reference images.
 // Corridor routes now start and finish at visible yellow classroom door targets.
 // This physical door layer is separate from corridor centre-lines: short entry spurs
 // connect the corridor to the door without ever crossing room interiors.
 const rooms=[];
 function room(f,id,kind,x1,y1,x2,y2,dx,dy){
  // dx,dy is a confirmed traversable corridor node (approach).
  // The yellow marker is placed just OUTSIDE the facing room boundary.
  // The point can be tuned from site-marked door dots without moving the room.
  let door=[dx,dy];
  if(kind==='class'||kind==='lab'){
    const gap=5;
    if(dy<y1)door=[Math.max(x1+3,Math.min(dx,x2-3)),y1-gap];
    else if(dy>y2)door=[Math.max(x1+3,Math.min(dx,x2-3)),y2+gap];
    else if(dx<x1)door=[x1-gap,Math.max(y1+3,Math.min(dy,y2-3))];
    else if(dx>x2)door=[x2+gap,Math.max(y1+3,Math.min(dy,y2-3))];
  }
  rooms.push({floor:f,id,kind,rect:[x1,y1,x2,y2],approach:[dx,dy],door});
 }
 function row(f,kind,ids,bounds,y1,y2,lane){ids.forEach((id,i)=>{const a=bounds[i],b=bounds[i+1];room(f,id,kind,a,y1,b,y2,(a+b)/2,lane);});}
 row('one','lab',['CL221','CL223','CL225','CL227'],[212,281,352,422,489],150,209,232);
 row('one','lab',['CL280','CL272','CL270','CL269','CL267'],[515,703,798,868,939,1007],150,209,232);
 room('one','C219','class',80,131,191,176,174,232);
 row('one','lab',['CL220'],[200,315],255,315,328);
 row('one','class',['C222'],[317,428],256,315,328);
 row('one','class',['C211','C212','C213'],[200,291,383,469],335,395,328);
 row('one','class',['C268'],[788,873],256,316,328);
 row('one','lab',['CL266'],[875,1007],256,316,328);
 row('one','class',['C265'],[747,825],336,395,328);
 row('one','lab',['CL264','CL263'],[825,917,1006],336,395,328);
 room('one','C210','class',77,355,155,419,174,385);
 room('one','C262','class',1028,355,1105,418,1018,385);
 row('one','class',['C207','C205','C203'],[200,272,343,411],518,580,592);
 row('one','class',['C255','C257','C259'],[802,873,937,1007],518,580,592);
 row('one','class',['C208','C206','C204','C202'],[157,235,314,393,471],608,674,592);
 row('one','class',['C254','C256','C258','C260'],[745,817,887,956,1028],607,675,592);
 room('one','IT Department','service',690,676,738,730,688,635);
 room('one','Finance Department','service',620,676,682,730,657,635);
 // FLOOR 2 HIT-BOX FIX: exact color-block extents, measured from user's reference image.
 // Slight inset from the black stroke prevents a tap-target from spilling onto a neighboring room.
 room('two','C386','class',755,287,838,349,823,358);
 room('two','C385','class',855,287,940,349,924,358);
 room('two','CL378','lab',745,388,810,458,757,358);
 room('two','CL379','lab',814,388,873,458,865,358);
 room('two','CL380','lab',876,388,945,458,939,358);
 room('two','C325','class',305,421,386,457,372,459);
 room('two','C321','class',165,488,234,553,199,459);
 room('two','C322','class',237,488,305,553,267,459);
 room('two','C323','class',308,488,375,553,338,459);
 room('two','C329','class',378,488,442,553,402,459);
 room('two','C374','class',702,488,763,553,724,459);
 room('two','C373','class',766,488,826,553,798,459);
 room('two','C372','class',829,488,885,553,857,459);
 room('two','C371','class',888,488,946,553,919,459);
 room('two','C320','class',60,488,126,552,140,506);
 room('two','C370','class',979,510,1040,574,962,562);
 room('two','Library','library',478,332,638,495,557,551);
 // Location doors for restroom/service shortcuts (not classroom guesses).
 room('one',"Men's Bathroom",'bathmen',429,249,469,318,488,293);
 room('one',"Women's Bathroom",'bathwomen',745,247,789,317,724,290);
 room('two',"Men's Bathroom (Floor 2)",'bathmen',390,388,441,457,446,414);
 room('two',"Women's Bathroom (Floor 2)",'bathwomen',701,388,741,458,695,413);
 room('one',"Men's Bathroom (near C210)",'bathmen',116,287,153,346,174,328);
 room('one',"Women's Bathroom (near C262)",'bathwomen',1028,284,1068,349,1018,328);
 function tuneRoom(floor,id,patch){const r=rooms.find(r=>r.floor===floor&&r.id===id);if(r)Object.assign(r,patch);}
 // Door dots adjusted to match the user-marked classroom doors on the reference images.
 tuneRoom('one','CL220',{approach:[257,232],door:[256,250]});
 tuneRoom('one','C222',{approach:[372,232],door:[366,250]});
 tuneRoom('one','C213',{approach:[488,365],door:[474,366]});
 tuneRoom('one','C268',{approach:[830,232],door:[805,251]});
 tuneRoom('one','CL266',{approach:[941,232],door:[913,251]});
 tuneRoom('one','C265',{approach:[724,328],door:[742,365]});
 // Verified door-dot placement from orange wall markers in the user-provided Floor 2 reference.
 tuneRoom('two','C386',{approach:[823, 358],door:[823, 351]});
 tuneRoom('two','C385',{approach:[924, 358],door:[924, 351]});
 tuneRoom('two','CL378',{approach:[757, 358],door:[757, 388]});
 tuneRoom('two','CL379',{approach:[865, 358],door:[865, 388]});
 tuneRoom('two','CL380',{approach:[939, 358],door:[939, 388]});
 tuneRoom('two','C325',{approach:[372, 459],door:[372, 458]});
 tuneRoom('two','C321',{approach:[199, 459],door:[199, 488]});
 tuneRoom('two','C322',{approach:[267, 459],door:[267, 488]});
 tuneRoom('two','C323',{approach:[338, 459],door:[338, 488]});
 tuneRoom('two','C329',{approach:[402, 459],door:[402, 488]});
 tuneRoom('two','C374',{approach:[724, 459],door:[724, 488]});
 tuneRoom('two','C373',{approach:[798, 459],door:[798, 488]});
 tuneRoom('two','C372',{approach:[857, 459],door:[857, 488]});
 tuneRoom('two','C371',{approach:[919, 459],door:[919, 488]});
 tuneRoom('two','C320',{approach:[140, 506],door:[130, 506]});
 tuneRoom('two','C370',{approach:[962, 562],door:[976, 562]});
 // Floor 2 library fix: restore the selection outline to follow the real library shape,
 // and restore the two visible door dots at the library entrances.
 tuneRoom('two','Library',{
   approach:[695,358],
   door:[702,347],
   doorDots:[[449,347],[702,347]],
   poly:[[417,241],[414,278],[447,311],[447,347],[492,342],[493,504],[652,503],[652,342],[698,347],[731,242],[659,219],[497,219]]
 });

 // Ground Floor rebuilt against the exact 1619×972 reference image supplied by the project owner.
 // Floor 1 and Floor 2 definitions above are intentionally untouched.
 const groundPlaces=[
 ["Food Hall","food",284,119,1154,271,590,271],
 ["Gaming Room","gaming",243,270,393,433,304,445],
 ["Administration","admin",393,270,559,433,526,445],
 ["Auditorium","auditorium",607,270,834,433,724,445],
 ["Student Life","studentlife",876,339,1012,433,984,445],
 ["Registration Office","registration",1012,339,1165,433,1143,445],
 ["Advising","advising",1054,710,1174,813,1112,700],
 ["Clinic","clinic",974,710,1054,813,1014,700],
 ["Security Office","security",870,710,974,813,921,700],
 ["ATM","atm",869,402,916,448,850,425],
 ["eSports Room","esports",238,511,319,616,281,495],
 ["Restaurants / Coffee Shops (Food Hall West)","shops",357,137,499,241,425,264],
 ["Restaurants / Coffee Shops (Food Hall Center)","shops",651,176,803,264,724,264],
 ["Restaurants / Coffee Shops (Food Hall East)","shops",947,137,1085,241,1005,264],
 ["Restaurants / Coffee Shops (Southwest)","shops",319,511,518,616,400,495],
 ["Restaurants / Coffee Shops (Southeast)","shops",962,511,1174,617,1060,495],
 ["Under Maintenance","maintenance",109,511,554,814,240,616],
 ["Men's Bathroom (West)","bathmen",152,298,205,364,220,330],
 ["Men's Bathroom (North)","bathmen",509,270,560,340,580,304],
 ["Women's Bathroom (North)","bathwomen",874,270,921,342,850,305],
 ["Women's Bathroom (South)","bathwomen",917,615,962,680,885,647],
 ["Elevator (West)","accessible",118,191,208,268,220,264],
 ["Elevator (Center)","elevator",658,489,782,613,640,550],
 ["Elevator (East North) Accessible","accessible",1209,193,1302,268,1188,264],
 ["Elevator (East South) Accessible","accessible",1221,518,1296,600,1188,570],
 ["Stairs (West North)","stairs",151,137,208,190,220,181],
 ["Stairs (East North)","stairs",1209,140,1265,192,1188,181],
 ["Stairs (Southwest Inner)","stairs",457,557,522,616,540,589],
 ["Stairs (Southwest Outer)","stairs",553,585,613,654,640,651],
 ["Stairs (Southeast Inner)","stairs",910,555,962,614,885,586],
 ["Stairs (Southeast Outer)","stairs",817,585,880,653,846,700],
 ["Stairs (East South)","stairs",1221,600,1286,665,1188,630],
 ["Gate 1 — Open","gate",640,842,805,913,710,815],
 ["Gate 2 — Open","gate",1175,795,1328,866,1188,815],
 ["Gate 3 — Closed","closed",1210,413,1340,488,1188,469],
 ["Gate 4 — Open","gate",1121,31,1290,106,1194,120],
 ["Gate 5 — Open","gate",629,13,796,78,711,118],
 ["Gate 6 — Open","gate",151,32,313,97,235,120],
 ["Gate 7 — Closed","closed",49,413,183,486,188,449],
 ["Gate 8 — Closed for Maintenance","closed",54,734,198,824,188,774]
 ];
 groundPlaces.forEach(([id,kind,x1,y1,x2,y2,dx,dy])=>room('ground',id,kind,x1,y1,x2,y2,dx,dy));

 // Exact non-rectangular room outlines so clickable/highlighted areas do not cover bathrooms, ATMs, or stairs.
 tuneRoom('ground','Administration',{poly:[[393,270],[509,270],[509,340],[560,340],[560,433],[393,433]]});
 tuneRoom('ground','Student Life',{poly:[[876,343],[1012,343],[1012,433],[916,433],[916,402],[876,402]]});
 tuneRoom('ground','Restaurants / Coffee Shops (Southwest)',{poly:[[319,511],[518,511],[518,556],[456,556],[456,616],[319,616]]});

 // One continuous Food Hall hit target: outer pink hall with holes for the three green shop islands
 // and the two white service boxes. This replaces the old scattered pink mini-buttons.
 const foodHallShape={
   outer:[[284,119],[1154,119],[1154,270],[284,270]],
   holes:[
     [[357,137],[499,137],[499,241],[357,241]],
     [[651,176],[803,176],[803,264],[651,264]],
     [[947,137],[1085,137],[1085,241],[947,241]],
     [[286,215],[357,215],[357,248],[286,248]],
     [[1085,215],[1152,215],[1152,248],[1085,248]]
   ]
 };
 const pathFromRings=(outer,holes=[])=>{
   const ring=r=>'M '+r.map(p=>p[0]+' '+p[1]).join(' L ')+' Z';
   return [ring(outer),...holes.map(ring)].join(' ');
 };
 const foodHallPathD=pathFromRings(foodHallShape.outer,foodHallShape.holes);

 // One connected maintenance shape matching the orange area. It intentionally excludes eSports,
 // the southwest restaurant, both stair boxes and every white corridor.
 const maintenanceShape=[[109,511],[238,511],[238,616],[553,616],[553,814],[201,814],[201,631],[184,631],[184,603],[109,603]];
 const maintenancePathD=pathFromRings(maintenanceShape);

 const roomById=new Map(rooms.map(r=>[r.id,r]));
 // Walkable corridor centre-lines. NEVER connect across a room or the gray elevator cores.
 const hallway={
  ground:[['h',415,300,1110],['h',450,300,1110],['h',620,300,1110],['v',300,415,620],['v',600,415,620],['v',710,415,620],['v',820,415,620],['v',884,415,620],['v',1010,415,620],['v',1110,415,620]],
  one:[
   ['h',232,174,1018],['h',328,174,488],['h',328,724,1018],['h',410,488,724],
   ['h',592,174,488],['h',592,724,1018],['h',635,488,724],
   ['v',174,232,592],['v',488,232,635],['v',724,232,635],['v',1018,232,592]
  ],
  two:[
   ['h',358,140,446],['h',358,695,962],['h',459,140,446],['h',459,695,962],
   ['h',551,446,695],['h',825,140,962],
   ['v',140,358,825],['v',446,358,825],['v',695,358,825],['v',962,358,825]
  ]
 };
 // Linked floor-change symbols are paired by name on the supplied diagrams; site confirmation is still required.
 const portals={
  NW:{name:'northwest',type:'stairs',one:[174,232],two:[140,358]},
  NE:{name:'northeast',type:'stairs',one:[1018,232],two:[962,358]},
  SW:{name:'southwest',type:'stairs',one:[174,592],two:[140,705]},
  SE:{name:'southeast',type:'stairs',one:[1018,592],two:[962,705]},
  MIDL:{name:'middle-left',type:'stairs',one:[488,482],two:[446,616]},
  MIDR:{name:'middle-right',type:'stairs',one:[724,482],two:[695,616]},
  ANW:{name:'northwest',type:'accessible',one:[174,247],two:[140,380]},
  ANE:{name:'northeast',type:'accessible',one:[1018,247],two:[962,380]},
  ASW:{name:'southwest',type:'accessible',one:[174,550],two:[140,680]},
  ASE:{name:'southeast',type:'accessible',one:[1018,550],two:[962,680]}
 };
 const state={floor:'one',from:'',to:'',accessible:false,route:null,step:0,zoom:1};
 function fromOriginal(f,p){return [p[0]-floors[f].crop[0],p[1]-floors[f].crop[1]];}
 function labelFor(r){if(!r)return '';return placeLabel(r.id)+(r.kind==='lab'?' · '+mt('nameLab'):'');}
 function svgEl(tag,attrs,parent){const el=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))el.setAttribute(k,String(v));(parent||refs.lines).appendChild(el);return el;}
 function graphPath(f,start,end){
  const seg=hallway[f];if(!seg||!start||!end)return null;
  const points=new Map(),edges=new Map();
  const key=(p)=>p[0].toFixed(2)+','+p[1].toFixed(2);
  function node(p){const k=key(p);if(!points.has(k)){points.set(k,p);edges.set(k,[]);}return k;}
  const allEndpoints=[start,end,...Object.values(portals).map(x=>x[f])];
  for(const s of seg){const [ori,v,a,b]=s;node(ori==='h'?[a,v]:[v,a]);node(ori==='h'?[b,v]:[v,b]);}
  for(let i=0;i<seg.length;i++)for(let j=i+1;j<seg.length;j++){
   const a=seg[i],b=seg[j];if(a[0]===b[0])continue;
   const h=a[0]==='h'?a:b,v=a[0]==='v'?a:b;
   if(v[1]>=h[2]&&v[1]<=h[3]&&h[1]>=v[2]&&h[1]<=v[3])node([v[1],h[1]]);
  }
  for(const p of allEndpoints)if(p)node(p);
  // Split each known safe corridor into adjacent steps at every crossing, portal and doorway.
  for(const s of seg){const [dir,z,a,b]=s;const found=Array.from(points.values()).filter(p=>dir==='h'?Math.abs(p[1]-z)<.01&&p[0]>=a-.01&&p[0]<=b+.01:Math.abs(p[0]-z)<.01&&p[1]>=a-.01&&p[1]<=b+.01).sort((x,y)=>dir==='h'?x[0]-y[0]:x[1]-y[1]);
   for(let i=1;i<found.length;i++){const u=key(found[i-1]),v=key(found[i]),w=Math.hypot(found[i][0]-found[i-1][0],found[i][1]-found[i-1][1]);edges.get(u).push([v,w]);edges.get(v).push([u,w]);}}
  const source=key(start),target=key(end);
  const dist=new Map([[source,0]]),previous=new Map(),queue=new Set(edges.keys());
  while(queue.size){let u=null,best=Infinity;for(const id of queue){const d=dist.get(id)??Infinity;if(d<best){best=d;u=id;}}if(u===null)break;if(u===target)break;queue.delete(u);for(const [v,w] of edges.get(u)||[]){const nd=best+w;if(nd<(dist.get(v)??Infinity)){dist.set(v,nd);previous.set(v,u);}}}
  if(!dist.has(target))return null;
  const result=[end];let walk=target,count=0;while(walk!==source&&count++<points.size){walk=previous.get(walk);if(!walk)return null;result.push(points.get(walk));}result.reverse();
  // Remove redundant collinear waypoints for clear right-angle directions.
  const compact=result.filter((p,i)=>{if(i===0||i===result.length-1)return true;const a=result[i-1],b=result[i+1];return !((a[0]===p[0]&&p[0]===b[0])||(a[1]===p[1]&&p[1]===b[1]));});
  return {points:compact,length:dist.get(target)};
 }
 function extendToDoors(path,first,last){
  // Keep the doorway connection in the white corridor. Never draw a diagonal
  // across a classroom just because a door marker and approach are offset.
  const result=path.slice();
  const different=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1])>.01;
  if(first&&different(first.door,first.approach)){
   const corner=[first.door[0],first.approach[1]];
   if(different(corner,first.door)&&different(corner,result[0]))result.unshift(corner);
   result.unshift(first.door);
  }
  if(last&&different(last.door,last.approach)){
   const corner=[last.door[0],last.approach[1]];
   if(different(corner,last.door)&&different(corner,result[result.length-1]))result.push(corner);
   result.push(last.door);
  }
  return result;
 }
 function entrances(r){
  if(r.id==='Library'&&r.floor==='two')return [
   {approach:[446,358],door:[449,347],name:'west'},
   {approach:[695,358],door:[702,347],name:'east'}
  ];
  return [{approach:r.approach,door:r.door,name:'main'}];
 }

 // Ground Floor navigation graph rebuilt from the visible white corridors and the yellow entrance dots
 // WALL-SAFE RULE: intermediate nodes sit inside corridor centers; only the final short segment may touch a yellow entrance dot.
 // on the exact supplied reference image. Every link below is horizontal/vertical and stays outside rooms.
 const groundWaypoints={
   // Upper Food Hall / north corridor
   U0:[220,264], U_FHW:[358,264], U_SHW:[425,264], U_M:[580,264], U_590:[590,264],
   U_FHC:[724,264], U_853:[853,264], U_SHE:[1005,264], U_FHE:[1083,264], U_R:[1188,264],
   FH_W:[358,258], FH_ML:[590,271], FH_MR:[853,271], FH_E:[1083,258],
   SHW_D:[425,241], SHC_D:[724,264], SHE_D:[1005,241],
   MENW_A:[220,330], MENW_D:[204,330], MENN_A:[580,304], MENN_D:[559,304],
   WOMN_A:[850,305], WOMN_D:[876,305],
   ACC_W_D:[208,264], ACC_EN_D:[1208,264],
   NW_COR:[220,181], NW_STAIR_D:[208,181], NE_COR:[1188,181], NE_STAIR_D:[1208,181],
   G6_COR:[220,120], G6_D:[235,120], FHTOP_L:[580,150], G5_M:[711,150], G5_D:[711,118], G4_D:[1194,120],

   // Main corridor under the upper rooms. These points are deliberately centered
   // in the WHITE walkway between the room walls and the long gray barriers.
   // Keeping the route away from both edges stops the guidance line from visually
   // cutting through walls when the map is zoomed.
   L_MAIN:[220,441], GAM_A:[305,441], GAM_D:[305,432], ADM_A:[526,441], ADM_D:[526,432],
   ML_MAIN:[575,441], AUD_A:[724,441], AUD_D:[724,431], MR_MAIN:[850,441],
   ATM_A:[850,425], ATM_D:[868,425],
   R_START:[930,441], STU_A:[984,441], STU_D:[984,435], REG_A:[1143,441], REG_D:[1143,435], R_MAIN:[1176,441],

   // Lower-left corridor. The 492 lane is centered between the gray barrier above
   // and the eSports/shop/stair blocks below. The 535 lane is the middle of the
   // narrow white passage beside the Southwest Inner stair.
   L_LOW:[220,492], ES_A:[281,492], ES_D:[281,512], SWS_A:[400,492], SWS_D:[400,511],
   SWI_TOP:[535,492], SWI_A:[535,589], SWI_D:[519,589], ML_LOW:[575,492],
   BYPL_TOP:[635,492], BYPL_550:[635,550], BYPL_651:[635,651], BYPL_BOT:[635,691],
   ELEV_C_D:[660,550], SWO_D:[581,651],

   // Lower-right corridor. Keep the route centered in the white vertical channel
   // between the center elevator and the Southeast stair/shop structure.
   MR_LOW:[850,492], BYPR_TOP:[887,492], BYPR_586:[887,586], BYPR_647:[887,647], BYPR_BOT:[887,691],
   SES_A:[1060,492], SES_D:[1060,511], SEI_D:[914,586], WOM_S_D:[918,647],
   SEO_BOT:[847,691], SEO_D:[847,652],

   // South service corridor / entrances. y=691 is the center of the open strip
   // above Security / Clinic / Advising and below the lower stair structures.
   BOT_L:[710,691], SEC_A:[922,691], SEC_D:[922,712], CL_A:[1014,691], CL_D:[1014,712],
   ADV_A:[1100,691], ADV_D:[1100,712], R_BOT:[1176,691], G1_D:[710,815], G2_D:[1176,815],

   // East vertical corridor. x=1176 stays in the middle of the white passage
   // between Registration/gray barrier and the east accessible-elevator blocks.
   R_LOW:[1176,492], R_ACC:[1176,570], ACC_ES_D:[1200,570], R_STAIR:[1176,630], EAST_S_D:[1200,630]
 };
 const groundLinks=[
   // continuous bottom edge of the Food Hall
   ['U0','U_FHW'],['U_FHW','U_SHW'],['U_SHW','U_M'],['U_M','U_590'],['U_590','U_FHC'],['U_FHC','U_853'],['U_853','U_SHE'],['U_SHE','U_FHE'],['U_FHE','U_R'],
   ['U_FHW','FH_W'],['U_590','FH_ML'],['U_853','FH_MR'],['U_FHE','FH_E'],
   ['U_SHW','SHW_D'],['U_FHC','SHC_D'],['U_SHE','SHE_D'],
   ['U0','ACC_W_D'],['U_R','ACC_EN_D'],
   ['U0','NW_COR'],['NW_COR','NW_STAIR_D'],['NW_COR','G6_COR'],['G6_COR','G6_D'],
   ['U_R','NE_COR'],['NE_COR','NE_STAIR_D'],['NE_COR','G4_D'],
   ['U_M','FHTOP_L'],['FHTOP_L','G5_M'],['G5_M','G5_D'],
   ['U0','MENW_A'],['MENW_A','MENW_D'],['U_M','MENN_A'],['MENN_A','MENN_D'],['U_853','WOMN_A'],['WOMN_A','WOMN_D'],

   // vertical connections from upper corridor to the main corridor
   ['U0','L_MAIN'],['U_M','ML_MAIN'],['U_853','MR_MAIN'],['U_R','R_MAIN'],

   // left/main corridor under Gaming, Administration and Auditorium
   ['L_MAIN','GAM_A'],['GAM_A','ADM_A'],['ADM_A','ML_MAIN'],['GAM_A','GAM_D'],['ADM_A','ADM_D'],
   ['ML_MAIN','AUD_A'],['AUD_A','MR_MAIN'],['AUD_A','AUD_D'],
   ['MR_MAIN','ATM_A'],['ATM_A','ATM_D'],

   // right main corridor is separated from the left by the ATM; it reconnects around the lower corridor
   ['R_START','STU_A'],['STU_A','REG_A'],['REG_A','R_MAIN'],['STU_A','STU_D'],['REG_A','REG_D'],

   // lower-left lane
   ['ML_MAIN','ML_LOW'],['ML_LOW','SWI_TOP'],['SWI_TOP','SWS_A'],['SWS_A','ES_A'],['ES_A','L_LOW'],
   ['ES_A','ES_D'],['SWS_A','SWS_D'],['SWI_TOP','SWI_A'],['SWI_A','SWI_D'],
   ['ML_LOW','BYPL_TOP'],['BYPL_TOP','BYPL_550'],['BYPL_550','BYPL_651'],['BYPL_651','BYPL_BOT'],
   ['BYPL_550','ELEV_C_D'],['BYPL_651','SWO_D'],

   // lower-right lane / right bypass
   ['MR_MAIN','MR_LOW'],['MR_LOW','BYPR_TOP'],['BYPR_TOP','SES_A'],['SES_A','R_LOW'],['SES_A','SES_D'],
   ['BYPR_TOP','BYPR_586'],['BYPR_586','BYPR_647'],['BYPR_647','BYPR_BOT'],['BYPR_586','SEI_D'],['BYPR_647','WOM_S_D'],
   ['R_MAIN','R_LOW'],['R_LOW','R_ACC'],['R_ACC','R_STAIR'],['R_STAIR','R_BOT'],['R_ACC','ACC_ES_D'],['R_STAIR','EAST_S_D'],

   // bottom service corridor and the clear passage under the center elevator
   ['BYPL_BOT','BOT_L'],['BOT_L','SEO_BOT'],['SEO_BOT','BYPR_BOT'],['SEO_BOT','SEO_D'],
   ['BYPR_BOT','SEC_A'],['SEC_A','CL_A'],['CL_A','ADV_A'],['ADV_A','R_BOT'],
   ['SEC_A','SEC_D'],['CL_A','CL_D'],['ADV_A','ADV_D'],['BOT_L','G1_D'],['R_BOT','G2_D']
 ];

 // Each location can have one or more real entrances. Food Hall has four yellow entrances,
 // so routing automatically chooses the closest valid one instead of forcing every trip to the middle.
 const groundAccess={
   'Food Hall':['FH_W','FH_ML','FH_MR','FH_E'],
   'Gaming Room':['GAM_D'],'Administration':['ADM_D'],'Auditorium':['AUD_D'],
   'Student Life':['STU_D'],'Registration Office':['REG_D'],'ATM':['ATM_D'],
   'Security Office':['SEC_D'],'Clinic':['CL_D'],'Advising':['ADV_D'],
   'eSports Room':['ES_D'],
   'Restaurants / Coffee Shops (Food Hall West)':['SHW_D'],
   'Restaurants / Coffee Shops (Food Hall Center)':['SHC_D'],
   'Restaurants / Coffee Shops (Food Hall East)':['SHE_D'],
   'Restaurants / Coffee Shops (Southwest)':['SWS_D'],
   'Restaurants / Coffee Shops (Southeast)':['SES_D'],
   "Men's Bathroom (West)":['MENW_D'],"Men's Bathroom (North)":['MENN_D'],
   "Women's Bathroom (North)":['WOMN_D'],"Women's Bathroom (South)":['WOM_S_D'],
   'Elevator (West)':['ACC_W_D'],'Elevator (Center)':['ELEV_C_D'],
   'Elevator (East North) Accessible':['ACC_EN_D'],'Elevator (East South) Accessible':['ACC_ES_D'],
   'Stairs (West North)':['NW_STAIR_D'],'Stairs (East North)':['NE_STAIR_D'],
   'Stairs (Southwest Inner)':['SWI_D'],'Stairs (Southwest Outer)':['SWO_D'],
   'Stairs (Southeast Inner)':['SEI_D'],'Stairs (Southeast Outer)':['SEO_D'],'Stairs (East South)':['EAST_S_D'],
   'Gate 1 — Open':['G1_D'],'Gate 2 — Open':['G2_D'],'Gate 4 — Open':['G4_D'],'Gate 5 — Open':['G5_D'],'Gate 6 — Open':['G6_D']
 };

 function groundShortest(start,end){
   if(!groundWaypoints[start]||!groundWaypoints[end])return null;
   const adj={};Object.keys(groundWaypoints).forEach(k=>adj[k]=[]);
   for(const [u,v] of groundLinks){
     const a=groundWaypoints[u],b=groundWaypoints[v];if(!a||!b)continue;
     const d=Math.hypot(a[0]-b[0],a[1]-b[1]);adj[u].push([v,d]);adj[v].push([u,d]);
   }
   const dist={[start]:0},prev={},unseen=new Set(Object.keys(adj));
   while(unseen.size){
     let u=null;for(const n of unseen)if(dist[n]!==undefined&&(u===null||dist[n]<dist[u]))u=n;
     if(u===null)break;unseen.delete(u);if(u===end)break;
     for(const [v,d] of adj[u])if(unseen.has(v)&&(dist[v]===undefined||dist[u]+d<dist[v])){dist[v]=dist[u]+d;prev[v]=u;}
   }
   if(dist[end]===undefined)return null;
   const ids=[end];while(ids[0]!==start){const p=prev[ids[0]];if(!p)return null;ids.unshift(p);}
   const raw=ids.map(id=>groundWaypoints[id]);
   // keep turns/endpoints only; this makes the yellow line clean instead of zig-zagging through every graph node
   const points=raw.filter((p,i)=>{if(i===0||i===raw.length-1)return true;const a=raw[i-1],b=raw[i+1];return !((a[0]===p[0]&&p[0]===b[0])||(a[1]===p[1]&&p[1]===b[1]));});
   return {points,length:dist[end]};
 }
 function groundPlan(from,to,accessible){
   if(from.floor!=='ground'||to.floor!=='ground')return null;
   if(['closed','maintenance'].includes(from.kind)||['closed','maintenance'].includes(to.kind))return null;
   if(accessible&&(from.kind==='stairs'||to.kind==='stairs'||from.id==='Elevator (Center)'||to.id==='Elevator (Center)'))return null;
   const starts=groundAccess[from.id]||[],ends=groundAccess[to.id]||[];
   if(!starts.length||!ends.length)return null;
   let best=null;
   for(const a of starts)for(const b of ends){const p=groundShortest(a,b);if(p&&(!best||p.length<best.length))best={...p,a,b};}
   if(!best)return null;
   return {from,to,accessible,legs:[{floor:'ground',path:best.points}],portal:null,length:best.length,
     fromDoor:groundWaypoints[best.a],toDoor:groundWaypoints[best.b],preview:false};
 }
 function plan(fromId,toId,accessible){
  const from=roomById.get(fromId),to=roomById.get(toId);if(!from||!to)return null;
  if(from.floor==='ground'||to.floor==='ground'){
    if(from.floor===to.floor)return groundPlan(from,to,accessible);
    // Cross-floor preview: only connect portals explicitly paired between floors.
    // Avoid inventing a path if either segment is disconnected.
    const gFrom=from.floor==='ground',gRoom=gFrom?from:to,upper=gFrom?to:from;
    const groundPortalCandidates=[
      // Edge stairs
      {id:'GNW',name:'northwest',type:'stairs',ground:'NW_STAIR_D',one:[174,232],two:[140,358]},
      {id:'GNE',name:'northeast',type:'stairs',ground:'NE_STAIR_D',one:[1018,232],two:[962,358]},
      {id:'GSE',name:'southeast',type:'stairs',ground:'EAST_S_D',one:[1018,592],two:[962,705]},
      // Central stair blocks visible on the Ground Floor reference. Two physical doors can feed the same
      // central upper-floor stair corridor; keeping both lets the router choose the nearest real door.
      {id:'GMIDL_IN',name:'middle-left',type:'stairs',ground:'SWI_D',one:[488,482],two:[446,616]},
      {id:'GMIDL_OUT',name:'middle-left',type:'stairs',ground:'SWO_D',one:[488,482],two:[446,616]},
      {id:'GMIDR_IN',name:'middle-right',type:'stairs',ground:'SEI_D',one:[724,482],two:[695,616]},
      {id:'GMIDR_OUT',name:'middle-right',type:'stairs',ground:'SEO_D',one:[724,482],two:[695,616]},
      // Wheelchair-accessible lifts. Accessible mode filters to these only.
      {id:'GAW',name:'northwest',type:'accessible',ground:'ACC_W_D',one:[174,247],two:[140,380]},
      {id:'GAE',name:'northeast',type:'accessible',ground:'ACC_EN_D',one:[1018,247],two:[962,380]},
      {id:'GAS',name:'southeast',type:'accessible',ground:'ACC_ES_D',one:[1018,550],two:[962,680]}
    ];
    let bestCross=null;
    for(const portal of groundPortalCandidates){
      if(accessible&&portal.type!=='accessible')continue;
      const fake={id:'__portal_'+portal.id,floor:'ground',kind:'portal',door:groundWaypoints[portal.ground]};
      const oldNode=groundAccess[fake.id];groundAccess[fake.id]=[portal.ground];
      const groundRoute=gFrom?groundPlan(gRoom,fake,accessible):groundPlan(fake,gRoom,accessible);
      if(oldNode===undefined)delete groundAccess[fake.id];else groundAccess[fake.id]=oldNode;
      if(!groundRoute)continue;
      for(const ent of entrances(upper)){
        const upperPath=gFrom?graphPath(upper.floor,portal[upper.floor],ent.approach):graphPath(upper.floor,ent.approach,portal[upper.floor]);
        if(!upperPath)continue;
        const upperPoints=gFrom?extendToDoors(upperPath.points,null,{door:ent.door,approach:ent.approach}):extendToDoors(upperPath.points,{door:ent.door,approach:ent.approach},null);
        const groundLeg=groundRoute.legs[0];
        const throughOne=upper.floor==='two'?[{floor:'one',path:[portal.one]}]:[];
        const length=groundRoute.length+upperPath.length;
        const tied=bestCross&&Math.abs(length-bestCross.length)<=1;
        const preferStairsOnTie=tied&&portal.type==='stairs'&&bestCross.portal?.type==='accessible';
        if(!bestCross||length<bestCross.length-1||preferStairsOnTie)bestCross={from,to,accessible,
         legs:gFrom?[groundLeg,...throughOne,{floor:upper.floor,path:upperPoints}]:[{floor:upper.floor,path:upperPoints},...throughOne,groundLeg],
         portal,fromDoor:gFrom?groundRoute.fromDoor:ent.door,toDoor:gFrom?ent.door:groundRoute.toDoor,length,preview:true};
      }
    }
    return bestCross;
   }
  let best=null;
  for(const a of entrances(from))for(const b of entrances(to)){
   const fromDoor={...from,...a},toDoor={...to,...b};
   const entryCost=Math.hypot(a.door[0]-a.approach[0],a.door[1]-a.approach[1]);
   const exitCost=Math.hypot(b.door[0]-b.approach[0],b.door[1]-b.approach[1]);
   if(from.floor===to.floor){
    const path=graphPath(from.floor,a.approach,b.approach);
    if(path){const length=path.length+entryCost+exitCost;
     if(!best||length<best.length)best={from,to,accessible,legs:[{floor:from.floor,path:extendToDoors(path.points,fromDoor,toDoor)}],portal:null,length,fromDoor:a.door,toDoor:b.door};}
   }else{
    for(const [id,p] of Object.entries(portals)){
     if(accessible ? p.type!=='accessible' : !['stairs','accessible'].includes(p.type))continue;
     if(!p[from.floor]||!p[to.floor])continue;
     const first=graphPath(from.floor,a.approach,p[from.floor]),last=graphPath(to.floor,p[to.floor],b.approach);
     if(!first||!last)continue;
     const length=first.length+last.length+entryCost+exitCost;
     const tied=best&&Math.abs(length-best.length)<=1;
     const preferStairsOnTie=tied&&p.type==='stairs'&&best.portal?.type==='accessible';
     if(!best||length<best.length-1||preferStairsOnTie)best={from,to,accessible,legs:[{floor:from.floor,path:extendToDoors(first.points,fromDoor,null)},{floor:to.floor,path:extendToDoors(last.points,null,toDoor)}],portal:{id,...p},length,fromDoor:a.door,toDoor:b.door};
    }
   }
  }
  return best;
 }

 function draw(){
  refs.lines.replaceChildren();refs.overlay.replaceChildren();const floor=state.floor;
  if(floor!=='one'&&floor!=='two'&&floor!=='ground')return;
  if(floor==='ground'){
    const fhClass='orbit-nav-hit food-hall-hit'+(state.from==='Food Hall'?' selected':'')+(state.to==='Food Hall'?' end':'');
    const fh=svgEl('path',{class:fhClass,d:foodHallPathD,'fill-rule':'evenodd','clip-rule':'evenodd','data-room':'Food Hall',role:'button',tabindex:0,'aria-label':'Select Food Hall'},refs.overlay);
    fh.addEventListener('click',()=>selectMapRoom(roomById.get('Food Hall')));
    fh.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectMapRoom(roomById.get('Food Hall'));}});
    // One clean external outline, so selecting Food Hall looks like one area rather than many mini-boxes.
    if(state.from==='Food Hall'||state.to==='Food Hall'){
      const c=state.to==='Food Hall'?'#ee2f50':'#ffdb22';
      svgEl('polygon',{class:'food-hall-outline',points:foodHallShape.outer.map(p=>p.join(',')).join(' '),fill:'none',stroke:c,'stroke-width':5,'stroke-linejoin':'round','pointer-events':'none'},refs.overlay);
    }
    const maintClass='orbit-nav-hit'+(state.from==='Under Maintenance'?' selected':'')+(state.to==='Under Maintenance'?' end':'');
    const mh=svgEl('path',{class:maintClass,d:maintenancePathD,'data-room':'Under Maintenance',role:'button',tabindex:0,'aria-label':'Under Maintenance — closed'},refs.overlay);
    mh.addEventListener('click',()=>selectMapRoom(roomById.get('Under Maintenance')));
    mh.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectMapRoom(roomById.get('Under Maintenance'));}});
  }
  for(const r of rooms.filter(r=>r.floor===floor&&!(floor==='ground'&&(r.id==='Food Hall'||r.id==='Under Maintenance')))){
    const stateClass='orbit-nav-hit'+(state.from===r.id?' selected':'')+(state.to===r.id?' end':'');
    let hit;
    if(Array.isArray(r.poly)&&r.poly.length>=3){
      const points=r.poly.map(p=>fromOriginal(floor,p).map(v=>Math.round(v*10)/10).join(',')).join(' ');
      hit=svgEl('polygon',{class:stateClass,points,tabindex:0,role:'button','aria-label':mt('select')+' '+placeLabel(r.id)+' · '+floorLabel(floor),'data-room':r.id},refs.overlay);
    }else{
      const [x1,y1,x2,y2]=r.rect,xy=fromOriginal(floor,[x1,y1]);
      hit=svgEl('rect',{class:stateClass,x:xy[0],y:xy[1],width:x2-x1,height:y2-y1,tabindex:0,role:'button','aria-label':mt('select')+' '+placeLabel(r.id)+' · '+floorLabel(floor),'data-room':r.id},refs.overlay);
    }
    svgEl('title',{},hit).textContent=mt('select')+' '+placeLabel(r.id);
    hit.addEventListener('click',()=>selectMapRoom(r));
    hit.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectMapRoom(r);}});
  }
  // Ground Floor uses the yellow entrance dots already present in the user's map image.
  // Do not draw duplicate or misplaced dots over the image.
  // Visible door pins: yellow dots mark confirmed door locations. Some spaces, like the Floor 2 library,
  // have more than one confirmed doorway, so each doorway gets its own selectable dot.
  for(const r of rooms.filter(r=>r.floor===floor&&floor!=='ground')){
    const dots=(Array.isArray(r.doorDots)&&r.doorDots.length)
      ? r.doorDots
      : ((r.kind==='class'||r.kind==='lab') ? [r.door] : []);
    if(!dots.length)continue;
    const selected=state.from===r.id||state.to===r.id;
    dots.forEach((doorPoint,index)=>{
      const [x,y]=fromOriginal(floor,doorPoint);
      const dot=svgEl('circle',{class:'orbit-classroom-door'+(selected?' active':''),cx:x,cy:y,r:selected?6.5:4.6,
        'data-door':r.id+':'+index,role:'button',tabindex:0,'aria-label':mt('door')+' '+placeLabel(r.id)},refs.overlay);
      svgEl('title',{},dot).textContent=mt('door')+': '+placeLabel(r.id);
      dot.addEventListener('click',()=>selectMapRoom(r));
      dot.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectMapRoom(r);}});
    });
  }
  if(!state.route)return;
  for(const leg of state.route.legs.filter(l=>l.floor===floor && floor===createSteps(state.route)[state.step].floor)){
    const points=leg.path.map(p=>fromOriginal(floor,p).map(v=>Math.round(v*10)/10).join(',')).join(' ');
    const routeOutlineWidth=floor==='ground'?8:12;
    const routeInnerWidth=floor==='ground'?4.5:7;
    svgEl('polyline',{points,fill:'none',stroke:'#111c35','stroke-width':routeOutlineWidth,'stroke-linejoin':'round','stroke-linecap':'round',opacity:.82});
    svgEl('polyline',{points,fill:'none',stroke:'#ffdc36','stroke-width':routeInnerWidth,'stroke-linejoin':'round','stroke-linecap':'round'});
    if(state.route.portal){const portalPoint=leg.floor===state.route.from.floor?leg.path[leg.path.length-1]:leg.path[0];const [x,y]=fromOriginal(floor,portalPoint);svgEl('circle',{cx:x,cy:y,r:11,stroke:'#fff', 'stroke-width':3,fill:state.route.accessible?'#1677d0':'#e32e38'});}
  }
  for(const [type,which,color] of [['A','from','#1976e9'],['B','to','#f03d5a']]){
    const r=roomById.get(state[which]);if(r?.floor!==floor)continue;const [x,y]=fromOriginal(floor,(state.route?.[which+'Door'])||r.door);
    svgEl('circle',{cx:x,cy:y,r:14,fill:color,stroke:'#fff','stroke-width':4});
    const t=svgEl('text',{x,y:y+5,'text-anchor':'middle',fill:'#fff','font-size':14,'font-weight':900});t.textContent=type;
  }
 }
 function fillOptions(){for(const key of ['from','to']){const select=refs[key],value=select.value;select.replaceChildren();select.add(new Option(key==='from'?mt('fromPlaceholder'):mt('toPlaceholder'),''));
  for(const f of ['ground','one','two']){const group=document.createElement('optgroup');group.label=floorLabel(f);rooms.filter(r=>r.floor===f).sort((a,b)=>a.id.localeCompare(b.id,undefined,{numeric:true})).forEach(r=>group.appendChild(new Option(placeLabel(r.id)+(r.kind==='lab'?mt('labSuffix'):''),r.id)));select.appendChild(group);}select.value=value;}}

 const legend={ground:[['#f5b9ed','🍽️','Food Hall'],['#6a9d36','🎮','Gaming Room'],['#9aa9a0','☕','Restaurants / Coffee Shops / Supermarket'],['#df5b30','🚧','Under Maintenance'],['#987f6e','🎭','Auditorium'],['#b0812c','👥','Student Life'],['#ffff00','🧑‍💼','Student Services'],['#b5ffff','📝','Registration'],['#9fbee0','🛡️','Security Office'],['#8eff31','🏧','ATM'],['#3940ff','♂','Men’s bathroom'],['#fa0098','♀','Women’s bathroom'],['#ff0000','↗','Stairs'],['#6b6b6b','↕','Elevator'],['#175ddc','♿','Accessible elevator']],one:[['#52c7df','🎓','Labs (CLxxx)'],['#194e9d','🎓','Classrooms (Cxxx)'],['#ec3096','♀','Women’s bathroom'],['#174bef','♂','Men’s bathroom'],['#ffdb22','•','Classroom doors (yellow dots)'],['#ec101c','↗','Stairs'],['#595959','↕','Elevator'],['#474747','♿','Accessible elevator'],['#78bc47','⌨','IT / Finance departments']],two:[['#f9d933','📖','Library'],['#087d25','▣','Faculty offices'],['#52c7df','🎓','Labs (CLxxx)'],['#194e9d','🎓','Classrooms (Cxxx)'],['#ec3096','♀','Women’s bathroom'],['#174bef','♂','Men’s bathroom'],['#ffdb22','•','Classroom doors (yellow dots)'],['#ec101c','↗','Stairs'],['#595959','↕','Elevator'],['#474747','♿','Accessible elevator']]};
 const legendNameMap={'Labs (CLxxx)':'labs','Classrooms (Cxxx)':'classrooms','Women’s bathroom':'women','Men’s bathroom':'men','Classroom doors (yellow dots)':'doors','Stairs':'stairs','Elevator':'elevator','Accessible elevator':'accessibleElevator','IT / Finance departments':'services','Library':'library','Faculty offices':'offices','Campus map view':'campusMap'};

 function openKeyPicker(ids,title){
  const pop=$('orbitKeyPicker');pop.hidden=false;
  $('orbitKeyPickerTitle').textContent=title;
  const options=$('orbitKeyPickerOptions');options.replaceChildren();
  ids.forEach(id=>{const b=document.createElement('button');b.type='button';b.textContent=placeLabel(id);b.addEventListener('click',()=>{pop.hidden=true;setRoomToDestination(id);});options.appendChild(b);});
 }
 function showFloor(f,resetZoom=true){if(!floors[f])return;state.floor=f;
   document.querySelectorAll('.orbit-floor-btn').forEach(b=>{const v=b.dataset.floor===f;b.classList.toggle('selected',v);b.setAttribute('aria-pressed',String(v));});
   const v=floors[f];refs.map.src=f==='campus'?window.orbitCampusCleanImage:(f==='ground'?v.image:((ar()&&assetsAR[f])||v.image));refs.svg.setAttribute('viewBox',`0 0 ${v.width} ${v.height}`);
   refs.map.alt=mt('mapAlt',{floor:floorLabel(f)});$('orbitFloorCurrentLabel').textContent=floorLabel(f);
   $('orbitMapHint').textContent=f==='campus'?mt('mapOnly'):mt('tap');
   if(resetZoom){refs.canvas.style.width='100%';state.zoom=1;refs.stage.scrollLeft=0;refs.stage.scrollTop=0;}
   refs.key.replaceChildren();const keyAside=document.querySelector('.orbit-map-v2-key');if(keyAside)keyAside.hidden=(f==='ground');refs.key.style.display=f==='ground'?'none':'';refs.key.hidden=(f==='ground');for(const [color,ico,name] of legend[f]||[['#174bef','🏫','Campus map view']]){
      const item=document.createElement('div');item.className='orbit-map-v2-key-row';const sw=document.createElement('span');sw.className='orbit-map-v2-key-swatch';sw.style.background=color;sw.textContent=ico;const t=document.createElement('span');t.textContent=mt(legendNameMap[name]||name);item.append(sw,t);
      const groundCategory={'Food Hall':['Food Hall'],'Gaming Room':['Gaming Room'],'Restaurants / Coffee Shops / Supermarket':rooms.filter(r=>r.floor==='ground'&&r.kind==='shops').map(r=>r.id),'Under Maintenance':['Under Maintenance'],'Auditorium':['Auditorium'],'Student Life':['Student Life'],'Advising':['Advising'],'Registration Office':['Registration Office'],'Security Office':['Security Office'],'ATM':['ATM']};
      const categoryTargets={...groundCategory,'Library':['Library'],'IT / Finance departments':['IT Department','Finance Department'], 'Stairs':[], 'Elevator':[], 'Accessible elevator':[], 'Classrooms (Cxxx)':rooms.filter(r=>r.floor===f&&r.kind==='class').map(r=>r.id), 'Labs (CLxxx)':rooms.filter(r=>r.floor===f&&r.kind==='lab').map(r=>r.id), 'Men’s bathroom':rooms.filter(r=>r.floor===f&&r.kind==='bathmen').map(r=>r.id), 'Women’s bathroom':rooms.filter(r=>r.floor===f&&r.kind==='bathwomen').map(r=>r.id)};
      const targets=categoryTargets[name];
      if(targets&&targets.length){item.classList.add('orbit-key-action');item.setAttribute('role','button');item.tabIndex=0;
       const act=()=>{if(targets.length===1){setRoomToDestination(targets[0]);return;}openKeyPicker(targets,name);};
       item.addEventListener('click',act);item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act();}});
      }
      refs.key.append(item);}
   // Campus entrance labels follow the user's purple/yellow/orange annotations.
   // Never label or renumber the separate Ground Floor building entrances.
   let gateLayer=refs.canvas.querySelector('#orbitCampusEntranceLabels');
   if(!gateLayer){gateLayer=document.createElement('div');gateLayer.id='orbitCampusEntranceLabels';gateLayer.setAttribute('aria-label','Campus entrances');refs.canvas.appendChild(gateLayer);}
   gateLayer.replaceChildren();gateLayer.hidden=f!=='campus';
   if(f==='campus'){
     for(const g of [{name:'Gate 1',x:6.1,y:44.5},{name:'Gate 2',x:92.8,y:6.0},{name:'Gate 3',x:94.0,y:75.2}]){
       const label=document.createElement('span');label.className='orbit-campus-entrance';label.textContent=g.name;
       label.style.left=g.x+'%';label.style.top=g.y+'%';gateLayer.appendChild(label);
     }
   }
   draw();
   if(window.orbitParkingDemo)window.orbitParkingDemo.sync(f);
 }

 function selectMapRoom(r){if(!state.from||state.to){state.from=r.id;state.to='';}else if(state.from!==r.id){state.to=r.id;}refs.from.value=state.from;refs.to.value=state.to;state.route=null;refs.sheet.hidden=true;if(state.to)statusText('selectionBoth',{from:placeLabel(state.from),to:placeLabel(state.to)});else statusText('selectionStart',{room:placeLabel(r.id)});draw();}
 function setRoomToDestination(id){state.to=id;state.route=null;refs.sheet.hidden=true;refs.to.value=id;const r=roomById.get(id);if(r)showFloor(r.floor);statusText('selectionTo',{room:placeLabel(id)});}
 function updateOptions(){state.from=refs.from.value;state.to=refs.to.value;state.route=null;refs.sheet.hidden=true;statusText('chooseToDraw');draw();}
  function createSteps(p){
   if(!p.portal)return [
     {floor:p.from.floor,label:mt('sameFloorFirst',{floor:floorLabel(p.from.floor),from:placeLabel(p.from.id),to:placeLabel(p.to.id)})},
     {floor:p.to.floor,label:mt('sameFloorLast',{to:placeLabel(p.to.id)})}
   ];
   const floorsOrder=['ground','one','two'];
   const move=mt(floorsOrder.indexOf(p.to.floor)>floorsOrder.indexOf(p.from.floor)?'up':'down');
   const device=mt(p.portal.type==='accessible'?'accessibleDevice':'stairsDevice');
   const portal=portalLabel(p.portal.name);
   return [
     {floor:p.from.floor,label:mt('multiFirst',{floor:floorLabel(p.from.floor),portal,device})},
     ...p.legs.slice(1).map(leg=>({floor:leg.floor,label:mt('multiChange',{floor:floorLabel(leg.floor),device,move})})),
     {floor:p.to.floor,label:mt('multiLast',{to:placeLabel(p.to.id)})}
   ];
  }

 function renderSteps(){const p=state.route;if(!p)return;const steps=createSteps(p);
  $('orbitRouteSteps').replaceChildren();steps.forEach((step,index)=>{const li=document.createElement('li');li.className=index===state.step?'current':'';const badge=document.createElement('span');badge.className='num';badge.textContent=index+1;const tx=document.createElement('span');tx.textContent=step.label;li.append(badge,tx);$('orbitRouteSteps').append(li);});
  $('orbitRouteProgress').textContent=mt('stepProgress',{n:state.step+1,total:steps.length});
  $('orbitStepBack').disabled=state.step===0;$('orbitStepNext').disabled=state.step===steps.length-1;
  $('orbitStepNext').textContent=mt(state.step===steps.length-1?'finished':'next');
  const selectedFloor=steps[state.step].floor;showFloor(selectedFloor,false);
  $('orbitRouteDescriptor').textContent=p.portal?mt(p.accessible?'descriptorAccessible':(p.portal.type==='stairs'?'descriptorStairs':'descriptorElevator'),{portal:portalLabel(p.portal.name)}):mt('descriptorSame');
  statusText('statusRoute',{from:placeLabel(p.from.id),to:placeLabel(p.to.id),floor:floorLabel(selectedFloor)});
 }
 function runRoute(){
  state.from=refs.from.value;state.to=refs.to.value;state.accessible=refs.accessible.checked;
  if(!state.from||!state.to){state.route=null;statusText('chooseBoth');refs.sheet.hidden=true;draw();return;}
  if(state.from===state.to){state.route=null;statusText('alreadyHere');refs.sheet.hidden=true;showFloor(roomById.get(state.from).floor);return;}
  state.route=plan(state.from,state.to,state.accessible);
  if(!state.route){statusText('routeFail');refs.sheet.hidden=true;draw();return;}
  state.step=0;refs.sheet.hidden=false;
  $('orbitRouteSummary').textContent=`${placeLabel(state.from)} → ${placeLabel(state.to)}`;
  renderSteps();draw();

 }
 function clearRoute(){state.route=null;state.step=0;refs.sheet.hidden=true;statusText('routeCleared');draw();}
 document.querySelectorAll('.orbit-floor-btn').forEach(b=>b.addEventListener('click',()=>{const f=b.dataset.floor; if(state.route){const index=createSteps(state.route).findIndex(step=>step.floor===f); if(index>=0){state.step=index;renderSteps();return;} clearRoute();}showFloor(f);}));
 refs.from.addEventListener('change',updateOptions);refs.to.addEventListener('change',updateOptions);
 refs.accessible.addEventListener('change',()=>{state.accessible=refs.accessible.checked;if(state.route&&state.from&&state.to)runRoute();});
 $('orbitSwapRoute').addEventListener('click',()=>{const a=refs.from.value;refs.from.value=refs.to.value;refs.to.value=a;updateOptions();if(refs.from.value&&refs.to.value)runRoute();});
 $('orbitFindRoute').addEventListener('click',runRoute);
 $('orbitStepNext').addEventListener('click',()=>{if(!state.route)return;state.step=Math.min(createSteps(state.route).length-1,state.step+1);renderSteps();});
 $('orbitStepBack').addEventListener('click',()=>{if(!state.route)return;state.step=Math.max(0,state.step-1);renderSteps();});
 $('orbitStopNavigation').addEventListener('click',clearRoute);
 $('orbitCloseKeyPicker').addEventListener('click',()=>{$('orbitKeyPicker').hidden=true;});
 $('orbitMinimizeNavigation').addEventListener('click',()=>{refs.sheet.classList.toggle('minimized');$('orbitMinimizeNavigation').textContent=refs.sheet.classList.contains('minimized')?'+':'−';});
 $('orbitZoomIn').addEventListener('click',()=>zoom(.3));$('orbitZoomOut').addEventListener('click',()=>zoom(-.3));
 function zoom(diff){const target=Math.min(2.5,Math.max(1,state.zoom+diff));state.zoom=target;refs.canvas.style.width=(100*target)+'%';}
 document.querySelectorAll('#orbitMapQuickLinks [data-locate]').forEach(button=>button.addEventListener('click',()=>{const [floor,id]=button.dataset.locate.split('|');setRoomToDestination(id);showFloor(floor);}));
 $('orbitActionDirections').addEventListener('click',()=>{if(refs.from.value&&refs.to.value)runRoute();else{$('orbitNavForm').scrollIntoView({behavior:'smooth',block:'center'});refs.from.focus();}});
 $('orbitActionFind').addEventListener('click',()=>{$('orbitNavTo').scrollIntoView({behavior:'smooth',block:'center'});refs.to.focus();});
 $('orbitActionFloor').addEventListener('click',()=>{const first=document.querySelector('.orbit-floor-btn.selected');if(first){first.scrollIntoView({behavior:'smooth',block:'center'});first.focus();}});
 $('orbitActionList').addEventListener('click',()=>{ $('orbitShowRooms').click();if(!$('orbitRoomList').hidden)$('orbitRoomList').scrollIntoView({behavior:'smooth',block:'nearest'}); });
 $('orbitActionInfo').addEventListener('click',()=>{const p=$('orbitMapInfoPanel');p.hidden=!p.hidden;if(!p.hidden)p.scrollIntoView({behavior:'smooth',block:'nearest'});});
 function fillRoomList(){const list=$('orbitRoomList');list.replaceChildren();for(const r of rooms.filter(r=>r.floor===state.floor)){const b=document.createElement('button');b.type='button';b.textContent=placeLabel(r.id);b.addEventListener('click',()=>selectMapRoom(r));list.append(b);}}
 $('orbitShowRooms').addEventListener('click',()=>{const list=$('orbitRoomList');list.hidden=!list.hidden;if(!list.hidden)fillRoomList();});

 // Tap-only Orbit Chat can launch the accessibility-aware map without changing chat behavior.
 const quick=document.createElement('button');quick.type='button';quick.className='orbit-guide-btn info-link';quick.textContent=mt('campusDirections');quick.id='orbitChatMapShortcut';
 const guideQuick=quick;const guide=$('orbitGuide');if(guide){guide.append(quick);quick.addEventListener('click',()=>{
   refs.accessible.checked=true;state.accessible=true;
   const tab=document.querySelector('[data-view="mapView"]');if(tab)tab.click();
   showFloor('one');statusText('accessibleSelected');
   $('orbitNavForm').scrollIntoView({behavior:'smooth',block:'center'});
  });}
 // Structured test hook exposes only route coordinates, no personal information.
 window.orbitNavigationTest={
  route:(a,b,accessible=false)=>plan(a,b,accessible),
  door:(id)=>roomById.get(id)?.door||null,
  rooms:()=>rooms.map(r=>({id:r.id,floor:r.floor,kind:r.kind,door:r.door,approach:r.approach})),
  getState:()=>({floor:state.floor,from:state.from,to:state.to,accessible:state.accessible,steps:state.route?createSteps(state.route):[],route:state.route}),
  choose:(from,to,accessible=false)=>{refs.from.value=from;refs.to.value=to;refs.accessible.checked=accessible;runRoute();}
 };

 // Fallback tab switching: the map must also open when the HTML is previewed locally
 // and another legacy section cannot access browser storage.
 document.querySelectorAll('.orbit-nav [data-view]').forEach(button=>button.addEventListener('click',()=>{
   const target=button.dataset.view;
   document.querySelectorAll('.orbit-view').forEach(view=>{
      const selected=view.id===target;
      view.classList.toggle('active',selected);
      view.style.display=selected?'block':'none';
   });
   document.querySelectorAll('.orbit-nav [data-view]').forEach(b=>{
      const selected=b.dataset.view===target;
      b.classList.toggle('active',selected);
      b.setAttribute('aria-selected',String(selected));
   });
 }));
 fillOptions();showFloor('one');updateMapLanguage();document.querySelectorAll('#langEn,#langAr').forEach(b=>b.addEventListener('click',updateMapLanguage));
})();

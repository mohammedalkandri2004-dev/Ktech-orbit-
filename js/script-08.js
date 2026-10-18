
(function(){
 function setup(){
  const tab=document.getElementById('orbitDirectionsTab');
  const sheet=document.getElementById('orbitDirectionsSheet');
  const state=document.getElementById('orbitDirectionsTabState');
  if(!tab||!sheet)return;
  const sync=()=>{const visible=!sheet.hidden;const expanded=visible&&!sheet.classList.contains('minimized');tab.setAttribute('aria-expanded',String(expanded));state.textContent=expanded?'▴':'▾';};
  tab.addEventListener('click',()=>{
   if(sheet.hidden)return;
   sheet.classList.toggle('minimized');
   const minimize=document.getElementById('orbitMinimizeNavigation');
   if(minimize)minimize.textContent=sheet.classList.contains('minimized')?'+':'−';
   sync();
  });
  new MutationObserver(sync).observe(sheet,{attributes:true,attributeFilter:['hidden','class','style']});
  document.getElementById('orbitMinimizeNavigation')?.addEventListener('click',()=>setTimeout(sync,0));
  sync();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();

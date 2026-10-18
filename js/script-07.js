
(function(){
 function navigate(id){
  var target=document.getElementById(id);if(!target)return;
  document.querySelectorAll('.orbit-view').forEach(function(el){el.classList.toggle('active',el===target)});
  document.querySelectorAll('.orbit-tab-btn[data-view]').forEach(function(el){el.classList.toggle('active',el.dataset.view===id)});
  if(id==='reviewsView' && typeof window.loadPublicReviews==='function'){try{window.loadPublicReviews()}catch(e){console.warn('Reviews data could not load:',e)}}
 }
 document.querySelectorAll('.orbit-tab-btn[data-view]').forEach(function(btn){
  btn.addEventListener('click',function(){navigate(btn.dataset.view)},true);
 });
})();

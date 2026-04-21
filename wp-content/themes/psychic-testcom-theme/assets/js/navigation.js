(function(){
'use strict';
var ov=document.getElementById('ptcMobileOverlay');
var nv=document.getElementById('ptcMobileNav');
var hd=document.getElementById('ptcHeader');
window.ptcToggleMobile=function(){if(nv)nv.classList.toggle('open');if(ov)ov.classList.toggle('open');document.body.classList.toggle('nav-open');};
window.ptcCloseMobile=function(){if(nv)nv.classList.remove('open');if(ov)ov.classList.remove('open');document.body.classList.remove('nav-open');};
if(hd){window.addEventListener('scroll',function(){hd.style.boxShadow=window.scrollY>10?'var(--shadow-md)':'none';});};
window.addEventListener('resize',function(){if(window.innerWidth>768)window.ptcCloseMobile();});
})();

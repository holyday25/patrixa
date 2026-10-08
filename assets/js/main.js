const header=document.querySelector('[data-header]');
const menuButton=document.querySelector('[data-menu-button]');
const nav=document.querySelector('[data-nav]');
const setHeaderState=()=>header?.classList.toggle('scrolled',window.scrollY>18);
setHeaderState();window.addEventListener('scroll',setHeaderState,{passive:true});
menuButton?.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!isOpen));menuButton.querySelector('.sr-only').textContent=isOpen?'Open menu':'Close menu';nav?.classList.toggle('open',!isOpen);header?.classList.toggle('menu-open',!isOpen)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton?.setAttribute('aria-expanded','false');nav.classList.remove('open');header?.classList.remove('menu-open')}));
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const items=document.querySelectorAll('.reveal');
if(reduce||!('IntersectionObserver'in window)){items.forEach(item=>item.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});items.forEach(item=>observer.observe(item))}
document.querySelectorAll('[data-year]').forEach(item=>item.textContent=new Date().getFullYear());
document.querySelectorAll('[data-accordion] details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open)document.querySelectorAll('[data-accordion] details').forEach(other=>{if(other!==detail)other.open=false})}));

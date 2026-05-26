import './footer.scss'

document.addEventListener('DOMContentLoaded', () => {
   const btnTop = document.querySelector('.bottom-footer__up');
   if (!btnTop) return;
 
   window.addEventListener('scroll', () => {
     btnTop.classList.toggle('active', window.scrollY > 550);
   });
 
   btnTop.addEventListener('click', (e) => {
     e.preventDefault(); // 🔥 щоб не скакало через href="#"
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   });
 });
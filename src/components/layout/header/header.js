import './header.scss'

 const btnTop = document.querySelector('.bottom-footer__up');

window.addEventListener('scroll', () => {
if (window.scrollY > 550) {
  btnTop.classList.add('active');
} else {
  btnTop.classList.remove('active');
}
});

btnTop.addEventListener('click', () => {
window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
});
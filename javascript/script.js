const body = document.querySelector('body');
const btn = body.children[3].firstChild
const revolvingArticle = document.querySelector('main > :first-child');

document.addEventListener('scroll', () => showOrHide(window.pageYOffset));

const showOrHide = (yOffSet) => {
  btn.style.display = yOffSet > 0 ? 'block' : 'none'
  btn.style.opacity = yOffSet > (window.innerHeight * 0.5) ? '100%' : '0%';
}
  

let switcher = true
window.setInterval(() => {
  switcher = !switcher;
  revolvingArticle.textContent = switcher ? 
    'Bulk Billed Eye Examinations! Book today!' : 
    'Private Health Fund? Get some bulked billed Spectacles!';
}, 5000);
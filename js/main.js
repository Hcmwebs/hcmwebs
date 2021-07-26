const links = document.querySelectorAll('.navBar > li > a');
const navBar = document.getElementById('navBar');
const hamburger = document.getElementById('hamburger');
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const btns = document.querySelectorAll('.hamburger .btn');
let isOpen = false;


// === adding active class to the links ===

links.forEach(link => {
  link.addEventListener('click', () => {
    navBar.querySelector('.active').classList.remove('active');
    link.classList.add('active');
  });
})


// === hamburger and menu activation ===
btns.forEach(btn => {
  btn.addEventListener('click',() => {
    if(!isOpen){
      hamburger.classList.add('open');
      btnOpen.style.display = 'none';
      btnClose.style.display = 'block';
      navBar.classList.add('open');
      isOpen = true;
    }
    else{
      hamburger.classList.remove('open');
      btnClose.style.display = 'none'
      btnOpen.style.display = 'block';
      navBar.classList.remove ('open');
      isOpen = false;
    }
  });
})

// === menu de-activation ===


navBar.addEventListener('click', () => {
  navBar.classList.remove('open');
  btnOpen.style.display = 'block';
  btnClose.style.display = 'none';
  isOpen = false;
})

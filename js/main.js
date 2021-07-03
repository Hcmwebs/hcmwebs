const links = document.querySelectorAll('.navBar > li > a')
const navBar = document.getElementById('navBar');
const hamburger = document.getElementById('hamburger');
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const btns = document.querySelectorAll('.hamburger .btn');
let isOpen = false;
let isActive = false;


links.forEach(link =>{
  link.classList.remove('active');
  link.addEventListener('click', (e) =>{
    if(!isActive){
      e.target.classList.add('active');
      isActive = true;
    }else{
      link.classList.remove('active');
      isActive = false;
    }
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


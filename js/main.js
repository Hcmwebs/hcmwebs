const links = document.querySelectorAll('.navBar > li > a')
const navBar = document.getElementById('navBar');
const hamburger = document.getElementById('hamburger');
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const btns = document.querySelectorAll('.hamburger .btn');
let isOpen = false;
const currentLocation = location.href;


// === adding active class to the links ===

for(let i = 0; i < links.length; i++){
  if(links[i]=== currentLocation){
    links[i].className = 'active';
  };
}




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


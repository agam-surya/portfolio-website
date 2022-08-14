let darkmode = document.getElementById('darkmode');
let header = document.querySelector('header');
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-icon');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}

darkmode.onclick = () => {
  if (darkmode.classList.contains('bx-moon')) {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active')
  } else {
    darkmode.classList.replace('bx-sun', 'bx-moon')
    document.body.classList.remove('active');
  }
}
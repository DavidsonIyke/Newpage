let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-star');
     navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-star');
     navbar.classList.remove('active');
}



/* Initialize Swiper */

const swiper = new Swiper('.wipper-1', {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive
  breakpoints:{
    0:{
        slidesPerView: 1
    },
     768:{
        slidesPerView: 2
    },
     1024:{
        slidesPerView: 3
    },
  }
});


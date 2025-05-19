var typed = new Typed(".text", {
  strings: ["Fullstack Developer", "UI/UX Enthusiast", "Coffee Lover"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 40,
  loop: true,
});

const swiper = new Swiper(".wrapper", {
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    736: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

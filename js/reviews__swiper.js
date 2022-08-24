let reviews__swiper = new Swiper(".reviews__swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 5,
  grid: {
    rows: 1,
  },
  direction: "vertical",

  // If we need pagination
  pagination: {
    el: ".reviews__swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".reviews__swiper-button-next",
    prevEl: ".reviews__swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".reviews__swiper-scrollbar",
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
      grid: {
        rows: 1,
      },
      direction: "horizontal",
    },

    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: -35,
      grid: {
        rows: 1,
      },
    },

    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: -13,
      grid: {
        rows: 1,
      },
    },
  },
});

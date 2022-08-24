let swiper__video = new Swiper(".video__swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 5,
  // spaceBetween: 55,
  direction: "vertical",
  grid: {
    rows: 1,
  },

  // If we need pagination
  pagination: {
    el: ".video__swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".video__swiper-button-next",
    prevEl: ".video__swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".video__swiper-scrollbar",
  },

  breakpoints: {
    650: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 55,
      direction: "horizontal",
      grid: {
        rows: 1,
      },
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
      spaceBetween: -25,
      grid: {
        rows: 1,
      },
    },
  },
});

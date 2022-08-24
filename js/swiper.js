let swiper__specialists = new Swiper(".specialists__swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  slidesPerGroup: 2,
  spaceBetween: 5,
  grid: {
    rows: 2,
  },

  // If we need pagination
  pagination: {
    el: ".specialists__swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".specialists__swiper-button-next",
    prevEl: ".specialists__swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".specialists__swiper-scrollbar",
  },

  breakpoints: {
    490: {
      slidesPerView: 1,
      slidesPerGroup: 2,
      spaceBetween: 15,
      grid: {
        rows: 2,
      },
    },

    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
      grid: {
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: -35,
      grid: {
        rows: 1,
      },
    },

    1500: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: -35,
      grid: {
        rows: 1,
      },
    },
  },
});

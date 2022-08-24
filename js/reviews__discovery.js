$(document).ready(function () {
  // $(".reviews__link").on("click", function () {
  //   $(this).closest("reviews__text").find(".reviews__p").toggleClass("open");
  // });

  $(".reviews__link").on("click", function () {
    var parentEl = $(this).closest(".reviews__text");
    $(parentEl).find(".reviews__p").toggleClass("open");
    $(".reviews__swiper-button-next").toggleClass("none");
    $(".reviews__swiper-container").toggleClass("open");
  });
  
  // $(".reviews__link").click(function () {
  //   $(".reviews__swiper-container").toggleClass("open");
  // });
});

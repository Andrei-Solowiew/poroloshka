$(document).ready(function () {
  $(".gallery__btn").click(function () {
    $(".gallery__item.hidden").toggleClass("active");
  });
  $(".gallery__btn").click(function () {
    $(".gallery__btn").toggleClass("hidden");
  });
});

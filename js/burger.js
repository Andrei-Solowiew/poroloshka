$(document).ready(function () {
  $(".header__list-burger").click(function () {
    $(".header__list-burger").toggleClass("open__menu");
  });
  $(".header__list-burger").on("click", function (event) {
    $(".header__list").slideToggle(400);
    event.preventDefault();
  });
  $(".footer__burger").click(function () {
    $(".footer__burger").toggleClass("open__menu");
  });
  $(".footer__burger").on("click", function (event) {
    $(".footer__nav-list").slideToggle(400);
    event.preventDefault();
  });
});


$(document).ready(function () {
  $(".header__tel").click(function () {
    $(".header__tel").toggleClass("open__menu");
  });
  $(".header__tel").on("click", function (event) {
    $(".header__call").slideToggle(400);
    event.preventDefault();
  });
});

$(function() {
  $(".nav__burger").on("click", function() {
    $(".nav__burger").toggleClass("nav__burger--active");
  });

  $(".nav__burger").on("click", function() {
    $(".nav__container").slideToggle();
  });
});

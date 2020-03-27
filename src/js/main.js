$(document).ready(function () {
  //прокрутка наверх страницы
  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });
  var scrolling = $(".hero-navbar");
 
  $(window).scroll(function () {
    if ((document.documentElement.clientWidth < 768)) {
      scrolling.removeClass("scrolling").addClass("loading");
    }
    else if ($(this).scrollTop() >= 70 && scrolling.hasClass("loading")) {
      scrolling.removeClass("loading").addClass("scrolling");
    } else if ($(this).scrollTop() <= 70 && scrolling.hasClass("scrolling")) {
      scrolling.removeClass("scrolling").addClass("loading");
    }
  });
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });  
});
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function () {
  
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
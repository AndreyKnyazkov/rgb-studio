$('.js-tab-trigger').click(function () {
  var id = $(this).attr('data-tab'),
    content = $('.js-tab-content[data-tab="' + id + '"]');

  $('.js-tab-trigger.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2

  $('.js-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
});
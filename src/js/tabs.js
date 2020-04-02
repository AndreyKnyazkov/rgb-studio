$('.js-tab-trigger').click(function () {
  var id = $(this).attr('data-tab'),
    content = $('.js-tab-content[data-tab="' + id + '"]');

  $('.js-tab-trigger.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2
  

  $('.js-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
  
});

[
  {
    "caption": "Заголовок услуги",
    "fields": [
      {
        "field": "img",
        "caption": "Изображение",
        "inputTVtype": "image",
        "sourceFrom": "migx"
      },
      {
        "field": "alt",
        "caption": "Описание изображения для поисковых систем",
        "inputTVtype": "textarea"
      },{
        "field": "href",
        "caption": "Ссылка на видео",
        "inputTVtype": "textarea"
      }
    ]
  }
]

[{
  "sourceFrom": "migx",
  "header": "Заголовок услуги",
  "dataIndex": "img"
}, {
    "header": "Описание изображения для поисковых систем",
    "dataIndex": "alt"
  }, {
  "header": "Ссылка на видео",
    "dataIndex": "href"
}
]

$(document).ready(function () {
  var links = [
    {
      name: 'Vkontakte',
      link: 'https://vk.com/winsom',
    },

    {
      name: 'Website',
      link: 'https://bio.link/winsom',
    },

    {
      name: 'Telegram',
      link: 'https://t.me/WinsomBots',
    },
  ];

  for (var i in links) {
    var link = links[i];

    $('#marquee').append('<a href="' + link.link + '" target="_BLANK">' + link.name + '</a>');

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' | ');
  }
});

$(function () {
  var $diaplay = $('#display');
  $('.marquee')
    .bind('beforeStarting', function () {
      $diaplay.show().html('started').delay(2000).fadeOut('fast');
    })
    .marquee({
      duration: 4000,
    });
});

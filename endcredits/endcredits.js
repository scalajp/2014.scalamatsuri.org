/*
 * jQuery endcredits Plugin
 *
 * Copyright (c) 2014 Daniel Malkafly <malk@epichail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
 $(function () {
  var scrollSeconds = 30;

  //var maskHeight = $(document).height();
  var maskHeight = $(window).height();
  var maskWidth = $(window).width();

  var onFinish = function() {
    history.back();
  };

  $('#titles').css({
    'width': maskWidth,
    'height': maskHeight
  });

  $('#titles').fadeIn(1000);
  $('#titles').fadeTo("slow");
  $('#titles').fadeIn();
  $('#credits').css("left", (($('#credits').parent().width() - $('#credits').outerWidth()) / 2) + "px");
  $('#credits').css("top", maskHeight + "px");
  $('#credits').show('slow');

  $("body").on("click", onFinish);

  $('#credits').animate({
    top: -$('#credits').height() - 100 + "px"
  }, {
    duration: scrollSeconds * 1000,
    easing: "linear",
    done: onFinish
  });

});

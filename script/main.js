$(document).ready(function() {
    var $lis = $("banner ul.list-unstyled li");

    $lis.hover(function() {
      $(this).addClass("hovered");
    }, function() {
      $(this).removeClass("hovered");
    });

    $lis.mouseout(function() {
      if (!$lis.hasClass("hovered")) {
        $lis.css("width", "50%");
      }
    });
  });
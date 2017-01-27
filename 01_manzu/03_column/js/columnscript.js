$(function(){
  $("#footer").click(function(){
    $('body,html').animate({
      scrollTop: 0,
    },500);
  });
});

$(function(){
  $('a[href^=#]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });
});

$(function(){
  $("#toggle_nav_sp").click(function(){
    $(this).toggleClass('open');
    $("#nav_menu_sp ").toggleClass('open');
    $("#nav_menu_sp ul li").toggleClass('open');
  });
});

$(function() {
  $('.effect').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('move');
    }
    else{
      $(this).stop().removeClass('move');
    }
  });
});

$(function(){
  $("#glayLayer").click(function(){
    $(this).hide();
    $("#overLayer").hide();
  });
  $("#overLayer").click(function(){
    $("#glayLayer").hide();
    $("this").hide();
    $("#overLayer img").hide();
  });
  $("a.modal").click(function(){
    $("#glayLayer").show();
    $("#overLayer").show().html("<img src='"+$(this).attr("href")+"'>");
    return false;
  });
  $(".modal_box img.close").click(function(){
    $("#glayLayer").hide();
    $("#overLayer").hide();
  });
});

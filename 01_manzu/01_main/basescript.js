$(function () {
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $("#nav").fadeIn("slow");
    $("#SCROLL_DOWN").addClass("fadeOut");
  } else {
    $("#nav").fadeOut("slow");
    $("#SCROLL_DOWN").removeClass("fadeOut");
  }
});

});

$(function(){
  $("#SCROLL_DOWN").click(function(){
    var speed = 400;
    var href=$(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop:position
    }, speed, 'swing');
    return false;
  });
});

$(function(){
  $("#footer").click(function(){
    $('body,html').animate({
      scrollTop: 0,
    },500);
  });
});

$(function(){
  $("#toggle_nav_sp").click(function(){
    $(this).toggleClass('open');
    $("#nav_menu_sp ").toggleClass('open');
  });
});

$(function(){
    $('#main_visual_container ul img')
      .bind( 'touchstart', function(){
        $( this ).addClass( 'touch' );
    }).bind( 'touchend', function(){
        $( this ).removeClass( 'touch' );
    });
});

$(function() {
  var h = $(window).height();

  $('#wrap').css({
    "display": "none"
  });
  $('#loader-bg ,#loader').height(h).css('display','block');
  });

  $(window).load(function () { 
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('#wrap').css({
      "display": "block"
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

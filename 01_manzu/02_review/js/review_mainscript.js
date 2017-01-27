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

$(function(){
    $('#arrange ol li a')
      .bind( 'touchstart', function(){
        $( this ).addClass( 'touch' );
    }).bind( 'touchend', function(){
        $( this ).removeClass( 'touch' );
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

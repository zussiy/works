$(function(){
  $("#footer").click(function(){
    $('body,html').animate({
      scrollTop: 0,
    },500);
  });
});

$(function(){
  $(".point_move").click(function(){
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
  $("#toggle_nav_sp").click(function(){
    $(this).toggleClass('open');
    $("#nav_menu_sp ").toggleClass('open');
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
  $("#rev_main_head_box1").on("click", function() {
    $("#according_box1").slideToggle();
    if ($(this).children(".accordion_icon").hasClass('active')) {
          $(this).children(".accordion_icon").removeClass('active');
        }
        else {
          $(this).children(".accordion_icon").addClass('active');
        }
  });
});

$(function(){
  $("#rev_main_head_box2").on("click", function() {
    $("#according_box2").slideToggle();
    if ($(this).children(".accordion_icon").hasClass('active')) {
          $(this).children(".accordion_icon").removeClass('active');
        }
        else {
          $(this).children(".accordion_icon").addClass('active');
        }
  });
});

$(function(){
  $("#rev_main_head_box3").on("click", function() {
    $("#according_box3").slideToggle();
    if ($(this).children(".accordion_icon").hasClass('active')) {
          $(this).children(".accordion_icon").removeClass('active');
        }
        else {
          $(this).children(".accordion_icon").addClass('active');
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

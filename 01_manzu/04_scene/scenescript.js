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
  $("#glayLayer").click(function(){
    $(this).hide();
    $("#overLayer").hide();
  });
  $("#overLayer").click(function(){
    $("#glayLayer").hide();
    $(this).hide();
    $("#overLayer img").hide();
  });
  $("a.modal").click(function(){
    $("#glayLayer").show();
    $("#overLayer").show().html("<img src='"+$(this).attr("href")+"'>");
    return false;
  });
});

$(function(){
  $(".detail_photo img").attr("src",$(".rec_box.new a").attr("href"));
  $(".detail_photo a").attr("href",$(".rec_box.new a").attr("href"));
  $("#detail h1").html($(".rec_box.new a").attr("data-main"));
  $(".detail_title").html($(".rec_box.new a").attr("data-title"));
  $(".detail_author").html($(".rec_box.new a").attr("data-author"));
  $(".detail_quote").html($(".rec_box.new a").attr("data-quote"));

  if($(".rec_box.new a").attr("data-1") !== undefined){
    $(".detail_textbox").append("<p class='indent'>・"+$(".rec_box.new a").attr("data-1")+"</p>")
  }
  if($(".rec_box.new a").attr("data-2") !== undefined){
    $(".detail_textbox").append("<p class='indent'>・"+$(".rec_box.new a").attr("data-2")+"</p>")
  }
  if($(".rec_box.new a").attr("data-3") !== undefined){
    $(".detail_textbox").append("<p class='indent'>・"+$(".rec_box.new a").attr("data-3")+"</p>")
  }
  if($(".rec_box.new a").attr("data-4") !== undefined){
    $(".detail_textbox").append("<p class='indent'>・"+$(".rec_box.new a").attr("data-4")+"</p>")
  }
  if($(".rec_box.new a").attr("data-5") !== undefined){
    $(".detail_textbox").append("<p class='indent'>・"+$(".rec_box.new a").attr("data-5")+"</p>")
  }
  if($(".rec_box.new a").attr("data-6") !== undefined){
    $(".detail_textbox").append("<p class='indent'>・"+$(".rec_box.new a").attr("data-6")+"</p>")
  }
  $(".detail_textbox").append("<p class='indent link'><a href=''>■Amazon商品ページを見る</a></p>")
  $(".indent.link a").attr("href",$(".rec_box.new a").attr("data-link"));
});

$(function(){
  $(".rec_box a").click(function(){
    $(".detail_textbox").empty();

    $(".detail_photo img").attr("src",$(this).attr("href"));
    $(".detail_photo a").attr("href",$(this).attr("href"));
    $("#detail h1").html($(this).attr("data-main"));
    $(".detail_title").html($(this).attr("data-title"));
    $(".detail_author").html($(this).attr("data-author"));
    $(".detail_quote").html($(this).attr("data-quote"));
    return false;
  });

  $(".rec_box a").click(function(){
    if($(this).attr("data-1") !== undefined){
      $(".detail_textbox").append("<p class='indent'>・"+$(this).attr("data-1")+"</p>")
      return false;
    }
  });
  $(".rec_box a").click(function(){
    if($(this).attr("data-2") !== undefined){
      $(".detail_textbox").append("<p class='indent'>・"+$(this).attr("data-2")+"</p>")
      return false;
    }
  });
  $(".rec_box a").click(function(){
    if($(this).attr("data-3") !== undefined){
      $(".detail_textbox").append("<p class='indent'>・"+$(this).attr("data-3")+"</p>")
      return false;
    }
  });
  $(".rec_box a").click(function(){
    if($(this).attr("data-4") !== undefined){
      $(".detail_textbox").append("<p class='indent'>・"+$(this).attr("data-4")+"</p>")
      return false;
    }
  });
  $(".rec_box a").click(function(){
    if($(this).attr("data-5") !== undefined){
      $(".detail_textbox").append("<p class='indent'>・"+$(this).attr("data-5")+"</p>")
      return false;
    }
  });
  $(".rec_box a").click(function(){
    if($(this).attr("data-6") !== undefined){
      $(".detail_textbox").append("<p class='indent'>・"+$(this).attr("data-6")+"</p>")
      return false;
    }
  });
  $(".rec_box a").click(function(){
    $(".detail_textbox").append("<p class='indent link'><a href=''>■Amazon商品ページを見る</a></p>")
    $(".indent.link a").attr("href",$(this).attr("data-link"));
    return false;
  });
  $(".rec_box a").click(function(){
    $('body,html').animate({
      scrollTop: 0,
    },500);
  });

});

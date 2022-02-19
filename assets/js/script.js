
$(document).ready(function(){
  $(".search").click(function(){
      $(".txt").toggleClass('open');
      // $("ul li").fadeToggle();
  });
  $("#banner").click(function(){
      $(".txt").removeClass('open');
  });

  $(".search").click(function(e) {
    if ( $(".txt").val().length <=0 ) {
      e.preventDefault();
    }
  });

 $("nav ul li").click(function(){
    $(this).siblings().removeClass('open');
    $(this).toggleClass('open'); 
 });
  /*resposive-nav*/
    
    $(".bar i").click(function(){
      $("ul:first").toggleClass('active');
      // $("ul ul").css("display", "none");
    });
    
    $(window).resize(function() {
        if($(window).width() < 992){}
    });

    $(window).resize(function() {
      if($(window).width() > 768){
          $("ul").removeAttr('style');
      }
      });
});


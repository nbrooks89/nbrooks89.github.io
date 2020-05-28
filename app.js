$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
}); 



  $("#Next").click(function(){
    $("#Slider").append($("#Slider img:first-of-type"));
  });
  
  $("#Prev").click(function(){
    $("#Slider").prepend($("#Slider img:last-of-type"));
  });

$( document ).ready(function() {
$('.sing').click(function(){
  $('.modal_content_singup').toggleClass('visible');

  });

$('.sing, .close_2').click(function(){
  $('body').toggleClass('hidescroll');
  });

});

$('.close_2').click(function(){
  $('.modal_content_singup').toggleClass('visible');
  });


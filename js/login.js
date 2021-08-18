
$( document ).ready(function() {
    $('.login').click(function(){
      $('.modal_content').toggleClass('visible');
    
      });
    
   
      $(".login, .close").click(function(){
        $("body").toggleClass("hidescroll");
       
       });
   
       
    });
    
    
    $('.close').click(function(){
      $('.modal_content').toggleClass('visible');
      });
      $('.visible').click(function(){
        $('.modal_content').toggleClass('visible');
        });
  
    

    
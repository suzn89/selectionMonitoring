$(function(){ 
  panelOpen = true;
  $('.left__btn--close').click(function (e) { 
    e.preventDefault();
    if (panelOpen) {
      $(this).addClass('open');
      $('.left').stop(true,true).animate({'margin-left':'-270px'},500,function(){
        panelOpen=false;
        $('.center').addClass('leftnone_center');
      });      
    } else {      
      $(this).removeClass('open');
      $('.left').stop(true,true).animate({'margin-left':'0px'},500,function(){
        panelOpen=true;
        $('.center').removeClass().addClass('center');
      });
    }
  });
  rpanelOpen = true;
  $('.right__btn--close').click(function (e) { 
    e.preventDefault();
    if (rpanelOpen) {
      $(this).addClass('open');
      $('.right').stop(true,true).animate({'right':'-455px'},500,function(){
        $('.center').addClass('rightnone_center');
        rpanelOpen=false;        
      });      
    } else {      
      $(this).removeClass('open');
      $('.right').stop(true,true).animate({'right':'10px'},500,function(){
        $('.center').removeClass('rightnone_center');
        rpanelOpen=true;
      });
    }
  });

  
});
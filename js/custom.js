$(function(){ 
  panelOpen = true;
  $('.left__btn--close').click(function (e) { 
    e.preventDefault();
    if (panelOpen) {
      $(this).addClass('open');
      $('.left').stop(true,true).animate({'left':'-265px'},500,function(){        
        $('.center').addClass('leftnone_center');
        panelOpen=false;
      });      
    } else {      
      $(this).removeClass('open');
      $('.left').stop(true,true).animate({'left':'10px'},500,function(){        
        $('.center').removeClass('leftnone_center');
        panelOpen=true;
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

  // 모달팝업 관련 (가로2단)
  $('.openmodal').on('click', function () {
    $('.modal').show();
  });
  $('.close').on('click', function () {
    $('.modal').hide();
  });

  // 모달팝업 관련 (가로좁은것)
  $('.openmodal2').on('click', function () {
    $('.modal').show();
  });
  $('.close').on('click', function () {
    $('.modal').hide();
  });

});
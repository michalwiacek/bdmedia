$(document).ready(function(){
  mobileNav();
  smoothScroll(300)
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 100) {
      $('#header').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#header').removeClass('scrolled-nav');
    } 
    
  }); 

  function mobileNav() {
    $('.mobile-nav-toggle').on('click', function(){
      var status = $(this).hasClass('is-open');
      if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
      else { 
        $('.mobile-nav-toggle, .mobile-nav').addClass('is-open');}
    });
  }
  
  
  function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {
  
        var target = $( $(this).attr('href') );
  
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
  }  



});
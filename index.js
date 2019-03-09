$(window).scroll(function() {
    if ($(this).scrollTop() > 350){  
      $('.vertical-slider').toggleClass("vertical-slider").addClass("vertical-slider-open");
      
      $('.recent-content').toggleClass("recent-content").addClass("recent-content-open");
    }
    else{
     $('.recent-content-open').toggleClass("recent-content-open").addClass("recent-content");
      $('.vertical-slider-open').toggleClass("vertical-slider-open").addClass("vertical-slider");
    }
  });
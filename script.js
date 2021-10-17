"use strict";

///////////burger///////

$(document).ready(function(){
   $('.header__burger').click(function(event){
     $('.header__burger, .nav').toggleClass('active');
     $('body').toggleClass('lock');
   });
 });


 $(document).ready(function() {
    $('.nav__link').click(function(event) {
        $('.header__burger, .nav').removeClass('active');
        $('body').removeClass('lock');
    });
});


 /////////////////slider///////
 $(document).ready(function(){
 $('.card-slider').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
  //  autoplay: true,
  //  autoplaySpeed: 1000,
   dots:true,
   arrows: true,
   cssEase: 'linear',
   responsive: [
    {
      breakpoint: 1080,
      settings: {
           slidesToShow: 4
      }
    },
    {
      breakpoint: 980,
      settings: {
           slidesToShow: 3
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1
      }
    }
  ]
 });
 });

////////////best-book-slider
$(document).ready(function(){
  $('.best-book-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    arrows: false,
    cssEase: 'linear',
    responsive: [
    
     {
       breakpoint: 980,
       settings: {
            slidesToShow: 4
       }
     },
     {
       breakpoint: 680,
       settings: {
         slidesToShow:3
       }
     },
     {
       breakpoint: 540,
       settings: {
         slidesToShow: 2
       }
     },
     {
      breakpoint: 380,
      settings: {
        slidesToShow: 1
      }
    }
   ]
  });
  });
 

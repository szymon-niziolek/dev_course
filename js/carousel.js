
  $('.owl-carousel').owlCarousel({
    center:true,


    // loop jest false/ zeby ograniczyc przewijanie
    loop:false,
    margin:10,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})


/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})

/*$(window).scroll(function(){ need a fix for this
    var fromTop = $(window).scrollTop();
    var hei = $(".nv").height() + $(".jumbotron").outerHeight();
    if (fromTop > hei)
      $(".content").css("margin-top", "70px");
    else 
      $(".content").css("margin-top", "0px");
});*/
/* Unnecessary while multi-carousel isn't being used 
// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
}); */

//For new carousel
$(document).ready(function(){
          $('.carousel').carousel();
});
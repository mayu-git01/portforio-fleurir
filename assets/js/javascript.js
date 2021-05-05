$(document).ready(function(){

    //index.html area 

  
  
  //humberger 
  $('.nav-toggle').click(function (){
        $(this).toggleClass('open');
  });

  $('.nav-toggle').click(function(){
    $('.nav-mobile').toggleClass('drop');
  });

  // content1 text

  $('.content1-img').click(function(){
      $('.content1-text').toggle('slow');
      // $(this).animate({
      //     left:'200px',
      //     top:'-50px',
      //     opacity:'0.5'
      // },"slow");
      $(this).toggleClass('conten1-img-animete');
  });

    

  // content2 area
      var opa = $(".content2-menu").css('opacity');
    $(".content2-menu:not(:animated)").hover(
      function() {
        $(this).fadeTo(300, 1);
      },
      function() {
        $(this).fadeTo(300, opa);
      });

  // FAQ area show
  $('.content3-fview').click(function(){
    $('.container_accordion').toggle('slow');
  });



  // accordion area
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});	

// slider
var slideCount, slideWidth, slideHeight, slideUlWidth;

    slideCount = $('#slider ul li').length; // how many li 6
    slideWidth = $('#slider ul li').width();//350px
    slideHeight = $('#slider ul li').height(); //350px
    
    if ($(document).width() < 768) {
      slideWidth = slideWidth;
    } else {
      slideWidth = slideWidth*3;
    }
    slideUlWidth = slideCount * slideWidth; //6*350px = 2100

    $('#slider').css({width:slideWidth, height:slideHeight});
    $('#slider ul').css({width: slideUlWidth,marginLeft: -slideWidth});
    $('#slider ul li:last-child').prependTo('#slider ul'); //4123

    function moveLeft(){
        $('#slider ul').animate({
              left:+slideWidth
        },200, function(){
          $('#slider ul li:last-child').prependTo('#slider ul'); //move to first
          $('#slider ul').css('left','');
        });
    }

    function moveRight(){
      $('#slider ul').animate({
        left:-slideWidth
      },200, function(){
        $('#slider ul li:first-child').appendTo('#slider ul'); //
        $('#slider ul').css('left','');
      });
    }

    $('.control_next').click(function(){
        moveRight();
    });

    $('.control_prev').click(function(){
        moveLeft();
    });

// slider 3img area slick
//     $(function() {
//       $('.slider ul li').slick({
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         centerMode: true,
//         centerPadding: '40px',
//       });
//     });


    // contact html area
    $('#submit').click(function(){
      $('.messege').show();
    });



});


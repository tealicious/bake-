var logo = $('.logo').offset().top;
$(window).scroll(function(){    
    if ($(this).scrollTop() > logo){ 
        $('.logo').addClass('stuck');
		$('.shadow').addClass('faded'); 		
    }
    else{
        $('.logo').removeClass('stuck');
		$('.shadow').removeClass('faded'); 
    }
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

var isBreakPoint = function (bp) {
    var bps = [319, 480, 992],
        w = $(window).width(),
        min, max
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0
        max = bps[i]
        break
      }
    }
    return w > min && w <= max
}

	var movementRules = function(){
	  if (isBreakPoint(480)) {
	  $('a[href^="#tabs"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-35
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	  $("#sticker").sticky({ topSpacing: 35, center:true, className:"hey"});
	  } else if (isBreakPoint(992)) {
	  $('a[href^="#tabs"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top+1
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	  $("#sticker").sticky({ topSpacing: 0, center:true, className:"hey"});
	  } else {
	  $('a[href^="#tabs"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-35
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	  $("#sticker").sticky({ topSpacing: 35, center:true, className:"hey"});
	  }
    }
    $(window).load(movementRules);
	$(window).resize(function(){
	movementRules();
	});


	
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}

$(function(){

    $('#show').on('click',function(){        
        $('.card-reveal').slideToggle('slow');
    });
	
	$('.show1').on('click',function(){        
        $('.card-reveal').slideToggle('slow');
    });
    
    $('.card-reveal .close').on('click',function(){
        $('.card-reveal').slideToggle('slow');
    });
	
	    $('#show2').on('click',function(){        
        $('.card-reveal2').slideToggle('slow');
    });
	
		 $('.show2').on('click',function(){        
        $('.card-reveal2').slideToggle('slow');
    });
	
	 $('#show3').on('click',function(){        
        $('.card-reveal3').slideToggle('slow');
    });
	
		 $('.show3').on('click',function(){        
        $('.card-reveal3').slideToggle('slow');
    });
	
	 $('#show4').on('click',function(){        
        $('.card-reveal4').slideToggle('slow');
    });
	
		 $('.show4').on('click',function(){        
        $('.card-reveal4').slideToggle('slow');
    });
	
	 $('#show5').on('click',function(){        
        $('.card-reveal5').slideToggle('slow');
    });
	
		 $('.show5').on('click',function(){        
        $('.card-reveal5').slideToggle('slow');
    });
	
	 $('#show6').on('click',function(){        
        $('.card-reveal6').slideToggle('slow');
    });
	
		 $('.show6').on('click',function(){        
        $('.card-reveal6').slideToggle('slow');
    });
	
	 $('#show7').on('click',function(){        
        $('.card-reveal7').slideToggle('slow');
    });
	
		 $('.show7').on('click',function(){        
        $('.card-reveal7').slideToggle('slow');
    });
	
	 $('#show8').on('click',function(){        
        $('.card-reveal8').slideToggle('slow');
    });
	
		 $('.show8').on('click',function(){        
        $('.card-reveal8').slideToggle('slow');
    });
    
    $('.card-reveal2 .close2').on('click',function(){
        $('.card-reveal2').slideToggle('slow');
    });
	$('.card-reveal3 .close3').on('click',function(){
        $('.card-reveal3').slideToggle('slow');
    });
	$('.card-reveal4 .close4').on('click',function(){
        $('.card-reveal4').slideToggle('slow');
    });
	$('.card-reveal5 .close5').on('click',function(){
        $('.card-reveal5').slideToggle('slow');
    });
	$('.card-reveal6 .close6').on('click',function(){
        $('.card-reveal6').slideToggle('slow');
    });
	$('.card-reveal7 .close7').on('click',function(){
        $('.card-reveal7').slideToggle('slow');
    });
	$('.card-reveal8 .close8').on('click',function(){
        $('.card-reveal8').slideToggle('slow');
    });
	
});
	
	
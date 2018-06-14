(function($){
	$(document).ready(function(){
	
		$(".banner-image").backstretch('images/Artboard.png');
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); 

//form error true
//----------------------------------------------------------
$('.submit input').click(function() {
  var firstName = $('.first-name input').val();
  var lastName = $('.last-name input').val();
  var email = $('.email input').val();
  var message = $('.message textarea').val();
});

$('.submit button').click(function() {
  $('.submit h2').slideDown();
  var wordCount = $('.first-name input').val().length;
  if(wordCount==0) {
    $('.first-name h2').slideDown(500);
    $('.recieved h5').slideUp();
  }else{(wordCount>1)
    $('.first-name h2').slideUp();
    $('.recieved h5').slideDown(500);
  }
  var wordLength = $('.last-name input').val().length;
  if(wordLength==0) {
    $('.last-name h2').slideDown(500);
    $('.recieved h5').slideUp();
  }else{(wordLength>1)
    $('.last-name h2').slideUp();
     $('.recieved h5').slideDown(500);
  }
  var mail = $('.email input').val().length;
  if(mail==0) {
    $('.email h2').slideDown(500);
    $('.recieved h5').slideUp();
  } else {(mail>1)
    $('.email h2').slideUp();
     $('.recieved h5').slideDown(500);
  }
  var msg = $('.message textarea').val().length;
  if(msg==0) {
    $('.message h2').slideDown(500);
    $('.recieved h5').slideUp();
  }else{(msg>1)
    $('.message h2').slideUp();
     $('.recieved h5').slideDown(500);
  }
});

$('.submit-1 input').click(function() {
  var firstName = $('.first-name input').val();
  var lastName = $('.last-name input').val();
  var email = $('.email input').val();
  var visa = $('.visa input').val();
});


//fade in page
//---------------------------------------------------------------
$(document).ready(function(){

/*! Fades in page on load */
$('body').css('display', 'none');
$('body').fadeIn(800);

});

	// End document ready
})(this.jQuery);
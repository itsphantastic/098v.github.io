//menu smooth scroll

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//header resized when user scrolls

  $(function() {
    $(window).on('resize', function() {   
    });
    $(window).trigger('resize');    
  });

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('header').addClass('shrink');
    }else{
        $('header').removeClass('shrink');
    }
});

//social media icons fade out when scroll
$(window).scroll(function() {
    if ($(this).scrollTop()>50)
     {
        $('.social img').fadeOut();
     }else{
        $('.social img').fadeIn();
     }
 });

//logo resize when user scrolls
$( window ).scroll(function() {
     if($(document).scrollTop() > 50){
       $('.logo img').css({'height': '100','width': '100'}); 
     }else{
        $('.logo img').css({'height': '170','width': '170'}); 
     }
});


//carousel images looped

$(function(){  
    function loop() {
      $('.carousel').stop().animate( { scrollTop:200 }, 3000, 'linear', function() {
        $(this).scrollTop( 0 ).find( 'a:last' ).after( $('a:first', this) );
        loop(); // go loop!
      });
    }
    loop(); // Start!
});


//subhead organization

$('.branding').click(function(){
  $('.photography, .web, .mobile').fadeToggle(500);
});
$('.photography').click(function(){
  $('.branding, .web, .mobile').fadeToggle(500);
});
$('.web').click(function(){
  $('.branding, .photography, .mobile').fadeToggle(500);
});
$('.mobile').click(function(){
  $('.branding, .photography, .web').fadeToggle(500);
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

$(document).ready(function() {
    $( "#annual" ).mouseover(function(){
        $(this).attr("src", "images/annual-report2.jpg");
    });
    $( "#annual" ).mouseout(function(){
        $(this).attr("src", "images/cover.jpg");
    });
});

$(document).ready(function() {
    $( "#shi" ).mouseover(function(){
        $(this).attr("src", "images/shiseido2.jpg");
    });
    $( "#shi" ).mouseout(function(){
        $(this).attr("src", "images/shiseido-cover.jpg");
    });
});

$(document).ready(function() {
    $( "#creative" ).mouseover(function(){
        $(this).attr("src", "images/mock-up2.jpg");
    });
    $( "#creative" ).mouseout(function(){
        $(this).attr("src", "images/mockup(creative).jpg");
    });
});

$(document).ready(function() {
    $( "#yu" ).mouseover(function(){
        $(this).attr("src", "images/yuseafood2.jpg");
    });
    $( "#yu" ).mouseout(function(){
        $(this).attr("src", "images/yuseafood1.jpg");
    });
});

$(document).ready(function() {
    $( "#yu_web" ).mouseover(function(){
        $(this).attr("src", "images/mockup(yu).jpg");
    });
    $( "#yu_web" ).mouseout(function(){
        $(this).attr("src", "images/mockup(yu2).jpg");
    });
});

$(document).ready(function() {
    $( "#photo" ).mouseover(function(){
        $(this).attr("src", "images/lovesick-lake.jpg");
    });
    $( "#photo" ).mouseout(function(){
        $(this).attr("src", "images/photography1.jpg");
    });
});

$(document).ready(function() {
    $( "#realty" ).mouseover(function(){
        $(this).attr("src", "images/living.jpg");
    });
    $( "#realty" ).mouseout(function(){
        $(this).attr("src", "images/realty1.png");
    });
});

$(document).ready(function() {
    $( "#food" ).mouseover(function(){
        $(this).attr("src", "images/foodpal2.jpg");
    });
    $( "#food" ).mouseout(function(){
        $(this).attr("src", "images/foodpal_1.jpg");
    });
});

$(function () {
    $("div").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 3).slideDown();
        if ($("div:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});


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


//prompt

//prompt data
var promptData = {
  "annual" : {
    headerText: " "
  },
  "shiseido" : {
    headerText: "branding"
  },
}

function showPrompt(type) {
  $.confirm({
    title: promptData[type].headerText,
    content: '' +
    '<form action="" class="formName">' +
    '<div class="form-img">' +
    '<img src="images/cover.jpg" "alt="images"></div>' +
    '<div class="form-group">' +
    '<label>BlueFin Tuna</label>' +
    '<br>' + 
    '<label>$XX</label>' + 
    '<br>' +
    '<select id="options">' +
    '<option value="combo">Combo</option>' +
    '<option value="platter-c">Combo Platter</option>' +
    '<option value="sushi-sas">Sushi & Sashimi</option>' +
    '<option value="signature">Yu Seafood Signature Rolls</option>' +
    '<option value="maki">Classic Maki Rolls</option>' +
    '<option value="platter-s">Sashimi Platter</option>' +
    '</select>' +
    '</div>' +
    '</form>',
    buttons: {
        formSubmit: {
            text: 'Add to Cart',
            btnClass: 'btn-blue',
            action: function () {
                var name = this.$content.find('.name').val();
                if(!name){
                    $.alert('provide a valid name');
                    return false;
                }
                $.alert('Your name is ' + name);
            }
        },
        cancel: function () {
            //close
        },
    },
    onContentReady: function () {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
    }
});
};


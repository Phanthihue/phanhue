 


$(function() {
 $(".img-responsivec").on("click",function(){
  $(".item-desc").show();
});
});


$(function() {
  //Simple filter controls
  $('.simplefilter li').click(function() {
    $('.simplefilter li').removeClass('active');
    $(this).addClass('active');
  });
  //Multifilter controls
  $('.multifilter li').click(function() {
    $(this).toggleClass('active');
  });
  //Shuffle control
  $('.shuffle-btn').click(function() {
    $('.sort-btn').removeClass('active');
  });
  //Sort controls
  $('.sort-btn').click(function() {
    $('.sort-btn').removeClass('active');
    $(this).addClass('active');
  });
});

$(function() {
  var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
  $('.color-container-1').filterizr({ controlsSelector: '.color-controls-1' });
  $('.color-container-2').filterizr({ controlsSelector: '.color-controls-2', layout: 'packed' });
  $('.color-container-3').filterizr({ controlsSelector: '.color-controls-3', layout: 'sameHeight' });
  $('.color-container-4').filterizr({ controlsSelector: '.color-controls-4', layout: 'packed' });
  $('.color-container-5').filterizr({ controlsSelector: '.color-controls-5', layout: 'horizontal' });
  $('.color-container-6').filterizr({ controlsSelector: '.color-controls-6', layout: 'vertical' });
  window.filterizr = f;
});
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




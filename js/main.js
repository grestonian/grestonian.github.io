$(document).ready(function() {

  // Put your offset checking in a function
  function checkOffset() {
      if ($(".navbar").offset().top > 20) {
          // $(".navbar").removeClass("navbar-expand-lg");
          $(".navbar").removeClass("navbar-dark");
          // $("#header").removeClass("container");
          $(".navbar").addClass("bg-light navbar-light  custom-nav");
          console.log("CHEC");
      }     
      else {
          // $(".navbar").addClass("navbar-expand-lg");
          $(".navbar").removeClass("custom-nav");
          $(".navbar").addClass("navbar-dark");
          $(".navbar").removeClass("bg-light");
          $(".navbar").removeClass("navbar-light");
          // $("#header").addClass("container");
          console.log("CHECK");
      }
  }

  // Run it when the page loads
  checkOffset();


  // Run function when scrolling
  $(window).scroll(function() {
      checkOffset();
  });
});


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// SETTING ACTIVE LINK
var btnContainer = document.getElementById("Navbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(function(){  // $(document).ready shorthand
  $('#home').fadeIn('slow');
});



$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height() + 100;
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},500);
                  
          }
          
      }); 
  
  });
  
});
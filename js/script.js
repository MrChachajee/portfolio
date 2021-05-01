$(document).ready(function(){
    const typed = new Typed("#typed", {
        strings: ["Developer", "Freelancer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typed1 = new Typed("#typed1", {
        strings: ["Developer", "Freelancer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    window.onscroll = function() {myFunction()};

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
});
 
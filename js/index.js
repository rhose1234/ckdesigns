var navbar = document.querySelector(".navbar");

    // Add a scroll event listener to the window
    window.addEventListener("scroll", function() {
      var scroll = window.scrollY || window.pageYOffset;

      if (scroll > 300) {
        // Apply styles when scroll position is greater than 300
        navbar.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        navbar.style.backgroundColor = "#1844A1";
      } else {
        // Remove styles when scroll position is less than or equal to 300
        navbar.style.boxShadow = "none";
        navbar.style.backgroundColor = "initial"; // or any other default background color
      }
    });
  





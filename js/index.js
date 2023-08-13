var navbar = document.querySelector(".navbar");
var isScrolling = false;

// Debounce function to limit the rate of execution
function debounce(callback, delay) {
  var timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
}

// Function to apply styles on scroll
function handleScroll() {
  var scroll = window.scrollY || window.pageYOffset;

  if (scroll > 300) {
    navbar.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    navbar.style.backgroundColor = "#1844A1";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.backgroundColor = "initial";
  }
}

// Add a debounced scroll event listener to the window
window.addEventListener("scroll", debounce(function() {
  if (!isScrolling) {
    isScrolling = true;
    handleScroll();
    setTimeout(function() {
      isScrolling = false;
    }, 100); // Adjust the delay as needed
  }
}, 50)); // Adjust the debounce delay as needed

  





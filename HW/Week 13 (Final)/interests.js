// Automatic slideshow
document.addEventListener("DOMContentLoaded", function () {
    var interestsCarousel = new bootstrap.Carousel(
      document.getElementById("interestsCarousel"),
      {
        interval: 2000, //change every 2s
        pause: "hover", // pause when hover over image
      }
    );
  });

  // JavaScript for toggling the menu
document.addEventListener("DOMContentLoaded", function () {
    // Open the hamburger menu
    document
      .querySelector(".hamburger-menu")
      .addEventListener("click", function () {
        document
          .getElementById("hamburger-menu-content")
          .classList.add("active"); //active makes hamburger menu content visible
      });
  
    // Close the hamburger menu
    document
      .querySelector(".menu-close")
      .addEventListener("click", function () {
        document
          .getElementById("hamburger-menu-content")
          .classList.remove("active");
      });
  
    // document
    //   .querySelectorAll("#hamburger-menu-content a")
    //   .forEach((link) => {
    //     link.addEventListener("click", function () {
    //       document
    //         .getElementById("hamburger-menu-content")
    //         .classList.remove("active");
    //     });
    //   });
  });
  
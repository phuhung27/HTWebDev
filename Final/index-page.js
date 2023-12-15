document.addEventListener('DOMContentLoaded', function () {
  // Sliding name
  let slidingHeading = document.querySelector('.sliding-heading span');
  if (slidingHeading) {
      slidingHeading.classList.add('slide-in');
      slidingHeading.style.transform = 'translateX(0%)';
  }

  document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
  });

  // GSAP Animation
  // Timeline fade-in
  gsap.registerPlugin(ScrollTrigger);

function animateExperienceItem(item) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 70%", //detect when to start animating 
      toggleActions: "play none none none", //only load once on load-in
    },
  });

  tl.from(item, {
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
  });

  return tl;
}
});

// Hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  // Open
  document
    .querySelector(".hamburger-menu")
    .addEventListener("click", function () {
      document
        .getElementById("hamburger-menu-content")
        .classList.add("active"); //active makes hamburger menu content visible
    });

  // Close
  document
    .querySelector(".menu-close")
    .addEventListener("click", function () {
      document
        .getElementById("hamburger-menu-content")
        .classList.remove("active");
    });

    // To ensure content closes after clicking on link
  document
    .querySelectorAll("#hamburger-menu-content a")
    .forEach((link) => {
      link.addEventListener("click", function () {
        document
          .getElementById("hamburger-menu-content")
          .classList.remove("active"); 
      });
    });
});

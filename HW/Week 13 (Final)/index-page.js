document.addEventListener('DOMContentLoaded', function () {
  // Sliding name
  let slidingHeading = document.querySelector('.sliding-heading span');
  if (slidingHeading) {
      slidingHeading.classList.add('slide-in');
      slidingHeading.style.transform = 'translateX(0%)';
  }

  // GSAP Animation
  // Timeline fade-in
  gsap.registerPlugin(ScrollTrigger);

function animateExperienceItem(item) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  tl.from(item, {
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
  });

  return tl;
}

const experienceItems = document.querySelectorAll(".table-row"); 

experienceItems.forEach((item) => { //animate each experience
  animateExperienceItem(item);
});

  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', function() {
      navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });
});
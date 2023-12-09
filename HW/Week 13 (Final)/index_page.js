document.addEventListener('DOMContentLoaded', function () {
    let slidingHeading = document.querySelector('.sliding-heading'); //select element with that class
    let slidingSpan = document.querySelector('.sliding-heading span'); //select span within sliding-heading class

    slidingSpan.classList.add('slide-in'); //add slide-in element to slidingSpan

    slidingSpan.style.transform = 'translateX(0%)';
  });
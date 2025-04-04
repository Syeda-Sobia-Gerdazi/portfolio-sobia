// Scroll Animation Script
document.addEventListener('DOMContentLoaded', () => {
  // Get all elements that should be animated on scroll
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  
  // Set up the Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add 'visible' class when element is in viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.1, // trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // trigger slightly before element enters viewport
  });
  
  // Start observing each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});

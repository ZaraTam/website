document.addEventListener('DOMContentLoaded', function() {
  const sectionTitles = document.querySelectorAll('.section-title');
  
  sectionTitles.forEach(title => {
    // Get the actual text width
    const textWidth = title.scrollWidth;
    // Add 40px extra (20px on each side)
    const lineWidth = textWidth + 40;
    // Set CSS custom property
    title.style.setProperty('--line-width', lineWidth + 'px');
  });
});

// Smooth scroll to section function with offset for sticky nav
function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (element) {
    const navHeight = document.querySelector('nav').offsetHeight || 60;
    const elementPosition = element.offsetTop - navHeight - 20; // Extra 20px padding
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}
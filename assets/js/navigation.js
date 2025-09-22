/**
 * Navigation functionality
 */
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Navigation tracking
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const linkText = this.textContent.trim().toLowerCase();
      const href = this.getAttribute('href');

      // Track navigation events
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_navigation', {
          event_category: 'navigation',
          event_label: linkText,
          page_path: href
        });
      }
    });
  });

});
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

  // Track external link clicks
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      let label = 'external';

      // Identify specific organizations
      if (href.includes('lonsar.com')) {
        label = 'lonsar';
      } else if (href.includes('wildlondon.org.uk') || href.includes('wildlife')) {
        label = 'wildlife_trusts';
      }

      if (typeof gtag !== 'undefined') {
        gtag('event', 'organization_click', {
          event_category: 'social',
          event_label: label
        });
      }
    });
  });

  // Track card interactions
  setupCardTracking();
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

    // Track scroll indicator click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'scroll_indicator_click', {
        event_category: 'engagement',
        event_label: 'discover_more'
      });
    }
  }
}

// Setup card tracking for homepage cards
function setupCardTracking() {
  // What I Enjoy cards
  document.querySelectorAll('.interest-card').forEach((card, index) => {
    const cardNames = ['complex_problem_solving', 'creative_craftsmanship', 'exploration_discovery', 'impact_conservation'];
    const cardName = cardNames[index] || `interest_card_${index}`;

    card.addEventListener('mouseenter', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'card_hover', {
          event_category: 'interaction',
          event_label: 'what_i_enjoy',
          card_name: cardName
        });
      }
    });

    card.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'card_click', {
          event_category: 'interaction',
          event_label: 'what_i_enjoy',
          card_name: cardName
        });
      }
    });
  });

  // Where I Have Been cards
  document.querySelectorAll('.experience-subsection').forEach((card, index) => {
    const subsectionNames = ['education', 'work', 'travel'];
    const subsectionName = subsectionNames[index] || `subsection_${index}`;

    card.addEventListener('mouseenter', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'card_hover', {
          event_category: 'interaction',
          event_label: 'where_i_have_been',
          subsection_name: subsectionName
        });
      }
    });

    card.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'card_click', {
          event_category: 'interaction',
          event_label: 'where_i_have_been',
          subsection_name: subsectionName
        });
      }
    });
  });

  // Achievement cards
  document.querySelectorAll('.achievement-card').forEach((card, index) => {
    const cardNames = ['booking_hackathon', 'uk_exceptional_talent'];
    const cardName = cardNames[index] || `achievement_card_${index}`;

    card.addEventListener('mouseenter', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'card_hover', {
          event_category: 'interaction',
          event_label: 'achievements',
          card_name: cardName
        });
      }
    });

    card.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'card_click', {
          event_category: 'interaction',
          event_label: 'achievements',
          card_name: cardName
        });
      }
    });
  });
}
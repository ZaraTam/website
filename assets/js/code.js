document.addEventListener('DOMContentLoaded', function() {
  // Track project card interactions
  setupProjectCardTracking();

  // Track external project links
  setupProjectLinkTracking();
});

function setupProjectCardTracking() {
  document.querySelectorAll('.project-card').forEach((card, index) => {
    const projectNames = [
      'audio_blanket',
      'art_of_the_moment',
      'solar_system',
      'oyster_journeys',
      'kmeans_palette',
      'personal_website'
    ];
    const projectName = projectNames[index] || `project_card_${index}`;

    card.addEventListener('mouseenter', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'card_hover', {
          event_category: 'interaction',
          event_label: 'code',
          card_name: projectName
        });
      }
    });

    card.addEventListener('click', function(e) {
      // Don't track if clicking on a link
      if (e.target.tagName !== 'A' && !e.target.closest('a')) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'card_click', {
            event_category: 'interaction',
            event_label: 'code',
            card_name: projectName
          });
        }
      }
    });
  });
}

function setupProjectLinkTracking() {
  document.querySelectorAll('.project-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const projectCard = this.closest('.project-card');
      const projectIndex = Array.from(document.querySelectorAll('.project-card')).indexOf(projectCard);

      const projectNames = [
        'audio_blanket',
        'art_of_the_moment',
        'solar_system',
        'oyster_journeys',
        'kmeans_palette',
        'personal_website'
      ];
      const projectName = projectNames[projectIndex] || `project_${projectIndex}`;

      let linkType = 'external';
      if (href.includes('github.com')) {
        linkType = 'github';
      } else if (this.classList.contains('demo-link')) {
        linkType = 'demo';
      }

      if (typeof gtag !== 'undefined') {
        gtag('event', 'link_click', {
          event_category: 'portfolio',
          event_label: linkType,
          project_name: projectName
        });
      }
    });
  });

  // Track Artsy API link specifically
  document.querySelectorAll('a[href*="artsy"]').forEach(link => {
    link.addEventListener('click', function(e) {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'organization_click', {
          event_category: 'social',
          event_label: 'artsy'
        });
      }
    });
  });
}
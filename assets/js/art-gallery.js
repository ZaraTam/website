document.addEventListener('DOMContentLoaded', function() {
  // Track artwork card interactions
  setupArtworkCardTracking();
});

function setupArtworkCardTracking() {
  document.querySelectorAll('.artwork-card').forEach((card, index) => {
    const artworkNames = ['fields_of_remembrance', 'voyager', 'suspension'];
    const artworkName = artworkNames[index] || `artwork_card_${index}`;

    card.addEventListener('mouseenter', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'card_hover', {
          event_category: 'interaction',
          event_label: 'artworks',
          card_name: artworkName
        });
      }
    });

    card.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'card_click', {
          event_category: 'interaction',
          event_label: 'artworks',
          card_name: artworkName
        });
      }
    });

    // Track artwork view events
    card.addEventListener('mouseenter', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'artwork_view', {
          event_category: 'art',
          event_label: artworkName
        });
      }
    });
  });
}
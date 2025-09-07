/**
 * Art Gallery Lightbox functionality
 */

let artworks = [];
let currentImageIndex = 0;

/**
 * Load artwork data from the inline JSON script
 */
function loadArtworkData() {
  const dataScript = document.getElementById('artwork-data');
  if (dataScript) {
    try {
      artworks = JSON.parse(dataScript.textContent);
      // Convert relative paths to absolute paths for the base URL
      artworks = artworks.map(artwork => ({
        ...artwork,
        src: artwork.src.startsWith('/') ? artwork.src : '/' + artwork.src
      }));
    } catch (error) {
      console.error('Error parsing artwork data:', error);
    }
  }
}

/**
 * Opens the lightbox with the specified artwork
 * @param {number} index - Index of the artwork to display
 */
function openLightbox(index) {
  if (index < 0 || index >= artworks.length) return;
  
  currentImageIndex = index;
  const artwork = artworks[index];
  
  // Update lightbox content
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDetails = document.getElementById('lightbox-details');
  const lightboxDescription = document.getElementById('lightbox-description');
  
  if (lightboxImage) {
    lightboxImage.src = artwork.src;
    lightboxImage.alt = artwork.title;
  }
  
  if (lightboxTitle) {
    lightboxTitle.textContent = artwork.title;
  }
  
  if (lightboxDetails) {
    lightboxDetails.innerHTML = `
      <span class="year">${artwork.year}</span>
      <span class="medium">${artwork.medium}</span>
      <span class="dimensions">${artwork.dimensions}</span>
    `;
  }
  
  if (lightboxDescription) {
    lightboxDescription.textContent = artwork.description;
  }
  
  // Show lightbox
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus on lightbox for accessibility
    lightbox.focus();
  }
}

/**
 * Closes the lightbox
 */
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

/**
 * Changes to the next or previous image
 * @param {number} direction - 1 for next, -1 for previous
 */
function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + artworks.length) % artworks.length;
  openLightbox(currentImageIndex);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load artwork data first
  loadArtworkData();
  // Set up close button click handler
  const lightboxClose = document.querySelector('.lightbox-close');
  if (lightboxClose) {
    lightboxClose.addEventListener('click', function(e) {
      e.stopPropagation();
      closeLightbox();
    });
  }

  // Set up navigation buttons
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      changeImage(-1);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      changeImage(1);
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.style.display === 'block') {
      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          changeImage(-1);
          break;
        case 'ArrowRight':
          changeImage(1);
          break;
      }
    }
  });

  // Prevent lightbox close when clicking on content
  const lightboxContent = document.querySelector('.lightbox-content');
  if (lightboxContent) {
    lightboxContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Close lightbox when clicking on overlay
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', closeLightbox);
  }
});

// Make functions available globally for onclick handlers
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeImage = changeImage;
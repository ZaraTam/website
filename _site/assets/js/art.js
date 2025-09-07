// Array to store all artwork data for navigation
const artworks = [
  {
    id: 'fields-of-remembrance',
    title: 'Fields of remembrance',
    year: '2015',
    medium: 'Oil on canvas board',
    dimensions: '25.4 × 30.5 cm',
    description: 'An impressionistic landscape that meditates on memory and the passage of time, capturing a moment at the crossroads of life and death'
  },
  {
    id: 'the-voyager',
    title: 'The Voyager',
    year: '2015',
    medium: 'Oil on canvas board',
    dimensions: '30.5 × 25.4 cm',
    description: 'An abstract essence of life\'s journey - discovering and wandering through opportunities and uncertainties, while finding equanimity from within'
  },
  {
    id: 'suspension',
    title: 'Suspension',
    year: '2015',
    medium: 'Oil on canvas board',
    dimensions: '25.4 × 30.5 cm',
    description: 'Moments of pause and reflection, suspended between movement and stillness'
  }
];

let currentArtworkIndex = 0;

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const artworkTriggers = document.querySelectorAll('.artwork-trigger');
  artworkTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const artworkId = this.getAttribute('data-artwork-id');
      openModal(artworkId);
    });
  });
});

function openModal(imageId) {
  // Find the current artwork index
  currentArtworkIndex = artworks.findIndex(artwork => artwork.id === imageId);
  
  if (currentArtworkIndex === -1) {
    console.error('Artwork not found:', imageId);
    return;
  }
  
  displayCurrentArtwork();
  
  const modal = document.getElementById('imageModal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function displayCurrentArtwork() {
  const artwork = artworks[currentArtworkIndex];
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalYear = document.getElementById('modalYear');
  const modalMedium = document.getElementById('modalMedium');
  const modalDimensions = document.getElementById('modalDimensions');
  const modalDescription = document.getElementById('modalDescription');
  
  // Get the base URL more reliably
  const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/');
  
  modalImage.src = baseUrl + 'assets/art/' + artwork.id + '.jpg';
  modalImage.alt = artwork.title;
  modalTitle.textContent = artwork.title;
  modalYear.textContent = artwork.year;
  modalMedium.textContent = artwork.medium;
  modalDimensions.textContent = artwork.dimensions;
  modalDescription.textContent = artwork.description;
  
  // Update navigation buttons
  updateNavigationButtons();
}

function updateNavigationButtons() {
  const prevButton = document.getElementById('modalPrevButton');
  const nextButton = document.getElementById('modalNextButton');
  
  if (prevButton && nextButton) {
    prevButton.disabled = currentArtworkIndex === 0;
    nextButton.disabled = currentArtworkIndex === artworks.length - 1;
  }
}

function navigateToPrevious() {
  if (currentArtworkIndex > 0) {
    currentArtworkIndex--;
    displayCurrentArtwork();
  }
}

function navigateToNext() {
  if (currentArtworkIndex < artworks.length - 1) {
    currentArtworkIndex++;
    displayCurrentArtwork();
  }
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
  const modal = document.getElementById('imageModal');
  const isModalOpen = modal && modal.style.display === 'flex';
  
  if (!isModalOpen) return;
  
  switch(event.key) {
    case 'Escape':
      closeModal();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      navigateToPrevious();
      break;
    case 'ArrowRight':
      event.preventDefault();
      navigateToNext();
      break;
  }
});
---
layout: default
title: Zara Tam | Product Leader, Engineer & Artist
permalink: /art
---
<h1><span class="underline">Art</span></h1>

<div class="art-intro">
  <p class="art-philosophy">"I believe my role is to provide calm, because I myself have need of peace." — Henri Matisse</p>
</div>

<div class="art-gallery">
  <div class="artwork-card">
    <div class="artwork-image">
      <img src="{{ '/assets/art/fields-of-remembrance.jpg' | relative_url }}" alt="Fields of remembrance" loading="lazy" data-artwork-id="fields-of-remembrance" class="artwork-trigger" style="cursor: pointer;">
    </div>
    <div class="artwork-info">
      <h3>Fields of remembrance</h3>
      <div class="artwork-details">
        <span class="year">2015</span>
        <span class="medium">Oil on canvas board</span>
        <span class="dimensions">25.4 × 30.5 cm</span>
      </div>
      <p class="artwork-description">An impressionistic landscape that meditates on memory and the passage of time, capturing a moment at the crossroads of life and death</p>
    </div>
  </div>

  <div class="artwork-card">
    <div class="artwork-image">
      <img src="{{ '/assets/art/the-voyager.jpg' | relative_url }}" alt="The Voyager" loading="lazy" data-artwork-id="the-voyager" class="artwork-trigger" style="cursor: pointer;">
    </div>
    <div class="artwork-info">
      <h3>The Voyager</h3>
      <div class="artwork-details">
        <span class="year">2015</span>
        <span class="medium">Oil on canvas board</span>
        <span class="dimensions">30.5 × 25.4 cm</span>
      </div>
      <p class="artwork-description">An abstract essence of life's journey - discovering and wandering through opportunities and uncertainties, while finding equanimity from within</p>
    </div>
  </div>

  <div class="artwork-card">
    <div class="artwork-image">
      <img src="{{ '/assets/art/suspension.jpg' | relative_url }}" alt="Suspension" loading="lazy" data-artwork-id="suspension" class="artwork-trigger" style="cursor: pointer;">
    </div>
    <div class="artwork-info">
      <h3>Suspension</h3>
      <div class="artwork-details">
        <span class="year">2015</span>
        <span class="medium">Oil on canvas board</span>
        <span class="dimensions">25.4 × 30.5 cm</span>
      </div>
      <p class="artwork-description">Moments of pause and reflection, suspended between movement and stillness</p>
    </div>
  </div>
</div>

<!-- Modal -->
<div id="imageModal" class="modal" onclick="closeModal()">
  <div class="modal-content" onclick="event.stopPropagation()">
    <span class="modal-close" onclick="closeModal()">&times;</span>
    <div class="modal-image-container">
      <button id="modalPrevButton" class="modal-nav-button modal-nav-prev" onclick="navigateToPrevious()" title="Previous image (←)">
        <i class="fas fa-chevron-left"></i>
      </button>
      <img id="modalImage" src="" alt="">
      <button id="modalNextButton" class="modal-nav-button modal-nav-next" onclick="navigateToNext()" title="Next image (→)">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="modal-info">
      <h3 id="modalTitle"></h3>
      <div class="modal-details">
        <span id="modalYear"></span>
        <span id="modalMedium"></span>
        <span id="modalDimensions"></span>
      </div>
      <p id="modalDescription"></p>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/art.js' | relative_url }}"></script>
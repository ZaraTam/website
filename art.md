---
layout: default
title: Zara Tam | Product Leader, Engineer & Artist
permalink: /art
---

<header class="page-header">
  <h1><span class="underline">Art</span></h1>
  <section class="art-intro" role="banner">
    <blockquote class="art-philosophy">
      <p>"I believe my role is to provide calm, because I myself have need of peace."</p>
      <cite>— Henri Matisse</cite>
    </blockquote>
  </section>
</header>

<section class="art-gallery" role="region" aria-label="Art Gallery">
  {% for artwork in site.data.artworks %}
  <article class="artwork-card">
    <figure class="artwork-image">
      <img src="{{ artwork.src | relative_url }}" 
           alt="{{ artwork.alt }}" 
           loading="lazy" 
           onclick="openLightbox({{ forloop.index0 }})"
           tabindex="0"
           onkeydown="if(event.key==='Enter'||event.key===' ')openLightbox({{ forloop.index0 }})">
    </figure>
    <div class="artwork-info">
      <h3>{{ artwork.title }}</h3>
      <dl class="artwork-details">
        <dt class="sr-only">Year:</dt>
        <dd class="year">{{ artwork.year }}</dd>
        <dt class="sr-only">Medium:</dt>
        <dd class="medium">{{ artwork.medium }}</dd>
        <dt class="sr-only">Dimensions:</dt>
        <dd class="dimensions">{{ artwork.dimensions }}</dd>
      </dl>
      <p class="artwork-description">{{ artwork.description }}</p>
    </div>
  </article>
  {% endfor %}
</section>

<!-- Lightbox Modal -->
<div id="lightbox" 
     class="lightbox" 
     role="dialog" 
     aria-modal="true" 
     aria-labelledby="lightbox-title"
     aria-describedby="lightbox-description"
     onclick="closeLightbox()"
     tabindex="-1">
  <div class="lightbox-content">
    <button class="lightbox-close" 
            type="button"
            aria-label="Close lightbox"
            title="Close (Esc)">&times;</button>
    <img id="lightbox-image" 
         src="" 
         alt=""
         role="img">
    <div class="lightbox-info">
      <h3 id="lightbox-title"></h3>
      <div id="lightbox-details" role="list"></div>
      <p id="lightbox-description"></p>
    </div>
    <nav class="lightbox-nav" aria-label="Artwork navigation">
      <button id="prev-btn" 
              type="button"
              aria-label="Previous artwork"
              title="Previous (Left arrow)">&#10094;</button>
      <button id="next-btn" 
              type="button"
              aria-label="Next artwork"  
              title="Next (Right arrow)">&#10095;</button>
    </nav>
  </div>
</div>

<!-- Pass artwork data to JavaScript -->
<script type="application/json" id="artwork-data">
{{ site.data.artworks | jsonify }}
</script>

<!-- Art gallery JavaScript is loaded separately -->

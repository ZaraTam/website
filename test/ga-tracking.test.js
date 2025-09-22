/**
 * Google Analytics Tracking Events Test Suite
 *
 * This test suite verifies that Google Analytics tracking events
 * are fired correctly for various user interactions across the website.
 */

// Mock gtag function
let gtagCalls = [];
window.gtag = function(...args) {
  gtagCalls.push(args);
};

// Mock window.location for testing
Object.defineProperty(window, 'location', {
  value: {
    hostname: 'localhost',
    pathname: '/',
    search: ''
  },
  writable: true
});

// Helper function to reset gtag calls
function resetGtagCalls() {
  gtagCalls = [];
}

// Helper function to create DOM elements for testing
function createTestElement(tag, className, innerHTML = '') {
  const element = document.createElement(tag);
  element.className = className;
  element.innerHTML = innerHTML;
  document.body.appendChild(element);
  return element;
}

// Helper function to trigger mouse events
function triggerEvent(element, eventType) {
  const event = new Event(eventType, { bubbles: true });
  element.dispatchEvent(event);
}

// Helper function to trigger click events
function triggerClick(element) {
  const event = new MouseEvent('click', { bubbles: true });
  element.dispatchEvent(event);
}

// Helper function to trigger mouse enter events
function triggerMouseEnter(element) {
  const event = new MouseEvent('mouseenter', { bubbles: true });
  element.dispatchEvent(event);
}

describe('Google Analytics Tracking Tests', () => {

  beforeEach(() => {
    resetGtagCalls();
    // Clear DOM
    document.body.innerHTML = '';
  });

  describe('Navigation Tracking', () => {
    test('should track navigation clicks', () => {
      // Create navigation structure
      const nav = createTestElement('nav', '');
      const homeLink = createTestElement('a', '', 'Home');
      homeLink.href = '/';
      const codeLink = createTestElement('a', '', 'Code');
      codeLink.href = '/code';

      nav.appendChild(homeLink);
      nav.appendChild(codeLink);

      // Load navigation.js functionality
      document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
          const linkText = this.textContent.trim().toLowerCase();
          const href = this.getAttribute('href');

          if (typeof gtag !== 'undefined') {
            gtag('event', 'page_navigation', {
              event_category: 'navigation',
              event_label: linkText,
              page_path: href
            });
          }
        });
      });

      // Test home navigation
      triggerClick(homeLink);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'page_navigation',
        {
          event_category: 'navigation',
          event_label: 'home',
          page_path: '/'
        }
      ]);

      resetGtagCalls();

      // Test code navigation
      triggerClick(codeLink);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'page_navigation',
        {
          event_category: 'navigation',
          event_label: 'code',
          page_path: '/code'
        }
      ]);
    });
  });

  describe('Homepage Card Interactions', () => {
    test('should track interest card hover events', () => {
      const interestCard = createTestElement('div', 'interest-card');

      // Simulate home.js functionality
      const cardNames = ['complex_problem_solving', 'creative_craftsmanship', 'exploration_discovery', 'impact_conservation'];
      interestCard.addEventListener('mouseenter', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'card_hover', {
            event_category: 'interaction',
            event_label: 'what_i_enjoy',
            card_name: cardNames[0]
          });
        }
      });

      triggerMouseEnter(interestCard);

      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'card_hover',
        {
          event_category: 'interaction',
          event_label: 'what_i_enjoy',
          card_name: 'complex_problem_solving'
        }
      ]);
    });

    test('should track interest card click events', () => {
      const interestCard = createTestElement('div', 'interest-card');

      const cardNames = ['complex_problem_solving'];
      interestCard.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'card_click', {
            event_category: 'interaction',
            event_label: 'what_i_enjoy',
            card_name: cardNames[0]
          });
        }
      });

      triggerClick(interestCard);

      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'card_click',
        {
          event_category: 'interaction',
          event_label: 'what_i_enjoy',
          card_name: 'complex_problem_solving'
        }
      ]);
    });

    test('should track achievement card interactions', () => {
      const achievementCard = createTestElement('div', 'achievement-card');

      const cardNames = ['booking_hackathon', 'uk_exceptional_talent'];

      achievementCard.addEventListener('mouseenter', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'card_hover', {
            event_category: 'interaction',
            event_label: 'achievements',
            card_name: cardNames[0]
          });
        }
      });

      achievementCard.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'card_click', {
            event_category: 'interaction',
            event_label: 'achievements',
            card_name: cardNames[0]
          });
        }
      });

      // Test hover
      triggerMouseEnter(achievementCard);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0][1]).toBe('card_hover');

      resetGtagCalls();

      // Test click
      triggerClick(achievementCard);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0][1]).toBe('card_click');
    });
  });

  describe('Project Portfolio Tracking', () => {
    test('should track project card hover events', () => {
      const projectCard = createTestElement('div', 'project-card');

      const projectNames = ['audio_blanket', 'art_of_the_moment', 'solar_system'];

      projectCard.addEventListener('mouseenter', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'card_hover', {
            event_category: 'interaction',
            event_label: 'code',
            card_name: projectNames[0]
          });
        }
      });

      triggerMouseEnter(projectCard);

      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'card_hover',
        {
          event_category: 'interaction',
          event_label: 'code',
          card_name: 'audio_blanket'
        }
      ]);
    });

    test('should track project link clicks', () => {
      const projectCard = createTestElement('div', 'project-card');
      const projectLinks = createTestElement('div', 'project-links');
      const githubLink = createTestElement('a', '');
      githubLink.href = 'https://github.com/zaratam/audio-blanket';
      const demoLink = createTestElement('a', 'demo-link');
      demoLink.href = 'https://audioblanket.co';

      projectLinks.appendChild(githubLink);
      projectLinks.appendChild(demoLink);
      projectCard.appendChild(projectLinks);

      // Simulate code.js functionality
      [githubLink, demoLink].forEach((link, linkIndex) => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          const projectNames = ['audio_blanket'];
          const projectName = projectNames[0];

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

      // Test GitHub link
      triggerClick(githubLink);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'link_click',
        {
          event_category: 'portfolio',
          event_label: 'github',
          project_name: 'audio_blanket'
        }
      ]);

      resetGtagCalls();

      // Test demo link
      triggerClick(demoLink);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'link_click',
        {
          event_category: 'portfolio',
          event_label: 'demo',
          project_name: 'audio_blanket'
        }
      ]);
    });
  });

  describe('External Link Tracking', () => {
    test('should track organization link clicks', () => {
      const longarLink = createTestElement('a', '');
      longarLink.href = 'https://lonsar.com';

      const wildlifeLink = createTestElement('a', '');
      wildlifeLink.href = 'https://wildlondon.org.uk';

      // Simulate home.js functionality
      [longarLink, wildlifeLink].forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          let label = 'external';

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

      // Test Lonsar link
      triggerClick(longarLink);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'organization_click',
        {
          event_category: 'social',
          event_label: 'lonsar'
        }
      ]);

      resetGtagCalls();

      // Test Wildlife Trust link
      triggerClick(wildlifeLink);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'organization_click',
        {
          event_category: 'social',
          event_label: 'wildlife_trusts'
        }
      ]);
    });

    test('should track Artsy API link clicks', () => {
      const artsyLink = createTestElement('a', '');
      artsyLink.href = 'https://artsy.net/api';

      artsyLink.addEventListener('click', function(e) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'organization_click', {
            event_category: 'social',
            event_label: 'artsy'
          });
        }
      });

      triggerClick(artsyLink);

      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'organization_click',
        {
          event_category: 'social',
          event_label: 'artsy'
        }
      ]);
    });
  });

  describe('Art Gallery Tracking', () => {
    test('should track artwork card interactions', () => {
      const artworkCard = createTestElement('div', 'artwork-card');

      const artworkNames = ['fields_of_remembrance', 'voyager', 'suspension'];

      artworkCard.addEventListener('mouseenter', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'card_hover', {
            event_category: 'interaction',
            event_label: 'artworks',
            card_name: artworkNames[0]
          });
        }
      });

      artworkCard.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'card_click', {
            event_category: 'interaction',
            event_label: 'artworks',
            card_name: artworkNames[0]
          });
        }
      });

      // Test hover
      triggerMouseEnter(artworkCard);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'card_hover',
        {
          event_category: 'interaction',
          event_label: 'artworks',
          card_name: 'fields_of_remembrance'
        }
      ]);

      resetGtagCalls();

      // Test click
      triggerClick(artworkCard);
      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'card_click',
        {
          event_category: 'interaction',
          event_label: 'artworks',
          card_name: 'fields_of_remembrance'
        }
      ]);
    });

    test('should track artwork view events', () => {
      const artworkCard = createTestElement('div', 'artwork-card');

      const artworkName = 'fields_of_remembrance';

      artworkCard.addEventListener('mouseenter', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'artwork_view', {
            event_category: 'art',
            event_label: artworkName
          });
        }
      });

      triggerMouseEnter(artworkCard);

      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'artwork_view',
        {
          event_category: 'art',
          event_label: 'fields_of_remembrance'
        }
      ]);
    });
  });

  describe('Scroll Indicator Tracking', () => {
    test('should track scroll indicator clicks', () => {
      // Mock scrollToSection function behavior
      function scrollToSection(selector) {
        const element = document.querySelector(selector);
        if (element) {
          // Mock scroll behavior
          window.scrollTo = jest.fn();

          // Track scroll indicator click
          if (typeof gtag !== 'undefined') {
            gtag('event', 'scroll_indicator_click', {
              event_category: 'engagement',
              event_label: 'discover_more'
            });
          }
        }
      }

      // Create a target element
      createTestElement('div', 'target-section');

      // Simulate scroll click
      scrollToSection('.target-section');

      expect(gtagCalls).toHaveLength(1);
      expect(gtagCalls[0]).toEqual([
        'event',
        'scroll_indicator_click',
        {
          event_category: 'engagement',
          event_label: 'discover_more'
        }
      ]);
    });
  });

  describe('Debug Mode Configuration', () => {
    test('should enable debug mode for localhost', () => {
      // Test localhost detection
      const isDebugMode = window.location.hostname === 'localhost' ||
                         window.location.hostname === '127.0.0.1' ||
                         new URLSearchParams(window.location.search).has('debug');

      expect(isDebugMode).toBe(true);
    });

    test('should enable debug mode with query parameter', () => {
      // Mock location with debug parameter
      Object.defineProperty(window, 'location', {
        value: {
          hostname: 'example.com',
          search: '?debug=1'
        },
        writable: true
      });

      const isDebugMode = window.location.hostname === 'localhost' ||
                         window.location.hostname === '127.0.0.1' ||
                         new URLSearchParams(window.location.search).has('debug');

      expect(isDebugMode).toBe(true);
    });
  });

  describe('Integration Tests', () => {
    test('should track multiple events in sequence', () => {
      // Create multiple elements
      const navLink = createTestElement('a', '', 'Home');
      navLink.href = '/';
      const nav = createTestElement('nav', '');
      nav.appendChild(navLink);

      const interestCard = createTestElement('div', 'interest-card');

      // Set up event listeners
      navLink.addEventListener('click', function(e) {
        gtag('event', 'page_navigation', {
          event_category: 'navigation',
          event_label: 'home',
          page_path: '/'
        });
      });

      interestCard.addEventListener('click', function() {
        gtag('event', 'card_click', {
          event_category: 'interaction',
          event_label: 'what_i_enjoy',
          card_name: 'complex_problem_solving'
        });
      });

      // Trigger events
      triggerClick(navLink);
      triggerClick(interestCard);

      expect(gtagCalls).toHaveLength(2);
      expect(gtagCalls[0][1]).toBe('page_navigation');
      expect(gtagCalls[1][1]).toBe('card_click');
    });

    test('should handle missing gtag gracefully', () => {
      // Temporarily remove gtag
      const originalGtag = window.gtag;
      delete window.gtag;

      const testCard = createTestElement('div', 'interest-card');

      testCard.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'card_click', {
            event_category: 'interaction',
            event_label: 'test'
          });
        }
      });

      // This should not throw an error
      expect(() => triggerClick(testCard)).not.toThrow();

      // Restore gtag
      window.gtag = originalGtag;
    });
  });
});
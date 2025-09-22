# Google Analytics Custom Events Plan

## Overview
This document outlines a comprehensive plan for custom Google Analytics events to track meaningful user interactions on the personal website.

## Current Implementation
- Basic Google Analytics tracking with ID `G-G2DKGS3Y13`
- Standard pageview tracking only
- No custom events currently implemented

## Planned Custom Events

### 1. Navigation & Page Engagement
- **Navigation Clicks**: Monitor which pages users visit most (Home, Code, Art)

### 2. Project Portfolio Interactions
- **Project Card Interactions**: Track which coding projects get the most attention
- **External Link Clicks**: Monitor clicks to live demos, GitHub repos, and external sites

### 3. Social & Professional Engagement
- **Social Profile Clicks**: Track LinkedIn and GitHub profile visits
- **External Organization Links**: Monitor clicks to Lonsar, Wildlife Trusts, Artsy API

### 4. Content Interaction Quality
- **Card Interactions**: Track hover and click events on all card types (interest, achievement, project, artwork)
- **Mobile Touch Events**: Track touch interactions for mobile users

### 5. User Journey & Conversion
- **Scroll Indicator Usage**: Track clicks on "Discover more" scroll prompts
- **Session Duration by Page Type**: Understand content preference patterns
- **Return Visitor Behavior**: Track repeat engagement patterns

## Event Structure & Implementation

### Navigation Events
```javascript
// Category: navigation
gtag('event', 'page_navigation', {
  event_category: 'navigation',
  event_label: 'home|code|art',
  page_path: window.location.pathname
});
```

### Content Engagement Events
```javascript
// Category: engagement
gtag('event', 'scroll_indicator_click', {
  event_category: 'engagement',
  event_label: 'discover_more'
});
```

### Project Portfolio Events
```javascript
// Category: portfolio
gtag('event', 'link_click', {
  event_category: 'portfolio',
  event_label: 'demo|github',
  project_name: 'audio_blanket|art_moment|solar_system|oyster_journeys|kmeans_palette|personal_website'
});
```

### Social & Professional Events
```javascript
// Category: social
gtag('event', 'social_click', {
  event_category: 'social',
  event_label: 'linkedin|github'
});

gtag('event', 'organization_click', {
  event_category: 'social',
  event_label: 'lonsar|wildlife_trust|artsy',
  context: 'volunteer_work|api_reference'
});
```

### Art Gallery Events
```javascript
// Category: art
gtag('event', 'artwork_view', {
  event_category: 'art',
  event_label: 'fields_remembrance|voyager|suspension',
  artwork_year: '2015',
  medium: 'oil_canvas'
});
```

### Card Interaction Events

#### Homepage Cards

**What I Enjoy Section**
```javascript
// Card hover events
gtag('event', 'card_hover', {
  event_category: 'interaction',
  event_label: 'what_i_enjoy',
  card_name: 'complex_problem_solving|creative_craftsmanship|exploration_discovery|impact_conservation'
});

// Card click events
gtag('event', 'card_click', {
  event_category: 'interaction',
  event_label: 'what_i_enjoy',
  card_name: 'complex_problem_solving|creative_craftsmanship|exploration_discovery|impact_conservation'
});
```

**Where I Have Been Section**
```javascript
// Category: interaction
// Note: These are subsections, not cards - track area clicks instead
gtag('event', 'subsection_click', {
  event_category: 'interaction',
  event_label: 'where_i_have_been',
  subsection_name: 'education|work|travel'
});
```

**Achievements Section**
```javascript
// Card hover events
gtag('event', 'card_hover', {
  event_category: 'interaction',
  event_label: 'achievements',
  card_name: 'booking_hackathon|uk_exceptional_talent'
});

// Card click events
gtag('event', 'card_click', {
  event_category: 'interaction',
  event_label: 'achievements',
  card_name: 'booking_hackathon|uk_exceptional_talent'
});
```

#### Code Page Cards
```javascript
// Card hover events
gtag('event', 'card_hover', {
  event_category: 'interaction',
  event_label: 'projects',
  card_name: 'audio_blanket|art_moment|solar_system|oyster_journeys|kmeans_palette|personal_website'
});

// Card click events
gtag('event', 'card_click', {
  event_category: 'interaction',
  event_label: 'projects',
  card_name: 'audio_blanket|art_moment|solar_system|oyster_journeys|kmeans_palette|personal_website'
});
```

#### Art Page Cards
```javascript
// Card hover events
gtag('event', 'card_hover', {
  event_category: 'interaction',
  event_label: 'artworks',
  card_name: 'fields_remembrance|voyager|suspension'
});

// Card click events
gtag('event', 'card_click', {
  event_category: 'interaction',
  event_label: 'artworks',
  card_name: 'fields_remembrance|voyager|suspension'
});
```

## Implementation Priority

### Phase 1 (High Priority)
1. **Navigation tracking** - Simple page navigation events
2. **External link clicks** - Portfolio demo/GitHub links
3. **Social profile clicks** - LinkedIn/GitHub profile links
4. **Scroll indicator clicks** - Homepage "Discover more" button

### Phase 2 (Medium Priority)
1. **Card hover events** - Interest and achievement cards
2. **Project card interactions** - Code page project cards
3. **Art gallery interactions** - Artwork card engagement
4. **Organization link clicks** - Volunteer/reference links

### Phase 3 (Low Priority)
1. **Mobile touch events** - Touch-specific interactions
2. **Advanced engagement** - Time-based metrics
3. **Cross-session analysis** - Return visitor patterns

## Key Metrics to Track

### Success Metrics
- Navigation patterns between Home/Code/Art pages
- Project portfolio engagement (especially Audio Blanket and Solar System)
- Social profile click-through rates
- Card interaction patterns (hover vs click)
- Mobile vs desktop interaction differences

## Implementation Files
- `_layouts/default.html` - Main GA configuration
- `assets/js/home.js` - Homepage interactions
- `assets/js/navigation.js` - Navigation tracking
- Individual page templates for specific events

### Mobile-Specific Events
```javascript
// Category: mobile
gtag('event', 'touch_interaction', {
  event_category: 'mobile',
  event_label: 'card_touch|link_touch',
  element_type: 'interest|achievement|project|artwork|external_link'
});
```

## Notes
- Implement progressively following the phase priority
- Test events in GA4 debug mode before production
- Hover events don't work on mobile - use touch events instead
- Consider user privacy and GDPR compliance
- Review and optimize based on initial data collection
# Personal Portfolio Website

A clean, responsive personal portfolio website built with Jekyll, showcasing coding projects and artwork.

## Live Site

- **Primary URL**: [zaratam.com](http://zaratam.com) 
- **GitHub Pages**: https://zaratam.github.io/website/

## Project Structure

```
/
├── _config.yml              # Jekyll configuration
├── _data/
│   ├── navigation.yaml      # Navigation menu items
│   └── artworks.yml         # Artwork data
├── _includes/
│   ├── footer.html          # Site footer component
│   └── navigation.html      # Navigation component
├── _layouts/
│   └── default.html         # Main site layout
├── _site/                   # Generated site (auto-generated)
├── .github/
│   ├── workflows/
│   │   ├── ci.yml           # CI pipeline
│   │   └── deploy.yml       # GitHub Pages deployment
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md    # Bug report template
│   └── dependabot.yml      # Dependabot configuration
├── assets/
│   ├── art/                 # Artwork images
│   ├── css/
│   │   ├── _art.scss        # Art page styles
│   │   ├── _base.scss       # Base styles and reset
│   │   ├── _components.scss # Reusable components
│   │   ├── _footer.scss     # Footer styles
│   │   ├── _home.scss       # Home page styles
│   │   ├── _navigation.scss # Navigation styles
│   │   ├── _projects.scss   # Projects page styles
│   │   ├── _responsive.scss # Responsive breakpoints
│   │   ├── critical.scss    # Critical CSS for performance
│   │   └── main.scss        # Main stylesheet (imports all)
│   ├── images/              # Site images and favicons
│   └── js/
│       ├── home.js          # Home page interactions
│       └── navigation.js    # Navigation functionality
├── .yamllint.yml           # YAML linting configuration
├── 404.md                  # Custom 404 page
├── art.md                  # Art gallery page
├── code.md                 # Projects/code page
├── index.md                # Home page
└── README.md               # This file
```

## File Naming Conventions

### CSS/SCSS Files
- **Partials**: Prefixed with underscore (`_base.scss`, `_components.scss`)
- **Main files**: No underscore (`main.scss`)
- **Naming pattern**: Kebab-case for multi-word names

### JavaScript Files  
- **Naming pattern**: Kebab-case (`art-gallery.js`, `navigation.js`)
- **Descriptive names**: Indicate functionality or page scope

### Data Files
- **Extension**: `.yml` for YAML, `.yaml` also acceptable
- **Naming pattern**: Descriptive nouns (`artworks.yml`, `navigation.yaml`)

### Pages
- **Extension**: `.md` for Markdown pages
- **Naming pattern**: Single words when possible (`art.md`, `code.md`)

## Technology Stack

- **Jekyll**: Static site generator
- **SCSS**: CSS preprocessor with modular architecture
- **Vanilla JavaScript**: No external dependencies
- **HTML5**: Semantic markup with accessibility features

## Development

### Prerequisites
- Ruby (for Jekyll)
- Jekyll gem
- Bundler

### Local Development
```bash
bundle exec jekyll serve
```

### Build for Production
```bash
bundle exec jekyll build
```

## Features

### Performance
- Lazy loading images
- Deferred JavaScript loading
- Preconnect to external domains
- Modular CSS architecture

### Accessibility
- Semantic HTML5 elements
- ARIA labels and roles
- Screen reader support
- Keyboard navigation
- Skip links
- Alt text for images

### SEO
- Jekyll SEO plugin
- Proper meta tags
- Structured data
- Sitemap generation

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement approach
- Graceful degradation for older browsers

## Deployment

### Automated Deployment with GitHub Actions

The site uses GitHub Actions for automated deployment to GitHub Pages:

1. **Automatic Deployment**: Push to `master` branch triggers automatic deployment
2. **CI Pipeline**: Pull requests run tests and linting
3. **Build Process**: Jekyll builds with production optimizations

### GitHub Pages Configuration

The site is configured for GitHub Pages deployment with the following settings in `_config.yml`:
- Base URL: `/website`
- Site URL: `https://zaratam.github.io/`

### Manual Deployment (if needed)

```bash
# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Test the build
bundle exec htmlproofer ./_site --disable-external
```

### Setup Instructions

1. **Enable GitHub Pages**: Go to repository Settings → Pages
2. **Set Source**: Choose "GitHub Actions" as the source
3. **Push to master**: Any push to master will trigger deployment
4. **Check Actions**: Monitor deployment in the Actions tab

### Workflow Files

- `.github/workflows/deploy.yml`: Production deployment to GitHub Pages
- `.github/workflows/ci.yml`: CI pipeline with testing and linting

## License

This project is licensed under the MIT License - see [LICENSE](https://github.com/ZaraTam/website/blob/master/LICENSE) for details.
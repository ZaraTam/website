import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
            author
          }
        }
      }
    `
  )

  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const url = data.site.siteMetadata.url
  const image = data.site.siteMetadata.image
  const author = data.site.siteMetadata.author

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <script
        async
        defer
        src="https://alysis.alexsparrow.dev/tracker.js"
        data-alysis-domain="zaratam.com"
      ></script>

      {/* Schema.org markup for Google+ */}
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />

      {/* Twitter Card data */}
      <meta name="twitter:card" content={image} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* Twitter summary card with large image must be at least 280 x 150px */}
      <meta name="twitter:image:src" content={image} />

      {/* Open Graph data */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

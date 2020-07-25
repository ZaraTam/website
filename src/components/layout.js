import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import "./bootstrap.min.css"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Helmet>
        <title>Zara Tam</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Font Awesome */}
        <script
          src="https://kit.fontawesome.com/63985d3188.js"
          crossorigin="anonymous"
        ></script>

        {/* Custom Fonts */}
        <link
          rel="stylesheet"
          href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic"
          type="text/css"
        />
      </Helmet>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

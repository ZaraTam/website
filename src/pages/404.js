import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.scss"

const ErrorPage = () => (
  <Layout>
    <SEO title="Zara Tam" />

    <main>
      <section class="error">
        <h1>¯\_(ツ)_/¯</h1>
        <p>
          <Link to="#top">Go back</Link> to somewhere nice
        </p>
      </section>
    </main>
  </Layout>
)

export default ErrorPage

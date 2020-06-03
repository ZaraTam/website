import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import CodeCard from "../components/code-card"
import ArtCard from "../components/art-card"
import PhotographyCard from "../components/photography-card"

const IndexPage = props => (
  <Layout>
    <main>
      <section id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2>About</h2>
              <p>Curious. Ambitious. Entrepreneurial</p>
              <p>
                I'm a Product Manager who started my career as a Chartered
                Engineer
              </p>
              <p>
                I enjoy making code, art, and food to express and optimise my
                life
              </p>
              <p>* * *</p>
              <p>
                Alumna of Cambridge, Imperial, Entrepreneur First, and Founders
                Factory
              </p>
              <p>Won 2nd prize of Booking.com Hackathon 2017</p>
              <p>Awarded UK Tier 1 Exceptional Talent visa</p>
            </div>
          </div>
        </div>
      </section>

      <section id="code">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2>Code</h2>
              {props.data.codeFiles.nodes.map(node => {
                return (
                  <CodeCard
                    title={node.childMarkdownRemark.frontmatter.title}
                    website={node.childMarkdownRemark.frontmatter.website}
                    notebook={node.childMarkdownRemark.frontmatter.notebook}
                    source={node.childMarkdownRemark.frontmatter.source}
                    html={node.childMarkdownRemark.html}
                  />
                )
              })}

              <p>
                <a
                  href="https://github.com/ZaraTam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  + Show more
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="art">
        <h2>Art</h2>
        <blockquote>
          <p className="quote">
            "I believe my role is to provide calm, because I myself have need of
            peace."
          </p>
          <p>– Henri Matisse</p>
        </blockquote>
        <p>Some of the artwork I've painted</p>

        <div className="container-fluid">
          <div className="row">
            {props.data.artFiles.nodes.map(node => {
              return (
                <div className="col-md-6">
                  <ArtCard
                    title={node.childMarkdownRemark.frontmatter.title}
                    image={node.childMarkdownRemark.frontmatter.image}
                    html={node.childMarkdownRemark.html}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="photography">
        <h2>Photography</h2>
        <div className="container-fluid">
          <div className="row">
            {props.data.photographyFiles.nodes.map(node => {
              return (
                <div className="col-md-6">
                  <PhotographyCard
                    title={node.childMarkdownRemark.frontmatter.title}
                    image={node.childMarkdownRemark.frontmatter.image}
                    html={node.childMarkdownRemark.html}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="get-in-touch">
        <h2>Get in touch</h2>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/zaratam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in socials"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zaratam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github socials"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/zaratam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter socials"></i>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@zaratam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-medium-m socials"></i>
            </a>
          </li>
        </ul>

        <h5>Speaking engagements:</h5>
        <p></p>
        <p>Founders Forum "Future of Work" - London, UK - 12 December 2017</p>
        <p>AI Europe 2017 - London, UK - 20-21 November 2017</p>
        <p>ProductTank "Applied AI / ML" - London, UK - 15 November 2017</p>
        <p>
          Oxford AI Society "How to turn AI & Big Data into billion dollar
          businesses" - Oxford, UK - 7 June 2017
        </p>
        <p>
          Cambridge University Commonwealth Society (CUCS) Scholars' Seminar -
          Cambridge, UK - 25 November 2015
        </p>
      </section>
    </main>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    blackSwan: file(relativePath: { eq: "black-swan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    frozenRime: file(relativePath: { eq: "frozen-rime.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kids: file(relativePath: { eq: "kids.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    protest: file(relativePath: { eq: "protest.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    codeFiles: allFile(
      sort: { order: ASC, fields: childMarkdownRemark___frontmatter___order }
      filter: { sourceInstanceName: { eq: "code" } }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            notebook
            source
            title
            website
          }
          html
        }
      }
    }
    artFiles: allFile(
      sort: { order: ASC, fields: childMarkdownRemark___frontmatter___order }
      filter: { sourceInstanceName: { eq: "art" } }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
    photographyFiles: allFile(
      sort: { order: ASC, fields: childMarkdownRemark___frontmatter___order }
      filter: { sourceInstanceName: { eq: "photography" } }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`

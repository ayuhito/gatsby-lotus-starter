import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import gatsbyLogo from "../../static/images/gatsby-logo.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid>
      <Row>
        <Col className="text-center my-auto">
          <img src={gatsbyLogo} alt="Logo" width="300" />
          <h1>LOTUS STARTER</h1>
          <h3>A Gatsby Starter I personally use for my own projects.</h3>
        </Col>
        <Col className="my-auto">
          <h3>Features</h3>
          <ul>
            <li>Gatsby v2</li>
            <li>
              <a href="https://getbootstrap.com/">Bootstrap</a> +{" "}
              <a href="https://react-bootstrap.github.io/">React Bootstrap</a>
            </li>
            <li>
              <a href="https://github.com/react-icons/react-icons">
                React Icons
              </a>
            </li>
            <li>
              <a href="https://github.com/fontsource/fontsource">Fontsource</a>{" "}
              +{" "}
            </li>
            <li>
              <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image">
                Image Processing
              </a>{" "}
              /{" "}
              <a href="https://github.com/vzhou842/gatsby-plugin-optimize-svgs">
                SVGO Optimizations
              </a>
            </li>
            <li>SEO Generation</li>
            <ul>
              <li>
                <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap">
                  Sitemap Generation
                </a>
              </li>
              <li>
                <a href="https://github.com/mdreizin/gatsby-plugin-robots-txt">
                  Robots.txt Generation
                </a>
              </li>
              <li>Site Metadata</li>
            </ul>
            <li>PWA Support</li>
            <ul>
              <li>
                <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest">
                  Web Manifest Generation
                </a>
              </li>
              <li>
                <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest">
                  Responsive Favicon Generation
                </a>
              </li>
              <li>
                <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-offline">
                  Service Worker Offline Support
                </a>
              </li>
              <li>
                <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-nprogress">
                  nprogress Loading Bar for Slow Connections
                </a>
              </li>
            </ul>
            <li>Development Tooling</li>
            <ul>
              <li>
                <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass">
                  SASS Support
                </a>
              </li>
              <li>
                <a href="https://preset-env.cssdb.org/">PostCSS Preset Env</a>
              </li>
              <li>
                <a href="https://cssnano.co/">CSSNano</a>
              </li>
              <li>
                <a href="https://eslint.org/">ESLint</a>
              </li>
              <li>
                <a href="https://prettier.io/">Prettier</a>
              </li>
              <li>
                <a href="https://stylelint.io/">Stylelint</a>
              </li>
            </ul>
            <li>Continuous Integration and Deployment</li>
            <ul>
              <li>
                <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify">
                  Netlify Header Generation
                </a>
              </li>
              <li>
                <a href="https://circleci.com/">CircleCI Configuration</a>
              </li>
              <li>Caching for Yarn and Gatsby for Quicker Build Times</li>
              <li>Automatic Deployment to Netlify</li>
            </ul>
          </ul>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

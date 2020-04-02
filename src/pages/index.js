import React from "react"

import Container from "react-bootstrap/Container"

import iconAbout from "../../static/images/icons/about.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className="text-center">
      <img src={iconAbout} alt="Icon" width="48" />
      <h2>GATSBY STARTER</h2>
      <h1>LOTUS</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Container>
  </Layout>
)

export default IndexPage

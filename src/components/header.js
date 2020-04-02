import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../static/images/logo.svg"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar collapseOnSelect expand="xl">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="56"
            height="56"
            className="d-inline-block align-top"
            alt="Lotus Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end row no-gutters nav-text">
            <Link href="/" className="nav-link">
              HOME
            </Link>
            <Link href="/" className="nav-link">
              PORTFOLIO
            </Link>
            <Link to="/test" className="nav-link">
              CONTACT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Home`,
}

export default Header

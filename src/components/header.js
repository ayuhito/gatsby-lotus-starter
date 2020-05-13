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
      <Navbar collapseOnSelect expand="xl" variant="dark">
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
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link" activeClassName="active-link">
              Home
            </Link>
            <Link
              to="/install"
              className="nav-link"
              activeClassName="active-link"
            >
              Install
            </Link>
            <a
              href="https://github.com/DecliningLotus/gatsby-lotus-starter"
              className="nav-link"
            >
              Github
            </a>
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

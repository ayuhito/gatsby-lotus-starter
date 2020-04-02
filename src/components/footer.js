import { Link } from "gatsby"
import React from "react"

import logo from "../../static/images/logo.svg"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Footer = () => (
  <footer>
    <Container fluid>
      <Navbar>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Lotus Logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Navbar.Text className="footer-text">Footer Text</Navbar.Text>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/" className="nav-link footer-text">
            Footer 2
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </footer>
)

export default Footer

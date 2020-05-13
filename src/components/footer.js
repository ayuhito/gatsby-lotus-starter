import React from "react"

import { FaGithub } from "react-icons/fa"
import logo from "../../static/images/logo.svg"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Footer = () => (
  <footer>
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="56"
            height="56"
            className="d-inline-block align-top"
            alt="Lotus Logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Navbar.Text>Gatsby Lotus Starter</Navbar.Text>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <a
            href="https://github.com/DecliningLotus/gatsby-lotus-starter"
            className="nav-link"
          >
            <FaGithub size="30px" />
          </a>
          <a
            href="https://github.com/DecliningLotus/gatsby-lotus-starter"
            className="nav-link"
          >
            Github
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </footer>
)

export default Footer

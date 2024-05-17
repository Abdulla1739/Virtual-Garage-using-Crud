import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/Logo.png";
import "./NavStyle.css";
import "../../bootstrap.min.css";
import SignUpRegistration from "./SignUpRegistration";
import LoginResgistration from "./LoginResgistration";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <>
      <Navbar key="lg" expand="lg" className="NavBar mb-3" fixed="top">
        <Container fluid>
          <Navbar.Brand className="NavBrand me-auto ms-3">
            <Link className="text-decoration-none " to={"/"}>
              <img
                className="me-3"
                style={{ height: "50px" }}
                fluid
                src={logo}
              />
              <span className="NavH">Garage</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbarToggler"
            aria-controls={`offcanvasNavbar-expand-lg`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton className="btnClose">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <b>Sign in to explore!</b> <br /> If you don’t have an account,
                please <b>sign up.</b>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link active className="NavLinks mx-lg-2 my-2 my-lg-0 ">
                  <HashLink className="text-decoration-none " to="#hero">
                    Home
                  </HashLink>
                </Nav.Link>
                <Nav.Link className="NavLinks mx-lg-2 my-2 my-lg-0 ">
                  <HashLink className="text-decoration-none" to="#features">
                    Features
                  </HashLink>
                </Nav.Link>
                <Nav.Link className="NavLinks mx-lg-2 my-2 my-lg-0">
                  <HashLink className="text-decoration-none" to="#contact">
                    Contact
                  </HashLink>
                </Nav.Link>
              </Nav>
              <Nav className=" pe-3">
                <Nav.Link className="loginButton mx-lg-2 my-2 my-lg-0 ">
                  <LoginResgistration />
                </Nav.Link>
                <Nav.Link className="SignUpButton mx-lg-2 my-2 my-lg-0 ">
                  <SignUpRegistration />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

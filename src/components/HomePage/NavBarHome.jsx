import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/Logo.png";
import "../landingPage/NavStyle.css";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import NavDropdown from "react-bootstrap/NavDropdown";
import { removeUserAPI } from "../../services/allAPI";
import UpdateUserDetails from "./UpdateUserDetails";

const NavBarHome = ({ userDetails }) => {
  const handleAccountDelete = async (userId) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (userConfirmed) {
      try {
        await deleteUserAccount(userId);
      } catch (error) {
        console.error("Error deleting account:", error.message);
      }
    }
  };

  const deleteUserAccount = async (userId) => {
    try {
      const response = await removeUserAPI(userId);
      console.log("Account deleted successfully");
      await new Promise((resolve) => {
        window.localStorage.removeItem("isLogin");
        window.localStorage.removeItem("currentUserid");
        resolve();
      });
      window.location.href = "/";
    } catch (error) {
      throw new Error(`Error deleting account: ${error.message}`);
    }
  };

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
            <Offcanvas.Header
              closeButton
              className="btnClose"
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3"></Nav>

              <Nav className=" pe-3">
                <NavDropdown
                  className="NavLinks me-lg-5"
                  style={{ textTransform: "uppercase", fontSize: "larger" }}
                  title={userDetails.fName}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className="text-center ">
                    <UpdateUserDetails userDetails={userDetails} />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-center"
                    onClick={() => handleAccountDelete(userDetails.id)}
                  >
                    Account Delete
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link className="SignUpButton mt-3 mx-lg-2 my-2 my-lg-0 ">
                  <Logout />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarHome;

import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import About from "./About"

const Styles = styled.div`
  .me-auto {
    font-size: 20px;
  }

  .nav1 {
    background-color: none;
    width: 100%;
    height: 6rem;
    position: fixed;
    z-index: 5;
    // border: 1px solid white;
  }

  .Lfont1 {
    margin-left: -5rem;
    font-size: 48px; 
    text-decoration: none;
    // border: 1px solid black;
    padding: 0px;
    font-family: Stencil;
  }

  .Lfont1:hover {
    text-decoration: none;
  }

  .Lfont2:hover {
    text-decoration: none;
    color: #5ce84f;
  }

  .Lfont2 {
    margin-left: -6rem;
    font-size: 24px;
    font-family: Times New Roman;
    color: #5ce84f;
    text-decoration: none;
    // border: 1px solid black;
    padding: 10px;
    position: relative;
    top: -20px;
    left: -6px;
  }

  span {
    padding: 20px 20px 20px 10px;
    font-weight: normal;
    color: #fff;
    font-size: 22px;
    
  }

  span:hover {
    text-decoration: underline;
    transition: 0.5s;
    // background-color: #fff;
  }

  #basic-nav-dropdown {
    color: #fff;
    font-size: 22px;
  }

  // ---------------- Mobile view -----------------

  @media only screen and (max-width: 800px){

    .Lfont1 {
      margin-left: 1rem;
      font-size: 48px; 
      text-decoration: none;
      // border: 1px solid black;
      padding: 0px;
      font-family: Stencil;
      position: relative;
      top: -10px;
    }
  
    .Lfont1:hover {
      text-decoration: none;
    }
  
    .Lfont2:hover {
      text-decoration: none;
      color: #5ce84f;
    }
  
    .Lfont2 {
      margin-left: 0rem;
      font-size: 24px;
      font-family: Times New Roman;
      color: #5ce84f;
      text-decoration: none;
      // border: 1px solid black;
      padding: 10px;
      position: relative;
      top: -30px;
      left: -6px;
    } 

    .nav1 {
      background-color: #343535;
      width: 100%;
      height: 6rem;
      position: fixed;
      z-index: 5;
      // border: 1px solid white;
    }

    .me-auto {
      font-size: 20px;
      background-color: #343535;
      width: 250px;
      text-align: center;
      position: absolute;
      left: 16rem;
      top: 6rem;
    }

    .menu-btn {
      color: #fff;
      background-color: #fff;
      margin-bottom: 2rem;
      margin-right: 0.5rem;
    }

  }
`;

function Header() {
  return (
    <>
      <Styles>
        <Navbar className="nav1" expand="lg" variant="light" style={{backgroundColor:"#343535"}}>
          <div className="container">
            <Navbar.Brand href="home">
              <span className="Lfont1">
                ZOSH
              </span>
              <br />
              <span
              className="Lfont2"
              >
                AEROSPACE
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-btn"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="home">
                  <span>Home</span>
                </Nav.Link>
                <Nav.Link href="home">
                  <span>About Us</span>
                </Nav.Link>
                {/* <Nav.Link href="About"><span>What we do</span></Nav.Link> */}
                <NavDropdown title="What we do" id="basic-nav-dropdown">
                  <NavDropdown.Item href="rugged">Rugged Products</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="simulator">Simulator</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="testjig">Test Jig</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="ate">ATE</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="ets">ETS</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="antenna">Antenna & RF</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="solution">
                  <span>Our Solutions</span>
                </Nav.Link>
                {/* <Nav.Link href="About">
                  <span>Zosh Careers</span>
                </Nav.Link> */}
                <Nav.Link href="suppliers">
                  <span>Suppliers</span>
                </Nav.Link>
                <Nav.Link href="news">
                  <span>News & Updates</span>
                </Nav.Link>
                <Nav.Link href="contact">
                  <span>Contact Us</span>
                </Nav.Link>
                <Nav.Link href="">
                  <About />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Styles>
    </>
  );
}
export default Header;

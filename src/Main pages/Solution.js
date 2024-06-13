import { React } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img1 from "../images/s1.jpg";
import img2 from "../images/s2.jpg";
import img3 from "../images/s3.jpg";
import img4 from "../images/s4.jpg";
import img5 from "../images/s5.jpg";
import img6 from "../images/s6.jpg";
import img7 from "../images/s7.jpg";
import img8 from "../images/s8.jpg";
import img9 from "../images/s9.png";
import img10 from "../images/s10.jpg";

const Styles = styled.div`
  .bgimage {
    background-image: url(${img2});
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .title {
    padding-top: 6rem;
    text-align: center;
    color: #fff;
    font-size: 60px;
    font-weight: bold;
    font-family: "Trebuchet MS", sans-serif;
  }

  .row1 {
    text-align: center;
    padding-left: 7rem;
    padding-bottom: 2rem;
    // border: 1px solid black;
  }

  .col1 {
    // border: 1px solid black;
    height: 25rem;
    width: 20rem;
    border-radius: 1rem;
    margin-left: 2rem;
    background-color: #adb2ba;
    box-shadow: 1px 1px 4px 1px;
  }

  .col1 img:hover {
    transform: scale(1.1);
    transition: 0.4s ease;
  }

  .col1 img {
    margin-top: 2rem;
    width: 16rem;
    height: 19rem;
    // border: 1px solid black;
    border-radius: 1rem;
    // box-shadow: 1px 1px 3px 1px;
  }

  .col1-txt {
    margin-top: 1rem;
    font-size: 22px;
    font-family: Times New Roman;
    font-weight: bold;
    color: #343535;
  }

  // ----------------- Mobile View ----------------

  @media only screen and (max-width: 800px){

    .bgimage {
      background-image: url(${img2});
      background-size: cover;
      width: 100%;
      height: 100%;
    }

    .row1 {
      text-align: center;
      padding-left: 3.5rem;
      padding-bottom: 0rem;
      // border: 1px solid black;
    }

    .col1 {
      // border: 1px solid black;
      height: 25rem;
      width: 20rem;
      border-radius: 1rem;
      margin-top: 1rem;
      margin-left: 2rem;
      background-color: #adb2ba;
      box-shadow: 1px 1px 4px 1px;
    }

  }
`;

function Solution() {
  return (
    <>
      <Styles>
        <div>
          <Header />
          <div className="bgimage">
            <div className="title">Our Solutions</div>
            <br />
            <Container>
              <Row className="row1">
                <Col lg="4" className="col1">
                  <div>
                    <img src={img1} alt="" />
                    <div className="col1-txt">Software Development</div>
                  </div>
                </Col>

                <Col lg="4" className="col1">
                  <div>
                    <img src={img3} alt="" />
                    <div className="col1-txt">Onsite Installation</div>
                  </div>
                </Col>

                <Col lg="4" className="col1">
                  <div>
                    <img src={img4} alt="" />
                    <div className="col1-txt">Onboard Connectorisation</div>
                  </div>
                </Col>
              </Row>

              <Row className="row1">
                <Col lg="4" className="col1">
                  <div>
                    <img src={img5} alt="" />
                    <div className="col1-txt">Design & Development</div>
                  </div>
                </Col>

                <Col lg="4" className="col1">
                  <div>
                    <img src={img6} alt="" />
                    <div className="col1-txt">Geofencing</div>
                  </div>
                </Col>

                <Col lg="4" className="col1">
                  <div>
                    <img src={img7} alt="" />
                    <div className="col1-txt">Motion Platform</div>
                  </div>
                </Col>
              </Row>

              <Row className="row1">
                <Col lg="4" className="col1">
                  <div>
                    <img src={img8} alt="" />
                    <div className="col1-txt">FPGAs</div>
                  </div>
                </Col>

                <Col lg="4" className="col1">
                  <div>
                    <img src={img9} alt="" />
                    <div className="col1-txt">Test Bench</div>
                  </div>
                </Col>

                <Col lg="4" className="col1">
                  <div>
                    <img src={img10} alt="" />
                    <div className="col1-txt">Lab Setup - Server/Networking</div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer/>
        </div>
      </Styles>
    </>
  );
}

export default Solution;

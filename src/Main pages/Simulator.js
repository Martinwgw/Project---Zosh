import { React } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img1 from "../images/sim1.jpg";
import img2 from "../images/sim2.jpg";
import img3 from "../images/sim3.jpg";
import img4 from "../images/sim4.jpg";
import img5 from "../images/v1.jpg";

const Styles = styled.div`
  .cont {
    background-color: lightgrey;
  }

  .top-img {
    margin: 0px;
    // border: 1px solid black;
  }

  .big-img img {
    width: 100%;
    height: 30rem;
    margin-left: -12px;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    color: #f1f1f1;
    width: auto;
    padding: 20px;
    transition: 0.5s ease;
    opacity: 0;
    color: white;
    font-size: 20px;
    text-align: center;
  }

  .inner-cont {
    width: 100%;
    height: auto;
  }

  .inner-cont:hover .overlay {
    opacity: 1;
  }

  .column2 {
    width: 50%;
    // border: 1px solid black;
    background-color: lightgrey;
  }

  .text-prop-head {
    margin-top: 1rem;
    font-family: sans-serif;
    padding-top: 5rem;
    font-size: 64px;
    text-align: center;
    // font-weight:
  }

  .subtext {
    padding-left: 1rem;
    text-align: left;
    font-size: 30px;
    // font-style: ;
  }

  .second-row {
    margin: 0px;
  }

  .second-part {
    border: 2px solid black;
    height: 20rem;
    background-color: #adb2ba;
    box-shadow: 1px 1px 3px 1px;
  }

  .second-part:hover {
    background-color: lightgrey;
    transition: 0.5s ease;
  }

  .item {
    // border: 1px solid black;
    // padding: 2rem;
    margin-top: 1rem;
    // background-color: #fff;
  }

  .item img {
    width: 22rem;
    height: 15rem;
    padding: 0rem;
    box-shadow: 1px 1px 3px 1px;
  }

  .item-info {
    font-size: 30px;
    text-align: center;
    font-family: Times New Romans;
    padding-top: 10px;
    // font-weight: ;
  }

  // ---------------- Mobile view -----------------

  @media only screen and (max-width: 800px){

    .top-img {
      margin: 0px;
      // border: 1px solid black;
    }

    .big-img img {
      width: 105%;
      height: 26rem;
      margin-left: -12px;
    }

    .column2 {
    width: 50%;
    // border: 1px solid black;
    background-color: lightgrey;
    padding-top: 0rem;
  }

  .text-prop-head {
    font-family: "Alcubierre", sans-serif;
    margin-top: 3rem;
    margin-left: 1rem;
    padding: 0px;
    width: 450px;
    font-size: 44px;
    text-align: left;
    // border: 2px solid black;
  }

  .subtext {
    padding-left: 1rem;
    padding-bottom: 2rem;
    text-align: left;
    font-size: 27px;
    // font-style: italic;
    // border: 2px solid black;
    width: 450px;
  }

  .second-row {
    margin: 0px;
    margin-bottom: 3rem;
  }

   .second-part {
    border: 0px;
    height: 20rem;
    text-align: center;
    background-color: lightgrey;
    box-shadow: 1px 1px 3px 1px;
  }

  .second-part:hover {
    background-color: #343535;
    transition: 0.5s ease;
    color: #fff;
  }

  .item {
    // border: 1px solid black;
    // padding: 2rem;
    margin-top: 1rem;
    // background-color: #fff;    
  }

  }
`;

function Simulator() {
  return (
    <>
      <Styles>
        <div>
          <Header />
          <div className="cont">
            <Row className="top-img">
              <Col lg="6" className="big-img">
                <div className="inner-cont">
                  <img src={img5} alt="rugged products" />
                </div>
              </Col>
              <Col lg="6" className="column2">
                <div className="text-prop-head">SIMULATOR</div>
                <br />
                <div className="subtext">
                  We provide precise simulators for Airforce and Navy which can
                  truly educate pilots by providing real life piloting
                  experience with the help of virtual reality advancements
                </div>
              </Col>
            </Row>

            <Row className="second-row">
              <Col lg="3" className="second-part">
                <div className="item">
                  <img src={img2} alt="" />
                </div>
                <div className="item-info">Defense</div>
              </Col>

              <Col lg="3" className="second-part">
                <div className="item">
                  <img src={img3} alt="" />
                </div>
                <div className="item-info">Flight</div>
              </Col>

              <Col lg="3" className="second-part">
                <div className="item">
                  <img src={img4} alt="" />
                </div>
                <div className="item-info">Dozer</div>
              </Col>

              {/* Reminder!!! Added extra styling here related to padding */}
              <Col lg="3" className="second-part">
                <div className="item">
                  <img src={img1} alt="" style={{ padding: "0px" }} />
                </div>
                <div className="item-info">Navy</div>
              </Col>
            </Row>
          </div>
        </div>
      </Styles>
      <Footer/>
    </>
  );
}

export default Simulator;

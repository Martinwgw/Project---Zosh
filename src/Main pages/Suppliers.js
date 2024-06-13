import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img1 from "../images/su1.jpg";
import img2 from "../images/su2.jpg";

const Styles = styled.div`
  .bgimage {
    background-image: url(${img1});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 40rem;
    // border: 1px solid black;
    margin: 0px;
    padding: 0px;
    z-index: -1;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    color: #f1f1f1;
    width: 100%;
    height: 9rem;
    padding: 20px;
    margin-bottom: 165px;
    transition: 0.5s ease;
    opacity: 1;
    color: white;
    font-size: 20px;
    text-align: center;
  }

  .title {
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    z-index: 2;
    // border: 11px solid black;
    // margin-top: 9rem;
    height: 5rem;
  }

  .subtxt {
    font-size: 20px;
    color: #fff;
    font-weight: normal;
  }

  .row2 {
    margin: 0px;
    // padding: 0px;
    // border: 5px solid black;
    background-color: lightgrey;
  }

  .row2 img {
    width: 47.5rem;
    height: 100%;
    padding: 2rem;
    // border: 1px solid black;
    margin-left: -12px;
  }

  .col1 {
    // border: 2px solid black;
  }

  .col2 {
    // border: 2px solid black;
    height: 100%;
    margin: auto;
    padding-left: 8rem;
    text-align: left;
  }

  .box {
    text-align: left;
    // border: 1px solid black;
    // padding-left: 10rem;
  }

  .box h1{
    font-weight: bold;
    color: #343535;
  }

  .box p {
    text-align: left;
    padding-left: 5px;
    font-size: 20px;
  }

  .box-content {
    // border: 1px solid black;
    text-align: left;
    // display: flex;
    justify-content: center;
    margin-left: 5px;
    inline-size: 420px;
    overflow-wrap: break-word;
    font-family: Arial;
    line-height: 1.5;
    font-size: 20px;
  }

  // ----------------- Mobile View ----------------

  @media only screen and (max-width: 800px){

    .bgimage {
      background-image: url(${img1});
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 30rem;
      // border: 1px solid black;
      margin: 0px;
      padding: 0px;
      z-index: -1;
    }

    .overlay {
      position: absolute;
      top: 0;
      margin-top: 19rem;
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1;
      width: 100%;
      height: 9rem;
      padding: 20px;
      transition: 0.5s ease;
      opacity: 1;
      color: white;
      text-align: center;
    }

    .title {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
      color: #fff;
      z-index: 2;
      // border: 11px solid black;
      // margin-top: 9rem;
      margin-top: -0.5rem;
    }

    .row2 img {
      width: 31rem;
      height: 100%;
      padding: 2rem;
      // border: 1px solid black;
      margin-left: -7px;
    }

    .col2 {
      // border: 2px solid black;
      height: 100%;
      margin: auto;
      padding-left: 2rem;
      text-align: left;
    }

  }


`;

function Suppliers() {
  return (
    <>
      <Styles>
        <Header />
        <div>
          <div>
            <Row className="bgimage">
              <div className="overlay">
              <div className="title">
                SUPPLIERS
                <div className="subtxt">
                  We are open to all the doors of opportunity & collaboration
                </div>
                </div>
              </div>
            </Row>

            <Row className="row2">
              <Col lg={6} className="col1">
                <div className="row2-img">
                  <img src={img2} alt="" />
                </div>
              </Col>

              <Col lg={6} className="col2">
                <div className="box">
                <h1>Touch the Future with Us</h1>
                
                
                <div className="box-content">
                  Zosh focuses on Strategic relationships with suppliers who
                  share our values and our commitment to delivering solutions
                  that define future market in aerospace and defense
                </div>
                <br/>
                <p><span style={{fontWeight: "bold", color: "#343535"}}>Contact us: </span> 
                <span style={{textDecoration: "underline", color: "blue", marginLeft: "10px", cursor: "pointer"}}>
                  info@zoshaerospace.in
                </span>
                </p>
                <p><span style={{fontWeight: "bold", color: "#343535"}}>Phone No:</span>
                <span  style={{marginLeft: "15px"}}> 080-79697175</span></p>
                </div>
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      </Styles>
    </>
  );
}

export default Suppliers;

import { React } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img5 from "../images/ate1.webp";

const Styles = styled.div`
  .cont {
    background-color: #f7f7f7;
    padding-top: 8rem;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 3rem; 
  }

  .top-img {
    margin: 0px;
    padding-top: 3rem;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 3rem; 
    background: #e9e9e9;
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
    // border: 1px solid black;
  }

  // .inner-cont:hover .overlay {
  //   opacity: 1;
  // }

  .column2 {
    width: 50%;
    // border: 1px solid black;
    // background-color: lightgrey;
  }

  .text-prop-head {
    font-family: sans-serif;
    margin-top: -1.5rem;
    padding-top: 0rem;
    padding-left: 1rem;
    font-size: 64px;
    text-align: left;
    // font-weight:
  }

  .subtext {
    margin-top: -1rem;
    padding-left: 1rem;
    text-align: left;
    font-size: 30px;
    // font-style: italic;
  }

  .second-row {
    margin: 0px;
  }

  .second-part {
    border: 2px solid black;
    height: 20rem;
    background-color: #adb2ba;
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
    padding: 0px;
    box-shadow: 1px 1px 3px 1px;
  }

  .item-info {
    font-size: 30px;
    text-align: center;
    font-family: Times New Romans;
    padding-top: 10px;
    // font-weight: bold;
  }

  // ---------------- Mobile view -----------------

  @media only screen and (max-width: 800px){

    .cont {
      background-color: #fff;
      padding: 0px; 
    }

    .top-img {
      margin: 0px;
      padding: 0px;
      padding-bottom: 3rem;
      background: #e9e9e9;
      // border: 1px solid black;
    }

    .big-img img {
      width: 105%;
      height: 26rem;
    }

    .text-prop-head {
      font-family: sans-serif;
      margin-top: 1rem;
      padding-top: 0rem;
      padding-left: 1rem;
      font-size: 44px;
      text-align: left;
      width: 450px;
    }
  
    .subtext {
      margin-top: -1rem;
      padding-left: 1rem;
      text-align: left;
      font-size: 27px;
      width: 450px;
      // font-style: italic;
    }

  }
`;

function ATE() {
  return (
    <>
      <Styles>
        <div>
          <Header />
          <div className="cont">
            <Row className="top-img">
              <Col lg="6" className="big-img">
                <div className="inner-cont">
                  <img src={img5} alt="ATE" />
                </div>
              </Col>
              <Col lg="6" className="column2">
                <div className="text-prop-head">Automatic Test Equipment</div>
                <br />
                <div className="subtext">
                  Automatic Test Equipment is a very versatile and useful tool for testing
                  variety of Electronics in Defense, Automotive and many other
                  Industries. At Zosh, we develop ATEs to ensure the users
                  Electronic Equipments not only perform well but also isn't
                  exposed to any danger.
                </div>
              </Col>
            </Row>

            {/* <Row className="second-row">
              <Col lg="3" className="second-part">
                <div className="item">
                  <img src={img2} alt="" />
                </div>
                <div className="item-info">Storage</div>
              </Col>

              <Col lg="3" className="second-part">
                <div className="item">
                  <img src={img3} alt="" />
                </div>
                <div className="item-info">Display</div>
              </Col>

              <Col lg="3" className="second-part">
                <div className="item">
                  <img src={img4} alt="" />
                </div>
                <div className="item-info">Power Supply</div>
              </Col>

              /
              <Col lg="3" className="second-part">
                <div className="item">
                  <img src={img1} alt="" style={{ padding: "0px" }} />
                </div>
                <div className="item-info">Camera</div>
              </Col>
            </Row> */}
          </div>
        </div>
      </Styles>
      <Footer/>
    </>
  );
}

export default ATE;

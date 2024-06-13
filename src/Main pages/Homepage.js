import { React } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// import Dropdown from 'react-bootstrap/Dropdown';
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
// import News from "../components/News";
import img1 from "../images/a2.jpg";
import img2 from "../images/a3.jpg";
import img3 from "../images/a1.jpg";
import img4 from "../images/v1.jpg";
import img5 from "../images/v2.jpg";
import img6 from "../images/a5.jpg";
import img7 from "../images/a6.jpg";
import img8 from "../images/a7.jpg";
import img9 from "../images/a8.jpg";
import img10 from "../images/a9.jpg";
import img11 from "../images/a11.jpg";
import img12 from "../images/a12.jpg";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Styles = styled.div`

  .Container {
    background-color: #fff;
  }

  .top-img {
    width: 100%;
    height: 650px;
  }

  .zosh-labs-cont {
    padding: 0px;
    margin: 0px;
  }

  .zosh-labs-cont .cont1 {
    z-index: 1;
  }

  .zosh-labs-cont img {
    width: 100%;
    height: 20rem;
  }

  .zosh-labs-cont .cont1:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
    box-shadow: 5px 10px 5px;
    z-index: 2;
  }

  .cont1 {
    padding: 0px;
  }

  .inner-cont1 {
    position: relative;
    width: 100%;
    // margin: 1rem;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
    transition: 0.5s ease;
    opacity: 0;
    color: white;
    font-size: 20px;
    text-align: center;
  }

  .overlay h4 {
    text-decoration: underline;
  }

  .overlay p {
    text-align: left;
  }

  .cont1:hover .overlay {
    opacity: 1;
  }

  // -------------- Mobile View ------------------

  @media only screen and (max-width: 800px){

    .Container {
      background-color: #fff;
    }

    .top-img {
      width: 100%;
      height: auto;
    }

    .zosh-labs-cont {
      width: 25rem;
      padding: 0px;
      margin: auto;
      text-align: center;
      // border: 2px solid black;
    }
    
    .zosh-labs-cont img {
      width: 25rem;
      height: 20rem;
      
    }
  
    .zosh-labs-cont .cont1:hover {
      transform: scale(1.1);
      transition: 0.5s ease;
      box-shadow: 5px 10px 5px;
      z-index: 2;
      width: 25rem;
      margin: auto;
      
    }

    .cont1 {
      padding: 0px;
    }

    .inner-cont1 {
      position: relative;
      width: 25rem;
      margin: auto;
      border: 2px solid black;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1;
      width: 25rem;
      padding: 20px;
      transition: 0.5s ease;
      opacity: 1;
      color: white;
      font-size: 20px;
      text-align: center;
    }

    .cont1:hover .overlay {
      opacity: 1;
    }

  }

`;

function Homepage() {
  return (
    <>
      <Styles>
        <div className="Container">
          <Header />

          <Carousel varient="dark">
            <Carousel.Item>
              <img className="top-img" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <h3>TOUCH THE FUTURE WITH US</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="top-img" src={img6} alt="Third slide" />
              <Carousel.Caption>
                <h3>TOUCH THE FUTURE WITH US</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="top-img" src={img7} alt="Third slide" />
              <Carousel.Caption>
                <h3>TOUCH THE FUTURE WITH US</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="top-img" src={img8} alt="Third slide" />
              <Carousel.Caption>
                <h3>TOUCH THE FUTURE WITH US</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />
          <br />
          <br />
          {/* ---------------About Us -------------------- */}
          <section id="About-us">
            <div className="container">
              {/* <News/> */}
              <h2 style={{ textAlign: "center" }}>About Us</h2>
              <hr />
              <br />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontFamily: "sans-serif",
                }}
              >
                At Zosh together we are defining the future of Defense Aerospace
                Industry. We explore and bring in to reality the most powerful
                concepts of aerospace Industry.
              </p>
            </div>
          </section>
          <br />

          {/* ------------------What we offer-------------- */}

          <div className="container">
            <h2 style={{ textAlign: "center" }}>What we offer</h2>
            <br />
            <h3>Zosh Labs</h3>
            <br />
            <div className="zosh-labs-cont">
              <Container>
                <Row>
                  <Col lg="4" className="cont1">
                    <div class="inner-cont1">
                      <img src={img4} alt="virtual reality" />
                      <div class="overlay">
                        <h4>Virtual Reality Applications</h4>
                        <br />
                        <p>
                          Research at Zosh work towards developing new
                          opportunities in defense exploration and commercial
                          applications with AR/VR
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" className="cont1">
                    <div class="inner-cont1">
                      <img src={img5} alt="GUI" />
                      <div class="overlay">
                        <h4>GUI & Simulation Software Development</h4>
                        <br />
                        <p>
                          At Zosh, we have gained deeper knowledge and insights
                          to optimise complex systems providing software
                          solutions
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" className="cont1">
                    <div class="inner-cont1">
                      <img src={img9} alt="Antenna" />
                      <div class="overlay">
                        <h4>Antenna Design & Development</h4>
                        <br />
                        <p>
                          Innovative Antenna design for the design of practical
                          Antennas for 5G/6G, Wearable Military Application,
                          Conformal and Metamaterial Antenna are carried out at
                          Zosh
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <h2>Zosh Aerospace</h2>
                <br />
                <Row>
                  <Col lg="4" className="cont1">
                    <div class="inner-cont1">
                      <img src={img1} alt="MIL" />
                      <div class="overlay">
                        <h4>MIL Std. Electromechnical</h4>
                        <br />
                        <p>
                          Zosh aerospace has immense experience in design,
                          manufacture, testing and final integration of
                          Electromechanical Systems
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4" className="cont1">
                    <div class="inner-cont1">
                      <img src={img2} alt="test" />
                      <div class="overlay">
                        <h4>Customised Test Jigs, ATEs & Simulators</h4>
                        <br />
                        <p>
                          Our Developers furnish test jigs with increased
                          quality and accurate processing for your automatic
                          machines and lines.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4" className="cont1">
                    <div class="inner-cont1">
                      <img src={img5} alt="solutions" />
                      <div class="overlay">
                        <h4>Customised Solutions</h4>
                        <br />
                        <p>
                          Zosh also has pioneered in providing customised
                          solutions in developing the software as per the
                          Customer requirements
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <h2>Zosh Interconnect</h2>
                <br />
                <Row>
                  <Col lg="4" className="cont1">
                    <div class="inner-cont1">
                      <img src={img10} alt="Antenna" />
                      <div class="overlay">
                        <h4>Cable Assemblies/Wiring Harness</h4>
                        <br />
                        <p>
                          Zosh provides cable assemblies, harness with state of
                          the art experience to handle any complex challenges
                          given to us
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4" className="cont1">
                    <div class="inner-cont1">
                      <img src={img11} alt="Antenna" />
                      <div class="overlay">
                        <h4>Onsite I & C/ Onboard Connectorisation</h4>
                        <br />
                        <p>
                          Zosh provides support for installation and
                          commissioning of machines and equipments with all
                          services and support all over India.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4" className="cont1">
                    <div class="inner-cont1">
                      <img src={img12} alt="Antenna" />
                      <div class="overlay">
                        <h4>System Integration Services</h4>
                        <br />
                        <p>
                          We have extensive experience working with
                          manufacturers in high-volume, highly regulated
                          industries. We have extensive expertise as well as
                          knowledge of a variety of System Integration Services
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <br />
          </div>
          <Footer/>
        </div>
      </Styles>
    </>
  );
}
export default Homepage;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import profilepic from "../../Assets/profilepic.png";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
         
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profilepic} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
         <br></br>
         <br></br>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BLPSankalpana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prasadi-sankalpana-3b4058216/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/prasadee.sankalpana/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Particle from "../Particle";

import Type from "./Type";

import Tilt from "react-parallax-tilt";
import profilepic from "../../Assets/profilepic.png";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
       
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi! I Am <br></br>
                <strong className="main-name"> PRASADI SANKALPANA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={profilepic} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
            <Col md={12} className="home-about-description" >
              <p className="home-about-body">
              I'm an IT undergraduate at the University of Moratuwa, passionate about exploring new technologies and solving real-world problems. I thrive on strategic planning, collaboration, and innovation, aiming to make a meaningful impact through technology. Let’s build something extraordinary! 🚀
<br/><br/>
<b>Welcome to my digital space !</b>

              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

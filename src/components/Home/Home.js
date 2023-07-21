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
              I'm an undergraduate at the University of Moratuwa, Sri Lanka, pursuing a BSc Hons in Information Technology.
I'm a passionate learner, always eager to explore new technologies and embrace fresh challenges. Planning and strategizing excite me, as I believe in the power of a well-executed plan.
Collaboration is at the core of my working style. I thrive in team environments, where diverse minds come together to create something extraordinary.
Above all, my driving force is to make the world a better place for people. I aspire to utilize my knowledge and skills to make a meaningful impact and bring positive change.
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

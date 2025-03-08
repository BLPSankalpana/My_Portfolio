import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiBlender,
  SiPostman,
  SiSublimetext,
  SiVisualstudiocode
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaFigma />
      </Col>

      
    </Row>
  );
}

export default Toolstack;

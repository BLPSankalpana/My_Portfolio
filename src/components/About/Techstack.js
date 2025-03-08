import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
  DiMysql ,
  DiMsqlServer ,
} from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa6";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <BsFiletypeSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

    </Row>
    
  );
}

export default Techstack;

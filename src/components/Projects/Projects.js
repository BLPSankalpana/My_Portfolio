import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

import AppoMoFront from "../../Assets/Projects/AppoMoFront.png";
import profolio from "../../Assets/Projects/profolio.png";
import OnlineSuperMarket from "../../Assets/Projects/OnlineSuperMarket.png";
import MultifunctionalMassagingChair from "../../Assets/Projects/Multifunctional Massaging Chair.png";
import ByteBlossom from "../../Assets/Projects/ByteBlossoms.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AppoMoFront}
              isBlog={false}
              title="AppoMo"
              description="An Appointment Management Application, a user-friendly platform that revolutionizes the way customers book appointments for electronic device repairs. With this application, customers gain the convenience of scheduling appointments with their preferred repair companies, eliminating the need for time-consuming phone calls or in-person visits. Simultaneously, companies benefit from a seamless system that enables them to offer their customers the opportunity to book appointments online. This innovative solution streamlines the appointment booking process, saving valuable time for both customers and companies, while ensuring a hassle-free experience for all parties involved."
              ghLink="https://github.com/RashiniNethmini/AppoMo"
              
            />
            
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={profolio}
              isBlog={false}
              title="My_Portfolio"
              description="My_Portfolio is my personal website, designed to showcase my talents as a software developer. It features information about the technologies I specialize in, displays projects that I have been involved in, and highlights my notable accomplishments. This platform serves as a comprehensive representation of my skills and experience in software development."
              ghLink="https://github.com/BLPSankalpana/My_Portfolio.git"
              
            />
            
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={OnlineSuperMarket}
              isBlog={false}
              title="OnlineSuperMarket"
              description="Online Supermarket is a seamless e-commerce platform that enhances shopping, inventory management, and order delivery. Customers can easily browse and purchase products, while inventory keepers and delivery personnel benefit from efficient stock and order management.Built with Spring Boot, Spring Cloud Gateway, Kafka, Keycloak, and Eureka Server, it ensures scalability, security, and smooth operations for all users."
              ghLink="https://github.com/yesitha/OnlineSuperMarket"
          
            />
            
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={MultifunctionalMassagingChair}
              isBlog={false}
              title="MultifunctionalMassagingChair"
              description="Multifunctional Massaging Chair is a first-year hardware project designed to reduce physical strain from prolonged computer use. It includes a footrest, back massager, seat cooling, and an auto-off system for enhanced comfort, safety, and energy efficiency."
              ghLink="https://github.com/isuru225/Level-01-Hardware-Project"
          
            />
            
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={ByteBlossom}
              isBlog={false}
              title="ByteBlossoms"
              description="Byte Blossoms is a microservices-based application built with Node.js, integrating user management, order placement, and inventory management. It features RESTful APIs for CRUD operations, ensuring data consistency and seamless communication across distributed databases using MongoDB, MySQL, and Firebase."
              ghLink="https://github.com/BLPSankalpana/Byte_Blossoms"
          
            />
            
          </Col>

        

       


          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

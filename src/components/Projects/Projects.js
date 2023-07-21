import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

import AppoMoFront from "../../Assets/Projects/AppoMoFront.png";
import profolio from "../../Assets/Projects/profolio.png";
import taskMate from "../../Assets/Projects/taskMate.png";



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
              imgPath={taskMate}
              isBlog={false}
              title="TaskMate"
              description="TaskMate is a web-based task management system. Users can create weekly and monthly planners, set reminders, and use a variety of task management tools in addition to customizing their to-do lists. TaskMate streamlines workflow, boosts productivity, and makes time management easier, with a focus on college students while remaining accessible to everyone."
              ghLink="https://github.com/BLPSankalpana/TaskMate.git"
              
            />
            
          </Col>

        

       


          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

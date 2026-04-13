import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Me.css";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../img/about.png";
import Toolstack from "./Toolstack";

function Me() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Technical <strong className="purple">Expertise</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Frameworks & <strong className="purple">Tools</strong>
        </h1>

        <Toolstack />
      </Container>
    </Container>
  );
}

export default Me;
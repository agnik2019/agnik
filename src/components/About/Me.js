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

            <div style={{ marginTop: "30px", color: "white" }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "15px" }}>
                Education <strong className="purple">Background</strong>
              </h1>

              <p style={{ textAlign: "justify", marginBottom: "18px" }}>
                I am currently pursuing my{" "}
                <strong className="purple">PhD in Computer Science</strong> at{" "}
                <strong className="purple">Georgia State University</strong>,
                Atlanta, Georgia, USA (2024 - Present), with a CGPA of{" "}
                <strong className="purple">3.86 / 4.0</strong>.
              </p>

              <p style={{ textAlign: "justify", marginBottom: "18px" }}>
                I completed my{" "}
                <strong className="purple">MTech in Computer Science</strong> from{" "}
                <strong className="purple">
                  Indian Institute of Technology, Kharagpur
                </strong>{" "}
                (2021 - 2023), with a CGPA of{" "}
                <strong className="purple">8.67 / 10</strong>. During this period,
                I worked on research related to online knowledge communities, data
                enrichment, and large-scale knowledge analysis.
              </p>

              <p style={{ textAlign: "justify", marginBottom: "10px" }}>
                Before that, I earned my{" "}
                <strong className="purple">BTech in Computer Science</strong> from{" "}
                <strong className="purple">
                  Maulana Abul Kalam Azad University of Technology
                </strong>
                , West Bengal, India (2017 - 2021), with a CGPA of{" "}
                <strong className="purple">9.20 / 10</strong>.
              </p>
            </div>
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
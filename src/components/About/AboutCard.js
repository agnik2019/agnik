import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Agnik Saha </span>
            currently based in{" "}
            <span className="purple">Atlanta, Georgia, USA.</span>
            <br />
            <br />
            I am a PhD student in Computer Science at Georgia State University,
            working on <span className="purple">neuro-symbolic AI</span> and the
            integration of <span className="purple">knowledge graphs</span> with
            modern machine learning systems.
            <br />
            <br />
            My research focuses on{" "}
            <span className="purple">
              generative AI, LLMs, and agentic systems
            </span>{" "}
            — building end-to-end architectures for generation, reasoning, and
            evaluation of trustworthy AI.
            <br />
            <br />
            I have experience working with large-scale ML systems, graph-based
            learning, and designing evaluation frameworks for safety,
            accessibility, and linguistic quality.
            <br />
            <br />
            Outside of research, here are a few things I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new ideas in AI & writing technical content
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading research papers & experimenting with LLMs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & discovering new places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
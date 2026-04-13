import React from 'react';
import { About, Description } from '../styles';
import styled from 'styled-components';
// Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
// Scroll animation
import { reveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      transition={{ duration: 0.75 }}
      ref={element}
      variants={reveal}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <h2>
          Research & <span>Expertise</span>.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Machine learning icon" />
              <h3>Machine Learning & Deep Learning</h3>
            </div>
            <p>
              Experienced with PyTorch, TensorFlow, HuggingFace, DeepSpeed,
              Unsloth, PEFT, and LoRA for building modern AI systems.
            </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="Graph learning icon" />
              <h3>Knowledge Graphs & Graph Learning</h3>
            </div>
            <p>
              I work on graph-based learning with Graph Transformers,
              GraphSAGE, and Neo4j, with a strong focus on integrating
              knowledge graphs into ML pipelines.
            </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="LLM icon" />
              <h3>LLMs, Agents & NLP</h3>
            </div>
            <p>
              Skilled in generative AI, agentic systems, DSPy, LangChain,
              LangGraph, and NLP-driven workflows for reasoning and
              domain-specific applications.
            </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="Evaluation icon" />
              <h3>Evaluation & Neuro-Symbolic AI</h3>
            </div>
            <p>
              I design end-to-end neural-symbolic architectures for generation,
              prediction, and reasoning, along with robust evaluation
              frameworks for safety, quality, and accessibility.
            </p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  min-height: 700px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;

    p {
      width: 100%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 1500px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .icon {
      justify-content: center;
    }
  }
`;

export default ServicesSection;
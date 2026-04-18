import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { pageAnimation, titleAnim } from "../animation";

const ContactUs = () => {
  return (
    <ContactStyle
      style={{ background: "#fff" }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
        <div className="line2"></div>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <Content>
              <h2>Socials</h2>
              <Atag>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/agnik-saha/"
                >
                  <FaLinkedin className="icon" />
                  <span>LinkedIn</span>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/agnik2019"
                >
                  <FaGithub className="icon" />
                  <span>GitHub</span>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/agnik.saha.73/"
                >
                  <FaFacebook className="icon" />
                  <span>Facebook</span>
                </a>
              </Atag>
            </Content>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <Content>
              <h2>Send me a message</h2>
              <p>
                Feel free to connect with me for research collaboration, AI
                projects, academic discussion, or professional opportunities.
              </p>
            </Content>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <Content>
              <h2>Drop an email.</h2>
              <EmailLink href="mailto:asaha8@gsu.edu">
                <FaEnvelope className="icon" />
                <span>asaha8@gsu.edu</span>
              </EmailLink>
            </Content>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

const ContactStyle = styled(motion.div)`
  padding-left: 5rem;
  color: #353535;
  min-height: 100vh;

  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  padding-top: 8rem;
  margin-bottom: 5rem;
  color: black;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background: #353535;
  flex-shrink: 0;

  @media (max-width: 1500px) {
    display: none;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4rem;

  h2 {
    margin: 0 0 1.5rem 0;
    font-size: 4rem;
    font-weight: 400;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    line-height: 2rem;
    color: #555;
    max-width: 900px;
  }

  @media (max-width: 1500px) {
    h2 {
      margin: 0 0 1rem 0;
      font-size: 2.4rem;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.8rem;
    }
  }
`;

const Content = styled.div`
  margin-left: 2.5rem;
`;

const Atag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2.5rem;
  align-items: center;

  a {
    text-decoration: none;
    color: #17a2b8;
    display: inline-flex;
    align-items: center;
    font-size: 1.3rem;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #0d6efd;
    transform: translateY(-2px);
  }

  .icon {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  span {
    display: inline-block;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #17a2b8;
  display: inline-flex;
  align-items: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    color: #0d6efd;
    transform: translateY(-2px);
  }

  .icon {
    margin-right: 12px;
    font-size: 1.4rem;
  }
`;

export default ContactUs;
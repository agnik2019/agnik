import React from 'react';
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';

const ContactUs = () => {
  return (

    <ContactStyle
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <icons />

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
            <h2>Socials</h2>
                <Atag>
                   <a target="_blank" href="#">Facebook</a>
                    <a target="_blank" href="#">Linkedin</a>
                  </Atag>
          </Social>

        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Drop an email.</h2>
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
  padding-left:5rem;
  color: #353535;
  min-height: 100vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Atag = styled.div`
  margin-left: 5%;
  a{
    text-decoration: none;
    color: #17a2b8;
    display:flex;
    font-size:1rem;
   // justify-content: space-around; */
  }

`
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
  @media (max-width: 1500px) {
    display: none;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }

  @media (max-width: 1500px) {
    h2 {
      margin: 1rem 0rem;
      font-size: 2.5rem;
    }
  }
`;

export default ContactUs;

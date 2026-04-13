import React, { useEffect, useRef } from 'react';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import { init } from 'ityped';
import homeImg1 from '../img/man1.png';
import { titleAnim, fade, photoAnim } from '../animation';
import { motion } from 'framer-motion';
import Wave from './Wave';

const AboutSection = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'Generative AI',
        'Neuro-Symbolic AI',
        'Knowledge Graphs',
        'Agentic AI',
        'NLP',
      ],
    });
  }, []);

  return (
    <About>
      <Image>
        <motion.img
          variants={photoAnim}
          src={homeImg1}
          alt="Agnik Saha"
        />
      </Image>

      <Description>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Hello নমস্কার,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I&apos;m Agnik Saha (আগ্নিক সাহা)
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span ref={textRef}>AI Researcher</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              PhD Student @ Georgia State University
            </motion.h2>
          </Hide>
        </Title>

        <motion.p variants={fade}>
          AI researcher with 4+ years of experience in neuro-symbolic AI and
          integrating knowledge graphs into modern ML systems, including
          generative and agentic AI.
        </motion.p>

        <motion.p variants={fade}>
          I build end-to-end neural-symbolic architectures for generation,
          prediction, and reasoning, and design robust evaluation frameworks for
          trustworthy AI systems.
        </motion.p>
      </Description>

      <Wave />
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;

  span {
    color: #ce99ff;
  }
`;

const Title = styled.div`
  flex: 0.5;
  position: relative;
`;

export default AboutSection;
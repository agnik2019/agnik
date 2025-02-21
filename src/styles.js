//Styled
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  min-height: 60vh;
  display: flex;
  align-items: center;
  margin-right: 4%;
  justify-content: space-between;
   padding: 5rem 10rem;
  color: white;
  overflow-x: visible;

  @media screen and (max-width: 1100px) {
   display: flex;
   flex-direction: column;
  }


`;
export const Description = styled(motion.div)`

  flex: 0.7;
  position: relative;
  padding: 2rem 5rem 0rem 5rem;
  h2 {
    font-weight: lighter;
    font-size: 50px;
  }
  @media screen and (max-width: 1100px) {
    h2{
      z-index:2;
      font-size: 30px;
    }
  }

`;
export const Image = styled(motion.div)`
  width: 100%;
  max-width: 500px; /* Allows image to grow slightly on big screens */
  height: auto;
  aspect-ratio: 3/4;
  background-image: linear-gradient(to right, green, yellow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media screen and (max-width: 1200px) {
    max-width: 350px;
  }

  @media screen and (max-width: 768px) {
    max-width: 280px;
  }
`;
 

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Images
import ds from '../img/ds2.jpg';
import theracer from '../img/wd.jpg';
import android from '../img/android.jpg';
//Animation
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import {
  pageAnimation,
  fade,
  lineAnim,
  photoAnim,
  sliderContainer,
  movieContainer,
  slider,
} from '../animation';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie variants={movieContainer}>
        <motion.h2 variants={fade}>Data Science</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/dataScience">
          <Hide>
            <motion.img variants={photoAnim} src={ds} alt="data science" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element}
        variants={movieContainer}
        animate={controls}
        initial="hidden"
      >
        <h2>Web Development</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/web">
          <img src={theracer} alt="the-race" />
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
        <h2>Android Development</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/android">
          <img src={android} alt="android" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  margin-top: 5rem; 
  overflow: hidden;
  padding: 8rem 10rem 15rem 10rem; /* ✅ Increased top padding */

  @media (max-width: 1500px) {
    padding: 2rem 2rem;
      min-height: 100vh; /* ✅ Fix: Ensures it takes full viewport height */

  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 3rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    opacity: 1;
    width: 100%;
    height: auto; /* ✅ Fix: Adjust height dynamically */
    max-height: 70vh; /* Prevents it from becoming too large */
    object-fit: cover;

    &:hover {
      opacity: 0.4;
    }
  }
`;



const Hide = styled.div`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;

import React from 'react';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
//Scroll animation
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
          Technical <span>Skills</span>.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Data Science</h3>
            </div>
            <p>Data is a precious thing and will last longer then the system itself.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>FrontEnd Development</h3>
            </div>
            <p>Design is not for philosopy,it is for life</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Backend Development</h3>
            </div>
            <p>I am skilled in NodeJs,MongoDb,Mysql</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Software Development</h3>
            </div>
            <p>I love design and analysis of different algorithms and implement them</p>
          </Card>
        </Cards>
      </Description>
      {/* <Image>
        <img src={homeImg2} alt="camera" />
      </Image> */}
    </Services>
  );
};

const Services = styled(About)`
  height:700px;
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
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    }
  }
  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ServicesSection;

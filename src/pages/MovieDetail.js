import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
       // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >

        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className ,style,onClick } = props;
    return (
      <div
        className={className}
     // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
      </div>
    );
  }
  

  const settings = {
      dots: true,
      infinite:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </HeadLine>
          
           <Awards>
          <Carousel {...settings}>
            {movie.projects.map((peoject) => (
              
              <Award
                key={peoject.title}
                title={peoject.title}
                description={peoject.description}
                link = {peoject.github_link}
              />
            ))}
          </Carousel >


          </Awards> 

        </Details>
      )}
      <ScrollTop />
    </>
  );
};


const Award = ({ title, description,link }) => {
  return (
    <AwardStyle>      
      <h3>{title}</h3>
      <div className="line"></div>
          <p>{description}</p>
          <p>{link}</p>
    </AwardStyle>
  );
};

// const icon = styled.div`
// background-color: red;
// `;

const Carousel = styled(Slider)`
background-color: #29293d;


`;
const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: block;
  flex-direction: column;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
 

`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;

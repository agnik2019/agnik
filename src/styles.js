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

width:450px;
  height: 670px;
 background-image: linear-gradient(to right, green , yellow);
  border-radius: 50%;
   display: flex;
   align-items: flex-end;
  justify-content: space-between;
   float: right;

  z-index:2;
    flex:1;
    overflow:hidden;
    img{
        width:100%;
        height:80vh;
        object-fit:cover;
    }
    @media screen and (max-width: 1100px) {
      z-index:-1;
     // flex:0.3;
      width:350px;
      height: 450px;
  img{
        height:50vh;
    }
  }
`;

 

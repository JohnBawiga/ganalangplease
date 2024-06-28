import React from 'react';
import styled, { keyframes } from 'styled-components';
import TypeWriterText2 from '../TypeWriterText2';
import CoverVideo2 from '../CoverVideo2';
import RoundTextBlack from '../../assets/Rounded-Text-Black.png';
import Background from '../../assets/background3.png';

  const Section = styled.section`
    min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    width: 100vw;
    position: relative;
    overflow: hidden;
    display: flex;
     align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
background-color: #de2e45;
  .background-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  `;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Home2 = () => {
  return (
    <Section id="tokenomics">
            {/* <img className= "background-image" src={Background}/> */}

      <Container>
        <Box><TypeWriterText2 /></Box>
        <Box><CoverVideo2/></Box>
      </Container>
    </Section>
  );
};

export default Home2;

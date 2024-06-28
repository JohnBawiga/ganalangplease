import React from 'react';
import styled, { keyframes } from 'styled-components';
import TypeWriterText from '../TypeWriterText';
import CoverVideo from '../CoverVideo';
import RoundTextBlack from '../../assets/Rounded-Text-White.png';
import Background from '../../assets/background.png';

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

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

const Content = styled.div`
  position: relative;
  z-index: 1; /* Make sure content is above the video */
  color: white; /* Change text color as needed */
  text-align: center;
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    min-height: 60vh;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
    align-items: center;
    text-align: center;
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${props => props.theme.text};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }

  @media (max-width: 768px) {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
    height: 4rem;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-size: ${props => props.theme.fontxl};

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    font-size: ${props => props.theme.fontlg};
  }
`;
const Home = () => {
  return (
    <Section id="home">
       
      <img className= "background-image" src={Background}/>
  
      <Container>
      <Box><CoverVideo/></Box>
        <Box><TypeWriterText /></Box>
       
        
      </Container>
    </Section>
  )
}

export default Home

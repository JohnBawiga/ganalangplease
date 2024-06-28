import React from 'react';
import hehe from '../assets/hehe.png';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the floating animation
const floatUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  overflow: hidden; /* To hide the image overflow while moving */
  position: relative;

  .floating-image {
    width: 60%;
    height: auto;
    animation: ${floatUpDown} 5s ease-in-out infinite; /* Apply the floating animation */
    position: relative;
    z-index: 1; /* Ensure it appears above the background image */
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img className="floating-image" src={hehe} alt="Floating"/>
    </VideoContainer>
  );
};

export default CoverVideo;

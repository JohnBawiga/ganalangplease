import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'; 
import "@fontsource/akaya-telivigala";
import '@fontsource/cherry-cream-soda';
import '@fontsource/ubuntu';
import '@fontsource-variable/kablammo';

import Button from './Button';

const Title = styled.h2`
  font-family: 'Kablammo Variable', system-ui;
  font-size: 9rem;
  text-transform: capitalize;
  width: 100%;
  color: #fc4444;
  align-self: flex-start;
  margin: 0;
  margin-top: -40px; 
  padding-top: -2px;
  text-align: left;
 

  .text-1 {
    color: #0292c6;
  }
  .text-2 {
    color: #1854b8;
  }
  .text-3 {
    color: #1854b8;
  }
    @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const SubTitle = styled.h3`
  font-size: 4rem;
  text-transform: capitalize;
  color: #121c1d; 
  font-weight: 600;
  width: 80%;
  align-self: flex-start;
  text-align: left; 
  margin-bottom: -10px;
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
`;

const TypeWriterText = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >        
      
      <SubTitle>Base</SubTitle>

      <Title>TARGET</Title>

      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>
          {/* <Typewriter
            options={{
              autoStart: true,
              loop: true
            }}
            onInit={(typewriter) => {
              typewriter.typeString('<span class="text-1">Booting......</span>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          /> */}
        </Title>
      </motion.div>
    </>
  );
};

export default TypeWriterText;

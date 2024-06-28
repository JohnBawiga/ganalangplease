import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import "@fontsource/akaya-telivigala";
import '@fontsource/ubuntu';

import Button from './Button';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 1rem;
  padding: 2rem;
  background: #fac818
;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 5rem;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
  color:white;
 
  span {
    text-transform: uppercase;
  }

  .text-1 {
    color: #808836;
  }

  .text-2 {
    color: #FFBF00;
  }

  .text-3 {
    color: #FF9A00;
  }

  .text-4 {
    color: #006769;
  }
`;

const SubTitle = styled.h3`
  font-size: ${props => props.theme.fontlg};
  color: white;
  font-weight: 100;
  margin-bottom: 1rem;
  width: 100%;
  align-self: flex-start;
  text-align: center;
  text-shadow: 
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
`;

const TypeWriterText = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>WHY BUY?</Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container>
        <p style={{color: "white", textAlign: "justify", fontSize: "25px"}}>Target Supermarket in the US welcomed new customers, Brett and Pepe, who had recently relocated from the Base Chain community. As they strolled through the aisles, Brett and Pepe marveled at the variety of products and the convenience of the Target app, which they found surprisingly similar to the user experience on Base Chain. Excited to explore all that Target had to offer, they left the store with smiles on their faces, grateful for their seamless transition from the digital world to the physical one.

</p>
</Container>
<Container>
<p style={{color: "white", textAlign: "justify", fontSize: "25px"}}>Dive into the world of digital collectibles with our exclusive meme crypto series, "Hype of Fame." Available now on Base Target, this collection features iconic memes such as Brett, Pepe, Andy, and Lawolf—all with exciting discounts for our early adopters!</p>
</Container>

      </motion.div>
      
    </>
  );
};

export default TypeWriterText;

import React from "react";
import styled from "styled-components";
import Component from "./Component"; // Adjust the import path as per your project structure

import phase1 from "../assets/phase1.png";
import phase2 from "../assets/phase2.png";
import phase3 from "../assets/phase3.png";
import Background from "../assets/background2.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  padding: 2rem 0;

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

const Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 7rem;
  text-transform: capitalize;
  color: #fdfffd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #fdfffd;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

const CoverVideo = () => {
  return (
    <Section id="roadmap2">
      <img className="background-image" src={Background} alt="Background" />
      <Title>HOW CAN I USE THE BOT?</Title>
      <Container>
        <Component
          position="Copy Transaction Hash"
          details={[
            "First, copy the transaction hash from your wallet or transaction history where you received or sent BaseEinstein tokens."
          ]}
        />
        <Component
          position="Interact with BaseEinstein Bot"
          details={[
            "Assume the bot has a command /VERIFY_BAE_TOKENS to verify token ownership.",
            "Example Command:",
            "/VERIFY_BAE_TOKENS [transaction_hash]",
            "Replace [transaction_hash] with the actual transaction hash you copied."
          ]}
        />
        <Component
          position="Bot Processing"
          details={[
            "The BaseEinstein bot will analyze the transaction hash to verify that it involves the transfer or receipt of BaseEinstein tokens.",
            "It will cross-check this information against the blockchain where BaseEinstein tokens are issued (BaseChain)."
          ]}
        />
        <Component
          position="Confirmation Response"
          details={[
            "If the transaction hash confirms that you hold BaseEinstein tokens, the bot will respond with a confirmation message.",
            "Optionally, it might provide additional details such as the token balance associated with your wallet address."
          ]}
        />
        <Component
          position="Implementation Details"
          details={[
            "Blockchain Integration: The bot needs access to the BaseChain blockchain or a blockchain explorer API to fetch transaction details.",
            "Data Privacy: Ensure that sensitive transaction details are handled securely and privacy concerns are addressed.",
            "User Interface: Provide clear instructions within the bot interface on how users can interact with the verification command."
          ]}
        />
      </Container>
    </Section>
  );
};

export default CoverVideo;

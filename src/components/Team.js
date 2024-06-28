import React from "react"
import styled from "styled-components"
import phase1 from "../assets/phase1.png"
import phase2 from "../assets/phase2.png"
import phase3 from "../assets/phase3.png"
import phase4 from "../assets/phase4.png"
import phase5 from "../assets/phase5.png"
import phase6 from "../assets/phase6.png"
import phase7 from "../assets/phase7.png"
import phase8 from "../assets/phase8.png"
import phase9 from "../assets/phase9.png"

import Background from '../assets/background2.png'

import '@fontsource/ubuntu/'
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

`

const Title = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-size: 7rem;
  text-transform: capitalize;
  color: #fc4444;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
 border-bottom: 2px solid #fdfffd;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontxl};
  }
`

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
`

const Item = styled.div`
  color:#fc4444;
  margin: 2rem 1rem;
  position: relative;
 border: 2px solid #fc4444;
  border-radius: 20px;
  transition: all 0.3s ease;
 max-width: 25rem;
 background-color: #fc4444;
  img {
    border-radius: 20px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: translateY(-2rem) scale(1.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`

const ImageContainer = styled.div`
  width: 25rem;
  background-color: ${props => props.theme.body};
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fc4444;
  margin-top: 1rem;
 word-wrap: break-word; /* Ensure long words break to the next line */
  word-break: break-word; /* Ensure long words break to the next line */
  text-align: center; /* Center-align the text */
  @media (max-width: 768px) {
    font-size:#fdfffd;
  }
`

const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  padding-left: 30px;
  text-transform: capitalize;
  color: #fdfffd;
  margin-top: 1rem;
 word-wrap: break-word; /* Ensure long words break to the next line */
  word-break: break-word; /* Ensure long words break to the next line */
  text-align: center; /* Center-align the text */
  @media (max-width: 768px) {
    font-size: #fdfffd;
  }
`

const Details = styled.ul`
  list-style-type: none;
  font-size: 1rem;
  margin: 1rem 2rem;
  padding: 0;
  color: #fdfffd;
 word-wrap: break-word; /* Ensure long words break to the next line */
  word-break: break-word; /* Ensure long words break to the next line */
  max-width: 25rem; /* Ensure the details don't exceed the image width */
  @media (max-width: 768px) {
    margin: 1rem 1rem;
  }
`

const DetailItem = styled.li`
  font-size: ${props => props.theme.fontmd};
  margin: 0.5rem 0;
 word-wrap: break-word; /* Ensure long words break to the next line */
  word-break: break-word; /* Ensure long words break to the next line */
  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsm};
  }
`

const MemberComponent = ({ img, name = " ", position = " ", details = [] }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Details>
        {details.map((detail, index) => (
          <DetailItem key={index}>{detail}</DetailItem>
        ))}
      </Details>
    </Item>
  )
}

const CoverVideo = () => {
  return (
    <Section id="roadmap">
      <img className= "background-image"src={Background}/>
      <Title>STORE</Title>
      <Container>
        <MemberComponent
          img={phase1}
          position="RICH LAMBO"
          details={[
            "$4,000,000"
            
            

          ]}
        />
        <MemberComponent
          img={phase2}
           position="BASE POSTER"
          details={[
            "$30,000",
            

          ]}
        />
        <MemberComponent
          img={phase3}
           position="PEPE GREEN BULL"
          details={[
            "$100",
            
          

          ]}
        />
        <MemberComponent
          img={phase4}
           position="YELLOW HIGH LAMBO"
          details={[
            "$123,456",
           

          ]}
        />
       
       <MemberComponent
          img={phase5}
           position="50 PEPE"
          details={[
            "$50"
           
          

          ]}
        />
       
       <MemberComponent
          img={phase6}
           position="PEPE LAMBO POSTER"
          details={[
            "$69,696",
          
          

          ]}
        />
         <MemberComponent
          img={phase7}
           position="LEONARDO THE PEPE BRETT"
          details={[
            "$22,222,222",
          
          

          ]}
        />
         <MemberComponent
          img={phase8}
           position="PEPE X BRETT STICKER"
          details={[
            "$987",
          
          

          ]}
        />
         <MemberComponent
          img={phase9}
           position="I GOT MONEY!"
          details={[
            "$1",
          
          

          ]}
        />
       

       
        
      </Container>
    </Section>
  )
}

export default CoverVideo

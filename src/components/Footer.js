import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Telegram from '../Icons/Telegram'
import Twitter from '../Icons/Twitter'
import { Link } from 'react-router-dom'
import '@fontsource/ubuntu';

const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-color:#e33246;
;
  position: relative;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconList = styled.div`
  display: flex;
  align-items: start;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  color: white;

  &::after {
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
  }
`

const LogoText = styled.h1`
    font-family: 'Ubuntu', sans-serif;

  font-size: ${props => props.theme.fontxxxl};
  color: white;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontxxl}; // Adjust if necessary
  }
`

const MobileLogoText = styled.h1`
  display: none;
  font-family: 'Akaya Telivigala', cursive;
  font-size: ${props => props.theme.fontxxxl};
  color: white;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }
  return (
    <Section id='joinnow'>
     
      <Container>
        <Left>
          <LogoText>
            <Link to="/">BASE TARGET.</Link>
          </LogoText>
         
          
        </Left>
        <MenuItems>
          {/* <Item onClick={() => scrollTo('home')}>Home</Item>
          <Item onClick={() => scrollTo('tokenomics')}>About Dynos</Item>
          <Item onClick={() => scrollTo('roadmap')}>Dynomics</Item>
          <Item onClick={() => scrollTo('roadmap')}>Community</Item> */}
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} BASE TARGET. All rights reserved.
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer

import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';
import Twitter from '../Icons/Twitter';
import Telegram from '../Icons/Telegram';
import bird from '../assets/bird.png'
import c from '../assets/hehe.gif';
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

const Section = styled.section`
  width: 100vw;
  background-color:#e33246;
  position: relative;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: row; /* Change flex direction to row */
    justify-content: space-around; /* Adjust alignment */
    padding: 1rem 0;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    margin: 1rem 0; /* Add margin for spacing */
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: white;
  cursor: pointer;

  img{
  width: 40px;
  }

  &::after {
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
  }
`;

const Hamburger = styled.div`
  width: 2rem;
  height: 2px;
  background-color: ${props => props.theme.text};
  position: relative;
  display: none;
  cursor: pointer;
  margin-right: 1rem; /* Add margin-right for spacing */

  @media (max-width: 768px) {
    display: block;
  }

  &::before,
  &::after {
    content: '';
    width: 2rem;
    height: 2px;
    background-color: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: -0.5rem;
  }

  &::after {
    top: 0.5rem;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    background-color: transparent;
    &::before {
      transform: rotate(45deg);
      top: 0;
    }
    &::after {
      transform: rotate(-45deg);
      top: 0;
    }
  `}
`;

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <Section>
      <NavBar>
        <Logo />
        <Hamburger isOpen={menuOpen} onClick={toggleMenu} />
        <Menu isOpen={menuOpen}>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('tokenomics')}>Why Buy?</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}>Store</MenuItem>
          {/* <MenuItem onClick={() => scrollTo('roadmap')}>Features</MenuItem> */}
         <MenuItem><img src={c} /></MenuItem> 
         <MenuItem> <a href=""target='_blank' rel="noopener noreferrer">
              <img src={bird} style={{width: "100px", marginRight: "-50px"}}/>
            </a></MenuItem>   
          <MenuItem>
          
          <IconList>
         
          <a href="https://t.me/Base_Target" target='_blank' rel="noopener noreferrer">
              <Telegram/>
            </a>
            <a href="https://x.com/Base_Target
" target='_blank' rel="noopener noreferrer">
              <Twitter />
            </a>

          </IconList>
          </MenuItem>
        </Menu>
        {/* <Button text="USE BOT" link="https://t.me/BaseEinstein_bot" />  */}
      </NavBar>
    </Section>
  );
};

export default Navigation;

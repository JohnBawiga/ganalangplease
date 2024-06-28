import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '@fontsource/cherry-cream-soda';
import '@fontsource/ubuntu';
import logo from "../assets/hehe.png"
const LogoText = styled.h1`
    font-family: 'Ubuntu', sans-serif;

  font-size: ${props => props.theme.fontxxxl};
  color: white;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }

  

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileLogoText = styled.h1`
  display: none;
  font-family: 'Ubuntu', sans-serif;
  font-size: ${props => props.theme.fontxxxl};
  color: #131631;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const Logo = () => {
  return (
    <>
      <LogoText>
       <img style={{width: "80px"
       }}src={logo}/>
      </LogoText>
      <MobileLogoText>
        <Link to="/">EB</Link>
      </MobileLogoText>
    </>
  )
}

export default Logo

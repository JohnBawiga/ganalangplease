import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/Themes';
import Navigation from './components/Navigation';
import Home from './components/sections/Home.js';
import Home2 from './components/sections/Home2.js';
import Team from './components/Team.js';
import Team2 from './components/Team2.js';
import Footer from './components/Footer';
import PopUp from './components/PopUp.js';
import bot from './assets/bot.png'

// Import the functions you need from the SDKs you nee
function App() {
  const [showPopUp, setShowPopUp] = useState(true);

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <Home2 />
        {/* <Team2/> */}
        <Team /> 
        <Footer />
        {/* {showPopUp && (
          <PopUp
            imageSrc={bot}
            onClose={handleClosePopUp}
          />
        )} */}
      </ThemeProvider>
    </>
  );
}

export default App;

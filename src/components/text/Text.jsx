import React, { useState, useEffect } from 'react';
import './text.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Text = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) { // Change threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="textWrapper" 
      style={{
        marginTop: scrolled ? "11rem" : "0",
        transition: "margin 0.3s ease-in-out"
      }}
    >
      <div className="secondpagetextContainer">
        <p className='textHeading'>
          <AutoAwesomeIcon
            style={{
              fontSize: "20px",
              color: "#fff",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop:'26px'
            }}
          />
          Harness your distinctiveness
          <br />
          catalyze orbital ingenuity      
        </p>
        <div className="descWrapper">
          <p className='textDiscription'>
            ORION Space was established in 2017 with the aim of building
            hands-on practice on space technology for young engineers and students in Nepal.
            <AutoAwesomeIcon
              style={{
                fontSize: "20px",
                color: "#fff",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: "10px"
              }}
            />
          </p>
        </div>

        <div className="askquestionContainer">
          <button className="askQuestion">
            Become a Space Pioneer
            <RocketLaunchIcon
              className='rocketIcon'
              style={{
                fontSize: "20px",
                color: "#000",
                marginLeft: "4px"
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Text;

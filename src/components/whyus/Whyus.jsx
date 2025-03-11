import React, { useState, useEffect } from 'react';
import './whyus.css';

const Whyus = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      id="card-area" 
      className="whyusWrapper"
      style={{
        marginTop: isScrolled ? "10rem" : "0",
        transition: "margin 0.3s ease-in-out"
      }}
    >
      <div className="wrapper">
        <div className="whyusheadwrapper">
          <h4 className='whyusheadingPage'>WHY US</h4>
        </div>
        <div className="box-area">
          <div className="box">
            <img src="assets/images/whyus.jpg" className='whyusImage' />
            <div className="overlayWhyUs">
              <h3 className='whyushead'>Low Cost</h3>
              <p className='whyusheadp'>
                PocketQube's small size lowers launch costs, enabling Nepal's universities and startups to build satellites.
              </p>
            </div>
          </div>
          <div className="box">
            <img src="assets/images/whyus2.jpg" className='whyusImage' />
            <div className="overlayWhyUs">
              <h3 className='whyushead'>Low Development Time</h3>
              <p className='whyusheadp'>
                A PocketQube can be developed within the period of 2-4 years 
                so it can be completed by students during their studies.
              </p>
            </div>
          </div>
          <div className="box">
            <img src="assets/images/whyus3.jpg" className='whyusImage' />
            <div className="overlayWhyUs">
              <h3 className='whyushead'>Internationally Accepted Launch Concept</h3>
              <p className='whyusheadp'>
                The launch concept is accepted worldwide and the 
                service can be found in many launch providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;

import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <div className="aboutheader">
          <p className='aboutHeading'>About Us</p>
        </div>
        <div className="aboutusMoto">
          <p className="moto">
          It’s not about the destination, 
          </p>
          <p className='motoC'>
          it’s about empowering innovators to build and launch satellites.
          </p>
        </div>
       <div className="aboutDescWrapper">
       <p className="aboutdesc">
ORION Space was established in 2017 with the aim of building 
hands-on practise on space technology for young engineers and 
students in Nepal. It has been providing training and workshops 
on building pico-satellites and ground stations all over Nepal 
as well as abroad. Orion Space has also developed the first pico-satellite 
built in Nepal- SanoSat-1 which was launched in 2021 February via SpaceX.
        </p>
       </div>
      </div>
      <div className="rightImageContent">
        <img src="../../assets/images/img4.jpg" className='aboutImage'/>
        <img src="../../assets/images/galleryimg1.jpg" className='aboutImage'/>
        <img src="../../assets/images/galleryimg2.jpg" className='aboutImage'/>
        <img src="../../assets/images/galleryimg5.jpg" className='aboutImage'/>
      </div>
    </div>
  )
}

export default About
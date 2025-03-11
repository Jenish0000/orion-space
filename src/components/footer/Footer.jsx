import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarIcon from '@mui/icons-material/Star';
import RocketIcon from '@mui/icons-material/Rocket';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  return (
  <div className="footerContainer">
    <div className="footerContent">
         <div className="contactUsWrapper">
<div className="firstFooter">
            <div className="fff">
            <StarIcon className='starIcon'/>
            <p className='ppp'>Contact Us</p>
            </div>
            <div className="bbb">
               <p className='lll'>
               Interested in working together,
               <span className="darkStart">let's</span>
               
               </p>
               <p className='ddd'>
       get connected and learn more maybe?
               </p>
            </div>
</div>
<div className="secondFooter">
    <div className="contactFooter">
        <p className='contactAt'>Contact Orion at :</p>
        <a href="#" className='gmailHref'>orionspace.nepal@gmail.com</a>
    </div>
    <div className="moreLinks">
       <FacebookOutlinedIcon
       className='fbIcon'
       style={{
        transition:"0.3s ease-in-out"
       }}
       />
       <InstagramIcon
       className='instaIcon'
       style={{
        transition:"0.3s ease-in-out"
       }}
       />
       <LinkedInIcon
       className='linkedinIcon'
       style={{
        transition:"0.3s ease-in-out"
       }}
       />
       <TelegramIcon
       className='telegramIcon'
       style={{
        transition:"0.3s ease-in-out"
       }}
       />
       <EmailIcon
       className='emailIcon'
       style={{
        transition:"0.3s ease-in-out",
       }}
       />
    </div>
</div>
<div className="thirdFooter">
  <div className="footerCompanyName">
    <h1 className='footerlast'>
      <span className='absolute'>
        <RocketIcon
        className='footerRocket'
        style={{
          fontSize:"7rem",
          color: "#fff"
        }}
        />
      </span>
      rion
      Space
    </h1>
  </div>
</div>
<div className="forthFooter">
  <div className="copyRightContainer">
    <div className="copyRightContent">
      <p className="copyRight">
        <CopyrightIcon
        style={{
          color:"#fff",
          fontSize:"20px"
        }}
        />2025 Orion space. All rights reserved.
      </p>
    </div>
  </div>
</div>
         </div>
    </div>
  </div>
  )
}

export default Footer
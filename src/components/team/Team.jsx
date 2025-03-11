import React from 'react'
import './team.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Team = () => {
  return (
    <div className="teamContainer">
        <div className="teamHeadingWrapper">
            <h4 className='teamHeading'>Team</h4>
        </div>
        <div className="rightImagesContainer">

          <div className="firstrightImage">
                <div className="firstImageWrapper">
                  <img src="../../assets/images/ceo.jpg" className='teamfirstImage'/>
                  <p className='name'>Rakesh Chandra Prajapati</p>
                  <p className='post'>Chief Executive Officer </p>
             
             <div className="iconsContainer">
             <a href="https://www.facebook.com/rakeshchandra.prajapati/" target="_blank">
             <FacebookOutlinedIcon
             className='scale'
             style={{
             fontSize:"25px",
             color:"#E2E0C8",
             transition:"0.3s ease-in-out"
             }}
             />        
             </a>
            <a href="https://ch.linkedin.com/in/rakeshchandra-prajapati" target="_blank">
            <LinkedInIcon
                className='scale'
            style={{
           fontSize:"25px",
           color:"#E2E0C8",
             transition:"0.3s ease-in-out"
            }}
             />
          </a>
          <a href="mailto:rakeshchandra.prajapati@gmail.com">
          <EmailIcon
              className='scale'
          style={{
            fontSize:"25px",
            color:"#E2E0C8",
             transition:"0.3s ease-in-out"
             }}
          />
          </a>
             </div>
                </div>
                <div className="firstImageWrapper">
                  <img src="../../assets/images/pm.jpg" className='teamfirstImage'/>
                  <p className='name'>Jiten Thapa</p>
                  <p className='post'>Project Manager</p>
             
             <div className="iconsContainer">
             <a href="https://www.facebook.com/jitenitahari/" target="_blank">
             <FacebookOutlinedIcon
                 className='scale'
             style={{
             fontSize:"25px",
             color:"#E2E0C8",
             transition:"0.3s ease-in-out"
               }}
             />        
             </a>
            <a href="https://np.linkedin.com/in/gtenthapa" target="_blank">
            <LinkedInIcon
                className='scale'
            style={{
           fontSize:"25px",
           color:"#E2E0C8",
             transition:"0.3s ease-in-out"
            }}
             />
          </a>
          <a href="mailto:jitenthapa56@gmail.com">
          <EmailIcon
              className='scale'
          style={{
            fontSize:"25px",
            color:"#E2E0C8",
             transition:"0.3s ease-in-out"
             }}
          />
          </a>
             </div>
                </div>
                <div className="firstImageWrapper">
                  <img src="../../assets/images/rd.jpg" className='teamfirstImage'/>
                  <p className='name'>Ranish Devkota</p>
                  <p className='post'>R&D Engineer</p>
             
             <div className="iconsContainer">
             <a href="https://www.facebook.com/p/%E0%A4%B0%E0%A4%A8%E0%A4%BF%E0%A4%B8-%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A4%95%E0%A5%8B%E0%A4%9F%E0%A4%BE-100008139048269/" target="_blank">
             <FacebookOutlinedIcon
                 className='scale'
             style={{
             fontSize:"25px",
             color:"#E2E0C8",
             transition:"0.3s ease-in-out"
               }}
             />        
             </a>
            <a href="https://np.linkedin.com/in/ranish-devkota?trk=public_profile_browsemap" target="_blank">
            <LinkedInIcon
                className='scale'
            style={{
           fontSize:"25px",
           color:"#E2E0C8",
           transition:"0.3s ease-in-out"
            }}
             />
          </a>
          <a href="mailto:rakeshchandra.prajapati@gmail.com">
          <EmailIcon
              className='scale'
          style={{
            fontSize:"25px",
            color:"#E2E0C8",
             transition:"0.3s ease-in-out"
             }}
          />
          </a>
             </div>
                </div>
          </div>
         <div className="firstleftImage">
         <div className="firstImageWrapper">
                  <img src="../../assets/images/sk.jpg" className='teamfirstImage'/>
                  <p className='name'>Sarthak Chaudhary</p>
                  <p className='post'>Electronics Engineer</p>
             
             <div className="iconsContainer">
             <a href="https://www.facebook.com/rakeshchandra.prajapati/" target="_blank">
             <FacebookOutlinedIcon
                 className='scale'
             style={{
             fontSize:"25px",
             color:"#E2E0C8",
             transition:"0.3s ease-in-out"
               }}
             />        
             </a>
            <a href="https://np.linkedin.com/in/sarthak-chaudhary-29aa29224" target="_blank">
            <LinkedInIcon
                className='scale'
            style={{
           fontSize:"25px",
           color:"#E2E0C8",
             transition:"0.3s ease-in-out"
            }}
             />
          </a>
          <a href="mailto:rakeshchandra.prajapati@gmail.com">
          <EmailIcon
              className='scale'
          style={{
            fontSize:"25px",
            color:"#E2E0C8",
             transition:"0.3s ease-in-out"
             }}
          />
          </a>
             </div>
                </div>
                <div className="firstImageWrapper">
                  <img src="../../assets/images/ps.jpeg" className='teamfirstImage'/>
                  <p className='name'>Prashant Shrestha</p>
                  <p className='post'>Aerospace Engineer</p>
             
             <div className="iconsContainer">
             <a href="https://www.facebook.com/rakeshchandra.prajapati/" target="_blank">
             <FacebookOutlinedIcon
                 className='scale'
             style={{
             fontSize:"25px",
             color:"#E2E0C8",
             transition:"0.3s ease-in-out"
               }}
             />        
             </a>
            <a href="https://ch.linkedin.com/in/rakeshchandra-prajapati" target="_blank">
            <LinkedInIcon
                className='scale'
            style={{
           fontSize:"25px",
           color:"#E2E0C8",
             transition:"0.3s ease-in-out"
            }}
             />
          </a>
          <a href="mailto:rakeshchandra.prajapati@gmail.com">
          <EmailIcon
              className='scale'
          style={{
            fontSize:"25px",
            color:"#E2E0C8",
             transition:"0.3s ease-in-out"
             }}
          />
          </a>
             </div>
                </div>
         </div>
        </div>
    </div>
  )
}

export default Team
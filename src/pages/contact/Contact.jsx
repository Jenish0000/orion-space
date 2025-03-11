import React from 'react'
import './contact.css'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import NearMeIcon from '@mui/icons-material/NearMe';
const Contact = () => {
  return (
 <div className="contactUsContainer">
    <div className="contactusWrapper">
    <div className="contactusContent">
       <div className="leftContactUsContent">
          <div className="contactCallus">
          <h3 className='contactUst'>
            <CallIcon
            className='contactt'
           style={{
           fontSize:'17px',
           color:'#FFEDFA'
           }}
            />
            Call Us</h3>
          <p className='contactUsP'>+977-9842066461</p>
          </div>
            <div className="contactLocation">
            <h3 className='contactUst'>
              <LocationOnIcon
              className='locationI'
              style={{
                fontSize:'17px',
                color:'#FFEDFA'
                }}
              />
              Location</h3>
            <p className='contactUsP'>Duwakot Mod, Changunarayan Municipanlty, Bhaktapur, 44800, Nepal</p>
            </div>
            <div className="contactMailUs">
            <h3 className='contactUst'>
              <MailIcon
              className='mailI'
              style={{
                fontSize:'17px',
                color:'#FFEDFA'
               }}
              />
              Mail Us</h3>
            <p className='contactUsP'>orionspace.nepal@gmail.com</p>
            </div>
       </div>
       <div className="rightContactUsContent">
       <div className="nameBox">
            <label className='nameInputHead'>First Name</label>
            <input type="text" className='nameInput' maxLength={25}/>
          </div>
          <div className="nameBox">
            <label className='nameInputHead'>Last Name</label>
            <input type="text" className='nameInput' maxLength={25}/>
          </div>
          <div className="QueryBox">
            <label className='messageboxHead'>Query</label>
            <input type="text" className='queryInput' maxLength={25}/>
          </div>
          <div className="MessageBox">
            <label className='messageboxHead'>Message</label>
            <textarea className="messageInput" rows="3" maxLength="90"/>
          </div>

       </div>
       <div className="sendBox">
            <div className="contactSendBtnWrapper">
            <div className="contactsendBtn">
              <NearMeIcon
              style={{
                fontSize:"50px",
                color:'#fff', 
                webkitboxshadow: '1px 3px 13px 2px rgba(0,0,0,0.62)',
                mozboxshadow: '1px 3px 13px 2px rgba(0,0,0,0.62)',
                boxShadow: '1px 3px 13px 2px rgba(0,0,0,0.62)',
                borderRadius:'50%',
                padding:'10px',
                cursor:"pointer"
              }}
              />
            </div>
            </div>
          </div>
    </div>
   </div>
 </div>
  )
}

export default Contact
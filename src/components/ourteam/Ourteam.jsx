import React from 'react'
import './ourteam.css'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
const Ourteam = () => {
  return (
<div className="textWrapper">
<div className="secondpagetextContainer">
  <p className='textHeadingTeams'>
<AutoAwesomeIcon
style={{
  fontSize:"20px",
  color:"#fff",
  display:"flex",
  alignItems:"flex-start",
  justifyContent:"flex-start"
}}
/>
  Expert team, pioneering 
  <br/>
  satellite innovations   
  </p>
  <div className="descWrapper">
  <p className='textDiscription'>
  Orion Space has been providing training and workshops on 
  building pico-satellites and ground stations all over Nepal as well as abroad.
  We have also developed the first pico-satellite built in 
  Nepal- SanoSat-1 which was launched in 2021 February via SpaceX.
  <AutoAwesomeIcon
style={{
  fontSize:"20px",
  color:"#fff",
  display:"flex",
  alignItems:"flex-start",
  justifyContent:"flex-start",
  marginTop:"10px"
}}
/>
  </p>
  
  <div className="askquestionContainer">
        <button className="askQuestion">
        Let's get connected
        <AirplanemodeActiveIcon
        className='aeroplaneIcon'
        style={{
          fontSize:"20px",
          color:"#000",
          marginLeft:"4px"
        }}
        />
        </button>
      </div>
  </div>
</div>
</div>
  )
}

export default Ourteam
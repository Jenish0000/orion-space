import React from 'react'
import './client.css'
import EmailIcon from '@mui/icons-material/Email';
const Client = () => {
  return (
  <div className="clientWrapper">
      <div className="clientContent">
        <h3 className='clientHeading'>Custom Satellite Design</h3>
        <p className='clientdisc'>
ORION SPACE also builds Flight Model of PocketQube according to the requirement of the Clients. </p>
     <p className='mailUs'>
     Mail us 
     <br/>
     <EmailIcon
     style={{
        fontSize:"14px",
        color:"#fff",
        marginLeft:"6px"
     }}
     />
     <br/>
     orionspace.nepal@gmail.com
     </p>
   
      </div>
  </div>
  )
}

export default Client
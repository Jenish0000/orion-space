import React from 'react'
import './sanosattwo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const SanosatTwo = () => {
  return (
    <div className="sanosatTwocontainer">
      <div className="sanosatTwoContent">
        <div className="sanosatTwoheadingWrapper">
          <h1 className='headingforsanosatTwo'>Sanosat-2</h1>
        </div>
       <div className="contentsSecondSanosat">
       <div className="lefttextwrapper">
          <p className='lesttextforSanosatTwo'>
Sanosat-2 is a 1P PocketQube which is planned for launch in 2025.
 It has a delployable panel on one side and has camera as the primary mission.
  Following are its mission:
Camera Mission: Take photos using a 2MP Camera 
and transmit it to the ground station via SSDV
<br/>
<br/>
Digipeater: It has digipeater mission in which it can receive messages from ham radio operators and forward the message.
<br/>
<br/>

ADCS Mission: The project does nod have active ADCS but it has 6 axis IMU along with sun sensors so that enough data can be collected for study to design ADCS system for next mission.
<br/>
<br/>

Deployable Panels Testing: This project also demonstrates deployable panel using custom designed hinge system.
          </p>
        </div>
        <div className="rightImageSecondsanosatWrapper">
          <img src="/assets/images/sanosatTwo.jpg"  className="secondSanosatImage" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default SanosatTwo
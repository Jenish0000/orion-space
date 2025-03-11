import React from 'react'
import { useState } from "react";
import './sanosatone.css'
import Carousel from '../../components/carousel/Carousel'
const SanosatOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <div className="sanosatOneContainer">

       <div className="relative">

      <div className="btnreadmoreWrapper">
        <button className="readmore px-4 py-2 bg-blue-600 text-white rounded-md" onClick={() => setIsOpen(true)}>
          Click here to Read about Sanosat-1
        </button>
      </div>

   
      {isOpen && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
            <h2 className='overlayHeading'>Sanosat-1</h2>
            <p className='overlaydisc'>
            <br/>
            <br/>
            The primary payload of SANOSAT-1 is a radiation sensor that measures space radiation. Since Nepal is new to space technology and involving students/engineers within the country to provide space education is also one of the objectives of SANOSAT-1. Furthermore, encouraging students/engineers to work in the field of space technology, by making the satellite open-source and involving amateurs is also the objective of SANOSAT-1
<br/>
<br/>

            One of our first objectives is to design, develop,  launch an affordable pico-satellite made in Nepal using easily available commercial off-the-shelf (COTS) components. This will help us prove that we can successfully design and manufacture the satellite inside Nepal.
            <br/>
            <br/>
We also aim to promote amateur radio and satellite technology to the students and amateur operators in science and technology around the globe, by organizing hands-on workshops about building pico-satellite, and groground stationsanoSat-1 will also act as a digital amateur radio repeater. Operators will be able to upload a message to the satellite and it will transmit it to the ground on the successful reception of the packets. This will act as a short message repeating system.
<br/>
<br/>
The satellite will transmit its identification and health parameters of the satellite in Morse Code. Students from around the world would be able to receive the satellite and learn how to successfully receive data from the amateur satellite.
<br/>
<br/>
SanoSat-1 also transmits the intensity of radiation of the orbit in the dose rate along with the other telemetry of the satellite. We will be hosting the sessions inside Nepal to teach the students and amateur operators on the satellite systems and how to successfully receive the data from the satellite.
<br/>
<br/>
SANOSAT-1 is the first pico-satellite made by Nepali students and Engineers in Nepal. SANOSAT-1 is powered by solar cells (250mW), and a lithium-ion battery (3.7V, 1100mAh) is used for energy storage while charging from the sunlight. Battery charging uses Maximum Power Point Tracking (MPPT) technology to maximize the power transfer from the solar cells to the battery. Five faces of the PocketQube consist of solar cells which are 28% efficient each having area of 16*8 mm2.
<br/>
<br/>
It transmits data in amateur UHF Band at +20dBm and operates in half-duplex mode. The housekeeping data and payload data are sent in CW Morse Code and RTTY-FSK modulation.
<br/>
<br/>
        

Structural subsystem provides support to the other subsystems or components. It also provides thermal isolation and radiation shielding for the satellite. Aluminum alloy Al-6061-T6 was selected as the material for the structure because of its low cost, easy machinability, and high strength. The outer structure consists of square aluminum of 5cm x 5cm x 5cm with a thickness of 2mm, the top casing of 4.8 cm x 4.8cm x 1cm, and a battery casing of 4.8cm x 4.8cm x 1 cm which can also be considered as a bottom casing.
<br/>
<br/>
Electrical Power Subsystem is responsible for providing power to the satellite and utilizing the available power in an efficient manner. This subsystem contains Battery; Maximum Power Point Tracking (MPPT) based Battery chargers, Solar cells, Low Dropout Regulators, Power monitoring devices and Current Limiters. Five faces of the satellite contain socellscell open-circuit voltage of 2.7V and a short circuit current of 180mA each.
<br/>
<br/>
The output of solar cells is connected to the MPPT based battery charger which charges the 3.7V, 1100 mAh Li-Ion Battery. The power monitoring device consists of a current and voltage monitoring circuit that monitors the charging current and voltage of the battery. Low Dropout Voltage Regulators (LDO) convert the battery voltage to 3.3V since the system works on 3.3V logic.
On-Board Computer (OBC) is based on the ATMEGA328 microcontroller. It performs the tasks of data handling and control of the PocketQube. It also consists of a Watchdog to monitor the program flow and restarts the satellite if any corruptions are found in the program flow. The Board is protected by TPS2553 current limiter for Latch-Up protections.
<br/>
<br/>
Communication: Communication Subsystem is responsible for transmitting the available data to the ground station and receiving the data from ground station. Transmitting and receiving of data is done in half-duplex mode in which it transmits and receives data alternatively. The communication chip is based on Silicon Labs’ Si4463. Nepal-PQ1 transmits the data in CW Morse Beacon, Radio Tele-Type (RTTY) and GFSK Modulations whereas the uplink is done by GFSK Modulation. The maximum downlink transmission power is +20 dBm.  The housekeeping data is sent using CW Morse/ RTTY.
<br/>
<br/>
Ground Station: Ground Station is responsible for communicating with satellite which is a segment placed in earth.
<br/>
<br/>      

SANOSAT-1 ground station is based on SatNOGS which is a network of open source ground stations in order to downlink for amateur licenced users and a dedicated kit for Uplink and Downlink.
Payload: The primary payload of Nepal-PQ1 is a radiation sensor. Initially,
<br/>
<br/>
SANOSAT-1 developers were looking for a payload that is simple to implement and which does not require a pointing mechanism. So, an ultra-low-power Radiation sensor (3.3V, 25uA) BG51SM was selected. The sensor measures the alpha, beta, and gamma radiation around it and transmits the data to the ground station. The intensity of radiation can be used to plot the radiation map, calculate the thickness for radiation shielding materials, identification of solar flare, etc.
Sanosat-1 was launched on January 2022, SanoSat-1 which was completely made by Nepalese in Nepal. Currently, it is revolving around the orbit of 550km above the earth. The satellite was launched by SpaceX’s Falcon 9 rocket on January 13, 10:30 PM Nepal time.
<br/>
<br/>
            </p>
          </div>
        </div>
      )}
       </div>
       <Carousel/>
</div>


  )
}

export default SanosatOne


import React from 'react'
import './homepage.css'
import Header from "../../components/header/Header"
import Home from "../../components/home/Home"


const Homepage = () => {
  return (
  <div className="homepageContainer">
    <Header/>
    <Home/>
  </div>
  )
}

export default Homepage
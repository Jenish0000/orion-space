// import React from 'react'
// import Homepage from './pages/homepage/Homepage'
// import Secondpage from './pages/secondpage/Secondpage'
// import './index.css'
// import Thirdpage from './pages/thirdpage/Thirdpage'
// import Fourthpage from './pages/fourthpage/Fourthpage'
// import Fifthpage from './pages/fifthpage/Fifthpage'
// import Sixthpage from './pages/sixthpage/Sixthpage'
// import Seventhpage from './pages/sevethpage/Seventhpage'
// import Eighthpage from './pages/eighthpage/Eighthpage'
// import Foot from './pages/foot/Foot'
// const App = () => {
//   return (
//   <div className="allpageContainer">    
//     <Homepage/>
//     <Secondpage/>
//     <Thirdpage/>
//     <Fourthpage/>
//     <Fifthpage/>
//     <Sixthpage/>
//     <Seventhpage/>
//     <Eighthpage/>
//     <Foot/>
//   </div>
//   )
// }

// export default App
// try
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Secondpage from "./pages/secondpage/Secondpage";
import Thirdpage from "./pages/thirdpage/Thirdpage";
import Fourthpage from "./pages/fourthpage/Fourthpage";
import Sixthpage from "./pages/sixthpage/Sixthpage";
import Seventhpage from "./pages/sevethpage/Seventhpage";
import Eighthpage from "./pages/eighthpage/Eighthpage";
import Foot from "./pages/foot/Foot";
import Header from "./components/header/Header";
import About from "./pages/about/About"; 
import Contact from "./pages/contact/Contact"; 
import SanosatOne from "./pages/sanosatone/SanosatOne"; 
import SanosatTwo from "./pages/sanosattwo/SanosatTwo"; 
import Store from "./pages/store/Store";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Homepage />
          <Secondpage />
          <Thirdpage />
          <Fourthpage />
          <Sixthpage />
          <Seventhpage />
          <Eighthpage />
          <Foot />
        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sanosatone" element={<SanosatOne />} />
        <Route path="/sanosattwo" element={<SanosatTwo />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
    // {
    //   "name": "orion-fe",
    //   "homepage": "https://Jenish0000.github.io/orion-space/",
    //   "private": true,
    //   "version": "0.0.0",
    //   "type": "module",
    //   "scripts": {
    //     "dev": "vite",
    //     "build": "vite build",
    //     "lint": "eslint .",
    //     "preview": "vite preview",
    //     "predeploy": "npm run build",
    //     "deploy": "gh-pages -d dist"
    //   },
    //   "dependencies": {
    //     "@emotion/react": "^11.14.0",
    //     "@emotion/styled": "^11.14.0",
    //     "@mui/icons-material": "^6.4.5",
    //     "@mui/material": "^6.4.5",
    //     "@mui/styled-engine-sc": "^6.4.3",
    //     "clsx": "^2.1.1",
    //     "framer-motion": "^12.4.7",
    //     "lucide-react": "^0.477.0",
    //     "react": "^18.3.1",
    //     "react-dom": "^18.3.1",
    //     "styled-components": "^6.1.15",
    //     "swiper": "^11.2.4",
    //     "tailwind-merge": "^3.0.1"
    //   },
    //   "devDependencies": {
    //     "@eslint/js": "^9.19.0",
    //     "@types/react": "^19.0.8",
    //     "@types/react-dom": "^19.0.3",
    //     "@vitejs/plugin-react": "^4.3.4",
    //     "eslint": "^9.19.0",
    //     "eslint-plugin-react": "^7.37.4",
    //     "eslint-plugin-react-hooks": "^5.0.0",
    //     "eslint-plugin-react-refresh": "^0.4.18",
    //     "globals": "^15.14.0",
    //     "vite": "^6.1.0"
    //   }
    // }
    
  );
};

export default App;

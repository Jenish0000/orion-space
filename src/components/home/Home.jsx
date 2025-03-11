// import { useEffect, useRef, useState } from "react";
// import "./home.css";
// import WavingHandIcon from '@mui/icons-material/WavingHand';
// const Home = () => {
//   const containerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const videoSrc = '/assets/videos/edit.mp4';

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const { innerWidth, innerHeight } = window;

//       const xRotation = ((clientY / innerHeight) - 0.5) * 50; 
//       const yRotation = ((clientX / innerWidth) - 0.5) * 50; 

//       setMousePosition({ x: yRotation, y: xRotation });
//     };

//     const handleMouseMoveRAF = (e) => {
//       requestAnimationFrame(() => handleMouseMove(e));
//     };

//     window.addEventListener("mousemove", handleMouseMoveRAF);
//     return () => window.removeEventListener("mousemove", handleMouseMoveRAF);
//   }, []);

//   useEffect(() => {
//     if (containerRef.current) {
//       const { x, y } = mousePosition;

//       containerRef.current.style.transform = `perspective(2500px) rotateX(${y}deg) rotateY(${x}deg)`;
//     }
//   }, [mousePosition]);

//   return (
//     <div className="App">
//       <div className="homeText">
//         <div className="hometextContainer">

//           <h1 className="w1">Pioneering</h1>
//           <h1 className="w2">Orbital</h1>
//           <h1 className="w3">Discovery</h1>
    
//         </div>
//       </div>


//     <div className="btnWrapper">
//       <button className="homeBtn">
//         <span className="btnContent">
//           Say hello
//           <WavingHandIcon style={{ fontSize: "17px", marginLeft: "4px" }} />
//         </span>
//         <span className="btnContentClone">
//           Say hello
//           <WavingHandIcon style={{ fontSize: "17px", marginLeft: "4px" }} />
//         </span>
//       </button>
//     </div> 



//       <div className="tv-container" ref={containerRef}>
//         <div className="screen-frame">
//           <div className="collage-container">
//             <video
//               src={videoSrc}
//               className="collage-video active" 
//               autoPlay
//               muted
//               loop
//               preload="auto" 
//               alt="collage-video"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;   
// try
import { useEffect, useRef, useState } from "react";
import "./home.css";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import CloseIcon from '@mui/icons-material/Close';
const Home = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const videoSrc = '/assets/videos/edit.mp4';

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xRotation = ((clientY / innerHeight) - 0.5) * 50; 
      const yRotation = ((clientX / innerWidth) - 0.5) * 50; 

      setMousePosition({ x: yRotation, y: xRotation });
    };

    const handleMouseMoveRAF = (e) => {
      requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener("mousemove", handleMouseMoveRAF);
    return () => window.removeEventListener("mousemove", handleMouseMoveRAF);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { x, y } = mousePosition;
      containerRef.current.style.transform = `perspective(2500px) rotateX(${y}deg) rotateY(${x}deg)`;
    }
  }, [mousePosition]);

  return (
    <div className="App">
      <div className="homeText">
        <div className="hometextContainer">
          <h1 className="w1">Pioneering</h1>
          <h1 className="w2">Orbital</h1>
          <h1 className="w3">Discovery</h1>
        </div>
      </div>

      <div className="btnWrapper">
        <button className="homeBtn" onClick={() => setIsPopupVisible(true)}>
          <span className="btnContent">
            Say hello
            <WavingHandIcon style={{ fontSize: "17px", marginLeft: "4px" }} />
          </span>
          <span className="btnContentClone">
            Say hello
            <WavingHandIcon style={{ fontSize: "17px", marginLeft: "4px" }} />
          </span>
        </button>
      </div>

      {isPopupVisible && (
     <div className="popupwrapper">
         <div className="popup-box">
          <p>Hello there, hope you are doing well!</p>
          <CloseIcon  className="closeBtn" onClick={() => setIsPopupVisible(false)}
            style={{
              color:"#fff",
              fontSize:"28px",
              transition:"0.3s ease-in-out"
            }}
            />
        </div>
     </div>
      )}

      <div className="tv-container" ref={containerRef}>
        <div className="screen-frame">
          <div className="collage-container">
            <video
              src={videoSrc}
              className="collage-video active" 
              autoPlay
              muted
              loop
              preload="auto" 
              alt="collage-video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

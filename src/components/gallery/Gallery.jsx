import React, { useRef, useState, useEffect } from "react";
import "./gallery.css";

const Gallery = () => {
  const sliderRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const friction = 0.95; // Adjusted friction for smoother stopping
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  const images = [
    "galleryimg1.jpg",
    "galleryimg2.jpg",
    "galleryimg3.jpg",
    "galleryimg4.jpg",
    "galleryimg5.jpg",
    "galleryimg6.jpg",
    "img4.jpg",
    "img3.jpg",
    "img5.jpg",
    "img2.jpg",
  ];
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e) => {
    if (windowWidth > 764) {
      setIsDragging(true);
      setStartX(e.clientX);
      setVelocity(0);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || windowWidth <= 764) return;
    const moveX = e.clientX - startX;
    setRotation((prevRotation) => prevRotation + moveX * 0.2); // Slower rotation
    setVelocity(moveX * 0.2);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  useEffect(() => {
    let momentum;
    if (!isDragging && Math.abs(velocity) > 0.1) {
      momentum = requestAnimationFrame(() => {
        setRotation((prevRotation) => prevRotation + velocity);
        setVelocity((prevVelocity) => prevVelocity * friction);
      });
    }
    return () => cancelAnimationFrame(momentum);
  }, [velocity, isDragging]);


  useEffect(() => {
    if (windowWidth <= 764) {
      const interval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 0.5);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [windowWidth]);

  return (
    <div className="galleryContent">
      <div className="galleryHead">
        <h4 className="galleryHeading">Gallery</h4>
      </div>
      <div className="banner">
        <div
          className="slider"
          ref={sliderRef}
          style={{
            transform: `perspective(1000px) rotateX(-16deg) rotateY(${rotation}deg)`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {images.map((img, index) => (
            <div key={index} className="item" style={{ "--position": index + 1 }}>
              <img src={`../../assets/images/${img}`} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default Gallery;

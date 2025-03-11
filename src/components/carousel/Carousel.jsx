import React, { useRef, useState, useEffect } from "react";
import './carousel.css'
const ImageCarousel = () => {
  const carouselRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [momentum, setMomentum] = useState(0);
  const resistance = 0.95;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const imageList = [
     "sanosat1.jpg",
    "galleryimg2.jpg",
    "sanosatf.jpg",
    "sanosatg.jpg",
    "sanosats.jpg",
    "sanosatt.jpg",
    "sanosatTwo.jpg",
    "img4.jpg",
    "img5.jpg",
    "img3.jpg"
  ];

  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const startDrag = (e) => {
    if (screenWidth > 764) {
      setDragging(true);
      setInitialX(e.clientX);
      setMomentum(0);
    }
  };

  const onDrag = (e) => {
    if (!dragging || screenWidth <= 764) return;
    const displacementX = e.clientX - initialX;
    setAngle((prevAngle) => prevAngle + displacementX * 0.2);
    setMomentum(displacementX * 0.2);
    setInitialX(e.clientX);
  };

  const stopDrag = () => {
    setDragging(false);
  };

  useEffect(() => {
    let motion;
    if (!dragging && Math.abs(momentum) > 0.1) {
      motion = requestAnimationFrame(() => {
        setAngle((prevAngle) => prevAngle + momentum);
        setMomentum((prevMomentum) => prevMomentum * resistance);
      });
    }
    return () => cancelAnimationFrame(motion);
  }, [momentum, dragging]);

  useEffect(() => {
    if (screenWidth <= 764) {
      const autoRotate = setInterval(() => {
        setAngle((prevAngle) => prevAngle + 0.5);
      }, 30);
      return () => clearInterval(autoRotate);
    }
  }, [screenWidth]);

  return (
    <div className="carouselContainer">
      <div className="carouselHeader">
        <h4 className="carouselTitle">Showcase</h4>
      </div>
      <div className="carouselWrapper">
        <div
          className="carouselTrack"
          ref={carouselRef}
          style={{
            transform: `perspective(1000px) rotateX(-16deg) rotateY(${angle}deg)`,
          }}
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {imageList.map((image, index) => (
            <div key={index} className="carouselItem" style={{ "--position": index + 1 }}>
              <img src={`../../assets/images/${image}`} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carouselSpacer"></div>
      </div>
    </div>
  );
};

export default ImageCarousel;

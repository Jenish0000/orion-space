import { useState, useEffect } from "react";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isMiddleContentActive, setIsMiddleContentActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);  // New state to track scrolling

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
      if (window.innerWidth > 720) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      // If scrolled more than 10px, set scrolled state to true
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 200) {
        setIsMiddleContentActive(true);
        setIsMiddleContentActive(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div className={`headerContainer ${scrollingDown ? "scrollingDown" : ""} ${scrolled ? "scrolled" : ""}`}>
      <div className="headerContent">
        <div className="leftContent">
          <div className="imageContainer">
            <img src="../../assets/images/orionlogo.png" className="companyLogo" alt="Company Logo" />
          </div>
        </div>

        <div className={`middleContent ${isMobile ? (menuOpen ? "active" : "hidden") : ""} ${isMiddleContentActive ? "popOut" : ""}`}>
          <a href="/">HOME</a>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/sanosatone">SANOSAT-1</Link>
          <Link to="/sanosattwo">SANOSAT-2</Link>
        </div>

        <div className="rightContent">
          <Link to="/store"  className="storeBtn">  
            <a className="storeHref">STORE</a>
            <LocalGroceryStoreOutlinedIcon 
              style={{ fontSize: "17px", marginLeft: "3px" }} />
          </Link>
        </div>

        {isMobile && (
          <div className="controllers" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AlignHorizontalLeftIcon style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }} />
            ) : (
              <AlignHorizontalRightIcon style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

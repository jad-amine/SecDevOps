import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import User from "../assets/navbar/User.svg";
import Phone from "../assets/navbar/Phone.svg";
import { BiMenu } from "react-icons/bi";
import Face from "../assets/navbar/joker-face.svg";
import BurgerMenu from "./LandingPage/Mobile/BurgerMenu";

const logo = require("../assets/navbar/logo.png");

export default function Navbar({ showBurgerMenu, setShowBurgerMenu }) {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    // Change navbar background on scroll
    const changeBackground = () => {
      window.scrollY >= 60 ? setBackground(true) : setBackground(false);
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={background ? "nav background" : "nav"}>
      {/* === Logo & Title */}
      <div className={background ? "logo-div logo-div-short" : "logo-div"}>
        <img src={logo} alt="logo" />
        <p className="logo-title">
          <span style={{ color: "#F42240" }}> FIGHT</span> 4 SECURITY
        </p>
      </div>

      {/* === Top right menu === */}
      <ul className="nav-ul">
        <li>
          <img src={Face} alt="logo" className="nav-img" />
          Services
        </li>
        <li>
          <img src={User} alt="logo" className="nav-img" />
          About Us
        </li>
        <li>
          <img src={Phone} alt="logo" className="nav-img" />
          Contact Us
        </li>
      </ul>

      {/* --- Burger Menu --- */}
      <BiMenu
        className="burger-icon-open"
        size={27}
        color="#f42240"
        onClick={() => setShowBurgerMenu(true)}
      />
      <BurgerMenu
        setShowBurgerMenu={setShowBurgerMenu}
        showBurgerMenu={showBurgerMenu}
      />
    </div>
  );
}

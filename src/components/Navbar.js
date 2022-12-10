import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import User from "../assets/navbar/User.svg";
import Phone from "../assets/navbar/Phone.svg";
import { BiMenu } from "react-icons/bi";
import Face from "../assets/navbar/joker-face.svg";
import BurgerMenu from "./LandingPage/Mobile/BurgerMenu";
import ServicesMenu from "./ServicesMenu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const logo = require("../assets/navbar/logo.png");

export default function Navbar({ showBurgerMenu, setShowBurgerMenu }) {
  const [background, setBackground] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
          <div
            style={{
              position: "relative",
              display: "flex",
              gap: background ? 6 : 8,
              alignItems: "center",
            }}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            Services
            <ServicesMenu showMenu={showMenu} background={background} />
            {showMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
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

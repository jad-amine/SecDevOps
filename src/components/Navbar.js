import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Face from "../assets/navbar/joker-face.svg";
import User from "../assets/navbar/User.svg";
import Phone from "../assets/navbar/Phone.svg";

const logo = require("../assets/navbar/logo.png");

export default function Navbar() {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    // Change navbar background on scroll
    const changeBackground = () => {
      window.scrollY >= 100 ? setBackground(true) : setBackground(false);
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={background ? "nav background" : "nav"}>
      {/* === Logo & Title */}
      <div className="logo-div">
        <img src={logo} alt="logo" style={{ height: "80%" }} />
        <p className="logo-title">
          <span style={{ color: "#F42240" }}> FIGHT</span> 4 SECURITY
        </p>
      </div>

      {/* === Top right pages */}
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
    </div>
  );
}

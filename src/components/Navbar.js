import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
const logo = require("../assets/LogoBlack.png");

export default function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>
          <BsFacebook />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </div>
  );
}

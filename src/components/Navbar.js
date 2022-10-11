import React from "react";
const logo = require("../assets/LogoBlack.png");

export default function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>fb</li>
        <li>inst</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  );
}

import React from "react";
import { BsSearch } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
const logo = require("../assets/Logo.png");

export default function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="" style={{ height: "100%" }} />
      <ul>
        <li>Products & Services</li>
        <li>Solutions</li>
        <li>About Us</li>
      </ul>
      <ul style={{ alignItems: "center", gap: 15 }}>
        <li
          className="top-nav-button"
          style={{ backgroundColor: "#3266CB", color: "white" }}
        >
          Get a demo
        </li>
        <li
          className="top-nav-button"
          style={{
            backgroundColor: "white",
            color: "#3266CB",
          }}
        >
          Contact Us
        </li>
        <li>
          <BsSearch size={21} />
        </li>
        <li>
          <TbWorld size={23} />
        </li>
      </ul>
    </div>
  );
}

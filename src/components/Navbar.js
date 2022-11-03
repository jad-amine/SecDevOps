import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
const logo = require("../assets/Logo.png");

export default function Navbar() {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    // Change navbar background on scroll
    const changeBackground = () => {
      window.scrollY >= 100 ? setBackground(true) : setBackground(false);
    };
    window.addEventListener("scroll", changeBackground);

    // return () => {
    //   window.removeEventListener("scroll", changeBackground);
    // };
  }, []);

  return (
    <div className={background ? "nav background" : "nav"}>
      <img src={logo} alt="" style={{ height: "100%" }} />
      <ul style={{ gap: 25 }}>
        <li>Products & Services</li>
        <li>Solutions</li>
        <li>About Us</li>
      </ul>
      <ul style={{ alignItems: "center", gap: 15, fontSize: 16 }}>
        <li
          className="top-nav-button"
          style={{ backgroundColor: "#3266CB", color: "white" }}
        >
          Get a Demo
        </li>
        <li
          className="top-nav-button"
          style={{
            backgroundColor: "white",
            color: "#3266CB",
          }}
        >
          Contact us
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

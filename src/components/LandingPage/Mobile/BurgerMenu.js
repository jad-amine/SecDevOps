import React from "react";
import { IoMdClose } from "react-icons/io";

export default function BurgerMenu({ showBurgerMenu, setShowBurgerMenu }) {
  return (
    <div className={showBurgerMenu ? "burger-menu" : "hidden-burger-menu"}>
      <ul style={{ paddingTop: "20%" }}>
        {/* <IoMdClose
          onClick={() => setShowBurgerMenu(false)}
          style={{ alignSelf: "flex-end", marginRight: 10 }}
          size={25}
          className="burger-icon-close"
        /> */}
        <li style={{ paddingTop: 30 }}>Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

import React from "react";

export default function ServicesMenu({ showMenu, background }) {
  return (
    <ul
      style={{
        display: showMenu ? "flex" : "none",
        position: "absolute",
        top: background ? 30 : 40,
        left: background ? 5 : 10,
        backgroundColor: "#f42240",
        width: background ? 160 : 200,
        flexDirection: "column",
        borderRadius: 10,
        fontSize: background ? "1em" : "1em",
      }}
      className="navbar-services"
    >
      <li onClick={() => console.log("hello")}>Red Team</li>
      <li>Blue Team</li>
      <li>Purple Team</li>
    </ul>
  );
}

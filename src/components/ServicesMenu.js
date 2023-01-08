import React from "react";
import { HashLink } from "react-router-hash-link";

export default function ServicesMenu({ showMenu, background }) {
  return (
    <ul
      style={{
        display: showMenu ? "flex" : "none",
        position: "absolute",
        top: background ? 20 : 30,
        // left: background ? 5 : 0,
        backgroundColor: "#f42240",
        width: background ? 160 : 200,
        flexDirection: "column",
        borderRadius: 10,
        fontSize: background ? "1em" : "1em",
      }}
      className="navbar-services"
    >
      <HashLink className="hashLink" smooth to="SecDevOps#red">
        <li id="red-team">Red Team</li>
      </HashLink>
      <HashLink className="hashLink" smooth to="SecDevOps#blue">
        <li>Blue Team</li>
      </HashLink>
      <HashLink className="hashLink" smooth to="SecDevOps#purple">
        <li id="purple-team">Purple Team</li>
      </HashLink>
    </ul>
  );
}

import React from "react";
// const logo = require("../assets/LandingPage/ButtonBackground.png");

export default function Home() {
  return (
    <div className="landingPage">
      <p
        className="Montserrat"
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 55,
          lineHeight: "110%",
        }}
      >
        We protect the World’s most
        <br /> sensitive data
      </p>
      <p
        className="Montserrat"
        style={{
          color: "white",
          textAlign: "center",
          paddingLeft: "27%",
          paddingRight: "27%",
          marginTop: "40px",
          fontSize: "1.1em",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mauris id
        risus aliquet a commodo. Eget nam odio sed dictum mattis dit etiam at eu
        arcu, quisque velit in leo purus.
      </p>
      <button className="button-background Montserrat">Contact Us</button>
    </div>
  );
}

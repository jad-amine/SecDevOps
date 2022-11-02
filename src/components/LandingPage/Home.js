import React from "react";
// const logo = require("../assets/LandingPage/ButtonBackground.png");

export default function Home() {
  return (
    <div className="landingPage">
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "4em",
          lineHeight: "110%",
        }}
      >
        We protect the World’s most
        <br /> sensitive data
      </p>
      <p
        style={{
          color: "white",
          textAlign: "center",
          paddingLeft: "30%",
          paddingRight: "30%",
          marginTop: "40px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mauris id
        risus aliquet a commodo. Eget nam odio sed dictum mattis dit etiam at eu
        arcu, quisque velit in leo purus.
      </p>
      <button className="top-nav-button button-background">Contact Us</button>
    </div>
  );
}

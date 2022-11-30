import React from "react";
import Ring from "../../assets/LandingPage/ring.svg";
// import useWindowDimensions from "../../utils/helper";

export default function Home() {
  // const dimensions = useWindowDimensions();
  // console.log(window.innerHeight);

  const height = window.innerHeight;

  return (
    <div className="landingPage" style={{ height: height }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <strong>
          We work to close your <p> security gaps</p>
        </strong>
        <button className="contact-us">Contact Us</button>
      </div>
      <div id="ring" style={{ flex: 1 }}>
        <img src={Ring} alt="ring" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

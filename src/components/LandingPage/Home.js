import React from "react";
import Ring from "../../assets/LandingPage/ring.svg";
// import useWindowDimensions from "../../utils/helper";

export default function Home() {
  // const dimensions = useWindowDimensions();

  return (
    <div className="landingPage">
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
        <strong
          style={{ color: "white", fontSize: "2.5em", textAlign: "center" }}
        >
          We work to close your <p> security gaps</p>
        </strong>
        <button
          style={{
            background: "#F42240",
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 40,
            paddingRight: 40,
            borderRadius: 30,
            color: "white",
            marginTop: "8%",
            fontSize: "1.5em",
            borderWidth: 0,
            fontWeight: "bold",
            // letterSpacing: 1,
            cursor: "pointer",
          }}
          className="contact-us"
        >
          Contact Us
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <img src={Ring} alt="ring" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

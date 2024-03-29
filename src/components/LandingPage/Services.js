import React from "react";
import Service from "./Service";
// import logo from "../../assets/navbar/logo.png";
import RED from "../../assets/LandingPage/ServicesIcons/RED.svg";
import Breach from "../../assets/LandingPage/ServicesIcons/Breach.svg";
import PURPLE from "../../assets/LandingPage/ServicesIcons/PURPLE.svg";
import WebApp from "../../assets/LandingPage/ServicesIcons/WebApp.svg";
// import RANSOMWARE from "../../assets/LandingPage/ServicesIcons/RANSOMWARE.svg";
// import Penetration from "../../assets/LandingPage/ServicesIcons/Penetration.svg";
import MobileAccordion from "./Mobile/MobileAccordion";

export default function Services() {
  return (
    <div className="services" id="red">
      {/* <div className="company-info">
        <p>
          <span style={{ color: "#F42240" }}>Fight 4 Security</span> is an
          information security company that prioritizes what matters most to
          your organization.
        </p>
        <img src={logo} alt={"Fight 4 Security"} />
      </div> */}
      <MobileAccordion />
      <div className="our-services">
        <p
          style={{
            color: "rgb(200,200,200)",
            fontSize: 40,
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          Our Services
        </p>

        {/* ----------- Red Team ---------- */}
        <Service
          id={"blue"}
          color={"red"}
          icon1={Breach}
          icon2={WebApp}
          title1={"ASSUMED BREACH ASSESSMENT"}
          title2={"WEB & MOBILE APPLICATION PENETRATION TESTING"}
          description1={
            "This engagement models an adversary inside of your network to help answer fundamental questions on the impacts post-breach."
          }
          description2={
            "We perform in-depth analysis to find security issues caused by programming errors, misconfigurations, and application architecture."
          }
        />
        <Service
          color={"red"}
          icon1={RED}
          // icon2={RANSOMWARE}
          title1={"RED TEAM & ADVERSARY EMULATION"}
          // title2={"RANSOMWARE READINESS ASSESSMENT"}
          description1={
            "A goal-oriented approach to test your defensive stack – people, processes, and technologies – against a sophisticated adversary."
          }
          // description2={
          //   "We employ a multi-faceted approach to test your organization’s ability to defend against and detect ransomware attacks."
          // }
        />
        {/* <Service
          icon1={WebApp}
          icon2={PURPLE}
          title1={"WEB APPLICATION AND MOBILE PENETRATION TESTING"}
          title2={"PURPLE TEAM"}
          description1={
            "We perform in-depth analysis to find security issues caused by programming errors, misconfigurations, and application architecture."
          }
          description2={
            "A collaborative engagement with your defenders to hone their ability to identify and respond to advanced attacks"
          }
        /> */}

        {/* ----------- Blue Team ---------- */}
        <Service
          id={"purple"}
          color={"blue"}
          icon1={PURPLE}
          icon2={PURPLE}
          title1={"INCIDENT RESPONSE"}
          title2={"Advanced Digital Forensics"}
          description1={
            "A collaborative engagement with your defenders to hone their ability to identify and respond to advanced attacks"
          }
          description2={
            "A collaborative engagement with your defenders to hone their ability to identify and respond to advanced attacks"
          }
        />
        <Service
          color={"blue"}
          icon1={PURPLE}
          // icon2={PURPLE}
          title1={"SIEM Deployment & Engineering"}
          // title2={"Advanced Digital Forensics"}
          description1={
            "A collaborative engagement with your defenders to hone their ability to identify and respond to advanced attacks"
          }
          // description2={
          //   "A collaborative engagement with your defenders to hone their ability to identify and respond to advanced attacks"
          // }
        />

        {/* ----------- Purple Team ---------- */}
        <Service
          icon1={PURPLE}
          color={"purple"}
          // icon2={PURPLE}
          title1={"PURPLE TEAM"}
          // title2={"PURPLE TEAM"}
          description1={
            "A collaborative engagement with your defenders to hone their ability to identify and respond to advanced attacks"
          }
          // description2={
          //   "A collaborative engagement with your defenders to hone their ability to identify and respond to advanced attacks"
          // }
        />
      </div>
    </div>
  );
}

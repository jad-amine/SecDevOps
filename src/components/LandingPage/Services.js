import React from "react";
import Service from "./Service";
import logo from "../../assets/Logo.png";
import Breach from "../../assets/LandingPage/ServicesIcons/Breach.svg";
import Penetration from "../../assets/LandingPage/ServicesIcons/Penetration.svg";
import PURPLE from "../../assets/LandingPage/ServicesIcons/PURPLE.svg";
import RANSOMWARE from "../../assets/LandingPage/ServicesIcons/RANSOMWARE.svg";
import RED from "../../assets/LandingPage/ServicesIcons/RED.svg";
import WebApp from "../../assets/LandingPage/ServicesIcons/WebApp.svg";

export default function Services() {
  return (
    <div className="services">
      <div className="company-info">
        <p
          style={{
            paddingLeft: 68,
            paddingRight: 68,
            marginBottom: 25,
            fontSize: "1.7em",
            lineHeight: 1.7,
            color: "rgb(84, 84, 84)",
          }}
        >
          <span style={{ color: "rgb(188, 20, 20)" }}>Fight 4 Security</span> is
          an information security company that prioritizes what matters most to
          your organization.
        </p>
        <img src={logo} height={230} alt={"Fight 4 Security"} />
      </div>
      <div className="our-services">
        <p
          style={{
            color: "rgb(47, 47, 47)",
            fontSize: 40,
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          Our Services
        </p>
        <Service
          icon1={Breach}
          icon2={Penetration}
          title1={"ASSUMED BREACH ASSESSMENT"}
          title2={"PENETRATION TESTING"}
          description1={
            "This engagement models an adversary inside of your network to help answer fundamental questions on the impacts post-breach."
          }
          description2={
            "Our customized service to enumerate systems and vulnerabilities that put your organization at risk."
          }
        />
        <Service
          icon1={RED}
          icon2={RANSOMWARE}
          title1={"RED TEAM & ADVERSARY EMULATION"}
          title2={"RANSOMWARE READINESS ASSESSMENT"}
          description1={
            "A goal-oriented approach to test your defensive stack – people, processes, and technologies – against a sophisticated adversary."
          }
          description2={
            "We employ a multi-faceted approach to test your organization’s ability to defend against and detect ransomware attacks."
          }
        />
        <Service
          icon1={WebApp}
          icon2={PURPLE}
          title1={"WEB APPLICATION PENETRATION TESTING"}
          title2={"PURPLE TEAM"}
          description1={
            "We perform in-depth analysis to find security issues caused by programming errors, misconfigurations, and application architecture."
          }
          description2={
            "A collaborative engagement with your defenders to hone their ability to identify and respond to advanced attacks"
          }
        />
      </div>
    </div>
  );
}

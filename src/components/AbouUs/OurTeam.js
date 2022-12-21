import React from "react";
import member1 from "../../assets/AboutUs/member1.png";
import member2 from "../../assets/AboutUs/member2.png";

export default function OurTeam() {
  return (
    <div style={{ paddingTop: 150, paddingBottom: 150 }}>
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "3em",
          marginBottom: 100,
        }}
      >
        Figh4Security Team
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 170,
        }}
      >
        <div className="team-member">
          <img
            src={member1}
            alt=""
            className="member-image"
            // height={"100%"}
            // width={"100%"}
          />
          <p>
            Marc Abou Nader <br /> Founder & CEO
          </p>
        </div>
        <div className="team-member">
          <img src={member2} alt="" className="member-image" />
          <p>
            Raph <br /> Founder & CEO
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Service(props) {
  return (
    <div style={{ display: "flex", gap: "5%", marginBottom: 40 }}>
      <div
        style={{ display: "flex", flex: 1, gap: 20, color: "rgb(84, 84, 84)" }}
      >
        <img src={props.icon1} height={70} alt="icons" />
        <div>
          <h4 style={{ width: "100%" }}>{props.title1}</h4>
          <p>{props.description1}</p>
        </div>
      </div>
      <div
        style={{ display: "flex", flex: 1, gap: 20, color: "rgb(84, 84, 84)" }}
      >
        <img src={props.icon2} height={70} alt="icons" />
        <div>
          <h4 style={{ width: "100%" }}>{props.title2}</h4>
          <p>{props.description2}</p>
        </div>
      </div>
    </div>
  );
}

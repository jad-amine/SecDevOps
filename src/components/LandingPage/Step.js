import React from "react";

export default function Step({ step }) {
  return (
    <div className="step">
      <p style={{ fontWeight: "bolder" }}>Step {step.num}</p>
      <h4>{step.title}</h4>
      <h5 style={{ width: "80%", margin: "auto" }}>{step.text}</h5>
      <button className="check-button">Check now</button>
    </div>
  );
}

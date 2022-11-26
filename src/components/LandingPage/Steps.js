import React from "react";
import Step from "./Step";

export default function Steps() {
  const steps = [
    {
      num: 1,
      title: "Check your security",
      text: "Use our free services Internet Threat Exposure Analysis. It’s fast, safe, and confidential.",
    },
    {
      num: 2,
      title: " Schedule a demo",
      text: "See the Zero Trust Exchange in action and explore services that meet your needs.",
    },
    {
      num: 3,
      title: "Contact us",
      text: "Learn how we can help you transform confidently to meet your business goals.    ",
    },
  ];

  return (
    <div className="steps">
      <h1 style={{ color: "white", textAlign: "center", marginBottom: 80 }}>
        DON’T WAIT TO BE ATTACKED <p>PREVENTION STARTS NOW !!</p>
      </h1>
      <div className="three-steps">
        {steps.map((step) => (
          <Step step={step} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
// import User from "../../assets/LandingPage/Testimonial/testimonial-img.svg";

export default function Testimonial() {
  return (
    <div className="testimonial">
      {/* <img src={User} alt="" style={{ marginRight: -28 }} /> */}
      <div className="testimonial-text">
        <p>
          “ Fight 4 Security is the real deal penetration testing firm. You
          receive the best report with high level of details. This company won a
          life-long customer.”
        </p>
        <p style={{ marginTop: 30, textAlign: "center" }}>
          <span style={{ color: "#3266cb" }}> Jack</span>, Information Security
          Analyst, Dubai.
        </p>
      </div>
    </div>
  );
}

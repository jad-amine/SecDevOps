import React from "react";
import Home from "../components/LandingPage/Home";
import Services from "../components/LandingPage/Services";
import Steps from "../components/LandingPage/Steps";
import Testimonial from "../components/LandingPage/Testimonial";

export default function LandingPage() {
  return (
    <div>
      <Home />
      <Services />
      <Testimonial />
      <Steps />
    </div>
  );
}

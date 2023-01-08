import React, { useEffect } from "react";
import Home from "../components/LandingPage/Home";
import Services from "../components/LandingPage/Services";
import Steps from "../components/LandingPage/Steps";
import Testimonial from "../components/LandingPage/Testimonial";
import { useLocation } from "react-router-dom";

export default function LandingPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Home />
      <Services />
      <Testimonial />
      <Steps />
    </div>
  );
}

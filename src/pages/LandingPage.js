import React from "react";
import Home from "../components/LandingPage/Home";
import Services from "../components/LandingPage/Services";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}

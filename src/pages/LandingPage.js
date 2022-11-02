import React from "react";
import Home from "../components/LandingPage/Home";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="services">
        <h1>Our Services</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lab
          </p>
          <ul>
            <li>Lorem upsum</li>
            <li>Lorem upsum</li>
            <li>Lorem upsum</li>
            <li>Lorem upsum</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

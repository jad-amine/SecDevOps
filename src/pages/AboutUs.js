import React, { useEffect } from "react";
import LearnMore from "../components/AbouUs/LearnMore";
import OurStory from "../components/AbouUs/OurStory";
import { useLocation } from "react-router-dom";
// import OurTeam from "../components/AbouUs/OurTeam";
// import ContactUs from "../components/AbouUs/ContactUs";

export default function AboutUs() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <LearnMore />
      <OurStory />
      {/* <OurTeam /> */}
      {/* <ContactUs /> */}
    </>
  );
}

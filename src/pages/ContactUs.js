import React from "react";

function ContactUs() {
  const height = window.innerHeight;

  return (
    <div className="contact-us-screen" style={{ height: height }}>
      <p style={{ color: "white", fontSize: "5em" }}>Contact Us</p>
      <p style={{ color: "white", fontSize: "2em" }}>
        Let's talk about your website or project. Send us a message and we
        <br /> will be in touch within one business day.
      </p>
    </div>
  );
}

export default ContactUs;

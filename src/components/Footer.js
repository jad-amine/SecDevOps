import React from "react";
import { FaDiscord } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <div
      style={{
        height: 70,
        backgroundColor: "#3266CB",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // fontSize: ".9em",
      }}
    >
      <p style={{ color: "white" }}>
        © Copyright 2022 Fight4Security. All rights reserved.
      </p>
      <p>
        <ul
          style={{
            display: "flex",
            color: "white",
            listStyle: "none",
            gap: 15,
          }}
        >
          <li>About Fight4Security</li>
          <li>Feedback</li>
          <li>Contact us </li>
        </ul>
      </p>
      <p>
        <ul
          style={{
            display: "flex",
            color: "white",
            listStyle: "none",
            gap: 15,
            alignItems: "center",
          }}
        >
          <li>
            <FaDiscord size={25} />
          </li>
          <li>
            <BsLinkedin size={20} />
          </li>
          <li>
            <RiInstagramFill size={25} />
          </li>
          <li>
            <AiFillYoutube size={25} />
          </li>
        </ul>
      </p>
    </div>
  );
}

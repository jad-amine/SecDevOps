import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MobileAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="mobile-accordion">
      <h2>Our Services</h2>

      {/* --------------- */}
      <Accordion
        style={{
          backgroundColor: "rgba(100,100,100,0.5)",
          color: "rgb(200,200,200)",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0, fontSize: 13 }}>
            ASSUMED BREACH ASSESSMENT
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This engagement models an adversary inside of your network to help
            answer fundamental questions on the impacts post-breach.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* --------------- */}
      <Accordion
        style={{
          backgroundColor: "rgba(100,100,100,0.5)",
          color: "rgb(200,200,200)",
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "80%", flexShrink: 0, fontSize: 13 }}>
            PENETRATION TESTING
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our customized service to enumerate systems and vulnerabilities that
            put your organization at risk.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* --------------- */}
      <Accordion
        style={{
          backgroundColor: "rgba(100,100,100,0.5)",
          color: "rgb(200,200,200)",
        }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0, fontSize: 13 }}>
            RED TEAM & ADVERSARY EMULATION
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "A goal-oriented approach to test your defensive stack – people,
            processes, and technologies – against a sophisticated adversary."
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* --------------- */}
      <Accordion
        style={{
          backgroundColor: "rgba(100,100,100,0.5)",
          color: "rgb(200,200,200)",
        }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "80%", flexShrink: 0, fontSize: 13 }}>
            RANSOMWARE READINESS ASSESSMENT
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "We employ a multi-faceted approach to test your organization’s
            ability to defend against and detect ransomware attacks."
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* --------------- */}
      <Accordion
        style={{
          backgroundColor: "rgba(100,100,100,0.5)",
          color: "rgb(200,200,200)",
        }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: "80%", flexShrink: 0, fontSize: 13 }}>
            WEB APPLICATION PENETRATION TESTING
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "We perform in-depth analysis to find security issues caused by
            programming errors, misconfigurations, and application
            architecture."
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* --------------- */}
      <Accordion
        style={{
          backgroundColor: "rgba(100,100,100,0.5)",
          color: "rgb(200,200,200)",
        }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: "80%", flexShrink: 0, fontSize: 13 }}>
            PURPLE TEAM
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "A collaborative engagement with your defenders to hone their
            ability to identify and respond to advanced attacks"
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

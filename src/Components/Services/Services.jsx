import React from "react";
import "../../Styles/Services.scss";
import grp from "../../assets/grp.png";
import ui from "../../assets/ui.png";
import frontend from "../../assets/frontend.png";
function Services() {
  const services = [
    {
      image: ui,
      heading: "UI / UX DESIGN",
      description:
        "We help individuals and businesses build highly responsive user interfaces that stands in parity with the best",
    },
    {
      image: frontend,
      heading: "FRONTEND DEVELOPMENT",
      description:
        "We help individuals and businesses build highly responsive user interfaces that stands in parity with the best",
    },
    {
      image: grp,
      heading: "GRAPHICS DESIGN",
      description:
        "We help individuals and businesses build highly responsive user interfaces that stands in parity with the best",
    },
  ];

  return (
    <div className="serviceContainer">
      <h3>COURSES</h3>
      <div className="services">
        {services.map((service, i) => (
          <div key={i} className="service">
            <img alt="" src={service.image} />
            <div className="content">
              <h3>{service.heading}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

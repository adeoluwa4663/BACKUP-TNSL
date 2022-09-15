import React from "react";
import "../../Styles/Details.scss";
import we from "../../assets/we.png";
function Details() {
  return (
    <div className="details">
      <div className="detail">
        <div className="who">
          <h3>WHO WE ARE</h3>
          <p>
            The Next Stage Lab is platform providing a learning infrastructure
            for any digital, soft and tech skills, receive practical mentorship
            from experts in each field and also get access to global job
            opportunities in Africa.
          </p>
        </div>
        <div className="description">
          <p>
            One single platform that helps to learn, receive mentorship and
            access to job opportunities. We leverage our technology to solve
            learning, unemployment and talent challenges in Africa.
          </p>
        </div>
      </div>
      <div className="detail1">
        <div className="who">
          <h3>WHAT WE DO</h3>
          <p>
            We are refining talents in the digital ecosystem in Africa for
            global opportunities
          </p>
        </div>

        <div className="ourImg">
          <img src={we} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Details;

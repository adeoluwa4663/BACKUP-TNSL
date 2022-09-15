import React from "react";
import "../../Styles/Contact.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import connect from "../../assets/connect.png";

function Connect() {
  return (
    <div>
      <div className="connect">
        <div className="content">
          <h3>CONNECT WITH US</h3>
          <div className="text">
            <h5>E-Mail</h5>
            <p>thenextstagelab@gmail.com</p>
          </div>
          <div className="text">
            <h5>Phone Number</h5>
            <p>+234-1234568</p>
            <p>+234-1234568</p>
          </div>
          <h4>FIND US ON SOCIAL MEDIA</h4>
          <div className="social">
            <a className="linkedin" href="https://linkedin.com">
              <FaLinkedin />
            </a>
            <a className="twitter" href="https://twitter.com">
              <FaTwitter />
            </a>
            <div className="ig" href="https://instagram.com">
              <FaInstagram />
            </div>
            <a className="fb" href="https://facebook.com">
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="connectImg">
          <img src={connect} alt="connect" />
        </div>
      </div>
    </div>
  );
}

export default Connect;

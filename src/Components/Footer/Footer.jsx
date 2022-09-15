import React from "react";
import "../../Styles/Footer.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="contents">
        <div className="content">
          <h3>TNSL</h3>
          <p>Upgrade your skillset. Think it, become it with TNSL.</p>
        </div>
        <div className="content">
          <h4>COURSES</h4>
          <p>UI / UX Design</p>
          <p>Project Management</p>
          <p>Graphics Design</p>
          <p>Front-end Development</p>
          <p>Backend Development</p>
          <p>FreeLancing</p>
          <p>Mobile App Development</p>
          <p>Digital Marketing(coming soon)</p>
        </div>
        <div className="content">
          <h4>DISCOVER</h4>
          <p>FAQs</p>
          <p>Terms and Conditions</p>
          <h5>NEWSLETTER</h5>
          <p>Get the latest news</p>
          <input type="text" placeholder="Enter your text" />
          <div>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="content">
          <h4>CONTACT US</h4>
          <p>thenextstagelab@gmail.com</p>
          <p>thenextstagelab@gmail.com</p>
        </div>
      </div>
      <hr className="line" />
      <div className="footerTitle">
        <h2>THE NEXT STAGE LAB</h2>
      </div>
    </div>
  );
}

export default Footer;

import "./FooterStyles.css";

import React from "react";

import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>380 Sanders Court</p>
              <p>Athens, Ga 30606</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            770-317-5363</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            ovitale1@gmail.com</h4>
          </div>
        </div>
        <div className="right">
            <h4>About me...</h4>
            <p>My name is Oliver Vitale. I'm a student of a full stack GT coding Bootcamp.</p>
            <div className="social">
            <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />

            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram } from "react-feather";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer-container">
        <div className="info-container">
          <div className="footer-logo">
            <img className="logo-img" src="./images/logo-img.png" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="contact-container">
          <div className="contact-items">
            <div className="contact-header">MOVIEGRAM SOSYAL</div>
            <div className="contact-item">
              <Facebook className="icon-social" />
              <Twitter className="icon-social" />
              <Instagram className="icon-social" />
            </div>
          </div>
          <div className="footer-mail">
              destek@moviegram.com
          </div>
        </div>
      </div>
      <div className="copyright-container">
        Copyright © 2022 Moviegram
      </div>
    </div>
  );
}

export default Footer;

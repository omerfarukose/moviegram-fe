import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SocialIcon from "../SocialIcon/SocialIcon";

function Navbar(props) {
  let { home, addBlog, login, sign, social } = props;

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <img className="logo-img" src="./images/logo-img.png" alt="#" />
        </Link>
      </div>
      <div className="navbar-buttons">
        {addBlog && (
        <Link className="navbar-btn" to="/addBlog">
            Blog Ekle
        </Link>
        )}
        {login && (
          <Link className="navbar-btn" to="/login">
            Giriş
          </Link>
        )}
        {sign && (
          <Link className="navbar-btn-sign" to="/sign">
            Kaydol
          </Link>
        )}
        {social && (
          <div className="social-container">
            <SocialIcon facebook url="https://www.facebook.com"/>
            <SocialIcon twitter url="https://www.twitter.com"/>
            <SocialIcon instagram url="https://www.instagram.com"/>            
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

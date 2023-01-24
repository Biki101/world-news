import React from "react";
import { BsFacebook, BsTwitter, BsPinterest, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./nav-bar.styles.scss";

const NavBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content container">
        {/* upper nav  */}
        <div className="up-nav-container">
          <div className="up-nav-links">
            <div className="location">
              <span>Kathmandu, Nepal</span>
              <span>HI 58 &#8451; LO 50 &#8451;</span>
            </div>
            <div className="">
              <ul className="sign-up-nav">
                <li className="link">About</li>
                <li className="link">Contact</li>
                <li className="link">Sign Up</li>
                <li className="link">Log In</li>
              </ul>
            </div>
          </div>
          <div className="up-nav-logo">
            <span className="link">
              <BsFacebook />
            </span>
            <span className="link">
              <BsTwitter />
            </span>
            <span className="link">
              <AiFillInstagram />
            </span>
            <span className="link">
              <BsYoutube />
            </span>
            <span className="link">
              <BsPinterest />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

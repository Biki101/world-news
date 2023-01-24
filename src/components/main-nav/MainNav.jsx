import React from "react";
import Navigation from "../navigation/Navigation";
import "./main-nav.styles.scss";

const MainNav = () => {
  return (
    <div className="container main-nav">
      {/* Nav logo  */}
      <div className="logo">
        <img className="logo-img" src="./logo.png" alt="error loading image" />
        <div className="explore">
          <span>Start Exploring...</span>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default MainNav;

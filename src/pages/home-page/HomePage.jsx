import React from "react";
import HomeMainSection from "../../components/home-main-section/home-main-section";
import WelcomeNews from "../../components/welcome-news/WelcomeNews";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="container">
        <WelcomeNews />
        <HomeMainSection />
      </div>
    </div>
  );
};

export default HomePage;

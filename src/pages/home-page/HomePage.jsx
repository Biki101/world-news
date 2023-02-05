import React, { useContext, useEffect } from "react";
import HomeMainSection from "../../components/home-main-section/home-main-section";
import WelcomeNews from "../../components/welcome-news/WelcomeNews";
import "./homepage.styles.scss";
import LatestArticle from "../../components/latest-article/LatestArticle";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";

const HomePage = () => {
  const { setRoute } = useContext(BreadCrumbContext);
  useEffect(() => {
    setRoute("Home");
  }, [setRoute]);

  return (
    <div className="homepage-container">
      <div className="container">
        <WelcomeNews />
        <HomeMainSection />
        <div id="home-page-img" className="explore">
          <span>Start Exploring</span>
        </div>
        <LatestArticle />
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import WelcomeNewsContent from "./welcome-news-content/WelcomeNewsContent";
import "./welcome-news.styles.scss";

const WelcomeNews = () => {
  return (
    <div className="welcome-news">
      <div className="welcome-gallery" id="sports">
        <WelcomeNewsContent category="sports" />
      </div>
      <div className="welcome-gallery" id="celebrities">
        <WelcomeNewsContent category="sports" />
      </div>
      <div className="welcome-gallery" id="movies">
        <WelcomeNewsContent category="sports" />
      </div>
      <div className="welcome-gallery" id="books">
        <WelcomeNewsContent category="sports" />
      </div>
    </div>
  );
};

export default WelcomeNews;

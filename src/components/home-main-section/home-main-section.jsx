import React from "react";
import MainSectionComponent from "../main-section-component/MainSectionComponent";
import "./home-main-section.styles.scss";

const HomeMainSection = () => {
  return (
    <div className="main-section-container">
      <div className="main-section-item" id="main-global">
        <MainSectionComponent title="Global News" />
      </div>
      <div className="main-section-item" id="main-popular">
        <MainSectionComponent title="Popular News" />
      </div>
      <div className="main-section-item" id="main-books">
        <MainSectionComponent title="Books" />
      </div>
      <div className="main-section-item" id="main-sports">
        <MainSectionComponent title="Sports" />
      </div>
    </div>
  );
};

export default HomeMainSection;

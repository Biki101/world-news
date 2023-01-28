import React from "react";
import "./main-section-component.styles.scss";
import MainSectionContent from "./main-section-content/MainSectionContent";
import HomePopNews from "./main-section-pop-news/HomePopNews";

const MainSectionComponent = (props) => {
  const { title } = props;
  return (
    <div className="">
      <div className="main-title">{title}</div>
      {title !== "Popular News" ? <MainSectionContent /> : <HomePopNews />}
    </div>
  );
};

export default MainSectionComponent;

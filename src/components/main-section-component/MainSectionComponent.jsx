import React from "react";
import "./main-section-component.styles.scss";
import MainSectionContent from "./main-section-content/MainSectionContent";
import HomePopNews from "./main-section-pop-news/HomePopNews";
import MainSectionTitle from "./main-section-title/main-section.title";

const MainSectionComponent = (props) => {
  const { title } = props;
  return (
    <div className="">
      <MainSectionTitle title={title} />
      {title !== "Popular News" ? <MainSectionContent /> : <HomePopNews />}
    </div>
  );
};

export default MainSectionComponent;

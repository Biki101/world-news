import React from "react";
import "./main-section-component.styles.scss";
import MainSectionContent from "./main-section-content/MainSectionContent";
import HomePopNews from "./main-section-pop-news/HomePopNews";
import MainSectionTitle from "./main-section-title/main-section.title";

const MainSectionComponent = (props) => {
  const { title } = props;
  return (
    <div className="">
      {title !== "Popular News" ? (
        <>
          <MainSectionTitle title={title} />
          <MainSectionContent type={props.articlesType} />
        </>
      ) : (
        <div id="side-bar">
          <MainSectionTitle title={title} />
          <HomePopNews />
        </div>
      )}
    </div>
  );
};

export default MainSectionComponent;

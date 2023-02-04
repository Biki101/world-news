import React from "react";
import HomePopNews from "../main-section-component/main-section-pop-news/HomePopNews";
import MainSectionTitle from "../main-section-component/main-section-title/main-section.title";
import ArticleComponent from "../reusable-component/article-component/ArticleComponent";
import "./page-main-section.styles.scss";

const PageMainSection = (props) => {
  return (
    <div className="page-main-section">
      <div className="" id="page-main-content">
        {props.items.length
          ? props.items
              .filter((item, indx) => indx < 18 && indx > 6)
              .map((item, indx) => <ArticleComponent key={indx} item={item} />)
          : ""}
      </div>
      <div id="page-pop-content">
        <MainSectionTitle title="Popular News" />
        <HomePopNews />
      </div>
    </div>
  );
};

export default PageMainSection;

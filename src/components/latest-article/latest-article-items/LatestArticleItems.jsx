import React from "react";
import FirstArticle from "../../components/reusable-component/first-article/FirstArticle";
import "./latest-article-items.styles.scss";

const LatestArticleItems = (props) => {
  return (
    <div className="latest-article-item-container">
      <FirstArticle article={props.item} />
    </div>
  );
};

export default LatestArticleItems;

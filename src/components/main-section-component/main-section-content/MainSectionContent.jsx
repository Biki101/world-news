import React from "react";
import { useSelector } from "react-redux";
import PopularPost from "../../popular-post/PopularPost";
import FirstArticle from "../../reusable-component/first-article/FirstArticle";
import "./main-section-content.styles.scss";

const MainSectionContent = (props) => {
  const articles = useSelector((state) => state.popPopularPost.popularNews);
  return (
    <div className="main-section-content-container">
      <div className="first-content">
        {articles.length > 0 ? <FirstArticle article={articles[0]} /> : <></>}
      </div>
      <div className="rem-content">
        {articles
          .filter((item, index) => index < 4)
          .map((item, index) => (
            <PopularPost key={index} item={item} />
          ))}
      </div>
    </div>
  );
};
export default MainSectionContent;

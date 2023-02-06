import React from "react";
import { useSelector } from "react-redux";
import PopularPost from "../../popular-post/PopularPost";
import FirstArticle from "../../reusable-component/first-article/FirstArticle";
import "./main-section-content.styles.scss";

const MainSectionContent = (props) => {
  const articles = useSelector((state) => {
    switch (props.type) {
      case "movies":
        return state.homeNews.movieNews;
      case "sports":
        return state.homeNews.sportsNews;
      case "world":
        return state.globalPost.globalNews;
      default:
        return state.globalPost.globalNews;
    }
  });

  return (
    <div className="main-section-content-container">
      {articles ? (
        <>
          <div className="first-content">
            {articles.length ? (
              <FirstArticle article={articles[0]} main={true} post={true} />
            ) : (
              <></>
            )}
          </div>
          <div className="rem-content">
            {articles
              .filter((item, index) => 0 < index && index < 5)
              .map((item, index) => (
                <PopularPost post={true} key={index} item={item} />
              ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default MainSectionContent;

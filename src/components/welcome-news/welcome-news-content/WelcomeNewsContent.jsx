import React from "react";
import "./welcome-news-conent.styles.scss";

const WelcomeNewsContent = (props) => {
  const { items } = props;
  // date conversion
  const date = new Date(items ? items.published_date : false);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      {items ? (
        <div className="news-category-container">
          <div className="category-title">{props.category}</div>
          <div className="wel-news-title">{items.title}</div>
          <div className="wel-news-date">
            {date.toLocaleDateString("en-US", options)}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default WelcomeNewsContent;

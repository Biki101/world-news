import React from "react";
import "./welcome-news-conent.styles.scss";

const WelcomeNewsContent = (props) => {
  return (
    <div className="news-category-container">
      <div className="category-title">{props.category}</div>
      <div className="wel-news-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="wel-news-date">Jan 12, 2023</div>
    </div>
  );
};

export default WelcomeNewsContent;

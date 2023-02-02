import React from "react";
import WelcomeNewsContent from "../welcome-news/welcome-news-content/WelcomeNewsContent";
import "./welcome-component.styles.scss";

const WelcomeComponent = (props) => {
  const item = props.item;
  const title = item.subsection;
  const byline = item.byline;
  const imageUrl = item.multimedia[1].url;
  console.log(imageUrl);
  return (
    <div
      className="welcome-component"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <h5>{title.toUpperCase()}</h5>

      <p>
        <strong>{item.title}</strong>
      </p>
      <span>{byline}</span>
    </div>
  );
};

export default WelcomeComponent;
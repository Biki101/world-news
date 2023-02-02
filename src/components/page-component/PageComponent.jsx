import React from "react";
import WelcomeComponent from "../welcome-component/WelcomeComponent";
import "./page-component.styles.scss";

const PageComponent = (props) => {
  const articles = props.articles;
  // const newArticles = articles.shift();
  return (
    <div className="page-component">
      <div id="global-welcome">
        {articles.slice(1, 6).map((item, indx) => (
          <WelcomeComponent key={indx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PageComponent;

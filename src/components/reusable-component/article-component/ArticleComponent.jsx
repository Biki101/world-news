import React from "react";
import "./article-component.scss";

const ArticleComponent = (props) => {
  const article = props.item;

  console.log(article);

  return (
    <div>
      <div className="article-component">
        <img src={article.multimedia[1].url} alt="" />
        <h5>{article.subsection.toUpperCase()}</h5>
        <p>{article.title}</p>
        <span>{article.byline}</span>
      </div>
    </div>
  );
};

export default ArticleComponent;

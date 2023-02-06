import React from "react";
import "./first-article.scss";

import logo from "../../../img/logo.png";

const FirstArticle = (props) => {
  console.log(props);
  const main = props.main;
  const description = props.article.abstract;
  const title = props.article.title;
  const dateString = props.article.published_date;
  const imgUrl = props.article.multimedia[1].url;

  //converting date
  const dateArray = dateString.split("-");
  const day = parseInt(dateArray[2]);
  const month = parseInt(dateArray[1]);
  const year = parseInt(dateArray[0]);

  // Create a new Date object
  const date = new Date(year, month - 1, day);

  // Create the date string
  const newDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={`${
        main ? "main-first-article-container" : "first-article-container"
      }`}
    >
      {imgUrl ? (
        <img id="first-article-img" src={imgUrl} alt="error loading" />
      ) : (
        <img id="first-article-img" src={logo} alt="error loading" />
      )}
      <h4 id="foot-title">{title}</h4>
      {main ? (
        <div className="main-first-article-description">{description}</div>
      ) : (
        ""
      )}
      <span id="foot-span">{newDate}</span>
    </div>
  );
};

export default FirstArticle;

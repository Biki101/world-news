import React from "react";
import "./first-article.scss";

const FirstArticle = (props) => {
  console.log(props.article);
  const title = props.article.title;
  const dateString = props.article.published_date;
  const imgUrl = props.article.media[0];

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
    <div className="first-article-container">
      <img
        id="first-article-img"
        src={imgUrl["media-metadata"][0].url}
        alt="error loading"
      />
      <h4 id="foot-title">{title}</h4>
      <span id="foot-span">{newDate}</span>
    </div>
  );
};

export default FirstArticle;

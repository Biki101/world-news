import React from "react";
import "./pop-post.styles.scss";

import logo from "../.../../../img/logo.png";

const PopularPost = (props) => {
  const title = props.item.title;
  const dateString = props.item.published_date;
  const imgUrl = props.post
    ? props.item.multimedia[1].url
    : props.item.media[0]["media-metadata"][2].url;

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
    <div>
      {props.item ? (
        <div className="popular-post">
          {imgUrl ? (
            <img id="foot-img" src={imgUrl} alt="error loading" />
          ) : (
            <img id="foot-img" src={logo} alt="error loading" />
          )}
          <h4 id="foot-title">{title}</h4>
          <span id="foot-span">{newDate}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PopularPost;

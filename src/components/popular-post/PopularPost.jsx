import React from "react";
import "./pop-post.styles.scss";

const PopularPost = (props) => {
  const title = props.item.title;
  const dateString = props.item.published_date;
  const imgUrl = props.item.media[0];

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
    <div className="popular-post">
      <img
        id="foot-img"
        src={imgUrl["media-metadata"][0].url}
        alt="error loading"
      />
      <h4 id="foot-title">{title}</h4>
      <span id="foot-span">{newDate}</span>
    </div>
  );
};

export default PopularPost;

import React from "react";
import { useSelector } from "react-redux";
import "./home-pop-news.scss";
import testImage from "../../../img/testing.jpg";
import StayConnected from "../../stay-connected/StayConnected";

const HomePopNews = () => {
  const article = useSelector((state) => state.popPopularPost.popularNews);
  return (
    <div className="home-pop-container">
      <ul>
        {article.slice(0, 4).map((item, indx) => (
          <li id="home-pop-title" key={indx}>
            <img
              src={item.media[0]["media-metadata"][0].url}
              alt="error loading"
            />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
      <img className="home-pop-img" src={testImage} alt="error loading" />
      <StayConnected />
    </div>
  );
};

export default HomePopNews;

import React from "react";
import { useSelector } from "react-redux";
import "./home-pop-news.scss";

const HomePopNews = () => {
  const article = useSelector((state) => state.popPopularPost.popularNews);
  console.log(article);
  return (
    <div className="home-pop-container">
      {
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
      }
    </div>
  );
};

export default HomePopNews;

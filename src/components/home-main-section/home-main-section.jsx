import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { populateGlobalArticle } from "../../redux/global-news-slice/global-news-slice";
import MainSectionComponent from "../main-section-component/MainSectionComponent";
import "./home-main-section.styles.scss";

const HomeMainSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
    )
      .then((res) => res.json())
      .then((data) => dispatch(populateGlobalArticle(data.results)));
  }, []);
  const articlesGlobal = useSelector((state) => state.globalPost.globalNews);

  console.log(articlesGlobal);
  return (
    <div className="main-section-container">
      <div className="main-section-item" id="main-global">
        <MainSectionComponent title="Global News" />
      </div>
      <div className="main-section-item" id="main-popular">
        <MainSectionComponent title="Popular News" />
      </div>
      <div className="main-section-item" id="main-books">
        <MainSectionComponent title="Books" />
      </div>
      <div className="main-section-item" id="main-sports">
        <MainSectionComponent title="Sports" />
      </div>
    </div>
  );
};

export default HomeMainSection;

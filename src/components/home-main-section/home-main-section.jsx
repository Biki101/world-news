import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainSectionComponent from "../main-section-component/MainSectionComponent";
import "./home-main-section.styles.scss";
import { populateGlobalArticle } from "../../redux/global-news-slice/global-news-slice";
import {
  populateMovieArticle,
  populateSportsArticle,
} from "../../redux/home-news-slice/home-news-slice";
const HomeMainSection = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchData1 = async () => {
  //     const res = await fetch(
  //       "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
  //     );
  //     const json = await res.json();
  //     dispatch(populateGlobalArticle(json.results));
  //   };

  //   const fetchData2 = async () => {
  //     const res = await fetch(
  //       "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
  //     );
  //     const json = await res.json();
  //     dispatch(populateSportsArticle(json.results));
  //   };

  //   const fetchData3 = async () => {
  //     const res = await fetch(
  //       "https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
  //     );
  //     const json = await res.json();
  //     dispatch(populateMovieArticle(json.results));
  //   };
  //   fetchData1();
  //   fetchData2();
  //   fetchData3();
  // });

  // setGlobalData(useSelector((state) => state.globalPost.globalNews));
  // setSportsData(useSelector((state) => state.homeNews.sportsNews));
  // setMoviesData(useSelector((state) => state.globalPost.movieNews));

  return (
    <div className="main-section-container">
      <div className="main-section-item" id="main-global">
        <MainSectionComponent articlesType="world" title="Global News" />
      </div>
      <div className="main-section-item" id="main-popular">
        <MainSectionComponent articlesType="world" title="Popular News" />
      </div>
      <div className="main-section-item" id="main-books">
        <MainSectionComponent articlesType="movies" title="Movies" />
      </div>
      <div className="main-section-item" id="main-sports">
        <MainSectionComponent articlesType="sports" title="Sports" />
      </div>
    </div>
  );
};

export default HomeMainSection;

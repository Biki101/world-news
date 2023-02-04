import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageComponent from "../../components/page-component/PageComponent";
import PageMainSection from "../../components/page-main-section-component/PageMainSection";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";
import { populatePopularNews } from "../../redux/popular-news-slice/popular-news-slice";
import "./popular-page.styles.scss";

const PopularPage = () => {
  const { setRoute } = useContext(BreadCrumbContext);
  const dispatch = useDispatch();
  useEffect(() => {
    setRoute("Home/Popular");
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
    )
      .then((res) => res.json())
      .then((data) => dispatch(populatePopularNews(data.results)));
  });

  const popularNews = useSelector((state) => state.popularNews.popularNews);
  // console.log(popularNews);

  return (
    <div className="container popular-page">
      <h1>Popular News</h1>
      {popularNews.length ? <PageComponent articles={popularNews} /> : ""}
      {popularNews.length ? <PageMainSection items={popularNews} /> : ""}
    </div>
  );
};

export default PopularPage;

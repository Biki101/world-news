import React, { useContext, useEffect } from "react";
import "./global-page.styles.scss";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";
import PageComponent from "../../components/page-component/PageComponent";
import { useDispatch, useSelector } from "react-redux";
import { populateGlobalArticle } from "../../redux/global-news-slice/global-news-slice";
import PageMainSection from "../../components/page-main-section-component/PageMainSection";

const GlobalPage = () => {
  const { setRoute } = useContext(BreadCrumbContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setRoute("Home/Global");
    // fetch(
    //   "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
    // )
    //   .then((res) => res.json())
    //   .then((data) => dispatch(populateGlobalArticle(data.results)));
  });

  const globalArticle = useSelector((state) => state.globalPost.globalNews);

  return (
    <div className="container global-page">
      <h1>Global News</h1>
      {globalArticle.length ? <PageComponent articles={globalArticle} /> : ""}

      {globalArticle.length ? <PageMainSection items={globalArticle} /> : ""}
    </div>
  );
};

export default GlobalPage;

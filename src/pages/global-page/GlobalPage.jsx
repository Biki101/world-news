import React, { useContext, useEffect } from "react";
import "./global-page.styles.scss";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";
import PageComponent from "../../components/page-component/PageComponent";
import { useDispatch, useSelector } from "react-redux";
import { populateGlobalArticle } from "../../redux/global-news-slice/global-news-slice";
import HomePopNews from "../../components/main-section-component/main-section-pop-news/HomePopNews";
import MainSectionTitle from "../../components/main-section-component/main-section-title/main-section.title";
import FirstArticle from "../../components/reusable-component/first-article/FirstArticle";
import ArticleComponent from "../../components/reusable-component/article-component/ArticleComponent";

const GlobalPage = () => {
  const { setRoute } = useContext(BreadCrumbContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setRoute("Home/Global");
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
    )
      .then((res) => res.json())
      .then((data) => dispatch(populateGlobalArticle(data.results)));
  }, []);

  const globalArticle = useSelector((state) => state.globalPost.globalNews);
  console.log(globalArticle);

  return (
    <div className="container global-page">
      <h1>Global News</h1>
      {globalArticle.length ? <PageComponent articles={globalArticle} /> : ""}

      <div className="global-main-section">
        <div className="" id="global-main-content">
          {globalArticle.length
            ? globalArticle
                .filter((item, indx) => indx < 18 && indx > 6)
                .map((item, indx) => (
                  <ArticleComponent key={indx} item={item} />
                ))
            : ""}
        </div>
        <div id="global-pop-content">
          <MainSectionTitle title="Popular News" />
          <HomePopNews />
        </div>
      </div>
    </div>
  );
};

export default GlobalPage;

import React, { useContext, useEffect } from "react";
import "./global-page.styles.scss";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";
import PageComponent from "../../components/page-component/PageComponent";
import { useSelector } from "react-redux";
import PageMainSection from "../../components/page-main-section-component/PageMainSection";
import { CircularIndeterminate } from "../../components/home-main-section/home-main-section";

const GlobalPage = () => {
  const { setRoute } = useContext(BreadCrumbContext);

  useEffect(() => {
    setRoute("Home/Global");
  });

  const globalArticle = useSelector((state) => state.globalPost.globalNews);

  return (
    <>
      {globalArticle.length ? (
        <div className="container global-page">
          <h1>Global News</h1>
          {globalArticle.length ? (
            <PageComponent articles={globalArticle} />
          ) : (
            ""
          )}

          {globalArticle.length ? (
            <PageMainSection items={globalArticle} />
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="loading">
          <CircularIndeterminate />
          <span>Please wait...</span>
        </div>
      )}
    </>
  );
};

export default GlobalPage;

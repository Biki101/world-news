import React, { useEffect } from "react";
import "./category-component.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  populateTechnology,
  populateAutomobiles,
  populateFood,
  populateHealth,
  populatePolitics,
  populateRealestate,
  populateScience,
} from "../../redux/categories-page-slice/categories-slice";
import PageComponent from "../page-component/PageComponent";
import PageMainSection from "../page-main-section-component/PageMainSection";

const CategoryComponent = (props) => {
  const title = props.title;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${title}.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ`
    )
      .then((res) => res.json())
      .then((data) => {
        switch (title) {
          case "technology":
            return dispatch(populateTechnology(data.results));
          case "automobiles":
            return dispatch(populateAutomobiles(data.results));
          case "food":
            return dispatch(populateFood(data.results));
          case "health":
            return dispatch(populateHealth(data.results));
          case "politics":
            return dispatch(populatePolitics(data.results));
          case "realestate":
            return dispatch(populateRealestate(data.results));
          default:
            return dispatch(populateTechnology(data.results));
        }
      });
  }, [title, dispatch]);

  const categoryNews = useSelector((state) => state.categoryNews[title]);
  return (
    <div className="category-component-container">
      <h2>{title.toUpperCase()}</h2>
      {categoryNews.length ? <PageComponent articles={categoryNews} /> : ""}
      {categoryNews.length ? <PageMainSection items={categoryNews} /> : ""}
    </div>
  );
};

export default CategoryComponent;

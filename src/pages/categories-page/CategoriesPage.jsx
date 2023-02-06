import React, { useContext, useEffect } from "react";
import CategoryNavBar from "../../components/category-nav-bar/CategoryNavBar";
import "./categories-page-styles.scss";
import { CategoryContext } from "../../context/categoryContext/CategoryContext";
import CategoryComponent from "../../components/category-components/category-components";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";

const CategoriesPage = () => {
  const { route } = useContext(CategoryContext);
  const { setRoute } = useContext(BreadCrumbContext);
  useEffect(() => {
    setRoute("Home/Category");
  });
  return (
    <div className="container category-page">
      <h1>More Categories</h1>
      <div className="category-content">
        <CategoryNavBar />
        <CategoryComponent title={route} />
      </div>
    </div>
  );
};

export default CategoriesPage;

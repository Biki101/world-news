import React, { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext/CategoryContext";
import "./category-nav-bar.styles.scss";

const CategoryNavBar = () => {
  const { setRoute } = useContext(CategoryContext);
  const handleTechnologyClick = () => {
    setRoute("technology");
  };
  const handlePoliticsClick = () => {
    setRoute("politics");
  };
  const handleHealthClick = () => {
    setRoute("health");
  };
  const handleFoodClick = () => {
    setRoute("food");
  };
  const handleAutomobilesClick = () => {
    setRoute("automobiles");
  };
  const handleRealestateClick = () => {
    setRoute("realestate");
  };
  return (
    <div className="category-navbar-section">
      <div className="category-navbar">
        <ul>
          <li className="cat-nav-item " onClick={handleTechnologyClick}>
            TECHNOLOGY
          </li>
          <li className="cat-nav-item " onClick={handlePoliticsClick}>
            POLITICS
          </li>
          <li className="cat-nav-item " onClick={handleHealthClick}>
            HEALTH
          </li>
          <li className="cat-nav-item " onClick={handleFoodClick}>
            FOOD
          </li>
          <li className="cat-nav-item " onClick={handleAutomobilesClick}>
            AUTOMOBILES
          </li>
          <li className="cat-nav-item " onClick={handleRealestateClick}>
            REALESTATE
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryNavBar;

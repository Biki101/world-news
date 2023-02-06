import React from "react";
import { useSelector } from "react-redux";
import MainSectionComponent from "../main-section-component/MainSectionComponent";
import "./home-main-section.styles.scss";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const CircularIndeterminate = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

const HomeMainSection = () => {
  const global = useSelector((state) => state.globalPost.globalNews);
  const movies = useSelector((state) => state.homeNews.movieNews);
  const sports = useSelector((state) => state.homeNews.sportsNews);

  return (
    <>
      {global.length !== 0 && movies.length !== 0 && sports.length !== 0 ? (
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
      ) : (
        <div className="loading">
          <CircularIndeterminate />
          <span>Please wait...</span>
        </div>
      )}
    </>
  );
};

export default HomeMainSection;

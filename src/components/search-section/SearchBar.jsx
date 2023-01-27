import React from "react";
import "./search-bar.styles.scss";
// MUI
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const SearchBar = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };

  return (
    <div className="search-container">
      <div className="container search-content">
        <div className="breadcrumb" role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon
                className="logo-font"
                sx={{ mr: 0.5 }}
                fontSize="inherit"
              />
              WORLD NEWS
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Core
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Breadcrumb
            </Typography>
          </Breadcrumbs>
        </div>
        {/* search bar  */}
        <form className="search-bar">
          <input type="Search" placeholder="What can I help you with today?" />
          <div className="search-icon link">
            <TravelExploreIcon />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

// import * as React from 'react';

// export default function IconBreadcrumbs() {
//   return (
//   );
// }

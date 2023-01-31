import React, { useContext } from "react";
import "./search-bar.styles.scss";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";

import { returnRouteIcon, routeIcon } from "./routeIcon";

const SearchBar = () => {
  const { route } = useContext(BreadCrumbContext);

  var res = route.split("/");
  // Output: ["category", "global"]

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
            {res.map((item, indx) => (
              <Link
                key={indx}
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                <div>{returnRouteIcon(item)}</div>
                {item}
              </Link>
            ))}
          </Breadcrumbs>
        </div>
        {/* search bar  */}
        <form className="search-bar">
          <input type="search" placeholder="What can I help you with today?" />
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

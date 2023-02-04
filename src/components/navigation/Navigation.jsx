import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./navigation.styles.scss";
import { useNavigate } from "react-router-dom";
// import { Link } from "@mui/material";

const Navigation = () => {
  const [value, setValue] = useState("/");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    navigate(value);
  }, [value]);

  return (
    <div className="nav-bar">
      <div>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="/" label="Home" />
            <Tab value="global" label="Global" />
            <Tab value="popular" label="Most popular" />
            <Tab value="categories" label="categories" />
            <Tab value="about" label="About Us" />
            <Tab value="contact" label="Contact US" />
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

export default Navigation;

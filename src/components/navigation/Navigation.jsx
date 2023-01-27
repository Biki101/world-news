import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./navigation.styles.scss";

const Navigation = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="nav-bar">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Home" />
          <Tab value="two" label="Most popular" />
          <Tab value="three" label="Continent" />
          <Tab value="four" label="Sports" />
          <Tab value="five" label="Celibrities" />
          <Tab value="six" label="Movie" />
          <Tab value="seven" label="Books" />
        </Tabs>
      </Box>
    </div>
  );
};

export default Navigation;

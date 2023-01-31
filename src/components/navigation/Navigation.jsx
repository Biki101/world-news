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
      <div>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Home" />
            <Tab value="three" label="Global" />
            <Tab value="two" label="Most popular" />
            <Tab value="four" label="categories" />
            <Tab value="six" label="About Us" />
            <Tab value="seven" label="Contact US" />
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

export default Navigation;

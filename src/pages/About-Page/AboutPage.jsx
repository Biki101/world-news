import React, { useContext, useEffect } from "react";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";

const AboutPage = () => {
  const { setRoute } = useContext(BreadCrumbContext);
  useEffect(() => {
    setRoute("Home/About");
  });
  return <div>AboutPage</div>;
};

export default AboutPage;

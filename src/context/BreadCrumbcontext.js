import { createContext, useState } from "react";

export const BreadCrumbContext = createContext({
  route: "",
  setRoute: () => {},
});

export const BreadCrumbProvider = ({ children }) => {
  const [route, setRoute] = useState("Home");

  const value = {
    route,
    setRoute,
  };

  return (
    <BreadCrumbContext.Provider value={value}>
      {children}
    </BreadCrumbContext.Provider>
  );
};

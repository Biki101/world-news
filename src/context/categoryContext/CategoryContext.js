import { createContext, useState } from "react";

export const CategoryContext = createContext({
  route: "",
  setRoute: () => {},
});

export const CategoryContextProvider = ({ children }) => {
  const [route, setRoute] = useState("technology");
  const value = {
    route,
    setRoute,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

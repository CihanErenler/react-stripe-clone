import React, { useContext } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

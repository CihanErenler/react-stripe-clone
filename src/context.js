import React, { useContext, useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsOpenSubmenuOpen] = useState(false);
  const [showInner, setShowInner] = useState(false);
  const [dimentions, setDimentions] = useState({ height: 0, width: 0 });
  const [location, setLocation] = useState({
    index: -1,
    page: "",
    location: "",
  });

  const openSubmenu = () => {
    setIsOpenSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsOpenSubmenuOpen(false);
    setLocation({ ...location, index: -1 });
  };
  const makeVisible = () => {
    setShowInner(true);
  };
  const makeNotVisible = () => {
    setShowInner(false);
  };

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        openSubmenu,
        closeSubmenu,
        isSubmenuOpen,
        makeVisible,
        makeNotVisible,
        setDimentions,
        dimentions,
        showInner,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

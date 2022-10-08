import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextWrapper = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    userAuth: false,
    userDetails: {},
  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextWrapper, GlobalContext };

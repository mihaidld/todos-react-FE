import React, { useState, useEffect, createContext } from "react";

export const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
  const API_KEY = process.env.REACT_APP_TODOS_API_KEY;
  const IP = "172.18.246.84";
  const PORT = 7777;
  const URL = `http://${IP}:${PORT}`;
  const [mode, setMode] = useState(
    () => localStorage.getItem("colorMode") || "light"
  );
  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, API_KEY, URL }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;

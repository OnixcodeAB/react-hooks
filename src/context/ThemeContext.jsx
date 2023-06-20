import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [darkmode, setDarkmode] = useState(false);

  const onClick = () => {
    setDarkmode(!darkmode);
  };

  return (
    <ThemeContext.Provider value={{ darkmode, onClick }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };

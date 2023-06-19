import React, { useState } from "react";

const Header = () => {
  const [darkmode, setDarkmode] = useState(false);

  const onClick = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div className="header">
      <h1>React Hooks</h1>
      <button type="button" onClick={onClick}>
        {darkmode ? "Dark Mode" : "Ligth Mode"}
      </button>
    </div>
  );
};

export default Header;

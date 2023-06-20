import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/header.css";
import { CButton } from "@coreui/react";

const Header = () => {
  const { darkmode, onClick } = useContext(ThemeContext);
  return (
    <div className="Header" color={`${darkmode ? "dark" : "light"}`}>
      <h1>React Hooks</h1>
      <CButton color="primary" type="button" onClick={onClick}>
        {darkmode ? "Dark Mode" : "Ligth Mode"}
      </CButton>
    </div>
  );
};

export default Header;

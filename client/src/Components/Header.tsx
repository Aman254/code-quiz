import React from "react";
import logo from "../assets/react.png";

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="React logo" className="w-24 rounded-lg h-24" />
      <h1>The React Quiz</h1>
    </header>
  );
};

export default Header;

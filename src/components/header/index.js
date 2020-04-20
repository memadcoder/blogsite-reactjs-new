import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="#">Home</a>
        <a href="#">Contact Us</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </nav>
      <div>Social Media Links</div>
    </header>
  );
};

export default Header;
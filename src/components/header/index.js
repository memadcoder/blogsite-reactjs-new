import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="/">Home</a>
        <a href="/contact-us">Contact Us</a>
        <a href="/login">Login</a>
        <a href="/signup">Register</a>
      </nav>
      <div className="socialLinks">
        <a href="http://www.github.com/memadcoder">
          <img
            // onClick={openSearch}
            className="grow"
            src={require("../../assets/icons/github.png")}
            alt="search"
          />
        </a>

        <a href="http://www.linkedin.com/in/memadcoder">
          <img
            // onClick={openSearch}
            className="grow"
            src={require("../../assets/icons/linkedin.png")}
            alt="search"
          />
        </a>

        <a href="http://www.instagram.com/memadcoder">
          <img
            // onClick={openSearch}
            className="grow"
            src={require("../../assets/icons/instagram.png")}
            alt="search"
          />
        </a>
        <a href="https://www.facebook.com/memadcoder">
          <img
            // onClick={openSearch}
            className="grow"
            src={require("../../assets/icons/facebook.png")}
            alt="search"
          />
        </a>

        <a href="http://www.twitter.com/memadcoder">
          <img
            // onClick={openSearch}
            className="grow"
            src={require("../../assets/icons/twitter.png")}
            alt="search"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;

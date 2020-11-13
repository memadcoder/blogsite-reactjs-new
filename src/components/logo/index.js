import React from "react";
import "./style.css";

const Logo = (props) => {
  return (
    <div className="logo">
      <img src={require(`./trendings.png`)} alt="logo" />
    </div>
  );
};

export default Logo;

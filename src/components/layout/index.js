import React from "react";
import "./style.css";
import SideBar from "../sidebar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        {props.children}
        <SideBar />
      </div>
    </React.Fragment>
  );
};

export default Layout;

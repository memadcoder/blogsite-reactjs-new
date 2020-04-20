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
      <div>
        <h1>This is Footer</h1>
      </div>
    </React.Fragment>
  );
};

export default Layout;

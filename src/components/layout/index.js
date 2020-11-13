import React from "react";
import "./style.css";
import SideBar from "../sidebar";
import Footer from "../footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        {props.children}
        <SideBar />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

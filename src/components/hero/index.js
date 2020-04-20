import React from "react";
import "./style.css";

import Card from "../ui/card";
import Logo from "../logo";
import Navbar from "../navbar";

const Hero = (props) => {
  return (
    <div>
      <Card>
        <div style={{ padding: "50px 0" }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  );
};

export default Hero;

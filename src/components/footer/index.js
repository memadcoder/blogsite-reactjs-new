import React from "react";
import "./style.css";

const Footer = (props) => {
  return (
    <div className="footerContainer">
      <div className="resourcesFooter">
        <div className="resourceTitle">
          <h3>Useful Resources</h3>
        </div>
        <div className="resourceContent">
          <ul>
            <li>Free web Design</li>
            <li>Photoshop Design Tutorial</li>
            <li>Search Engine Marketing Tips</li>
            <li>Premium Website Templates</li>
          </ul>
        </div>
      </div>
      <div className="contactUsFooter">
        <div className="contactUsTitle">
          <h3>Contact Info</h3>
        </div>
        <div className="contactDetails">
          <ul>
            <li>Address: 35,Koteshowr Kathmdu,Nepal</li>
            <li>Email: hola@gautammadhav.com.np</li>
            <li>Mobile: 9867681865</li>
            <li>Fax: 214-32411-11234</li>
          </ul>
        </div>
        <div className="socialLinks">
          <h3>Follow Us</h3>
          <a href="http://www.github.com/mgcoder2">
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
          <a href="https://www.facebook.com/madhav.gautam.1253">
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
      </div>
      <div className="latestBlogFooter">
        <div className="blogs">
          <h3>Latest Blogs</h3>
          <ul>
            <li>This is latest Blog</li>
            <li>This is latest Blog</li>
            <li>This is latest Blog</li>
            <li>This is latest Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

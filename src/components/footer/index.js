import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="resourcesFooter">
          <ul style={{ marginTop: 10 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/all">Posts</Link>
            </li>
          </ul>
        </div>
        <div className="contactUsFooter">
          <address>
            32, Amarawati Marg
            <br />
            Koteshowr, Kathmandu
            <br />
            Nepal
            <br />
            <i>Mobile</i>:9867681865
            <br />
            <i>Fax</i>: ++00 000 0000
            <br />
            <i>Email</i>: <a href="www.gmail.com">hola@gautammadhav.com.np</a>
          </address>
        </div>
        <div className="socialLinksFooter">
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>© Copyright 2020 Trendings Thoughts</p>
      </div>
    </div>
  );
}

export default Footer;

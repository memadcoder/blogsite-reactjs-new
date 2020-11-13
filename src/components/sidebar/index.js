import React, { Component } from "react";
import "./style.css";
import Card from "../ui/card";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { fetchRecents } from "../../Redux/ActionCreator";

const mapStateToProps = (state) => {
  return {
    recent: state.recents,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRecents: () => dispatch(fetchRecents()),
});

class SideBar extends Component {
  componentDidMount() {
    this.props.fetchRecents();
  }

  render() {
    console.log("state.recents=", this.props.recent);
    return (
      <div className="sidebarContainer">
        <Card style={{ marginBottom: "20px" }}>
          <div className="cardHeader">
            <span>About</span>
          </div>
          <div className="profileImageContainer">
            <img src={require("../../profileImage/profile.jpg")} alt="" />
          </div>
          <div className="cardBody">
            <p className="personalBio">Madhav Gautam | Software Engineer</p>
          </div>
        </Card>
        <Card>
          <div className="cardHeader" style={{ marginBottom: "20px" }}>
            <span>Social Network</span>
            <div className="socialLinksSidebar">
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
        </Card>
        <Card>
          <div className="cardHeader">
            <span>Recent Posts</span>
          </div>
          <div className="recentPosts">
            {this.props.recent.recents.map((post) => {
              const d = new Date(post.updatedAt);
              var date =
                d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
              return (
                <NavLink key={post._id} to={`/posts/${post._id}`}>
                  <div className="recentPost">
                    <h3
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "sans serif",
                      }}
                    >
                      {post.title}
                    </h3>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "monospace",
                      }}
                    >
                      {date}
                    </span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

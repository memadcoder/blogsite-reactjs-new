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
            <span>Social Netwok</span>
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
                    <h3>{post.title}</h3>
                    <span>{date}</span>
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

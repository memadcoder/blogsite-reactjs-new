import React, { Component } from "react";
import "./style.css";
import Card from "../../../components/ui/card";

import { connect } from "react-redux";
import { fetchLatest } from "../../../Redux/ActionCreator";

const mapStateToProps = (state) => {
  return {
    latest: state.latest,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLatest: () => dispatch(fetchLatest()),
});

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchLatest();
  }

  render() {
    const d = new Date(this.props.latest.latest.updatedAt);
    var date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
    return (
      <div style={{ width: "70%" }}>
        <Card style={{ marginBottom: "20px" }}>
          <div className="postImageWrapper">
            <img
              src={require(`../../../blogPostImages/fitness-blog-post.jpg`)}
              alt=""
            />
          </div>
          <div style={{ textAlign: "center", height: 495, overflow: "hidden" }}>
            <span>Latest</span>
            <h2>{this.props.latest.latest.title}</h2>
            <span>Posted On {date}</span>
            {/* <span>
              By {this.props.latest.latest.by.username}
            </span> */}
            <p>{this.props.latest.latest.content}</p>
            <button style={{ position: "relative" }}>Read More...</button>
          </div>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentPosts);

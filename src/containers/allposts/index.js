import React, { Component } from "react";
import "./style.css";
import Card from "../../components/ui/card";

import { connect } from "react-redux";
import { fetchPosts } from "../../Redux/ActionCreator";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

class AllPost extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div
        className="AllPostContainer"
        style={{ marginTop: 15, textAlign: "center", overflow: "hidden" }}
      >
        {this.props.posts.posts.map((post) => {
          const d = new Date(post.updatedAt);
          var date =
            d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
          return (
            <Card>
              <div className="blogHeader">
                <span
                  className="blogCategory"
                  style={{ fontFamily: "cursive" }}
                >
                  {post.title}
                </span>
                <h1 className="postTitle" style={{ fontFamily: "sans serif" }}>
                  {post.title}
                </h1>
                <span className="postedBy" style={{ fontFamily: "monospace" }}>
                  Posted On {date},{" "}
                  <span style={{ fontFamily: "monospace" }}>By {post.by}</span>
                </span>
              </div>

              <div className="postImageContainer">
                {post.postImage ? (
                  <img
                    // src={require(`../../AllPostImages/${post.postImage}`)}
                    alt="Post Image"
                  />
                ) : null}
              </div>
              <div className="postContent">
                <h3 style={{ fontFamily: "sans serif" }}>{post.title}</h3>
                <p style={{ fontFamily: "serif" }}>{post.content}</p>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPost);

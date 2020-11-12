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
      <div className="AllPostContainer" style={{ marginTop: 15 }}>
        {this.props.posts.posts.map((post) => {
          const d = new Date(post.updatedAt);
          var date =
            d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
          return (
            <Card>
              <div className="blogHeader">
                <span className="blogCategory">{post.title}</span>
                <h1 className="postTitle">{post.title}</h1>
                <span className="postedBy">
                  Posted On {date}, By {}
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
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPost);

import React, { Component } from "react";
import "./style.css";
import Card from "../ui/card";

import { connect } from "react-redux";
import { fetchPostById } from "../../Redux/ActionCreator";

const mapStateToProps = (state) => {
  return {
    slugPost: state.slugPost,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (slug) => dispatch(fetchPostById(slug)),
});

class BlogPost extends Component {
  // componentDidMount() {
  //   var slug = this.props.match.params.slug;
  //   this.props.fetchPostById(slug);
  // }
  componentDidUpdate() {
    var slug = this.props.match.params.slug;
    this.props.fetchPostById(slug);
  }

  render() {
    // var slug = this.props.match.params.slug;
    // this.props.fetchPostById(slug);
    const d = new Date(this.props.slugPost.slugPost.updatedAt);
    var date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
    return (
      <div
        className="blogPostContainer"
        style={{
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Card>
          <div className="blogHeader">
            <span className="blogCategory" style={{ fontFamily: "cursive" }}>
              {this.props.slugPost.slugPost.title}
            </span>
            <h1 className="postTitle" style={{ fontFamily: "sans serif" }}>
              {this.props.slugPost.slugPost.title}
            </h1>
            <span className="postedBy" style={{ fontFamily: "monospace" }}>
              Posted On {date},{" "}
              <span style={{ fontFamily: "monospace" }}>
                By {this.props.slugPost.slugPost.by}
              </span>
            </span>
          </div>

          <div className="postImageContainer">
            {this.props.slugPost.slugPost.postImage ? (
              <img
                // src={require(`../../blogPostImages/${post.postImage}`)}
                alt="Post Image"
              />
            ) : null}
          </div>
          <div className="postContent">
            <h3 style={{ fontFamily: "sans serif" }}>
              {this.props.slugPost.slugPost.title}
            </h3>
            <p style={{ fontFamily: "serif" }}>
              {this.props.slugPost.slugPost.content}
            </p>
          </div>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);

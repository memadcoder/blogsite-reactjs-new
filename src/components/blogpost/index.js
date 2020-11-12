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

  render() {
    var slug = this.props.match.params.slug;
    this.props.fetchPostById(slug);
    const d = new Date(this.props.slugPost.slugPost.updatedAt);
    var date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
    return (
      <div className="blogPostContainer">
        <Card>
          <div className="blogHeader">
            <span className="blogCategory">
              {this.props.slugPost.slugPost.title}
            </span>
            <h1 className="postTitle">{this.props.slugPost.slugPost.title}</h1>
            <span className="postedBy">
              Posted On {date}, By {}
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
            <h3>{this.props.slugPost.slugPost.title}</h3>
            <p>{this.props.slugPost.slugPost.content}</p>
          </div>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);

import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../ui/card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div className="sidebarContainer" style={{ width: props.width }}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img src={require("../../profileImage/profile.jpg")} alt="" />
        </div>
        <div className="cardBody">
          <p className="personalBio">Er.Madhav Gautam | MERN Stack</p>
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
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/posts/${post.slug}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SideBar;

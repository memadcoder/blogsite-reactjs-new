import React from "react";
import "./style.css";
import Card from "../../components/ui/card";
import BlogPost from "../../components/blogpost";
import SideBar from "../../components/sidebar";
import Layout from "../../components/layout";

const Post = (props) => {
  console.log(props);
  return (
    <Layout>
      <BlogPost {...props} />
    </Layout>
  );
};

export default Post;

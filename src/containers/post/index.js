import React from "react";
import "./style.css";
import BlogPost from "../../components/blogpost";
import Layout from "../../components/layout";

const Post = (props) => {
  console.log("props to post", props.match.params.slug);
  return (
    <Layout>
      <BlogPost {...props} />
    </Layout>
  );
};

export default Post;

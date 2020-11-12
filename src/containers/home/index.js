import React from "react";
import "./style.css";
import SideBar from "../../components/sidebar";
import Card from "../../components/ui/card";
import blogData from "../../data/blog.json";
import Layout from "../../components/layout/index";
import RecentPost from "../home/recentpost";

const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="" />
    </div>
  );
};

const ImageGallary = (props) => {
  return (
    <div className="gallaryPost" style={props.gallaryStyle}>
      <section style={{ width: props.largeWidth }}>
        <div className="mainImageWrapper">
          <img
            src={require(`../../blogPostImages/` + props.imageArray[1])}
            alt=""
          />
        </div>
      </section>
      <section className="sideImageWrapper" style={{ width: props.smallWidth }}>
        {props.imageArray.map((image) => (
          <SideImage
            height={props.sideImageHeight}
            src={require(`../../blogPostImages/` + image)}
            key={image.id}
            alt=""
          />
        ))}
      </section>
    </div>
  );
};

const Home = (props) => {
  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight + "px",
    overflow: "hidden",
  };

  const sideImageHeight = gallaryHeight / 3;
  const imgAr = blogData.data.map((post) => post.blogImage);
  return (
    <div>
      <Card>
        <ImageGallary
          largeWidth="70%"
          smallWidth="30%"
          gallaryStyle={gallaryStyle}
          sideImageHeight={sideImageHeight}
          imageArray={imgAr}
          //images={[]}
        />
      </Card>

      <Layout>
        <RecentPost style={{ width: "100%" }} />
      </Layout>
    </div>
  );
};

export default Home;

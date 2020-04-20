import React from "react";
import "./style.css";
import Card from "../../../components/ui/card";

const RecentPosts = (props) => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src={require(`../../../blogPostImages/fitness-blog-post.jpg`)}
            alt=""
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2>Fitness Mantra To Live Fit Life</h2>
          <span>Posted On July 2, 2020 , By Madhav Gautam</span>
          <p>
            saldflajsd flkjasdf ljaslkdfj
            asdfjlkjaslkdfjklasjdfkljalsjdflkjasldf alsj
            dfjalsdjkflkajsdjlfkajsdjkalsdfkjajads
          </p>
          <button>Read More</button>
        </div>
      </Card>
    </div>
  );
};

export default RecentPosts;

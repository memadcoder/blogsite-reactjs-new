import React , { Component } from "react";
import "../recentpost/style.css";
import Card from "../../../components/ui/card";

import { connect } from "react-redux";
import {
  fetchPosts
} from "../../../Redux/ActionCreator";

const mapStateToProps = (state) => {
  return {
    postss: state.posts,
    loggedInUser: state.loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});


class PreviousPost extends Component{
  componentDidMount() {
    this.props.fetchPosts();
    
  }


  render(props){
    console.log(this.props);
    return(      
 
     <div style={{width:"100%"}}>
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
    )
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(PreviousPost);

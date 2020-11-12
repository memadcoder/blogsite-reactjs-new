import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading());
  axios
    .get(baseUrl + "post")
    .then((response) => {
      console.log("response");
      dispatch(addPosts(response.data.posts));
    })
    .catch((error) => {
      console.log("statuscode", error);
      dispatch(postsFailed(error));
    });
};

export const postsLoading = () => ({
  type: ActionTypes.POSTS_LOADING,
});

export const addPosts = (posts) => ({
  type: ActionTypes.ADD_POSTS,
  payload: posts,
});

export const postsFailed = (errmess) => ({
  type: ActionTypes.POSTS_FAILED,
  payload: errmess,
});

export const fetchFeatured = () => (dispatch) => {
  console.log("in fetch featured");
  dispatch(featuredLoading());
  axios
    .get(baseUrl + "post/featured")
    .then((response) => {
      console.log("response==>", response);
      dispatch(addFeatured(response.data.posts));
    })
    .catch((error) => {
      console.log("statuscode", error);
      dispatch(featuredFailed(error));
    });
};

export const featuredLoading = () => ({
  type: ActionTypes.FEATURED_LOADING,
});

export const featuredFailed = (errmess) => ({
  type: ActionTypes.FEATURED_FAILED,
  payload: errmess,
});

export const addFeatured = (featured) => ({
  type: ActionTypes.ADD_FEATURED,
  payload: featured,
});

export const fetchRecents = () => (dispatch) => {
  console.log("in fetch recents");
  dispatch(recentsLoading());
  axios
    .get(baseUrl + "post/recents")
    .then((response) => {
      console.log("response==>", response);
      dispatch(addRecents(response.data.posts));
    })
    .catch((error) => {
      console.log("statuscode", error);
      dispatch(recentsFailed(error));
    });
};

export const recentsLoading = () => ({
  type: ActionTypes.RECENTS_LOADING,
});

export const addRecents = (posts) => ({
  type: ActionTypes.ADD_RECENTS,
  payload: posts,
});

export const recentsFailed = (errmess) => ({
  type: ActionTypes.RECENTS_FAILED,
  payload: errmess,
});

export const fetchLatest = () => (dispatch) => {
  console.log("in fetch recents");
  dispatch(latestLoading());
  axios
    .get(baseUrl + "post/latest")
    .then((response) => {
      console.log("latests==>", response.data);
      dispatch(addLatest(response.data.post));
    })
    .catch((error) => {
      console.log("statuscode", error);
      dispatch(latestFailed(error));
    });
};

export const latestLoading = () => ({
  type: ActionTypes.LATEST_LOADING,
});

export const addLatest = (posts) => ({
  type: ActionTypes.ADD_LATEST,
  payload: posts,
});

export const latestFailed = (errmess) => ({
  type: ActionTypes.LATEST_FAILED,
  payload: errmess,
});

export const fetchPostById = (slug) => (dispatch) => {
  dispatch(postsLoading());
  axios
    .get(baseUrl + "post/" + slug)
    .then((response) => {
      console.log("response");
      dispatch(addPostById(response.data.post));
    })
    .catch((error) => {
      console.log("statuscode", error);
      dispatch(postByIdFailed(error));
    });
};

export const postByIdLoading = () => ({
  type: ActionTypes.POSTBYID_LOADING,
});

export const addPostById = (post) => ({
  type: ActionTypes.ADD_POSTBYID,
  payload: post,
});

export const postByIdFailed = (errmess) => ({
  type: ActionTypes.POSTBYID_FAILED,
  payload: errmess,
});

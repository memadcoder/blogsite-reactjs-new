import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { featured } from "./featured";
import { posts } from "./posts";
import { recents } from "./recents";
import { latest } from "./latest";
import { slugPost } from "./slugPost";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      posts,
      featured,
      recents,
      latest,
      slugPost,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};

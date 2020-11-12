import * as ActionTypes from "./ActionTypes";

export const featured = (
  state = { isLoading: true, errMess: null, featured: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FEATURED:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        featured: action.payload,
      };

    case ActionTypes.FEATURED_LOADING:
      return { ...state, isLoading: true, errMess: null, featured: [] };

    case ActionTypes.FEATURED_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

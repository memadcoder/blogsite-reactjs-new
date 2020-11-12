import * as ActionTypes from "./ActionTypes";

export const slugPost = (
  state = { isLoading: true, errMess: null, slugPost: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_POSTBYID:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        slugPost: action.payload,
      };

    case ActionTypes.POSTBYID_LOADING:
      return { ...state, isLoading: true, errMess: null, slugPost: [] };

    case ActionTypes.POSTBYID_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

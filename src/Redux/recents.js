import * as ActionTypes from "./ActionTypes";

export const recents = (
  state = { isLoading: true, errMess: null, recents: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_RECENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        recents: action.payload,
      };

    case ActionTypes.RECENTS_LOADING:
      return { ...state, isLoading: true, errMess: null, recents: [] };

    case ActionTypes.RECENTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

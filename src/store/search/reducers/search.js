import * as actionTypes from "../actions/actionTypes";

const initialState = {
  actors: [],
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_MOVIES:
      return {
        ...state,
        movies: action.data,
      };
    case actionTypes.SET_SEARCH_ACTORS:
      return {
        ...state,
        actors: action.data,
      };
    default:
      return state;
  }
};

export default reducer;

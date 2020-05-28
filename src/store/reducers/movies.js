import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

export default reducer;

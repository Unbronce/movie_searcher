import * as actionTypes from "../../actions/actionTypes/actionTypes";

const initialState = {
  movies: [],
  actors: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_MOVIES:
      return {
        ...state,
        movies: action.data,
      };
    default:
      return state;
  }
};

export default reducer;

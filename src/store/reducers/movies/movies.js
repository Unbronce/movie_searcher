import * as actionTypes from "../../actions/actionTypes/actionTypes";

const initialState = {
  movies: [],
  movie: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_MOVIE_DATA:
      return {
        ...state,
        movie: [],
      };
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case actionTypes.SET_MOVIE_BY_ID:
      return {
        ...state,
        movie: action.movie,
      };
    default:
      return state;
  }
};

export default reducer;

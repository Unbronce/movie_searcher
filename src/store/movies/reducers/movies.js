import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: [],
  movie: [],
  currentPage: null,
  totalPages: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_PAGE:
      return {
        ...state,
        movies: action.movies,
        currentPage: action.currentPage,
      };
    case actionTypes.SET_PAGES_INFO:
      return {
        ...state,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
      };
    case actionTypes.CLEAR_MOVIE_DATA:
      return {
        ...state,
        movie: [],
      };
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        movies: [...action.movies],
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

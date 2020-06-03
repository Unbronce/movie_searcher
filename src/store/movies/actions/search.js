import * as actionTypes from "./actionTypes";

export const initSearchMovie = (req) => {
  return {
    type: actionTypes.INIT_SEARCH_MOVIES,
    request: req,
  };
};

export const setSearchedMovies = (data) => {
  return {
    type: actionTypes.SET_SEARCH_MOVIES,
    data: data,
  };
};

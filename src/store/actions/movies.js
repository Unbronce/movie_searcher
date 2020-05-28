import * as actionTypes from "./actionTypes";

export const initMovies = () => {
  return {
    type: actionTypes.INITIATE_MOVIES,
  };
};

export const setMovies = (movies) => {
  return {
    type: actionTypes.SET_MOVIES,
    movies: movies,
  };
};

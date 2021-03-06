import * as actionTypes from "./actionTypes";

export const initSearchActor = (req) => {
  return {
    type: actionTypes.INIT_SEARCH_ACTORS,
    request: req,
  };
};

export const setSearchedActors = (data) => {
  return {
    type: actionTypes.SET_SEARCH_ACTORS,
    data: data,
  };
};

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

export const clearData = () => {
  return {
    type: actionTypes.CLEAR_DATA,
  };
};

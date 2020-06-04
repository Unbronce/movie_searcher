import * as actionTypes from "../actions/actionTypes";

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

export const getSelectedPage = (page) => {
  return {
    type: actionTypes.GET_SELECTED_PAGE,
    page: page,
  };
};

export const setSelectedPage = (curr, movies) => {
  return {
    type: actionTypes.SET_SELECTED_PAGE,
    currentPage: curr,
    movies: movies,
  };
};

export const setPagesInfo = (curr, total) => {
  return {
    type: actionTypes.SET_PAGES_INFO,
    currentPage: curr,
    totalPages: total,
  };
};

export const getMovie = (id) => {
  return {
    type: actionTypes.GET_MOVIE_BY_ID,
    movieId: id,
  };
};

export const setMovie = (movie) => {
  return {
    type: actionTypes.SET_MOVIE_BY_ID,
    movie: movie,
  };
};

export const clearMovie = () => {
  return {
    type: actionTypes.CLEAR_MOVIE_DATA,
  };
};

import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import { initMoviesSaga, getMovieSaga } from "./movies";
import { initSearchMoviesSaga } from "./search";

export function* watchMovies() {
  yield takeEvery(actionTypes.INITIATE_MOVIES, initMoviesSaga);
  yield takeEvery(actionTypes.GET_MOVIE_BY_ID, getMovieSaga);
}

export function* watchSearchFilms() {
  yield takeEvery(actionTypes.INIT_SEARCH_MOVIES, initSearchMoviesSaga);
}

import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { initMoviesSaga } from "./movies";

export function* watchMovies() {
  yield takeEvery(actionTypes.INITIATE_MOVIES, initMoviesSaga);
}

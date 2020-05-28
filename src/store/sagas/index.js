import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { initMoviesSaga } from "./movies";
import { initActorsSaga } from "./actors";

export function* watchMovies() {
  yield takeEvery(actionTypes.INITIATE_MOVIES, initMoviesSaga);
}

export function* watchActors() {
  yield takeEvery(actionTypes.INITIATE_ACTORS, initActorsSaga);
}

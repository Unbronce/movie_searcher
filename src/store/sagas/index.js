import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { initMoviesSaga, getMovieSaga } from "./movies";
import { initActorsSaga, getActorSaga } from "./actors";
import { initSearchSaga } from "./search";

export function* watchMovies() {
  yield takeEvery(actionTypes.INITIATE_MOVIES, initMoviesSaga);
  yield takeEvery(actionTypes.GET_MOVIE_BY_ID, getMovieSaga);
}

export function* watchActors() {
  yield takeEvery(actionTypes.INITIATE_ACTORS, initActorsSaga);
  yield takeEvery(actionTypes.GET_ACTOR_BY_ID, getActorSaga);
}

export function* watchSearch() {
  yield takeEvery(actionTypes.INIT_SEARCH, initSearchSaga);
}

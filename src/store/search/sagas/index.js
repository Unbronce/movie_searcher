import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { initSearchActorsSaga, initSearchMoviesSaga } from "./search";

export function* watchSearch() {
  yield takeEvery(actionTypes.INIT_SEARCH_ACTORS, initSearchActorsSaga);
  yield takeEvery(actionTypes.INIT_SEARCH_MOVIES, initSearchMoviesSaga);
}

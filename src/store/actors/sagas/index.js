import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { initActorsSaga, getActorSaga } from "./actors";
import { initSearchActorsSaga } from "./search";

export function* watchActors() {
  yield takeEvery(actionTypes.INITIATE_ACTORS, initActorsSaga);
  yield takeEvery(actionTypes.GET_ACTOR_BY_ID, getActorSaga);
}

export function* watchSearchActors() {
  yield takeEvery(actionTypes.INIT_SEARCH_ACTORS, initSearchActorsSaga);
}

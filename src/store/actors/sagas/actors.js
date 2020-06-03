import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as searchActions from "../../search/actions/index";

export function* initActorsSaga() {
  yield put(searchActions.clearData());
  try {
    const response = yield axios.get(
      "https://api.themoviedb.org/3/person/popular?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US&page=1"
    );
    yield put(actions.setActors(response.data.results));
  } catch (error) {}
}

export function* getActorSaga(action) {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/person/${action.actorId}?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US`
    );
    yield put(actions.setActor(response.data));
  } catch (error) {}
}

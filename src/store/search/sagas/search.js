import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/index";

export function* initSearchMoviesSaga(action) {
  if (action.request === "") {
    yield put(actions.setSearchedMovies([]));
  } else {
    try {
      const response = yield axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US&query=${action.request}&page=1&include_adult=false
        `
      );

      yield put(actions.setSearchedMovies(response.data.results));
    } catch (error) {}
  }
}

export function* initSearchActorsSaga(action) {
  if (action.request === "") {
    yield put(actions.setSearchedActors([]));
  } else {
    try {
      const response = yield axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US&query=${action.request}&page=1`
      );
      yield put(actions.setSearchedActors(response.data.results));
    } catch (error) {}
  }
}

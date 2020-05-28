import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/index";

export function* initMoviesSaga() {
  try {
    const response = yield axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US&page=1"
    );
    yield put(actions.setMovies(response.data.results));
  } catch (error) {}
}

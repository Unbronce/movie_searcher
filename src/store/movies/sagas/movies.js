import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as searchActions from "../../search/actions/index";

export function* initMoviesSaga() {
  yield put(searchActions.clearData());
  try {
    const response = yield axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US&page=1"
    );
    yield put(actions.setMovies(response.data.results));
    yield put(
      actions.setPagesInfo(response.data.page, response.data.total_pages)
    );
  } catch (error) {}
}

export function* getMovieSaga(action) {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/movie/${action.movieId}?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US`
    );
    yield put(actions.setMovie(response.data));
  } catch (error) {}
}

export function* setSelectedPageSaga(action) {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US&page=${action.page}`
    );
    console.log(response.data.results);
    yield put(
      actions.setSelectedPage(response.data.page, response.data.results)
    );
  } catch (error) {}
}

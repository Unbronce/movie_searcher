import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/index";

export function* initSearchSaga(action) {
  try {
    // const response = yield axios.get(
    //   `https://api.themoviedb.org/3/search/multi?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US&query=${action.request}&page=1&include_adult=false`
    // );
    const response = yield axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=703561a5dc417168c521fb0b84b10fa4&language=en-US&query=${action.request}&page=1&include_adult=false`
    );
    yield put(actions.setSearch(response.data.results));
  } catch (error) {}
}

// 703561a5dc417168c521fb0b84b10fa4

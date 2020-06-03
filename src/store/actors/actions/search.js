import * as actionTypes from "../actions/actionTypes";

export const initSearchActor = (req) => {
  return {
    type: actionTypes.INIT_SEARCH_ACTORS,
    request: req,
  };
};

export const setSearchedActors = (data) => {
  return {
    type: actionTypes.SET_SEARCH_ACTORS,
    data: data,
  };
};

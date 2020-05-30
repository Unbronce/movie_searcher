import * as actionTypes from "./actionTypes";

export const initSearch = (req) => {
  return {
    type: actionTypes.INIT_SEARCH,
    request: req,
  };
};

export const setSearch = (data) => {
  return {
    type: actionTypes.SET_SEARCH,
    data: data,
  };
};

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  search: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.data,
      };
    default:
      return state;
  }
};

export default reducer;

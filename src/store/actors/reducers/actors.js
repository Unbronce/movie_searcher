import * as actionTypes from "../actions/actionTypes";

const initialState = {
  actors: [],
  actor: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_ACTOR_DATA:
      return {
        ...state,
        actor: [],
      };
    case actionTypes.SET_ACTORS:
      return {
        ...state,
        actors: action.actors,
      };
    case actionTypes.SET_ACTOR_BY_ID:
      return {
        ...state,
        actor: action.actor,
      };
    default:
      return state;
  }
};

export default reducer;

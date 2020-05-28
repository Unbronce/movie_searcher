import * as actionTypes from "./actionTypes";

export const initActors = () => {
  return {
    type: actionTypes.INITIATE_ACTORS,
  };
};

export const setActors = (actors) => {
  return {
    type: actionTypes.SET_ACTORS,
    actors: actors,
  };
};

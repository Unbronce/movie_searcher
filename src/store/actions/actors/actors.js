import * as actionTypes from "../actionTypes/actionTypes";

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

export const getActor = (id) => {
  return {
    type: actionTypes.GET_ACTOR_BY_ID,
    actorId: id,
  };
};

export const setActor = (actor) => {
  return {
    type: actionTypes.SET_ACTOR_BY_ID,
    actor: actor,
  };
};

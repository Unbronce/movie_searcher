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

export const clearActor = () => {
  return {
    type: actionTypes.CLEAR_ACTOR_DATA,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: actionTypes.SET_CURRENT_PAGE,
    currentPage: page,
  };
};

export const scrolled = (page) => {
  return {
    type: actionTypes.SCROLLED,
    page: page,
  };
};

export const setScrolled = (data) => {
  return {
    type: actionTypes.SET_SCROLLED,
    data: data,
  };
};

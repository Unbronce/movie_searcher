import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import debounce from "lodash.debounce";

import * as actions from "../../../store/actions/index";

import Header from "../../../components/Header/Header";
import ListItems from "../../../components/ListItems/ListItems";

const MoviesContainer = React.memo((props) => {
  const movies = useSelector((state) => state.movies.movies);
  const searched = useSelector((state) => state.search.movies);

  const dispatch = useDispatch();
  const history = useHistory();

  const onInitMovies = useCallback(() => dispatch(actions.initMovies()), [
    dispatch,
  ]);
  const onInitSearch = useCallback(
    (data) => dispatch(actions.initSearchMovie(data)),
    [dispatch]
  );

  useEffect(() => {
    onInitMovies();
  }, [onInitMovies]);

  const bounced = debounce((e) => {
    onInitSearch(e.target.value);
  }, 400);

  const onMovieItemHandler = (id) => {
    history.push("/movies/" + id);
  };

  return (
    <>
      <Header
        changed={(e) => {
          e.persist();
          bounced(e);
        }}
      />
      <ListItems
        entity={movies}
        searched={searched}
        handler={onMovieItemHandler}
      />
    </>
  );
});

export default MoviesContainer;

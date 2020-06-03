import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import * as actions from "../../../store/movies/actions/index";
import * as searchActions from "../../../store/search/actions/index";

import Header from "../../../components/Header/Header";
import ListItems from "../../../components/ListItems/ListItems";

const MoviesContainer = React.memo((props) => {
  const movies = useSelector((state) => state.movies.movies);
  const searched = useSelector((state) => state.searched.movies);

  const dispatch = useDispatch();
  const history = useHistory();

  const onInitMovies = useCallback(() => dispatch(actions.initMovies()), [
    dispatch,
  ]);
  const onInitSearch = useCallback(
    (data) => dispatch(searchActions.initSearchMovie(data)),
    [dispatch]
  );

  useEffect(() => {
    onInitMovies();
  }, [onInitMovies]);

  const onMovieItemHandler = (id) => {
    history.push("/movies/" + id);
  };

  return (
    <>
      <Header changed={onInitSearch} />
      <ListItems
        entity={movies}
        searched={searched}
        handler={onMovieItemHandler}
      />
    </>
  );
});

export default MoviesContainer;

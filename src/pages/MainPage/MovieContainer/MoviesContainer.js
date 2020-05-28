import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core";
import * as actions from "../../../store/actions/index";

import MovieItem from "./MovieItem/MovieItem";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    margin: "0 auto",
    justifyContent: "space-around",
  },
});

const MoviesContainer = (props) => {
  const movies = useSelector((state) => state.movies.movies);

  const classes = useStyles();

  const dispatch = useDispatch();

  const onInitMovies = useCallback(() => dispatch(actions.initMovies()), [
    dispatch,
  ]);

  useEffect(() => {
    onInitMovies();
  }, [onInitMovies]);

  const data = movies.map((movie) => {
    return (
      <MovieItem
        key={movie.id}
        alt={movie.title}
        image={movie.poster_path}
        title={movie.title}
        overview={movie.overview}
      />
    );
  });
  return <div className={classes.root}>{data}</div>;
};

export default MoviesContainer;

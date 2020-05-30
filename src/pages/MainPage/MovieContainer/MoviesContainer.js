import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import * as actions from "../../../store/actions/index";

import CardInfo from "../../../components/Сard/Card";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    margin: "0 auto",
    justifyContent: "space-around",
  },
});

const MoviesContainer = React.memo((props) => {
  const movies = useSelector((state) => state.movies.movies);
  const searched = useSelector((state) => state.search.search);

  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const onInitMovies = useCallback(() => dispatch(actions.initMovies()), [
    dispatch,
  ]);

  useEffect(() => {
    onInitMovies();
  }, [onInitMovies]);

  const onMovieItemHandler = (id) => {
    history.push("/movies/" + id);
  };

  let info = null;

  if (searched.length > 0) {
    info = searched;
  } else {
    info = movies;
  }

  const data = info.map((movie) => {
    return (
      <CardInfo
        key={movie.id}
        alt={movie.title}
        image={movie.poster_path}
        title={movie.title}
        overview={movie.overview}
        clicked={() => onMovieItemHandler(movie.id)}
      />
    );
  });

  return (
    <>
      <div className={classes.root}>{data}</div>
    </>
  );
});

export default MoviesContainer;

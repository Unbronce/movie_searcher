import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import debounce from "lodash.debounce";

import { makeStyles } from "@material-ui/core";
import * as actions from "../../../store/actions/index";

import Header from "../../../components/Header/Header";
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
  // const [searchedFilm, setSearchedFilm] = useState("");
  const movies = useSelector((state) => state.movies.movies);
  const searched = useSelector((state) => state.search.movies);

  const classes = useStyles();
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

  const onSearchHandler = (event) => {
    // onInitSearch(event);
  };

  const bounced = debounce((e) => {
    // onSearchHandler(e.target.value);
    onInitSearch(e.target.value);
  }, 400);

  const onMovieItemHandler = (id) => {
    history.push("/movies/" + id);
  };

  let info = null;

  if (searched.length > 0) {
    info = searched;
  } else {
    info = movies;
  }

  const data = info
    .filter((movie) => movie.poster_path !== null)
    .map((movie) => {
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
      <Header
        changed={(e) => {
          e.persist();
          bounced(e);
        }}
      />
      <div className={classes.root}>{data}</div>
    </>
  );
});

export default MoviesContainer;

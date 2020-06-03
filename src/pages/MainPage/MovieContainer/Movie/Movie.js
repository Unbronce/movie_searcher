import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../store/movies/actions/index";

import DetailPage from "../../../DetailPage/DetailPage";
import Header from "../../../../components/Header/Header";

const Movie = (props) => {
  const { id } = props.match.params;

  const movie = useSelector((state) => state.movies.movie);

  const dispatch = useDispatch();

  const clearData = useCallback(() => dispatch(actions.clearMovie()), [
    dispatch,
  ]);
  const onGetMovie = useCallback(() => dispatch(actions.getMovie(id)), [
    dispatch,
    id,
  ]);

  useEffect(() => {
    onGetMovie();
    return () => {
      clearData();
    };
  }, [onGetMovie, clearData]);

  return (
    <>
      <Header />
      <DetailPage
        alt={movie.title}
        image={movie.poster_path}
        title={movie.title}
        overview={movie.overview}
        string={"Realease date:"}
        release={movie.release_date}
        popularity={movie.popularity}
      />
    </>
  );
};

export default Movie;

import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../store/actions/index";

import DetailPage from "../../../../components/DetailPage/DetailPage";

const Movie = (props) => {
  const { id } = props.match.params;

  const movie = useSelector((state) => state.movies.movie);

  const dispatch = useDispatch();

  const onGetMovie = useCallback(() => dispatch(actions.getMovie(id)), [
    dispatch,
    id,
  ]);

  useEffect(() => {
    onGetMovie();
  }, [onGetMovie]);

  console.log(movie);

  return (
    <DetailPage
      alt={movie.alt}
      image={movie.poster_path}
      title={movie.title}
      overview={movie.overview}
      release={movie.release_date}
      popularity={movie.popularity}
    />
  );
};

export default Movie;

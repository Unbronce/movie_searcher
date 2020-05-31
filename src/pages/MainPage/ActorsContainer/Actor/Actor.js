import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../store/actions/index";

import DetailPage from "../../../DetailPage/DetailPage";
import Header from "../../../../components/Header/Header";

const Movie = (props) => {
  const { id } = props.match.params;

  const actor = useSelector((state) => state.actors.actor);

  const dispatch = useDispatch();

  const onGetActor = useCallback(() => dispatch(actions.getActor(id)), [
    dispatch,
    id,
  ]);

  useEffect(() => {
    onGetActor();
  }, [onGetActor]);

  console.log(actor);

  return (
    <>
      <Header />
      <DetailPage
        alt={actor.name}
        image={actor.profile_path}
        title={actor.name}
        overview={actor.biography}
        string={"Birthday:"}
        release={actor.birthday}
        popularity={actor.popularity}
      />
    </>
  );
};

export default Movie;

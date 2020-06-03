import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import * as actions from "../../../store/actors/actions/index";
import * as searchActions from "../../../store/search/actions/index";

import Header from "../../../components/Header/Header";

import ListItems from "../../../components/ListItems/ListItems";

const ActorsContainer = React.memo((props) => {
  const actors = useSelector((state) => state.actors.actors);
  const searched = useSelector((state) => state.searched.actors);

  const dispatch = useDispatch();
  const history = useHistory();

  const onInitActors = useCallback(() => dispatch(actions.initActors()), [
    dispatch,
  ]);
  const onInitSearch = useCallback(
    (searchedActor) => dispatch(searchActions.initSearchActor(searchedActor)),
    [dispatch]
  );

  useEffect(() => {
    onInitActors();
  }, [onInitActors]);

  const onActorItemHandler = (id) => {
    history.push("/actors/" + id);
  };

  return (
    <>
      <Header changed={onInitSearch} />
      <ListItems
        entity={actors}
        searched={searched}
        handler={onActorItemHandler}
      />
    </>
  );
});

export default ActorsContainer;

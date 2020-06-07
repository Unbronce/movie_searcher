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
  const currentPage = useSelector((state) => state.actors.page);

  const dispatch = useDispatch();
  const history = useHistory();

  const onInitActors = useCallback(() => dispatch(actions.initActors()), [
    dispatch,
  ]);
  const onInitSearch = useCallback(
    (searchedActor) => dispatch(searchActions.initSearchActor(searchedActor)),
    [dispatch]
  );
  const onInitInfinityScroll = useCallback(
    (page) => dispatch(actions.scrolled(page)),
    [dispatch]
  );
  const onNextPage = useCallback(
    (page) => dispatch(actions.setCurrentPage(page)),
    [dispatch]
  );

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    onInitInfinityScroll(currentPage + 1);
    onNextPage(currentPage + 1);
  }, [currentPage, onInitInfinityScroll, onNextPage]);

  useEffect(() => {
    onInitActors();
  }, [onInitActors]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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

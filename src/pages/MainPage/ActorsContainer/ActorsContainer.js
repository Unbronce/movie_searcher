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

const ActorsContainer = React.memo((props) => {
  const [searchedActor, setSearchedActor] = useState("");
  const actors = useSelector((state) => state.actors.actors);
  const searched = useSelector((state) => state.search.actors);

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onInitActors = useCallback(() => dispatch(actions.initActors()), [
    dispatch,
  ]);
  const onInitSearch = useCallback(
    (searchedActor) => dispatch(actions.initSearchActor(searchedActor)),
    [dispatch]
  );

  useEffect(() => {
    onInitActors();
  }, [onInitActors]);

  const bounced = debounce((e) => {
    onInitSearch(e.target.value);
  }, 400);

  const onActorItemHandler = (id) => {
    history.push("/actors/" + id);
  };

  let info = null;

  if (searched.length > 0) {
    info = searched;
  } else {
    info = actors;
  }

  const data = info
    .filter((actor) => actor.profile_path !== null)
    .map((actor) => {
      return (
        <CardInfo
          key={actor.id}
          alt={actor.name}
          image={actor.profile_path}
          title={actor.name}
          string={"Popularity:"}
          overview={actor.popularity}
          clicked={() => onActorItemHandler(actor.id)}
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

export default ActorsContainer;

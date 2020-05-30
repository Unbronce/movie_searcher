import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core";
import * as actions from "../../../store/actions/index";

import ActorItem from "./ActorItem/ActorItem";

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
  const actors = useSelector((state) => state.actors.actors);

  const classes = useStyles();

  const dispatch = useDispatch();

  const onInitActors = useCallback(() => dispatch(actions.initActors()), [
    dispatch,
  ]);

  useEffect(() => {
    onInitActors();
  }, [onInitActors]);

  console.log(actors);

  const data = actors.map((actor) => {
    return (
      <ActorItem
        key={actor.id}
        alt={actor.name}
        image={actor.profile_path}
        title={actor.name}
        overview={actor.popularity}
      />
    );
  });
  return <div className={classes.root}>{data}</div>;
});

export default ActorsContainer;

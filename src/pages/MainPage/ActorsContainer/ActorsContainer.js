import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
  const actors = useSelector((state) => state.actors.actors);

  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const onInitActors = useCallback(() => dispatch(actions.initActors()), [
    dispatch,
  ]);

  useEffect(() => {
    onInitActors();
  }, [onInitActors]);

  const onActorItemHandler = (id) => {
    history.push("/actors/" + id);
  };

  const data = actors.map((actor) => {
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
      <Header />
      <div className={classes.root}>{data}</div>
    </>
  );
});

export default ActorsContainer;

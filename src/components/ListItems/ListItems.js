import React from "react";
import { makeStyles } from "@material-ui/core";
import CardInfo from "../Сard/Card";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    margin: "0 auto",
    justifyContent: "space-around",
  },
});

const ListItems = React.memo((props) => {
  const classes = useStyles();
  const { entity, searched } = props;

  let info = null;

  if (searched.length > 0) {
    info = searched;
  } else {
    info = entity;
  }

  const data = info
    .filter((item) => Boolean(item.poster_path ?? item.profile_path))
    .map((item) => {
      const image = item.poster_path ?? item.profile_path;
      const title = item.name ?? item.title;
      return (
        <CardInfo
          key={item.id}
          alt={item.title}
          image={image}
          title={title}
          clicked={() => props.handler(item.id)}
        />
      );
    });

  return <div className={classes.root}>{data}</div>;
});

export default ListItems;

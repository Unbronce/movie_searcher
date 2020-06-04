import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { makeStyles, Paper, Tab, Input } from "@material-ui/core";
import debounce from "lodash.debounce";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  spacing: {
    margin: "0 10px",
  },
});

const Navigation = React.memo((props) => {
  const classes = useStyles();

  const bounced = debounce((e) => {
    props.changed(e.target.value);
  }, 400);

  const onSearchHandler = (event) => {
    event.persist();
    bounced(event);
  };

  return (
    <>
      <Paper square className={classes.root}>
        <Tab
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className={classes.spacing}
          component={RouterLink}
          to="/movies"
          label="Movies"
        />
        <Tab
          className={classes.spacing}
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          component={RouterLink}
          to="/actors"
          label="Actors"
        />

        <Input onChange={onSearchHandler} placeholder="Search..." />
      </Paper>
    </>
  );
});

export default withRouter(Navigation);

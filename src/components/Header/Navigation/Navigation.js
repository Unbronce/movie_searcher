import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, Paper, Tab, Tabs, Input } from "@material-ui/core";
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

const Navigation = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <div>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              className={classes.spacing}
              component={RouterLink}
              to="/movies"
              label="Movies"
            />
            <Tab
              className={classes.spacing}
              component={RouterLink}
              to="/actors"
              label="Actors"
            />
          </Tabs>
        </div>
        <Input onChange={onSearchHandler} placeholder="Search..." />
      </Paper>
    </>
  );
};

export default Navigation;

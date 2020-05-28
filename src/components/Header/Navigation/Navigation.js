import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, Paper, Tab, Tabs, Input } from "@material-ui/core";

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
        <Input placeholder="Search..." />
      </Paper>
    </>
  );
};

export default Navigation;

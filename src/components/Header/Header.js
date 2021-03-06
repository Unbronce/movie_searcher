import React from "react";

import { AppBar, Typography } from "@material-ui/core";
import Navigation from "./Navigation/Navigation";

const Header = React.memo((props) => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Typography align="center" variant="h2">
          The Movie Searcher is here!
        </Typography>
        <Navigation changed={props.changed} />
      </AppBar>
    </>
  );
});

export default Header;

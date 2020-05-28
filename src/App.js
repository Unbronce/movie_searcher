import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import MoviesContainer from "./pages/MainPage/MovieContainer/MoviesContainer";
import ActorsContainer from "./pages/MainPage/ActorsContainer/ActorsContainer";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route
          path="/movies"
          render={(props) => <MoviesContainer {...props} />}
        />
        <Route
          path="/actors"
          render={(props) => <ActorsContainer {...props} />}
        />
      </Switch>
      <Redirect to="/movies" />
    </>
  );
};

export default withRouter(App);

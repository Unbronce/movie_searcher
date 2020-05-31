import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import MoviesContainer from "./pages/MainPage/MovieContainer/MoviesContainer";
import ActorsContainer from "./pages/MainPage/ActorsContainer/ActorsContainer";
import Movie from "./pages/MainPage/MovieContainer/Movie/Movie";
import Actor from "./pages/MainPage/ActorsContainer/Actor/Actor";

const App = () => {
  // const [searched, setSearched] = useState("");
  // const dispatch = useDispatch();

  // const onInitSearch = useCallback(
  //   (searched) => dispatch(actions.initSearch(searched)),
  //   [dispatch]
  // );

  // const onSearchHandler = (event) => {
  //   setSearched(event.target.value);
  //   onInitSearch(searched);
  // };

  return (
    <>
      {/* <Header changed={(event) => onSearchHandler(event)} value={searched} /> */}
      {/* <Header /> */}
      <Switch>
        <Route path="/movies/:id" component={Movie} />
        <Route path="/actors/:id" component={Actor} />
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

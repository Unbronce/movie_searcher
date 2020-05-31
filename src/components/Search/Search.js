import React from "react";
import { Input } from "@material-ui/core";

const Search = (props) => {
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
    <Input
      value={props.value}
      onChange={props.changed}
      placeholder="Search..."
    />
  );
};

export default Search;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    width: "350px",
    margin: "0 auto 40px",
  },
}));

const PagePagination = React.memo((props) => {
  const classes = useStyles();

  const pageHandler = (event, page) => props.clicked(page);

  return (
    <div className={classes.root}>
      <Pagination
        page={props.page}
        count={props.totalPages}
        color="primary"
        onChange={pageHandler}
      />
    </div>
  );
});

export default PagePagination;

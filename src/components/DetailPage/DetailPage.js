import React from "react";

import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  ButtonBase,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "60%",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const DetailPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={props.alt}
                src={`https://image.tmdb.org/t/p/w780/${props.image}`}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.overview}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.string} {props.release}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Popularity: {props.popularity}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DetailPage;

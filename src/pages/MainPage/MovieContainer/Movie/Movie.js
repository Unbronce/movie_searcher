import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

const Movie = (props) => {
  const { id } = props.match.params;
  const [movie, setMovie] = useState([]);
  const movies = useSelector((state) => state.movies.movies);

  const classes = useStyles();

  useEffect(() => {
    const item = movies.find((movie) => movie.id === Number(id));
    setMovie(item);
  }, [setMovie, id, movies]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={movie.alt}
                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {movie.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {movie.overview}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Realease date: {movie.release_date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Popularity: {movie.popularity}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Movie;

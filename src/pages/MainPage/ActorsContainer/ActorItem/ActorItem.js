import React from "react";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "30px",
  },
});

const MovieItem = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          height="500"
          component="img"
          alt={props.alt}
          image={`https://image.tmdb.org/t/p/w500/${props.image}`}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Popularity: {props.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieItem;

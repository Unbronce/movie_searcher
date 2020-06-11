import React from "react";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "30px",
  },
});

const CardInfo = React.memo((props) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} onClick={props.clicked}>
        <CardActionArea>
          {props.image ? (
            <CardMedia
              height="500"
              component="img"
              alt={props.alt}
              image={`https://image.tmdb.org/t/p/w500/${props.image}`}
              title={props.title}
            />
          ) : (
            <Skeleton variant="rect" height={500} width={345} />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
});

export default CardInfo;

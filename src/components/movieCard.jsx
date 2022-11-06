import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
  // var date = props.release;
  // date = date.split("-").reverse().join("-");
  return (
    <Card sx={{ maxWidth: 345, m: 0.5, mt: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          image={`https://image.tmdb.org/t/p/original/${props.pic}`}
          alt={props.title}
        />
        <CardContent
        sx={{height: 300}}
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Release Date: {props.release}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Rating: {props.rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
  );
}

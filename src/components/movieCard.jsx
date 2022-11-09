import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import Link from "next/link";

export default function MultiActionAreaCard(props) {
  // var date = props.release;
  // date = date.split("-").reverse().join("-");
  var id = props.id;
  return (
    <Card sx={{ maxWidth: 345, m: 0.5, mt: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={`https://image.tmdb.org/t/p/original/${props.pic}`}
          alt={props.title}
        />
        <CardContent
        sx={{height: 300}}
        >
          <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: "600", textAlign: 'center'}}>
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div" sx={{fontWeight: "400", textAlign: 'center'}}>
            Release Date: {props.release}
          </Typography>
          <Typography gutterBottom variant="h7" component="div" sx={{fontWeight: "400", textAlign: 'center'}}>
            Rating: {props.rating}
          </Typography>
          <Divider sx={{mb: "5px"}}/>
          <Typography variant="body2" color="text.secondary">
            {props.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={'/' + id} >
          <Button size="small" color="primary">
            More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

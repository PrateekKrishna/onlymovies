import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function MultiActionAreaCard(props) {
  // var date = props.release;
  // date = date.split("-").reverse().join("-");
  var id = props.id;
  var abt = props.about;
  var about = abt.substring(0,100);
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
        sx={{height: 180}}
        >
          <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: "600", textAlign: 'center'}}>
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div" sx={{fontWeight: "400", textAlign: 'center'}}>
            Release Date: {props.release}
          </Typography>
          <Typography gutterBottom variant="h7" component="div" sx={{fontWeight: "900", textAlign: 'center'}}>
            <div style={{display: "flex", justifyContent: "center"}} >
              <Image alt="imdb" src="/imdb.png" height={15} width={28} style={{marginRight: "3px"}} />
              {props.rating}
            </div>
          </Typography>
          <Divider sx={{mb: "5px"}}/>
          <Typography variant="body2" color="text.secondary">
            {about + "..."}
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

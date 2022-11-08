import axios from "axios";
import {React, useState} from 'react'
import { useRouter } from "next/router"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function More(props) {
    const router = useRouter();
    const movieName = router.query.pageno;

    var [movie, setMovie] = useState("");

    async function newMovie() {
        try {
          const searchRes = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=34a470327cec0df094785c27a8b66230&language=en-US&query=${movieName}&include_adult=false`
            
          );
          setMovie(searchRes.data.results);
        } catch (error) {
          console.log(error.searchRes);
        }
      }


  return (
    <div style={{height: "100vh", width: "100vw", display: 'flex', justifyContent: 'center'}}>

        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignSelf: 'center',
            '& > :not(style)': {
            m: 1,
            width: "80vw",
            height: "80vh",
            backgroundColor: "pink"
            },
        }}
        >
        <Paper variant='outlined' elevation={15} >
            Hello {movieName}
        </Paper>
        </Box>
    </div>
  )
}

export default More
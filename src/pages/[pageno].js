import axios from "axios";
import {React, useEffect, useState} from 'react'
import { useRouter } from "next/router"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Head from "next/head";
import MultiActionAreaCard from "../components/movieCard";

function More(props) {

    const router = useRouter();
    const movieid = router.query.pageno;

    var [movie, setMovie] = useState({});
    var [backdrop, setBack] = useState("twilight.jpeg");
    var [poster, setPoster] = useState("twilight.jpeg");

    async function newMovie() {
        try {
          const searchRes = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieid}?api_key=34a470327cec0df094785c27a8b66230`
            
          );
          setMovie(searchRes.data);
          setBack(searchRes.data.backdrop_path);
          setPoster(searchRes.data.poster_path)
        } catch (error) {
          console.log(error.searchRes);
        }
      }
      useEffect(()=>{
        newMovie();
      }, []);
      console.log("here");
      console.log(movie);

  return (
    <div style={{height: "100vh", width: "100vw", display: 'flex', justifyContent: 'center', backgroundColor: 'pink', alignItems: 'center', backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${`https://image.tmdb.org/t/p/original/${backdrop}`})`}}>
        <Head>
        <title>Top Rated</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* <Box
        className="pics"
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignSelf: 'center',
            '& > :not(style)': {
            m: 1,
            width: "80vw",
            height: "80vh",
            },
        }}
        >
        <Paper variant='outlined' elevation={15} >
            This page is under construction, movieid: {movieid}
        </Paper>
        </Box> */}
        <div className="pics" style={{display: 'flex' ,height: "90vh", width: "90vw", backgroundColor: "black", backgroundColor: "rgba(229,229,229, 0.2)", borderRadius: "15px", padding: "10px"}}>
            {/* <div style={{height: "99%", width: "30%", backgroundColor: "blue", borderRadius: '12px', opacity: "0.2", alignItems: 'center'}}>

            </div> */}
            <img alt="poster" src={`https://image.tmdb.org/t/p/original${poster}`} style={{height: "99%", width: "30%", borderRadius: '12px', alignItems: 'center'}}></img>

            <div style={{height: "99%", width: '60%', paddingLeft: '10%',  borderRadius: '12px'}}>
              <h2 style={{color: 'white'}}> {movie.title}</h2>
              <h2 style={{color: 'white'}}> popularity: {movie.popularity}</h2>
              <h2 style={{color: 'white'}}> release date: {movie.release_date}</h2>
              <h2 style={{color: 'white'}}> duration : {movie.runtime}</h2>
              <div style={{display: 'flex'}}>
                genres
                {/* <h2 style={{color: 'white'}}> {movie.genres[0].name + " "}</h2>
                <h2 style={{color: 'white'}}> {movie.genres[1].name} </h2>   */}
                {/* {console.log(movie.genres[0].name)} */}
              </div>  
              <h2>this page is under construction</h2>

                
            </div>
        </div>
    </div>
  )
}

export default More
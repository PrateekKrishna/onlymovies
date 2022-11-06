import { Box, Paper } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import MultiActionAreaCard from '../components/movieCard'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import SimplePaper from '../components/paper'
import Buttons from '../components/button'

export default function Home() {

  const pic = "/twilight.jpeg"
  const title = "Twilight"
  var about = "This is a movie"

  var [movies, setMovies] = useState([]);

  async function getHandle() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=34a470327cec0df094785c27a8b66230&language=en-US&page=1`);
      setMovies(response.data.results);
      console.log(response);
    } catch (error) {
      console.log(error.response.status);
    }
  }

  useEffect(() => {
    getHandle();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Top Rated</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SimplePaper />
      <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {
          movies.map((items, index)=>{
            return(
              <MultiActionAreaCard key = {index} title = {items.title} about = {items.overview} pic = {items.poster_path} release = {items.release_date
              }
                rating = {items.vote_average}
              />
            );
          })
        }
      </Box>

      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        height: 150,
        width: "100%",
        backgroundImage: `url(./background.jpg)`,
        justifyContent: "center"
      }}
      >
        <Buttons text={"Next"}/>
        <Buttons text={"Previous"}/>
      </Box>


    </div>
  )
}

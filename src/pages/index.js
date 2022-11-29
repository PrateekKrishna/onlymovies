import { Box, Button, Divider, Paper } from "@mui/material";
import Head from "next/head";
import MultiActionAreaCard from "../components/movieCard";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import next from "next";
import "../styles/Home.module.css"
import Footer from "../components/footer";
import Image from "next/image";

export default function Home() {

  //useState Hooks
  var [movies, setMovies] = useState([]);
  var [ind, setInd] = useState(1);
  var [title, setTitle] = useState("");
  var [click, isClicked] = useState(false)

  //axios
  async function getHandle() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=34a470327cec0df094785c27a8b66230&language=en-US&page=${ind}`
      );
      console.log(response.data.results);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error.response.status);
    }
  }

  async function searchMovie() {
    try {
      const searchRes = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=34a470327cec0df094785c27a8b66230&language=en-US&query=${title}&include_adult=false`
      );
      setMovies(searchRes.data.results);
    } catch (error) {
      console.log(error.searchRes);
    }
  }

  //functions
  function handleNext() {
    console.log(next);
    setInd(ind + 1);
  }
  function handlePrev() {
    setInd(ind > 1 ? ind - 1 : ind);
  }

  function handleChange(e){
    console.log(e.target.value);
    setTitle(e.target.value);
  }
  function handleClick(e){
    e.preventDefault();
    searchMovie();
  }


  //useeffect hook
  useEffect(() => {
      getHandle();
  }, [ind]);
  


  return (
    <div className={styles.container} style={{padding: "10px"}}>
      <Head>
        <title>Top Rated</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box
        sx={{
          height: "20vh",
          width: "100%",
          backgroundImage: `url(./background.jpg)`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className="searchForm">
          <input className="searchInput" onChange = {(e) => handleChange(e)} placeholder = "Search Movies..." style={{}} />
          <button className="search-btn" type="submit" onClick={(e)=>{handleClick(e)}} >
            Search
          </button>
          <div className="searchIcondiv" type="submit" onClick={(e)=>{handleClick(e)}}>
            <Image className="searchIcon" alt="search" src = "/search.png" height={30} width={30} />
          </div>
          {/* <i onClick={(e) => handleClick(e)} aria-hidden="true" className="fa fa-search" id="phone"></i> */}
        </form>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {
          
        }
        {movies.map((items, index) => {
          return (
            <MultiActionAreaCard
              key={index}
              title={items.title}
              about={items.overview}
              pic={items.poster_path}
              release={items.release_date}
              rating={items.vote_average}
              id = {items.id}
            />
          );
        })}
      </Box>

      <div style={{display: "flex", justifyContent: "flex-start", width: "100%", height: "80px", alignItems: "center", border: "2.5px solid black", borderRadius: "10px", marginTop: "20px", paddingLeft: "5vw", marginRight: "8vw"}}>
        <Button onClick={handlePrev} variant="contained" sx={{ height: "35px", width: "70px", mr: "4vw" }}>
          Back
        </Button>
        <Button onClick={handleNext} variant="contained" sx={{ height: "35px", width: "70px" }}>
          Next
        </Button>
      </div>
      {/* <div className="divider"></div> */}
      <Footer />

    </div>
  );
}

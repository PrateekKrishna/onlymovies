import axios from "axios";
import {React, useEffect, useState} from 'react'
import { useRouter } from "next/router"
import Head from "next/head";
import Image from 'next/image';
import Navbar from "../components/navbar";

function More(props) {

    const router = useRouter();
    const movieid = router.query.pageno;

    var [movie, setMovie] = useState({});
    var [backdrop, setBack] = useState("");

    async function newMovie() {
        try {
          const searchRes = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieid}?api_key=34a470327cec0df094785c27a8b66230`
            
          );
          setMovie(searchRes.data);
          setBack(searchRes.data.backdrop_path);
          console.log(genres);
        } catch (error) {
          console.log(error.searchRes);
        }
      }
      useEffect(()=>{
        newMovie();
      }, []);
      console.log(movie);

      var hrs = Math.floor(movie.runtime/60);
      var mins = movie.runtime%60;

  return (
    <>
      {/* <Navbar /> */}
      <div className="dynamicPage" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${`https://image.tmdb.org/t/p/original/${backdrop}`})`}}>
          <Head>
          <title>{movie.title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Navbar className="dpnav" /> */}
        <div className="goBack" onClick={() => router.back()} >←Back</div>
        <img alt="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className = "posterImg"></img>
          <div className="pics">
              <p className="fontColor movieTitle">{movie.title}</p>
              <p className="fontColor tagline">{movie.tagline}</p>
              <div className="duration">
                <Image alt="clock" src="/duration.png" height={20} width={20}/>
                <p className="fontColor ml7">Duration : {hrs}h {mins}m</p>
              </div>
              <div className="duration">
                <Image alt="clock" src="/popularity.png" height={30} width={30}/>
                <p className="fontColor ml7">popularity : {(movie.popularity)}</p>
              </div>
              <div className="duration">
                <Image alt="clock" src="/imdb.png" height={20} width={40}/>
                <p className="fontColor ml7">{(movie.vote_average)}</p>
              </div>
              <div className="duration">
                <Image alt="clock" src="/genre.png" height={20} width={30}/>
                <p className="fontColor ml7">genre: <span className="boxi mr7">{movie.genres?.[0]?.name}</span>  <span className="boxi">{movie.genres?.[1]?.name}</span> </p>
              </div>
              <div className="duration">
                <Image alt="clock" src="/date.png" height={30} width={30}/>
                <p className="fontColor ml7" style={{marginTop: "5px"}}>Release Date: {movie.release_date}</p>
              </div>
              <div className="duration">
                {/* <Image alt="clock" src="/about.png" height={20} width={20}/> */}
                <p className="fontColor ml7">{(movie.overview)}</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default More
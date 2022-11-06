import React from 'react'

function MovieList() {

    const pic = "/twilight.jpeg"
    const title = "Twilight"
    var about = "This is a movie"
  
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=34a470327cec0df094785c27a8b66230&language=en-US&page=1`).then((res)=>{
        var movies = res.data.results;
        console.log(data);
        // console.log(res.data.results);
      }).catch((err)=>{
        console.log(err)
      })
    });

  return (
    <>

    </>
  )
}

export default MovieList
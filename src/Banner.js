import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css";

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ]
    );
return request;
}
        fetchData();
    }, []);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }


  return (
    <header className="banner"
    style={{
         background: "cover",
         backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
         )`,
        backgroundPosition: "center center"
    }}
    >
    <div className="banner_contents">
 

    <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}
     </h1>
     
     <button className="banner_buttons">Play</button>
     <button className="banner_buttons">My List</button>

   
     <h1 className="banner_description">
    {truncate(movie?.overview, 150)}
    </h1>
        {/*title */}
        {/* div > 2 buttons */}
        </div>

        <div className="banner_fadeBottom"/>
    </header>
  )
}

export default Banner
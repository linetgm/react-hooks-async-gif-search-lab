import React,{useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

export default function GifListContainer () {

    const [gifs , setGifs] = useState([]);

    function handleSearch (query) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dEzKsing7EJmkhu75osEB8B81gLalDQo&rating=g`)
        .then((r) => r.json())
        .then((data) => setGifs( data.data.slice(0, 3)))
      .catch((error) => {
        console.error('Error fetching gifs:', error);
      });
    }

    return (
        <div>
            <GifSearch onSearch={handleSearch}/>
            <GifList gifs={gifs}/> 
        </div>
    )
}
import React, { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Main = (props) => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const navigate= useNavigate();


const ReadMore = (text) => {
  const over= JSON.stringify(text);
    const overview= over.replace(/[^\w\s]/g,"").replace(/(^\s+|\s+$)/g,"").replace(/\s+/g," ").replace("children","");
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
    <p>
      {isReadMore ? overview.slice(0, 150): overview }
      {overview.length > 150 &&
        <span onClick={toggleReadMore} className="text-gray-500 cursor-pointer">
          {isReadMore ? '...read more' : ' ...show less'}
        </span>
      }
    </p>
  )
}

const handleClick=()=>{
  navigate(`/${props.genre}/${movie.id}`)
}


  return (
    <div className="w-full h-[100vh] md:h-[600px] text-[#FFFDE3]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[70vh] md:h-[600px] ">
          {" "}
        </div>
        <img
          className="w-full h-[100vh] md:h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt=""
        />
        <div className="absolute w-full top-[20%] p-4 md:p-16">
          <h1 className="text-2xl md:text-5xl font-bold">{movie?.title} </h1>
          <div className="my-4">
          
        <p className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] text-gray-200 text-sm md:text-base mt-2">
            <ReadMore>
              {movie?.overview}
            </ReadMore>
        </p>
          </div>
          <button onClick={handleClick} className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
              WATCH TRAILERRR
            </button>            
        </div>
      </div>
    </div>
  );
};

export default Main;

import {FC} from "react";

import Grid from "@mui/material/Grid";

import MovieCard from "@/components/MovieCard/MovieCard";
import * as React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
const MovieList: FC = () => { const[ Movies , setMovies] = useState([]);
  const getmovies = async () =>{
    axios.get ( '/api/movies')
      .then(function (res){
        if (res?.data?.data){
          setMovies(res.data.data)
        }
        console.log(res)
      })
      .catch(function (error){
        console.log (error)
      })
  }
  useEffect( () => {
    getmovies();
  }, []);
  
  return (
    <Grid container spacing={4}>
      {
        Movies?.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      }
    </Grid>
  );
}

export default MovieList;

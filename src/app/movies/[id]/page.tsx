'use client'
import {FC} from "react";
import { useParams } from 'next/navigation';
import {Movies} from "@/movies.data";
import Paper from "@mui/material/Paper";

import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { Box, Typography, Button, Rating } from "@mui/material"; 

const MovieCard : FC<OwnProps> = () => {
  const params = useParams();
    const movieId = params.id;
    const selectedMovie =
      Movies.find( movie => movie.id == movieId);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // صفحه را به اندازه کامل عمودی پر می‌کند
        backgroundColor: "#EEEEEE", // رنگ پس‌زمینه
        color: '#fff',
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          backgroundColor: "#121212",
          borderRadius: "12px",
          overflow: "hidden",
          color: "#fff",
          maxWidth: "100%",  // به اندازه صفحه تا حداکثر 600px گسترش می‌یابد
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          width: { xs: "90%", sm: "80%", md: "600px" }, // ریسپانسیو برای عرض
        }}
      >
        {/* Movie Image */}
        <Box
          component="img"
          src={selectedMovie?.img}
          alt="Movie Poster"
          sx={{
            width: { xs: "100%", sm: "40%" },
            objectFit: "cover",
            color: '#fff',
          }}
        />

        {/* Movie Details */}
        <Box sx={{ padding: 2, flex: 1, }}>
          <Typography variant="h5" gutterBottom >
          {selectedMovie?.title}
          </Typography>
          <Typography variant="body2" color="#fff" sx={{ mb: 1 }}>
          {selectedMovie?.director} - {selectedMovie?.release_year} - {selectedMovie?.genre} - 
          Rating : {selectedMovie?.rating}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
          {selectedMovie?.details}
          </Typography>
          <Button
          href={selectedMovie?.link}
            variant="outlined"
            color="primary"
            sx={{
              borderColor: "#FFD700",
              color: "#FFD700",
              ":hover": {
                backgroundColor: "#FFD700",
                color: "#000",
              },
            }}
          >
            WATCH | PLAY
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieCard;

// type OwnProps = {

// }
// const MovieDetailsPage: FC<OwnProps> = () => {
//   const params = useParams();
//   const movieId = params.id;
//   const selectedMovie =
//     Movies.find( movie => movie.id == movieId);
//   return(
//     <Box sx={{
//       width: '100%',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       <Paper elevation={3} sx={{ padding: 4}}>
//         <Typography component="span">{selectedMovie?.title}</Typography>
//         <Typography component="p">{selectedMovie?.director}</Typography>
//       </Paper>
//     </Box>
//   )

// }

// export default MovieDetailsPage;

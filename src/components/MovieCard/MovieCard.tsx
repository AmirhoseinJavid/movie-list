import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import { FC } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { MovieType } from "@/Types/movie.type";

import MovieDetailDialog from "@/components/MovieDetailDialog/MovieDetailDialg";
const MovieCard: FC<MovieType> = (movieData) => {

  const _movieData = movieData.data;

  const handleClick = () => {
    console.log(_movieData.title);
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} mt={3}>
      <Link href={`/movies/${_movieData.id}`} >
        <Card sx={{ Width: 300 , height: 500 , backgroundColor : '#EEEEEE' , paddingX:3 , paddingY : 3 }} onClick={handleClick} >
          <CardMedia
            sx={{ height: 300}}
            image={_movieData.img}
            title={_movieData.title}
          />
          <CardContent sx={{ margin: 0 , textDecorationLine:'none' }}>
            <Typography sx={{ margin: 0, padding: 0,textDecoration: 'solid',textDecorationLine:'none' }}  gutterBottom variant="h5" component="span">
              {_movieData.title}
            </Typography>
            
          </CardContent>
          <CardActions>
            <Button size="small">details</Button>
            <Button size="small">play</Button>
          </CardActions>
        </Card>
      </Link>
      <MovieDetailDialog isOpen={false} />
    </Grid>
  );
}
export default MovieCard;

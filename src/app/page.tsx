"use client";
import * as React from 'react';

import Container from "@mui/material/Container";

import AppHeader from "@/components/Header/AppHeader";
import Footer from "@/components/Footer/Footer";
import MovieList from "@/components/Footer/MovieList/MovieList";


export default function Home() {
  return (
    <>
      <AppHeader />
      <Container maxWidth="xl">
        <MovieList />
      </Container>
      <Footer caption="" version={9} />
    </>
  );
}

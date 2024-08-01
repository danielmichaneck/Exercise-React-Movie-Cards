import { useState } from "react";
import { AddMovie } from "./components/AddMovie";
import { MovieList } from "./components/MovieList";

import "./App.css";

export function App() {
  const[movies, setMovies] = useState<{id: string, title: string, rating: string, genre: string, description: string}[]>([]);

  const addMovieCard = (movie: {id: string, title: string, rating: string, genre: string, description: string}) => {
    console.log("Adding card with id: " + movie.id);
    setMovies((previousMovies) => [movie, ...previousMovies]);
  }

  const removeMovieCard = (key: string) => {
    console.log("Removing card with id: " + key);
    setMovies((previousMovies) => previousMovies.filter((movie) => movie.id !== key));
  }
  
  return (
    <div className="app">
      <AddMovie submitMovieCard={addMovieCard}/>
      <MovieList updateMovieCard={removeMovieCard} movies={movies}/>
    </div>
  );
}
 
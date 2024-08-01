import { useState } from "react";
import { AddMovie } from "./components/AddMovie";
import { MovieCard } from "./components/MovieCard";

import "./App.css";

export function App() {
  const[movies, setMovies] = useState<{id: string, title: string, rating: string, genre: string, description: string}[]>([]);

  const addMovieCard = (movie: {id: string, title: string, rating: string, genre: string, description: string}) => {
    setMovies((previousMovies) => [movie, ...previousMovies]);
  }

  const removeMovieCard = (key: string) => {
    console.log("Removing card with id: " + key);
    setMovies((previousMovies) => previousMovies.filter((movie) => movie.id !== key));
  }
  
  return (
    <div className="app">
      <AddMovie submitMovieCard={addMovieCard}/>
      <ul className="cards" id="cards">
        {movies.map((movie) => (
          <MovieCard movie={movie} movieCardClicked={removeMovieCard} key={movie.id}/>
        ))}
      </ul>
    </div>
  );
}

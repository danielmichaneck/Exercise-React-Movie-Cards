import { useState } from "react";
import { AddMovie } from "./components/AddMovie";
import { MovieCard } from "./components/MovieCard";

export function App() {
  const[movies, setMovies] = useState<{title: string, rating: string, genre: string, description: string}[]>([{title: "", rating: "", genre: "", description: ""}]);
  let idCounter: number = 1;

  const AddMovieCard = (movie: {title: string, rating: string, genre: string, description: string}) => {
    setMovies((previousMovies) => [...previousMovies, movie]);
    console.log(movies);
  }

  return (
    <>
      <AddMovie AddMovieCard={AddMovieCard}/>
      <ul className="cards" id="cards">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title + idCounter++}/>
        ))}
      </ul>
    </>
  );
}

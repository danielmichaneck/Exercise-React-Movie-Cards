import { ReactElement } from "react";
import { MovieCard } from "./MovieCard";

import "./MovieList.css";

interface IMovieListProps {
    movies: {
        id: string,
        title: string,
        rating: string,
        genre: string,
        description: string
    }[],
    updateMovieCard: (key: string) => void;
}

export function MovieList(props: IMovieListProps): ReactElement {
    return <div className="movie-list">
        {props.movies.map((movie) => (
          <MovieCard movie={movie} movieCardClicked={props.updateMovieCard} key={movie.id}/>
        ))}
    </div>
}
import { ReactElement } from "react";


interface MovieCardProps {
    movie: {
        title: string,
        rating: string,
        genre: string,
        description: string
    }
}

export function MovieCard({movie}: MovieCardProps): ReactElement {
    return <div className="movie-card">
        <p>{movie.title}</p>
        <p>{movie.rating}</p>
        <p>{movie.genre}</p>
        <p>{movie.description}</p>
    </div>
}
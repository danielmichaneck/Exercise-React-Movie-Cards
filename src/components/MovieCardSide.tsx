import { ReactElement } from "react";

import "./MovieCardSide.css";

interface MovieCardSideProps {
    rating: string,
    genre: string;
}

export function MovieCardSide(props: MovieCardSideProps): ReactElement {
    return <div className="movie-card-side">
        <p className="movie-rating">{props.rating}/100</p>
        <p className="movie-genre">{props.genre}</p>
    </div>
}
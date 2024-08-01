import React, { ReactElement } from "react";

import "./MovieCard.css";

interface IMovieCardProps {
    movie: {
        id: string,
        title: string,
        rating: string,
        genre: string,
        description: string
    },
    movieCardClicked: (key: string) => void;
}

export function MovieCard(props: IMovieCardProps): ReactElement {

    const handleOnClick: React.MouseEventHandler<HTMLDivElement> = () => {
        console.log("Movie card clicked")
        props.movieCardClicked(props.movie.id);
    }
    
    return <div className="movie-card" onClick={handleOnClick}>
        <div className="movie-card-top">
            <p className="movie-title">{props.movie.title}</p>
            <p className="movie-rating">{props.movie.rating}/100</p>
            <p className="movie-genre">{props.movie.genre}</p>
        </div>
        <p className="movie-description">{props.movie.description}</p>
    </div>
}
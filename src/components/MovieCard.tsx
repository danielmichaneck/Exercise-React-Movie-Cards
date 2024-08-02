import React, { ReactElement } from "react";
import { MovieCardSide } from "./MovieCardSide";

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
            <MovieCardSide rating={props.movie.rating} genre={props.movie.genre}/>
        </div>
        <p className="movie-description">{props.movie.description}</p>
    </div>
}
import { ReactElement, useState } from "react";

import "./AddMovie.css";
import { AddMovieKey } from "./AddMovieKey";
import { AddMovieRatingField } from "./AddMovieRatingField";
import { AddMovieGenre } from "./AddMovieGenre";
import { AddMovieButtons } from "./AddMovieButtons";

interface IAddMovieProps {
    submitMovieCard: (movie: {id: string, title: string, rating: string, genre: string, description: string}) => void;
}

export function AddMovie({submitMovieCard}: IAddMovieProps): ReactElement {
    const[titleInput, setTitle] = useState<string>("");
    const[ratingInput, setRating] = useState<string>("50");
    const[genreInput, setGenre] = useState<string>("a");
    const[descriptionInput, setDescription] = useState<string>("");
    const[movieId, setMovieId] = useState<number>(0);

    const movieGenres: string[] = ["Action", "Comedy", "Documentary", "Drama", "Family", "Horror", "Kids", "Romance"];

    const onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value);
    }

    const onChangeRating: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setRating(e.target.value);
    }

    const onChangeGenre: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setGenre(e.target.value);
    }

    const onChangeDescription: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setDescription(e.target.value);
    }

    const clearAddMovie = () => {
        setTitle("");
        setRating("50");
        setGenre("Action");
        setDescription("");
    }

    const onSubmitMovie: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setMovieId((previousValue) => previousValue + 1);
        const movie = {
            id: movieId.toString(),
            title: titleInput,
            rating: ratingInput,
            genre: genreInput,
            description: descriptionInput
        }
        console.log("Submitting movie: " + movie);
        submitMovieCard(movie);
        clearAddMovie();
    }

    return <div className="add-movie">
        <form onSubmit={onSubmitMovie} className="add-movie-form">
            <div className="keys-bg"/>
            <AddMovieKey keyName="Title" keyClass="title-key"/>
            <AddMovieKey keyName="Rating" keyClass="rating-key"/>
            <AddMovieKey keyName="Genre" keyClass="genre-key"/>
            <AddMovieKey keyName="Description" keyClass="description-key"/>
            <input type="text" placeholder="Title" className="title-input" onChange={onChangeTitle} value={titleInput}/>
            <AddMovieRatingField update={onChangeRating} rating={ratingInput}/>
            <AddMovieGenre update={onChangeGenre} genre={genreInput} genreList={movieGenres}/>
            <textarea className="description-input" placeholder="Description" onChange={onChangeDescription} value={descriptionInput}/>
            <AddMovieButtons clicked={clearAddMovie}/>
        </form>
    </div>
}
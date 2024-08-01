import { ReactElement, useState } from "react";

import "./AddMovie.css";
import { AddMovieKey } from "./AddMovieKey";

interface IAddMovieProps {
    submitMovieCard: (movie: {id: string, title: string, rating: string, genre: string, description: string}) => void;
}

export function AddMovie({submitMovieCard}: IAddMovieProps): ReactElement {
    const[titleInput, setTitle] = useState<string>("");
    const[ratingInput, setRating] = useState<string>("50");
    const[genreInput, setGenre] = useState<string>("a");
    const[descriptionInput, setDescription] = useState<string>("");
    const[movieId, setMovieId] = useState<number>(0);

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
    }

    return <div className="add-movie">
        <form onSubmit={onSubmitMovie} className="add-movie-form">
            <div className="keys-bg"/>
            <AddMovieKey keyName="Title" keyClass="title-key"/>
            <AddMovieKey keyName="Rating" keyClass="rating-key"/>
            <AddMovieKey keyName="Genre" keyClass="genre-key"/>
            <AddMovieKey keyName="Description" keyClass="description-key"/>
            <input type="text" className="title-input" onChange={onChangeTitle} value={titleInput}/>
            <div className="rating-field">
                <p>{ratingInput}</p>
                <input type="range" className="rating-input" onChange={onChangeRating} value={ratingInput}/>
            </div>
            <select className="genre-input" onChange={onChangeGenre} value={genreInput}>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
            </select>
            <textarea className="description-input" onChange={onChangeDescription} value={descriptionInput}/>
            <div className="add-movie-buttons">
                <button className="clear-button"><span className="material-symbols-outlined">restart_alt</span> Clear</button>
                <button type="submit" className="add-button"><span className="material-symbols-outlined">add_circle</span> Add</button>
            </div>
        </form>
    </div>
}
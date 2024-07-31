import { ReactElement, useState } from "react";

import "./AddMovie.css";

interface AddMovieProps {
    AddMovieCard: (movie: {title: string, rating: string, genre: string, description: string}) => void;
}

export function AddMovie({AddMovieCard}: AddMovieProps): ReactElement {
    const[titleInput, setTitle] = useState<string>("");
    const[ratingInput, setRating] = useState<string>("50");
    const[genreInput, setGenre] = useState<string>("a");
    const[descriptionInput, setDescription] = useState<string>("");

    const onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value);
    }

    const onChangeRating: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setRating(e.target.value);
    }

    const onChangeGenre: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setGenre(e.target.value);
        console.log(e.target.value);
    }

    const onChangeDescription: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setDescription(e.target.value);
        console.log(e.target.value);
    }

    const onSubmitMovie: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const movie = {
            title: titleInput,
            rating: ratingInput,
            genre: genreInput,
            description: descriptionInput
        }
        console.log(movie);
        AddMovieCard(movie);
    }

    return <div className="add-movie">
        <form onSubmit={onSubmitMovie} className="add-movie-form">
            <input type="text" onChange={onChangeTitle} value={titleInput}/>
            <input type="range" onChange={onChangeRating} value={ratingInput}/>
            <select onChange={onChangeGenre} value={genreInput}>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
            </select>
            <textarea onChange={onChangeDescription} value={descriptionInput}/>
            <div className="add-movie-buttons">
                <button>Clear</button>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
}
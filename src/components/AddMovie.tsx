import { ReactElement, useState } from "react";


export function AddMovie(): ReactElement {
    const[title, setTitle] = useState<string>("");
    const[rating, setRating] = useState<string>("50");
    const[genre, setGenre] = useState<string>("a");
    const[description, setDescription] = useState<string>("");

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
            movieTitle: title,
            movieRating: rating,
            movieGenre: genre,
            movieDescription: description
        }
        console.log(movie);
    }

    return <div>
        <form onSubmit={onSubmitMovie}>
            <input type="text" onChange={onChangeTitle} value={title}/>
            <input type="range" onChange={onChangeRating} value={rating}/>
            <select onChange={onChangeGenre} value={genre}>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
            </select>
            <textarea onChange={onChangeDescription} value={description}/>
            <button>Clear</button>
            <button type="submit">Add</button>
        </form>
    </div>
}
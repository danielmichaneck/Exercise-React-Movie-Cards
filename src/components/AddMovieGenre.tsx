import { ReactElement } from "react";

interface AddMovieGenreProps {
    genre: string,
    update: React.ChangeEventHandler<HTMLSelectElement>,
    genreList: string[];
}

export function AddMovieGenre(props: AddMovieGenreProps): ReactElement {
    return <select className="genre-input" onChange={props.update} value={props.genre}>
                {props.genreList.map((genre) => (
                    <option value={genre} key={genre}>{genre}</option>
                ))}
            </select>
}
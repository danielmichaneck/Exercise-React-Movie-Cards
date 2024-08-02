import { ReactElement } from "react";

import "./AddMovieRatingField.css";

interface AddMovieRatingFieldProps {
    rating: string,
    update: React.ChangeEventHandler<HTMLInputElement>;
}

export function AddMovieRatingField(props: AddMovieRatingFieldProps): ReactElement {
    return <div className="rating-field">
    <p>{props.rating}</p>
    <input type="range" className="rating-input" onChange={props.update} value={props.rating}/>
</div>
}
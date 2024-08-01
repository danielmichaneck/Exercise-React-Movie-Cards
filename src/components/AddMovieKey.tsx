import { ReactElement } from "react";

import "./AddMovieKey.css";

interface AddMovieKeyProps {
    keyName: string;
    keyClass: string,
}

export function AddMovieKey(props: AddMovieKeyProps): ReactElement {
    return <div className="movie-key">
        <p className={props.keyClass}>{props.keyName}</p>
    </div>
}
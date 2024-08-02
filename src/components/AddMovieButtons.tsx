import { ReactElement } from "react";

interface AddMovieButtonsProps {
    clicked: () => void;
}

export function AddMovieButtons({clicked}: AddMovieButtonsProps): ReactElement {
    return <div className="add-movie-buttons">
        <button type="button" className="clear-button" onClick={clicked}><span className="material-symbols-outlined">restart_alt</span> Clear</button>
        <button type="submit" className="add-button"><span className="material-symbols-outlined">add_circle</span> Add</button>
    </div>
}
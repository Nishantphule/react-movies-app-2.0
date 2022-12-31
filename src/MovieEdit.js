import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Backbtn } from "./Backbtn";

export function MovieEdit() {

    const navigate = useNavigate();

    const API = "https://6288bebc7af826e39e64a149.mockapi.io";

    const { id } = useParams();

    const [movie, setMoviee] = useState([]);

    useEffect(() => {
        fetch(`${API}/movies/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((movies) => setMoviee(movies));

    }, [id]);

    const [update, setUpdate] = useState({ pic: movie.pic, title: movie.title, rating: movie.rating, description: movie.description, url: movie.url });

    const newMovie = (update) => {
        fetch(`${API}/movies/${id}`, {
            method: "PUT",
            body: JSON.stringify(update),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
            .then(() => navigate(-1));
    };

    return (
        <div className='update-movie'>
            <TextField className="input" onChange={(e => setUpdate({ ...update, pic: e.target.value }))} id="filled-basic" label="Enter poster url" variant="filled" placeholder={movie.pic} />
            <TextField className="input" onChange={(e => setUpdate({ ...update, title: e.target.value }))} id="filled-basic" label="Enter movie Title" variant="filled" placeholder={movie.title} />
            <TextField className="input" onChange={(e => setUpdate({ ...update, rating: e.target.value }))} id="filled-basic" label="Enter movie Rating" variant="filled" placeholder={movie.rating} />
            <TextField className="input" onChange={(e => setUpdate({ ...update, description: e.target.value }))} id="filled-basic" label="Enter movie Description" variant="filled" placeholder={movie.description} />
            <TextField className="input" onChange={(e => setUpdate({ ...update, url: e.target.value }))} id="filled-basic" label="Enter movie Trailer url" variant="filled" placeholder={movie.url} />
            <Button style={{ width: "20%" }} className="update" onClick={() => newMovie(update)} color="secondary" variant="contained">UPDATE Movie</Button>
            <Backbtn />
        </div>
    );
}

import { MovieCard } from './MovieCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function MovieList() {

    const navigate = useNavigate();

    const [list, setList] = useState([]);

    const API = "https://6288bebc7af826e39e64a149.mockapi.io"

    const getMovies = () => {
        fetch(`${API}/movies`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((movies) => setList(movies));
    };

    useEffect(() => getMovies(), []);

    const deleteMovie = (id) => {
        fetch(`${API}/movies/` + id, {
            method: "DELETE"
        })
            .then(() => getMovies());
    };
 
    return (
        <div>
            <div className='movieList-container'>
                {list.map((movie, index) => (
                    <MovieCard
                        pic={movie.pic}
                        name={movie.title}
                        rating={movie.rating}
                        info={movie.description}
                        key={index}
                        id={movie.id}
                        editbtn={<IconButton sx={{marginLeft:"auto"}} title="Edit Movie" onClick={() => navigate("/movie/edit/" + movie.id)}><EditIcon color="primary" /></IconButton>}
                        deletebtn={<IconButton title="Delete Movie" onClick={() => deleteMovie(movie.id)}><DeleteIcon color="error" /></IconButton>} />))}
            </div>
        </div>
    );

}

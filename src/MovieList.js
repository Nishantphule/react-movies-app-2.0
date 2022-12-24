import { MovieCard } from './MovieCard';
// import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function MovieList() {

    // const navigate = useNavigate();

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
                        id={index} />
                ))}
            </div>
        </div>
    );

}

import { MovieCard } from './MovieCard';


export function MovieList({ list }) {

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
                        id={index}/>
                ))}
            </div>
        </div>
    );

}

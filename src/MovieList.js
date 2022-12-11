import { MovieCard } from './MovieCard';
import { AddMovie } from './AddMovie';

export function MovieList({ setList, list }) {

    return (
        <div>
            <AddMovie setList={setList} list={list} />

            <div className='movieList-container'>
                {list.map((movie, index) => (
                    <MovieCard
                        pic={movie.pic}
                        name={movie.title}
                        rating={movie.rating}
                        info={movie.description}
                        key={index} />
                ))}
            </div>
        </div>
    );

}

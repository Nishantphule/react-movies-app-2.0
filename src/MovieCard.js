import { Counter } from './Counter';

export function MovieCard({ pic, name, rating, info }) {

    const ratingStyle = {
        color: rating >= 8 ? "green" : "red"
    };

    return (
        <div className='movieContainer'>

            <img className='moviePic' src={pic} alt={name} />

            <div className='movieHeader'>
                <h3>{name}</h3>
                <h3 style={ratingStyle}>⭐{rating}</h3>
            </div>

            <p>
                {info}
            </p>
            <Counter />
        </div>
    );
}

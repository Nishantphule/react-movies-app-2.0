import { useParams } from 'react-router-dom';
import { Backbtn } from "./Backbtn";

export function MovieDetails({ movieList }) {
    const { id } = useParams();

    const movie = movieList[id];
    const { url, title, rating, description } = movie;

    const ratingStyle = {
        color: rating >= 8 ? "green" : "red"
    };
    return (
        <div className="main-container-info">
            <div className='movie-info'>
                <iframe
                    width="100%"
                    height="700"
                    src={url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className='head-info'>
                    <h1 className='title'>{title}</h1>
                    <p className='rating' style={ratingStyle}>⭐{rating}</p>
                </div>
                <p className='summary'>{description}</p>
                <Backbtn />
            </div>
        </div>
    );
}

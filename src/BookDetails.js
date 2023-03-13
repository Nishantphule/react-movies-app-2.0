import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Backbtn } from "./Backbtn";
import {API} from "./global"

export function BookDetails() {
    const { id } = useParams();

    // const API = "https://6288bebc7af826e39e64a149.mockapi.io"

    const [book, setBook] = useState({})

    useEffect(() => {
        fetch(`${API}/books/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((book) => setBook(book));
    }, [id]);

    const { trailer, name, rating, summary } = book;

    const ratingStyle = {
        color: rating >= 8 ? "green" : "red"
    };

    return (
        <div className="main-container-info">
            <div className='book-info'>
                <iframe
                    width="100%"
                    height="700"
                    src={trailer}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className='head-info'>
                    <h1 className='title'>{name}</h1>
                    <p className='rating' style={ratingStyle}>⭐{rating}</p>
                </div>
                <p className='summary'>{summary}</p>
                <Backbtn />
            </div>
        </div>
    );
}
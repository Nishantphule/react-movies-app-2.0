import { BookCard } from './BookCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {API} from "./global"


export function BookList() {

    const navigate = useNavigate();

    const [list, setList] = useState([]);

    const getBooks = () => {
        fetch(`${API}/books`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((books) => setList(books));
    };

    useEffect(() => getBooks(), []);

    const deleteBook = (id) => {
        fetch(`${API}/books/` + id, {
            method: "DELETE"
        })
            .then(() => getBooks());
    };
 
    return (
        <div>
            <div className='bookList-container'>
                {list.map((book, index) => (
                    <BookCard
                        pic={book.poster}
                        name={book.name}
                        rating={book.rating}
                        info={book.summary}
                        key={index}
                        id={book.id}
                        editbtn={<IconButton sx={{marginLeft:"auto"}} title="Edit book" onClick={() => navigate("/book/edit/" + book.id)}><EditIcon color="primary" /></IconButton>}
                        deletebtn={<IconButton title="Delete book" onClick={() => deleteBook(book.id)}><DeleteIcon color="error" /></IconButton>} />))}
            </div>
        </div>
    );

}
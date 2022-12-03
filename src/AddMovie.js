import { useState } from 'react';

export function AddMovie({ setList, list }) {

    const [Add, setMovie] = useState({ pic: "", title: '', rating: "", description: "" });

    return (
        <div className='add-movie'>
            <input className="input" onChange={(e => setMovie({ ...Add, pic: e.target.value }))} placeholder="Enter poster url" />

            <input className="input" onChange={(e => setMovie({ ...Add, title: e.target.value }))} placeholder="Enter movie Title" />

            <input className="input" onChange={(e => setMovie({ ...Add, rating: e.target.value }))} placeholder="Enter movie Rating" />

            <input className="input" onChange={(e => setMovie({ ...Add, description: e.target.value }))} placeholder="Enter movie Description" />

            {console.log(Add)}
            <button style={{ width: "20%" }} className="addMovie-btn" onClick={() => setList([...list, Add])}
            >Add Movie</button>
        </div>
    );
}

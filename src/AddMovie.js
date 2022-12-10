import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ setList, list }) {

    const [Add, setMovie] = useState({ pic: "", title: '', rating: "", description: "" });

    return (
        <div className='add-movie'>
            <TextField label="Enter poster url" variant="outlined" className="inputField" onChange={(e => setMovie({ ...Add, pic: e.target.value }))} required/>

            <TextField label="Enter movie Title" variant="outlined" className="inputField" onChange={(e => setMovie({ ...Add, title: e.target.value }))}  required/>

            <TextField label="Enter movie Rating" variant="outlined" className="inputField" onChange={(e => setMovie({ ...Add, rating: e.target.value }))}  required/>

            <TextField label="Enter movie Description" variant="outlined" className="inputField" onChange={(e => setMovie({ ...Add, description: e.target.value }))} required/>

            <Button style={{ width: "30%" }} className="addMovie-btn" onClick={() => setList([...list, Add])} variant="contained">Add Movie</Button>
        </div>
    );
}

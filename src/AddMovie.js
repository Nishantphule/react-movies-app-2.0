import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function AddMovie() {

    const API = "https://6288bebc7af826e39e64a149.mockapi.io";
    
    const navigate = useNavigate();
    
    const [Add, setMovie] = useState({ pic: "", title: '', rating: "", description: "",url:"" });
    
    console.log(Add)
    
    const newMovie = (add) => {
        fetch(`${API}/movies`, {
          method: "POST",
          body: JSON.stringify(add),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => alert("Movie Added Successfully",<CheckCircleIcon/>))
          .then(() => navigate("/movies"));
      };
    
    return (
        <div className='add-movie'>
            <TextField label="Enter poster url" variant="outlined" className="inputField" onChange={(e => setMovie({ ...Add, pic: e.target.value }))} required />

            <TextField label="Enter movie Title" variant="outlined" className="inputField" onChange={(e => setMovie({ ...Add, title: e.target.value }))} required />

            <TextField label="Enter movie Rating" variant="outlined" className="inputField" onChange={(e => setMovie({ ...Add, rating: e.target.value }))} required />

            <TextField label="Enter movie Description" variant="outlined" className="inputField" onChange={(e => setMovie({ ...Add, description: e.target.value }))} required />
            
            <TextField label="Trailer" variant="outlined" className="inputField" onChange={(e => setMovie({ ...Add, url: e.target.value }))} required />

            <Button style={{ width: "30%" }} className="addMovie-btn" onClick={() => newMovie(Add)} variant="contained">Add Movie</Button>
        </div>
    );
}

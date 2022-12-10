import { Counter } from './Counter';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Card, CardActions, CardContent } from '@mui/material';

export function MovieCard({ pic, name, rating, info }) {

    const ratingStyle = {
        color: rating >= 8 ? "green" : "red"
    };

    const [show, setShow] = useState(true);

    return (
        <Card className='movieContainer'>

            <img className='moviePic' src={pic} alt={name} />

            <CardContent>
                <div className='movieHeader'>
                    <h3>
                        {name}
                        <IconButton title="Toggle Summary" onClick={() => setShow(!show)} className="btn-sum btnn" color="primary" aria-label="toggle summary">
                            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    </h3>

                    <h3 style={ratingStyle}>⭐{rating}</h3>
                </div>
                {show ? <p>{info}</p> : ""}
            </CardContent>
            
            <CardActions>
                <Counter />
            </CardActions>
        </Card>
    );
}

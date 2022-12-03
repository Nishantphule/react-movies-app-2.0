import { useState } from 'react';
import { ColorBox } from "./ColorBox";

export function AddColor() {
    const [color, setColor] = useState("pink");

    const styles = {
        background: color,
    };

    const [colorlist, setColorList] = useState(['orange', 'crimson', 'pink', 'green']);

    return (
        <div>
            <input
                style={styles}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Enter a color"
                value={color} />
            <button className='addcolorbtn' onClick={() => setColorList([...colorlist, color])} variant="contained">Add color</button>
            {colorlist.map(add => <ColorBox color={add} />)}
        </div>
    );
}

import { useState } from "react";

export function Counter() {
    // let like = 10
    let [likes, setLike] = useState(0);
    
    let [disLikes, setDisLike] = useState(0);

    let likeStyle = {
        color: likes >= 10 ? "green" : "black",
        fontWeight: 'bold'
    };

    let dislLikeStyle = {
        color: disLikes >= 10 ? "red" : "black",
    };

    return (
        <div>
            {/* {likes - disLikes >= 10 ? <h2>You are awesome ✨✨</h2> : null} */}
            <button style={likeStyle} onClick={() => setLike(likes + 1)}>👍 {likes}</button>
            <button style={dislLikeStyle} onClick={() => setDisLike(disLikes + 1)}>👎 {disLikes}</button>
        </div>
    );
}

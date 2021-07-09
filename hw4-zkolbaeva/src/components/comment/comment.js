import React from 'react'
import ReactStars from "react-rating-stars-component";
const Comment = ({title, rating}) => {
    return (
        <div>
            <h4>{title}</h4>
            <ReactStars
            count={5}
            value={rating}
            size={24}
            edit={false}
            activeColor="#ffd700"
            />
        </div>
    )
}

export default Comment

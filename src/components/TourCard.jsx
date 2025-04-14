import React, { useState } from "react";
import "../styles/styles.css";

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
            <img src={image} alt={name} />
            <div className="tour-info">
                <div className="tour-header">
                    <h4>{name}</h4>
                    <span className="tour-price">${price}</span>
                </div>
                <p>
                    {info ? readMore ? info : `${info.substring(0, 200)}...` :"No description available"}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button onClick={() => onRemove(id)} className="remove-btn" >
                Not Interested
                </button>
            </div>
        </article>
    );
};

export default TourCard;
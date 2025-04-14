import React, { useState } from "react"; // Importing React and useState hook
import "../styles/styles.css"; // Importing CSS styles

const TourCard = ({ id, name, info, image, price, onRemove }) => { // TourCard component to display individual tour details
    const [readMore, setReadMore] = useState(false); // State to manage read more functionality

    return ( // JSX to render the tour card
        <article className="tour-card"> 
            <img src={image} alt={name} />
            <div className="tour-info">
                <div className="tour-header">
                    <h4>{name}</h4>
                    <span className="tour-price">${price}</span>
                </div>
                <p>
                    {info 
                    ? (readMore ? info : `${info.substring(0, 200)}...`)
                    :"No description available"}
                </p>
                <button onClick={() => onRemove(id)} className="remove-btn" >
                Not Interested
                </button>
            </div>
        </article>
    );
};

export default TourCard;
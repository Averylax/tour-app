import React from "react"; // Importing React
import TourCard from "./TourCard"; // Importing TourCard component

const Gallery = ({ tours, loading, error, onRemoveTour, onRefresh }) => { // Gallery component to display the list of tours
  if (loading) { // If loading, show loading state
    return <div className="loading">Loading...</div>; // Loading message
  }

  if (error) { // If there is an error, show error state
    console.error("Server Error:", error); // Log the error for debugging
    return (
      <div className="error"> 
        <h2>Something went wrong...</h2>
        <p>{error.message || "Please try again later."}</p>
        <button onClick={onRefresh}>Try Again</button>
      </div>
    );
  }

  if (tours.length === 0) { // If there are no tours left, show empty state
    return ( 
      <div className="empty">
        <h2>No tours left</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );
  }

  return ( // JSX to render the gallery of tours
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemoveTour} />
      ))}
    </section>
  );
};

export default Gallery;
import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, loading, error, onRemoveTour, onRefresh }) => {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    console.error("Server Error:", error); // Log the error for debugging
    return (
      <div className="error">
        <h2>Something went wrong...</h2>
        <p>{error.message || "Please try again later."}</p>
        <button onClick={onRefresh}>Try Again</button>
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="empty">
        <h2>No tours left</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );
  }

  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemoveTour} />
      ))}
    </section>
  );
};

export default Gallery;
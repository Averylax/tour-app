import React, { useEffect, useState } from 'react'; // Importing React and hooks
import Gallery from './components/Gallery'; // Importing the Gallery component

const App = () => { // Main App component
  const [tours, setTours] = useState([]); // State to hold the tours data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  const fetchTours = async () => { // Function to fetch tours data
    try {
      const res = await fetch("https://course-api.com/react-tours-project"); // Fetching data from the API
      const data = await res.json();  // Parsing the JSON response

      setTours(data); // Updating the tours state with the fetched data
      setLoading(false); // Setting loading to false
    } catch (error) { // Handling errors
      console.error(error); // Logging the error for debugging
      setError(error); // Updating the error state
      setLoading(false); // Setting loading to false
    }
  };

  useEffect(() => { // useEffect to fetch tours data on component mount
    fetchTours(); // Calling the fetchTours function
  }, []);

  const removeTour = (id) => { // Function to remove a tour
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));  // Filtering out the tour with the given id
  };

  return (
    <main>
      <h1>Our Tours</h1>
      <Gallery
        tours={tours}
        loading={loading}
        error={error}
        onRemoveTour={removeTour}
        onRefresh={fetchTours}
      />
    </main>
  );
};

export default App;
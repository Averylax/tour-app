import React, { useEffect, useState } from 'react';
import Gallery from '.componets/Gallery';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    try {
      const res = await fetch("http://course-api.com/react-tours-project");
      const data = await res.json();

      setTours(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
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
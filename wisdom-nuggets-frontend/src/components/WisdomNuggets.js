import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WisdomNuggets = () => {
  const [nuggets, setNuggets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch nuggets from backend
  useEffect(() => {
    const fetchNuggets = async () => {
      try {
        const response = await axios.get('http://localhost:3000/nuggets');
        setNuggets(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching nuggets:', error);
        setLoading(false);
      }
    };

    fetchNuggets();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Wisdom Nuggets</h1>

      {loading ? (
        <p className="text-center">Loading nuggets...</p>
      ) : nuggets.length === 0 ? (
        <p className="text-center">No nuggets found.</p>
      ) : (
        <ul className="space-y-4">
          {nuggets.map((nugget) => (
            <li key={nugget.id} className="bg-white shadow p-4 rounded border">
              <p className="text-gray-800">{nugget.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WisdomNuggets;

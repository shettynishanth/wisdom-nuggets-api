import React, { useState } from 'react';
import axios from 'axios';

const RandomNugget = () => {
  const [nugget, setNugget] = useState(null);
  const [error, setError] = useState('');

  const fetchRandomNugget = async () => {
    try {
      const response = await axios.get('http://localhost:3000/nuggets/random');
      setNugget(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching random nugget:', err);
      if (err.response && err.response.status === 404) {
        setError('No nuggets found in the database.');
      } else {
        setError('Failed to fetch random nugget.');
      }
      setNugget(null);
    }
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>
        Get a Random Wisdom Nugget
      </h2>

      <button
        onClick={fetchRandomNugget}
        style={{
          
         
          border: 'none',
          padding: '10px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        Show Random Nugget
      </button>

      {nugget && (
        <div style={{
          marginTop: '20px',
          padding: '16px',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '6px'
        }}>
          <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
            "{nugget.text}"
          </p>
          <p style={{ fontSize: '14px', color: '#555' }}>— {nugget.author}</p>
        </div>
      )}

      {error && (
        <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>
      )}
    </div>
  );
};

export default RandomNugget;

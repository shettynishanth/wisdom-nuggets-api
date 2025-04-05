import React, { useState } from 'react';
import axios from 'axios';

const NuggetList = () => {
  const [nuggets, setNuggets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showNuggets, setShowNuggets] = useState(false);

  const fetchNuggets = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/nuggets');
      setNuggets(res.data);
    } catch (err) {
      console.error('Error fetching:', err);
      setMessage('Failed to load nuggets.');
    }
    setLoading(false);
  };

  const deleteNugget = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/nuggets/${id}`);
      setNuggets((prev) => prev.filter((item) => item.id !== id));
      setMessage('Nugget deleted.');
    } catch (err) {
      console.error('Delete error:', err);
      setMessage('Failed to delete nugget.');
    }
  };

  const handleViewClick = () => {
    if (!showNuggets) {
      fetchNuggets();
    }
    setShowNuggets(!showNuggets);
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ marginBottom: '15px', textAlign: 'center' }}>Wisdom Nuggets</h3>

      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <button
          onClick={handleViewClick}
          style={{
            padding: '8px 16px',
            // backgroundColor: '#007bff',
            // color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {showNuggets ? 'Hide Nuggets' : 'View Nuggets'}
        </button>
      </div>

      {showNuggets && (
        <>
          {loading ? (
            <p style={{ textAlign: 'center' }}>Loading...</p>
          ) : nuggets.length === 0 ? (
            <p style={{ textAlign: 'center' }}>No nuggets found.</p>
          ) : (
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              {nuggets.map((nugget) => (
                <li
                  key={nugget.id}
                  style={{
                    backgroundColor: '#fff',
                    padding: '12px',
                    borderRadius: '6px',
                    marginBottom: '10px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                  }}
                >
                  <p style={{ margin: '0 0 6px 0' }}>
                    <strong>"{nugget.text}"</strong>
                  </p>
                  <p style={{ fontSize: '14px', color: '#555', marginBottom: '6px' }}>— {nugget.author}</p>
                  <button
                    onClick={() => deleteNugget(nugget.id)}
                    style={{
                    //   color: '#fff',
                    //   backgroundColor: '#dc3545',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      fontSize: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
          {message && <p style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>{message}</p>}
        </>
      )}
    </div>
  );
};

export default NuggetList;

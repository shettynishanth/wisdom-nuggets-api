import React, { useState } from 'react';
import axios from 'axios';

const AddNugget = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleAddNugget = async () => {
    setMessage('');
    setError('');

    if (!text.trim() || !author.trim()) {
      setError('Both text and author are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/nuggets', {
        text,
        author,
      });

      setMessage(`Added successfully: "${response.data.text}" by ${response.data.author}`);
      setText('');
      setAuthor('');
    } catch (err) {
      console.error(err);
      if (err.response?.status === 400) {
        setError('Validation failed. Please provide valid input.');
      } else {
        setError('Something went wrong while adding the nugget.');
      }
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Add Wisdom Nugget</h2>

      <input
        type="text"
        placeholder="Enter nugget text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />

      <input
        type="text"
        placeholder="Author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />

      <button
        onClick={handleAddNugget}
        style={{
          padding: '8px 16px',
        //   backgroundColor: '#007bff',
        //   color: '#ffff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>

      {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default AddNugget;

import React from 'react';
import AddNugget from './components/AddNugget';
import RandomNugget from './components/RandomNugget';
import NuggetList from './components/NuggetList';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', padding: '20px', border: '1px solid #ccc' }}>
  <AddNugget />
  <RandomNugget />
  <NuggetList />
</div>

  );
}

export default App;

require('dotenv').config(); 

const express = require('express');
const cors = require('cors'); 

const app = express();
const nuggetsRoutes = require('./routes/nuggets');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Routes
app.use('/nuggets', nuggetsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Wisdom Nuggets API is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

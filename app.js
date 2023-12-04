// here we initializes an Express app, parse JSON & will soon define routes here
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import the router from PhotoRoutes.js
const photoRoutes = require('./routes/PhotoRoutes');

// Use the router with your Express app
app.use('/api', photoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

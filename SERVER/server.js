const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));

// Connect to MongoDB (update the connection string)
mongoose.connect('mongodb://localhost:27017/greenthumb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple Garden model
const Garden = mongoose.model('Garden', new mongoose.Schema({
  name: String,
  location: String,
}));

// Sample route to get gardens
app.get('/api/gardens', async (req, res) => {
  const gardens = await Garden.find();
  res.json(gardens);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

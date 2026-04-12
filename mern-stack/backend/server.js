const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connection string - defaulting to local but allowing override
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(mongoURI, {
    family: 4 // Force IPv4
}).then(() => {
    console.log('Successfully Connected to MongoDB');
}).catch((err) => {
    console.error('CRITICAL: MongoDB connection error details:');
    console.error(err);
});

const studentRoutes = require('./routes/studentRoutes');
app.use('/student', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Allow frontend to communicate
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/expenses', require('./routes/expenseRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Routes
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
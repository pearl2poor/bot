require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json()); // Make sure to include this if your API expects JSON payloads

// Serve static files from the "public" directory
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
    res.send('<h1>419 Discord bot Dashboard</h1>');
});

// API routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'Bot is running' });
});

app.post('/api/start-bot', (req, res) => {
    // Logic to start the bot (if applicable)
    res.json({ status: 'Bot started' });
});

app.post('/api/stop-bot', (req, res) => {
    // Logic to stop the bot (if applicable)
    res.json({ status: 'Bot stopped' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

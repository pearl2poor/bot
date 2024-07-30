// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
    res.send('<h1>419 Discord bot DashBoard</h1>');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

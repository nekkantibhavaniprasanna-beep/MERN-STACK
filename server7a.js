const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send("Home Page");
});

// About route
app.get('/about', (req, res) => {
    res.send("About Page");
});

// Dynamic route
app.get('/user/:id', (req, res) => {
    res.send("User ID: " + req.params.id);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
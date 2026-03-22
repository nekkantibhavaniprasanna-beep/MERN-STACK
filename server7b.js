const express = require('express');
const app = express();

// Middleware for form data
app.use(express.urlencoded({ extended: true }));

// Form page
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/submit">
            Name: <input type="text" name="name"/>
            <button type="submit">Submit</button>
        </form>
    `);
});

// POST route
app.post('/submit', (req, res) => {
    res.send("Received Name: " + req.body.name);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
const express = require('express');
const app = express();

// Static middleware
app.use(express.static('public'));

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testdb')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// Insert data
app.get('/add', async (req, res) => {
    const user = new User({
        name: "Prasanna",
        age: 20
    });

    await user.save();
    res.send("User Added");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
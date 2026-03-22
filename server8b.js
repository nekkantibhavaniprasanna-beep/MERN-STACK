const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/testdb');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// Fetch data
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running");
});
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

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

// CREATE
app.post('/add', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send("User Added");
});

// READ
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// UPDATE
app.put('/update/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("User Updated");
});

// DELETE
app.delete('/delete/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send("User Deleted");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
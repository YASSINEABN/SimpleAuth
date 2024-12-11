import express from 'express';
import mongoose from 'mongoose';
const app = express();
const uri = "mongodb+srv://anoireyassine:<aTzleT8OUvVXFswD>@cluster0.n48gi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri);
app.listen(3000, () => {
console.log('Server started on http://localhost:3000');
});
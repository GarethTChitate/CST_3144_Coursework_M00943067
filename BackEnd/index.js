const express = require('express');
const { MongoClient, ObjectID } = require ( 'mongodb' )
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

app.use ((req, res, next) => {
    console.log(`Method: ${req.method} | URL: ${req.url}`)
    next();
})

const lessons = [
    { subject : "Full Stack Development", id: 1 , price: 1000, location: "Mauritius", spaces: "10", icon: "fa-solid fa-code"},
    { subject : "UI/UX Design", "id": 2, price: 1000, location: "Mauritius", spaces: "10", icon: "fa-solid fa-pen-nib"},
    { subject : "Software Engineering", id: "3", price: 1000, location: "Mauritius", spaces: "10", icon: "fa-solid fa-laptop-code"},
    { subject : "Python Basics", id: 4, price: 400, location: "Mauritius", spaces: "10", icon: "fa-brands fa-python"},
    { subject :"Cyber Security", id: 5, price: 1000, location: "Mauritius", spaces: "10", icon: "fa-solid fa-shield-halved"},
];

app.get('/lessons', (req, res) => {
    const lessonsNoImages = lessons.map(({ image, ...rest }) => rest)

    res.json(lessonsNoImages)
})

app.use((req, res) => {
    res.status(404).json({error: 'Endpoint not found' })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
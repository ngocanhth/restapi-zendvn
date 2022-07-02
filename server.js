const express = require('express')
const app = express()
const courses = [
    {
        id: 1,
        name: "Nodejs"
    },
    {
        id: 2,
        name: "Reactjs"
    },
    {
        id: 3,
        name: "Mongo database"
    }
]

app.get('/', (req, res) => {
    res.send('Hoc NODEJS API');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course) res.status(404).send('ID not found');
    res.send(course.name);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
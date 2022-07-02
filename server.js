const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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
    if(!course) {
        res.status(404).send('ID not found');
    } else {
        res.send(course.name);
    }
});

app.post('/api/courses/add', (req, res) => {
    const courseID = courses.find(course => course.id === parseInt(req.body.id));
    console.log(req.body);
    if(courseID) {
        res.send('Khóa học đã tồn tại');
    } else {
        const course = {
            id: req.body.id,
            name: req.body.name
        }
        courses.push(course);
       // res.status(200).send("Khoa học đã được thêm thành công");

       res.send(JSON.stringify({
            success: true,
            notice: "Bạn đã thêm thành công",
            data: courses
       }))
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
const http = require('http');

const COURSE = [
    {
        id: 1,
        name: "Nodejs"
    },
    {
        id: 2,
        name: "Reactjs"
    }
]

const server = http.createServer((req, res) => {
    // res.setHeader('Content-type', 'text/html'); // text/html
    // res.write('Hello Word');
    // res.write('<h2>Hello World</h2>');
    // Neu tra ve dang json
    res.setHeader('Content-type', 'application/json')

    
    res.end(JSON.stringify({
        success: true,
        data: COURSE
    }));
})

const PORT = 5000;
server.listen(PORT, () => console.log('Server is running on Port 5000'));
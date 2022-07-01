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
    // res.setHeader('X-Powered-By', 'Nodejs');
    // res.write('Hello Word');
    // res.write('<h2>Hello World</h2>');
    // Neu tra ve dang json
    res.setHeader('Content-type', 'application/json')

    // res.statusCode = 200;
    // res.end(JSON.stringify({
    //     success: true,
    //     data: COURSE
    // }));

    // res.statusCode = 404;

    // Cach viet gon
      res.writeHead(404, {
        'Content-type': 'application/json',
        'X-Powered-By': 'Nodejs'
    })
    res.end(JSON.stringify({
        success: false,
        error: 'Page not found',
        data: null
    }));

  
})

const PORT = 5000;
server.listen(PORT, () => console.log('Server is running on Port 5000'));
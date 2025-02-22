const http = require('http');
const hostname = '127.0.0.1';

const port = 8000;


const server = http.createServer((req, res) => {
    res.statusCode(200);

    res.setHeader('Content-Type', 'text/plain')

    res.end("Hello, I'm learning backend for the first time.")
})


server.listen(() => {
    console.log(`server is listening on http://${hostname}:${port}`);
})
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('>', req.method, req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('WWW Yes!');
});

const port = process.env.PORT || 80;

server.listen(port); 
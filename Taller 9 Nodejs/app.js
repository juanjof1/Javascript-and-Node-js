const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.statuscode = 200;
res.setHeader('content-type', 'text/plain');
res.end('Hello world of Javascript from zero to hero');
});

server.listen(port, host, () => {
    console.log('server runing at ${host}:{port}');

});


const http = require('http');

const hostName = process.env.hostName || '127.0.0.1';

const port = process.env.PORT || 300;

const server = http.createServer((request, response)=>{

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");

    response.write("Hello,\n");
    response.end("Welcome to Kohls, Nick Pierce");
});

server.listen(port, hostName, ()=>{
    console.log(`server running at ${hostName} on port ${port}`);
});

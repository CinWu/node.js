//load http module to create http server
var http = require('http');

var userCount = 0;
//on request, updates and prints userCount, also displays hello and counter
var server = http.createServer(function (request, response) {
    console.log('New connection');
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.end();
});

server.listen(8000);

console.log('Running on localhost:8000');

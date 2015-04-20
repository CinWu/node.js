var http = require('http');
var fileSystem = require('fs');

var userCount = 0;

server = http.createServer();

server.on('request', function (request, response) {
    console.log('New connection');
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n\n');

    response.write('Reading files: \n');
    var read_stream = fileSystem.createReadStream('myfile.txt');
    read_stream.on('data', writeCallback);
    read_stream.on('close', closeCallback);

    function writeCallback(data){
        response.write(data);
    }

    function closeCallback(){
        response.end();
    }

}).listen(8000);

console.log('Server started');

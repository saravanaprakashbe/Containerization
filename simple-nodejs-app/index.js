var http = require('http');
var server = http.createServer(function(request, response) {
response.statusCode = 200;
response.setHeader('Content-Type', 'text/plain');
response.end('Welcome to the World  !');
});
server.listen(3000, function() {
console.log('Server running on port 3000');
});

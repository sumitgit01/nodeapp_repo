var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  res.end('Welcome to Node-App1');
}).listen(3000, "0.0.0.0"); 
console.log('Server running at http://34.205.85.233:3000/'); 

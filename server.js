
// Require the http module
const http = require('http');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
   
// Create a server object
const server = http.createServer((req, res) => {
  // Set the response status code to 500 (Internal Server Error)
  res.statusCode = 500;
  // Set the response header content type to text/plain
  res.setHeader('Content-Type', 'text/plain');
  // Write a message to the response body
  res.end('Something went wrong!');
});

// Listen on defined port 
server.listen(port, () => {
  console.log('Server running on port %s', port);
});


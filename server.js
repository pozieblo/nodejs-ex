
// Require the http module
const http = require('http');
require('dotenv').config();
const timeout = process.env.MY_TIMEOUT;

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
   
// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header content type to text/plain
  res.setHeader('Content-Type', 'text/plain');
  // Set a timeout function to delay the response
  setTimeout(() => {
      // Write the response body
      res.write('Hello World');
      // End the response
      res.end();
    }, timeout);
    
  console.log('Someone tried to call url: ' + req.url);
});

// Listen on defined port 
server.listen(port, () => {
  console.log('Server running on port %s', port);
});


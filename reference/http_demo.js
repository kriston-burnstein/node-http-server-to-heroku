const http = require('http');

// Create a server object
http
  .createServer((req, res) => { //request, response
    // Write a response
    res.write('Hello World');
    res.end();
  })
  .listen(2122, () => console.log('Server running...'));

const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a delay using Promises to avoid blocking the event loop
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000); // 5-second delay
  });

  promise.then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
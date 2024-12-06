/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

const http = require('http');

let requestCount = 0;

const server = http.createServer((req, res) => {
  if (/* req.method === 'GET' && */ req.url === '/') {
    const response = {
      name: 'Server',
      time: new Date().toISOString(),
      requestNr: ++requestCount
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
const PORT = 3100;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

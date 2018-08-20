const http = require('http');
const interval = process.env.INTERVAL || 1000;
const stop = process.env.STOP || 3000;
const serverPort = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return;
  }
  let timer = setInterval(() => {
    console.log(new Date().toUTCString());
  }, interval);
  setTimeout(() => {
    clearInterval(timer);
    res.end(`<h1>server stop <h2>(${new Date().toUTCString()})</h2></h1>`);
  }, stop);
});

server.listen(serverPort, (err) => {
  if (err) {
    return console.log('fatal server error', err);
  }
  console.log(`the server is running on the port ${serverPort}`);
});

const http = require('http');
const startSettings = process.argv.slice(2);
const interval = startSettings[0];
const stop = startSettings[1];
let timer;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    timer = setInterval(() => {
      console.log(new Date().toUTCString());
    }, interval);
    setTimeout(() => {
      clearInterval(timer);
      res.end(`<h1>server stop <h2>(${new Date().toUTCString()})</h2></h1>`);
    }, stop);
  }
});

server.listen(3000, (err) => {
  if (err) {
    return console.log('fatal server error', err);
  }
  console.log(`the server is running on the port 3000`);
});

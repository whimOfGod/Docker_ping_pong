const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8574;

app.use(bodyParser.json());

let pingServers = [];

app.post('/register-ping', (req, res) => {
  const pingServer = req.body;
  pingServers.push(pingServer);
  console.log(`Registered Ping Server: ${pingServer.address}`);
  res.send('Registered successfully');
});

app.post('/send-pong', (req, res) => {
  const pongMessage = req.body.message;
  const randomPingServer = pingServers[Math.floor(Math.random() * pingServers.length)];
  if (randomPingServer) {
    console.log(`Sending Pong to ${randomPingServer.address}`);
  }
  res.send('Pong sent successfully');
});

app.listen(PORT, () => {
  console.log(`Gateway Server is running on port ${PORT}`);
});

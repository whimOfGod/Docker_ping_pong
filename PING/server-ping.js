// server-ping.js
const express = require('express');
const app = express();
const axios = require('axios');

const PORT = 4567;
const REGISTRY_URL = 'http://server-registry:8080/register';
const MESSAGE_BROKER_URL = 'http://message-broker:5672/send';

app.get('/', async (req, res) => {
  try {
    // Enregistrement de l'adresse du serveur-ping auprès du serveur d'annuaire
    await axios.post(REGISTRY_URL, { serverName: 'server-ping', serverAddress: `http://server-ping:${PORT}` });
    
    // Envoie du message "ping" au message broker
    await axios.post(MESSAGE_BROKER_URL, { destination: 'server-pong', message: 'ping' });
    
    res.send('Ping successful!');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error sending ping request.');
  }
});

app.listen(PORT, () => {
  console.log(`Server-ping listening on port ${PORT}`);
});
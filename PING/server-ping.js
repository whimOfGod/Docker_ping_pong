//Exercice 2

// server-ping.js
const express = require('express');
const app = express();
const axios = require('axios');

const PORT = 4567;
const REGISTRY_URL = 'http://server-registry:8080/register';

app.get('/', async (req, res) => {
  try {
    // Enregistrez l'adresse du serveur-ping auprès du serveur d'annuaire
    await axios.post(REGISTRY_URL, { serverName: 'server-ping', serverAddress: `http://server-ping:${PORT}` });
    
    // Obtenez l'adresse du serveur-pong depuis le serveur d'annuaire
    const pongServerAddress = await axios.get('http://server-registry:8080/get-address/server-pong');
    
    // Envoie une requête "pong" au serveur-pong
    await axios.get(pongServerAddress.data);
    
    res.send('Ping successful!');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error sending ping request.');
  }
});

app.listen(PORT, () => {
  console.log(`Server-ping listening on port ${PORT}`);
});


//Exercice 1

// server-ping.js
/*const express = require('express');
const app = express();
const axios = require('axios');

const PORT = 4567;
const PONG_SERVER_URL = 'http://server-pong:4567';

app.get('/', async (req, res) => {
  try {
    // Envoie une requête "pong" au serveur-pong
    await axios.get(PONG_SERVER_URL);
    res.send('Ping successful!');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error sending ping request.');
  }
});

app.listen(PORT, () => {
  console.log(`Server-ping listening on port ${PORT}`);
});*/


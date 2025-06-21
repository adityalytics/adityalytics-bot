const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const secretPath = process.env.SECRET_PATH;
const botToken = process.env.BOT_TOKEN;

app.post(`/${secretPath}`, (req, res) => {
  console.log('🔔 Telegram Update Received:', req.body);
  // This is where you'd process Telegram messages
  res.status(200).send('Received');
});

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const secretPath = process.env.SECRET_PATH || 'adityalytics_webhook_key';

app.post(`/${secretPath}`, (req, res) => {
  console.log('✅ Webhook triggered:', req.body);
  res.status(200).send('Received.');
});

module.exports = app;

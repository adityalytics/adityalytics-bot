const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

// Use environment variables from Vercel
const TOKEN = process.env.BOT_TOKEN;
const SECRET_PATH = process.env.SECRET_PATH;

app.use(bodyParser.json());

// Secure webhook route using secret path
app.post(`/${SECRET_PATH}`, async (req, res) => {
  try {
    const message = req.body.message;
    const chatId = message.chat.id;
    const userText = message.text;

    // Basic reply
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `👋 Hello from Adityalytics!\nYou said: "${userText}"`
      }),
    });

    res.sendStatus(200);
  } catch (err) {
    console.error('Error handling update:', err);
    res.sendStatus(500);
  }
});

// Vercel compatibility
module.exports = app;

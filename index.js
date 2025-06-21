const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN;
const SECRET_PATH = process.env.SECRET_PATH;

app.use(bodyParser.json());

app.post(`/${SECRET_PATH}`, (req, res) => {
  const message = req.body.message;

  if (message && message.text) {
    const chatId = message.chat.id;
    const text = message.text.toLowerCase();

    let replyText = "👋 Hi! Welcome to Adityalytics — the future of financial intelligence.";

    if (text.includes("trade")) {
      replyText = "📈 Here's your expiry trade idea: [Coming Soon]";
    } else if (text.includes("risk")) {
      replyText = "⚠️ Scanning your portfolio risk... [Coming Soon]";
    }

    // Send response back to Telegram
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: replyText
      })
    });
  }

  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("✅ Adityalytics Bot is live.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

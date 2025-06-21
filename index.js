const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN;
const SECRET_PATH = process.env.SECRET_PATH;

app.use(bodyParser.json());

app.post(`/${SECRET_PATH}`, async (req, res) => {
  const message = req.body.message;
  console.log("📩 Incoming Message:", message);

  if (message && message.text) {
    const chatId = message.chat.id;
    const text = message.text.toLowerCase();
    let replyText = "👋 Welcome to Adityalytics — your smart market assistant.";

    if (text.includes("trade")) {
      replyText = "📈 Here's your expiry trade idea: [Coming Soon]";
    } else if (text.includes("risk")) {
      replyText = "⚠️ Risk scan is under development. Stay tuned.";
    }

    // Respond via Telegram
    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: replyText
        })
      });

      const data = await response.json();
      console.log("✅ Telegram response:", data);
    } catch (err) {
      console.error("❌ Telegram send error:", err);
    }
  }

  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("✅ Adityalytics Bot is up and running.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server live on port ${PORT}`);
});

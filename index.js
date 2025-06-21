const express = require("express");
const { Telegraf } = require("telegraf");

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your bot token
const bot = new Telegraf("7662734078:AAGy0XYL2dQPV9Ndr4Oxnqx8LycCf-WsT5g");

bot.start((ctx) => ctx.reply("Welcome to Adityalytics Bot! 🚀"));

bot.launch();
console.log("🤖 Telegram bot started");

app.get("/", (req, res) => {
  res.send("Adityalytics Bot is running ✅");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

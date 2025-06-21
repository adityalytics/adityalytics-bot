export default async function handler(req, res) {
  if (req.method === "POST") {
    const message = req.body?.message?.text || "";
    const chatId = req.body?.message?.chat?.id;

    if (message === "/start") {
      return res.status(200).json({
        method: "sendMessage",
        chat_id: chatId,
        text: "🚀 Welcome to Adityalytics Bot!\nI’m here to help you analyze trades, scan portfolios, and predict smarter moves."
      });
    }

    if (message === "/help") {
      return res.status(200).json({
        method: "sendMessage",
        chat_id: chatId,
        text: "💡 Try commands like:\n/start – Welcome message\n/help – List available commands\nMore coming soon!"
      });
    }

    return res.status(200).json({
      method: "sendMessage",
      chat_id: chatId,
      text: "🤖 Sorry, I didn’t understand that command. Try /help"
    });
  }

  return res.status(200).send("✅ Adityalytics Bot API is live.");
}

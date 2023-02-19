const express = require("express");
const getRandomPrompt = require("./random_prompt");

const app = express();

let PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ affirmation: getRandomPrompt() });
});

const server = app.listen(PORT, () =>
  console.log(`Server is live at localhost:${PORT}`)
);

module.exports = server;

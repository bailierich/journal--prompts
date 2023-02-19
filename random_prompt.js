const prompts = require("./data/prompts.json");

const getRandomPrompt = () =>
  prompts[Math.floor(Math.random() * prompts.length)];
module.exports = getRandomPrompt;

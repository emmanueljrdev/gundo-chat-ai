const express = require("express");
const { getChatResponse } = require("../controllers/chatController");

const chatRouter = express.Router();

chatRouter.post("/", getChatResponse);

module.exports = chatRouter;

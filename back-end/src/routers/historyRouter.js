const express = require("express");
const { fetchHistory } = require("../controllers/historyController");

const historyRouter = express.Router();

historyRouter.get("/history", fetchHistory);

module.exports = historyRouter;

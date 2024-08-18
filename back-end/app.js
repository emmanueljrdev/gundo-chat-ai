require("dotenv").config();
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const cors = require("cors");
const chatRouter = require("./src/routers/chatRouter");
const historyRouter = require("./src/routers/historyRouter");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/chat", chatRouter);
app.use("/api", historyRouter);

module.exports = app;

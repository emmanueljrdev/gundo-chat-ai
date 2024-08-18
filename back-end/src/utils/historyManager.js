const fs = require("fs");
const path = require("path");

const HISTORY_FILE_PATH = path.join(__dirname, "../data/history.json");

let historyCache = [];

const ensureHistoryFileExists = () => {
  if (!fs.existsSync(HISTORY_FILE_PATH)) {
    fs.writeFileSync(HISTORY_FILE_PATH, JSON.stringify([]));
  }
};

const loadHistory = () => {
  try {
    historyCache = JSON.parse(fs.readFileSync(HISTORY_FILE_PATH, "utf8"));
  } catch (error) {
    console.error("Error reading history:", error.message);
    historyCache = [];
  }
};

ensureHistoryFileExists();
loadHistory();

const saveToHistory = (entry) => {
  try {
    historyCache.push(entry);
    fs.writeFileSync(HISTORY_FILE_PATH, JSON.stringify(historyCache, null, 2));
  } catch (error) {
    console.error("Error saving to history:", error.message);
  }
};

const getHistory = () => {
  return historyCache;
};

module.exports = { saveToHistory, getHistory };

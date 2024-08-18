const { getHistory } = require("../utils/historyManager");

const fetchHistory = (req, res) => {
  try {
    const history = getHistory();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: "Hubo un error con el historial" });
  }
};

module.exports = { fetchHistory };

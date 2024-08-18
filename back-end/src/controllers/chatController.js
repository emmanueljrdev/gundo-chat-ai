const axios = require("axios");
const { saveToHistory } = require("../utils/historyManager");

const nutritionKeywords = [
  "nutrición",
  "dieta",
  "alimentos",
  "calorías",
  "vitaminas",
  "alimentación",
  "nutricionales",
  "salud",
  "minerales",
  "nutrientes",
  "comidas",
  "hábitos",
  "buenos",
  "peso",
  "ejercicio",
  "actividad",
  "fisica",
  "fuerza",
  "resistencia",
  "grasa",
  "proteína",
  "agua",
  "azúcar",
  "sodio",
  "potasio",
  "gracias",
];

const isNutritionRelated = (message) => {
  const result = nutritionKeywords.some((keyword) =>
    message.toLowerCase().includes(keyword)
  );
  return result;
};

const getChatResponse = async (req, res) => {
  try {
    const { message } = req.body;
    const timestamp = new Date().toISOString();

    if (!isNutritionRelated(message)) {
      const reply =
        "Este chat está diseñado para responder preguntas sobre nutrición. ¿Hay algo relacionado con tu alimentación que te gustaría saber?";

      saveToHistory({
        timestamp,
        message,
        reply,
      });

      return res.json({ reply });
    }

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-8b-8192",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content.trim();

    saveToHistory({
      timestamp,
      message,
      reply,
    });

    res.json({ reply });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};

module.exports = { getChatResponse };

import { Box, Button, Flex, Icon, Text, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { API_URL } from "../service/API_URL";
import axios from "axios";

export const ChatComponent = () => {
  // Estados

  const [message, setMessage] = useState("");
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);

  //   useEffect

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/history`);
        const fetchedQuestions = data.map((entry) => entry.message);
        const fetchedResponses = data.map((entry) => entry.reply);

        console.log("Questions:", fetchedQuestions);
        console.log("Responses:", fetchedResponses);

        setQuestions(fetchedQuestions);
        setResponses(fetchedResponses);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  //   Funciones

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${API_URL}/api/chat`, {
        message,
      });

      setQuestions([...questions, message]);
      setResponses([...responses, data.reply]);

      setMessage("");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  // Estilos
  const chatContainer = {
    h: "90%",
    position: "relative",
    flexDirection: "column",
    bg: "white",
    rounded: "xl",
    shadow: "2xl",
  };

  return (
    <Flex sx={chatContainer}>
      <Flex
        direction="column"
        overflowY="auto"
        py={10}
        position="relative"
        h="full"
        w="full"
      >
        <Box maxW="62rem" mx="auto" px={8}>
          {questions.map((question, index) => (
            <Flex
              key={`question-${index}`}
              flexDirection="column"
              mb={2}
              gap={4}
            >
              <Flex
                alignSelf="flex-end"
                bg="#08563e"
                color="white"
                p={2}
                borderRadius="md"
                maxW="80%"
                mb={1}
              >
                <Text>{question}</Text>
              </Flex>

              {responses[index] && (
                <Flex
                  alignSelf="flex-start"
                  bg="#249c07"
                  color="white"
                  p={2}
                  borderRadius="md"
                  maxW="80%"
                >
                  <Text>{responses[index]}</Text>
                </Flex>
              )}
            </Flex>
          ))}
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        gap={10}
        mx="auto"
        w={{ base: "95%", md: "80%", lg: "60%" }}
        mb={10}
        bg="#c1e0c1"
        rounded="full"
        px={4}
      >
        <Textarea
          rows={2}
          rounded="full"
          resize="none"
          border="none"
          minW="10rem"
          maxW="full"
          w="full"
          placeholder="Escribe tu pregunta"
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
        ></Textarea>
        <Button
          rounded="full"
          h={12}
          w={12}
          onClick={handleSubmit}
          bg="#08563e"
        >
          <Icon as={IoSend} fontSize="1.5rem" color="white" />
        </Button>
      </Flex>
    </Flex>
  );
};

import { Box, Flex, Image } from "@chakra-ui/react";
import { ChatComponent } from "../components/ChatComponent";

export const Dashboard = () => {
  const container = {
    h: "100vh",
    bg: "white",
  };

  return (
    <Box sx={container}>
      <Box h="full" py={0} px={20}>
        <Box h={20}>
          <Image src="/images/tea-leaves.png" mx="auto" zIndex="10" h={20} />
        </Box>
        <ChatComponent />
      </Box>
    </Box>
  );
};

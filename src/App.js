import "./App.css";
import SearchArea from "./components/SearchArea";
import WeatherArea from "./components/WeatherArea";
import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

function App() {
  return (
    <VStack p={4} minH="100vh" w="100%" justifyContent="center" bg="#E6EFE9">
      <VStack
        w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "40vw" }}
        p="5"
        bg="#C8D3D5"
        borderRadius="2xl"
        boxShadow="base"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <SearchArea />
        <WeatherArea />
      </VStack>
    </VStack>
  );
}

export default App;

import React from "react";
import { HStack, Input, Button } from "@chakra-ui/react";
import { useGlobalContext } from "../assets/context";

function SearchArea() {
  const { city, setCity, fetchWeather } = useGlobalContext();
  return (
    <HStack>
      <Input
        variant="filled"
        bg="#E6EFE9"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button colorScheme="cyan" onClick={fetchWeather}>
        Search
      </Button>
    </HStack>
  );
}

export default SearchArea;

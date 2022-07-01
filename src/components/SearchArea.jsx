import React from "react";
import {
  HStack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../assets/context";

function SearchArea() {
  const { city, setCity, fetchWeather } = useGlobalContext();
  return (
    <HStack w="100%">
      <InputGroup>
        <InputLeftElement children={<FaSearch color="gray" />} />
        <Input
          variant="filled"
          bg="#E6EFE9"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <InputRightElement w="4.5rem">
          <Button
            borderLeftRadius="none"
            colorScheme="cyan"
            onClick={fetchWeather}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
}

export default SearchArea;

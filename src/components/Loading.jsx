import React from "react";
import { VStack, Image, Heading } from "@chakra-ui/react";
import Img from "../images/satellite.png";

function Loading() {
  return (
    <VStack pt={4} rowGap={4}>
      <Image src={Img} w="6rem" />
      <Heading size="md" textTransform="capitalize">
        hang on, fetching weather data from satellite
      </Heading>
    </VStack>
  );
}

export default Loading;

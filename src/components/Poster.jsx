import React from "react";
import Img from "../images/poster.svg";
import { VStack, Image, Heading } from "@chakra-ui/react";

function Poster() {
  return (
    <VStack pt={8}>
      <Image src={Img} h="10rem" />
      <Heading size="md" textTransform="capitalize">
        find the weather of your city
      </Heading>
    </VStack>
  );
}

export default Poster;

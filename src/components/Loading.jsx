import React from "react";
import { VStack, Image, Heading } from "@chakra-ui/react";
import Img from "../images/satellite.png";
import { motion } from "framer-motion";

function Loading() {
  return (
    <VStack
      pt={4}
      rowGap={4}
      as={motion.div}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Image src={Img} w="6rem" as={motion.img} layoutId="satellite" />
      <Heading size="md" textTransform="capitalize">
        hang on, fetching weather data from satellite
      </Heading>
    </VStack>
  );
}

export default Loading;

import React from "react";
import Img from "../images/poster.svg";
import ImgSatellite from "../images/satellite.png";
import { VStack, Image, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Poster() {
  return (
    <VStack
      pt={8}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Image src={ImgSatellite} as={motion.img} w="2rem" layoutId="satellite" />
      <Image src={Img} h="10rem" />
      <Heading size="md" textTransform="capitalize">
        find the weather of your city
      </Heading>
    </VStack>
  );
}

export default Poster;

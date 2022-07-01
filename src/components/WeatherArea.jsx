import React from "react";
import {
  VStack,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useGlobalContext } from "../assets/context";
import Temperature from "../images/temperature.svg";
import Wind from "../images/wind.svg";
import Pressure from "../images/pressure.svg";
import Humidity from "../images/humidity.svg";
import Poster from "./Poster";
import Loading from "./Loading";
import { motion } from "framer-motion";

const PrimaryInfo = ({ name, temp, description, icon }) => {
  return (
    <VStack
      w="100%"
      as={motion.div}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
    >
      <Heading as={motion.h1}>{name}</Heading>
      <HStack
        w="100%"
        justifyContent="space-around"
        flexWrap="wrap-reverse"
        as={motion.div}
      >
        <VStack>
          <Heading size="xl">{temp.toFixed()} &deg;C</Heading>
          <Text textTransform="capitalize">{description}</Text>
        </VStack>
        <Image src={icon} w="8rem" />
      </HStack>
    </VStack>
  );
};

const SingleInfo = ({ icon, parameter, value }) => {
  return (
    <HStack
      alignItems="flex-start"
      justifyContent="center"
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Image src={icon} />
      <VStack alignItems="flex-start">
        <Heading size="md">{parameter}</Heading>
        <Text>{value}</Text>
      </VStack>
    </HStack>
  );
};

const SecondaryInfo = ({ sunSet, pressure, humidity, speed }) => {
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <VStack w="100%">
      <SimpleGrid pt={4} columns={2} w="100%" spacingY={8}>
        <SingleInfo
          icon={Temperature}
          parameter="Sun Set"
          value={getTime(sunSet)}
        />
        <SingleInfo
          icon={Humidity}
          parameter="Humidity"
          value={humidity + " %"}
        />
        <SingleInfo
          icon={Pressure}
          parameter="Pressure"
          value={pressure + " hPa"}
        />
        <SingleInfo icon={Wind} parameter="Wind" value={speed + " m/s"} />
      </SimpleGrid>
    </VStack>
  );
};

function WeatherArea() {
  const { waiting, loading, weather, icon } = useGlobalContext();

  if (waiting) {
    return <Poster />;
  }

  if (loading) {
    return <Loading />;
  }

  const { name, weather: info, main, sys, wind } = weather;
  const { temp, pressure, humidity } = main;
  const { description } = info[0];
  const { sunset } = sys;
  const { speed } = wind;

  return (
    <VStack pt={4} w="100%">
      <PrimaryInfo
        name={name}
        temp={temp}
        description={description}
        icon={icon}
      />
      <SecondaryInfo
        sunSet={sunset}
        pressure={pressure}
        humidity={humidity}
        speed={speed}
      />
    </VStack>
  );
}

export default WeatherArea;

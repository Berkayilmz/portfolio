import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const AboutMe = ({ title, texts }) => (
  <VStack spacing={6} maxW="700px" alignItems="flex-start" color="white" textAlign="left">
    <Heading size="2xl" fontWeight="extrabold" mb={6}>
      {title}
    </Heading>
    {texts.map((text, idx) => (
      <Text
        key={idx}
        fontSize={idx === 0 ? "lg" : "md"}
        color={idx === 0 ? "gray.300" : "gray.400"}
        lineHeight="tall"
      >
        {text}
      </Text>
    ))}
  </VStack>
);

export default AboutMe;
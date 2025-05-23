import React from "react";
import { VStack, Heading, Text, Box, Accordion, Flex, Spacer } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const AboutMe = ({ title, texts }) => {

  const items = [
    {
      value: "about",
      title,
      text: texts.map((text, idx) => (
        <Text
          key={idx}
          mb={idx !== texts.length - 1 ? 3 : 0}
          fontSize={idx === 0 ? "lg" : "md"}
          color={idx === 0 ? "gray.300" : "gray.400"}
          lineHeight="tall"
        >
          {text}
        </Text>
      )),
    },
  ];

  return (
    <VStack spacing={6} maxW="700px" alignItems="flex-start" color="white" textAlign="left">

      {/* Mobilde accordion */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Accordion.Root collapsible>
          {items.map(({ value, title, text }) => (
            <Accordion.Item key={value} value={value}>
              <Accordion.ItemTrigger borderBottom="none">
                <Flex justify="space-between" align="center" width="100%">
                  <Box fontWeight="bold" fontSize="2xl" color="white">
                    {title}
                  </Box>

                  <IoIosArrowDown size={24} color="white" />
                </Flex>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>{text}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>

      {/* Masaüstü görünümü */}
      <Box display={{ base: 'none', md: 'block' }}>
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
      </Box>
    </VStack>
  );
};

export default AboutMe;
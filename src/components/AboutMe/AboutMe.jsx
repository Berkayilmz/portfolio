import React from "react";
import { VStack, Heading, Text, Box, Accordion, Flex } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const AboutMe = ({ title, texts, cvText }) => {
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

      {/* Masaüstü görünümü animasyonlu */}
      <MotionBox
        display={{ base: 'none', md: 'block' }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <MotionHeading size="2xl" fontWeight="extrabold" mb={6} variants={itemVariants}>
          {title}
        </MotionHeading>
        {texts.map((text, idx) => (
          <MotionText
            key={idx}
            fontSize={idx === 0 ? "lg" : "md"}
            color={idx === 0 ? "gray.300" : "gray.400"}
            lineHeight="tall"
            variants={itemVariants}
          >
            {text}
          </MotionText>
        ))}
        <MotionText
          mt={4}
          as="a"
          href="/assets/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          color="cyan.400"
          fontWeight="semibold"
          _hover={{ textDecoration: "underline" }}
          variants={itemVariants}
          cursor="pointer"
        >
          {cvText}
        </MotionText>
      </MotionBox>
    </VStack>
  );
};

export default AboutMe;
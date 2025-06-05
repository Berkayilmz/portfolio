import React from "react";
import { Box, VStack, HStack, Heading, Text } from "@chakra-ui/react";
import ProgressComponent from "../Progress/ProgressComponent";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const MotionHStack = motion(HStack);

const SkillsList = ({ title, skillsData }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <MotionBox
      ref={ref}
      maxWidth="1000px"
      mx="auto"
      p={4}
      borderRadius="md"
      mb={12}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <MotionBox
        as={Heading}
        size="3xl"
        mb={4}
        textAlign="center"
        color="white"
        fontWeight="bold"
        variants={itemVariants}
      >
        {title}
      </MotionBox>
      <VStack spacing={6} align="stretch">
        {skillsData.map(({ label, value }, idx) => (
          <MotionHStack
            key={idx}
            width={{ base: "" }}
            justifyContent="space-between"
            p={2}
            borderRadius="md"
            borderWidth={1}
            bg="blackAlpha.600"
            variants={itemVariants}
          >
            <Text
              fontWeight="bold"
              color="white"
              minWidth="120px"
              textAlign="left"
            >
              {label}
            </Text>
            <Box flex="1" maxWidth="300px" ml={4}>
              <ProgressComponent value={value} />
            </Box>
          </MotionHStack>
        ))}
      </VStack>
    </MotionBox>
  );
};

export default SkillsList;
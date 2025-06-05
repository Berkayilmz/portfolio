import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const EducationList = ({ title, educationData }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // sadece ilk defa görünürken tetikle
    threshold: 0.3,    // %30 göründüğünde tetiklenir
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
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionBox
      ref={ref}
      px={{ base: 4 }}
      py={{ base: 8, md: 4 }}
      maxWidth="1000px"
      mx="auto"
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

      <Box bg="blackAlpha.600" p={6} borderRadius="lg">
        <VStack align="flex-start" spacing={4}>
          {educationData.map(({ label, value }, idx) => (
            <MotionBox
              key={idx}
              textAlign="left"
              variants={itemVariants}
            >
              <Text fontWeight="bold" fontSize="md" color="white">
                {label}
              </Text>
              <Text fontSize="sm" color="gray.300">
                {value}
              </Text>
            </MotionBox>
          ))}
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default EducationList;
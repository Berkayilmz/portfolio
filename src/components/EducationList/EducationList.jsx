import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const EducationList = ({ title, educationData }) => (
  <Box px={{ base: 4 }} py={{ base: 8, md: 4 }} maxWidth="1000px" mx="auto">
    <Heading size="3xl" mb={4} textAlign="center" color="white">
      <strong>{title}</strong>
    </Heading>
    <Box bg="blackAlpha.600" p={6} borderRadius="lg">
      <VStack align="flex-start" spacing={4}>
        {educationData.map(({ label, value }, idx) => (
          <Box key={idx} textAlign="left">
            <Text fontWeight="bold" fontSize="md" color="white">
              {label}
            </Text>
            <Text fontSize="sm" color="gray.300">
              {value}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  </Box>
);

export default EducationList;
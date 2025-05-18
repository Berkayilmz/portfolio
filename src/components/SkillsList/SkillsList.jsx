import React from "react";
import { Box, VStack, HStack, Heading, Text } from "@chakra-ui/react";
import ProgressComponent from "../Progress/ProgressComponent";

const SkillsList = ({ title, skillsData }) => (
  <Box maxWidth="1000px" mx="auto" p={4} borderRadius="md" mb={12}>
    <Heading size="3xl" mb={4} textAlign="center" color="white">
      <strong>{title}</strong>
    </Heading>
    <VStack spacing={6} align="stretch">
      {skillsData.map(({ label, value }, idx) => (
        <HStack
          key={idx}
          justifyContent="space-between"
          p={2}
          borderRadius="md"
          borderWidth={1}
          bg='blackAlpha.600'
        >
          <Text fontWeight="bold" color="white" minWidth="120px" textAlign="left">
            {label}
          </Text>
          <Box flex="1" maxWidth="300px" ml={4}>
            <ProgressComponent value={value} />
          </Box>
        </HStack>
      ))}
    </VStack>
  </Box>
);

export default SkillsList;
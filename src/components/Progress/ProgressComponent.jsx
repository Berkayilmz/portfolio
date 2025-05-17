import React from "react";
import { Box, Text, Progress } from "@chakra-ui/react";

const ProgressComponent = ({ label, value }) => {
  const numericValue = typeof value === "string" ? parseInt(value) : value;

  return (
    <Box>
      <Text fontWeight="bold" color="white" mb={1}>
        {label}
      </Text>
      <Progress.Root maxW="240px" striped animated>
        <Progress.Track>
          <Progress.Range style={{ width: `${numericValue}%` }} />
        </Progress.Track>
      </Progress.Root>
    </Box>
  );
};

export default ProgressComponent;
import React from "react";
import { Box, Image } from "@chakra-ui/react";

const PhoneWithApp = ({ title }) => {
  return (
    <Box
      width="250px"
      height="470px"
      overflow="hidden"
      borderRadius="30px"
      boxShadow="0 0 15px rgba(0,0,0,0.3)"
      bg='blackAlpha.800'
    >
      <Image
        src={`/assets/AppPng/${title}.png`}
        alt={`${title} Screenshot`}
        width="100%"
        height="100%"
        objectFit="contain"
        userSelect="none"
        draggable={false}
        filter='brightness(0.9)'
        borderRadius="30px"
      />
    </Box>
  );
};

export default PhoneWithApp;
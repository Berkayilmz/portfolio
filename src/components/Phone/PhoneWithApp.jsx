import React from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";

const PhoneWithApp = ({ title }) => {
  const boxWidth = useBreakpointValue({ base: "145px", md: "214px" });
  const boxHeight = useBreakpointValue({ base: "272px", md: "402px" });
  const borderRadius = useBreakpointValue({ base: "0px", md: "30px" });

  return (
    <Box
      width={boxWidth}
      height={boxHeight}
      overflow="hidden"
      borderRadius={borderRadius}
      boxShadow="0 0 15px rgba(0,0,0,0.3)"
      bg="blackAlpha.800"
      mx="auto"
    >
      <Image
        src={`/assets/AppPng/${title}.png`}
        alt={`${title} Screenshot`}
        width="100%"
        height="100%"
        objectFit="contain"
        userSelect="none"
        draggable={false}
        filter="brightness(0.9)"
        borderRadius={borderRadius}
      />
    </Box>
  );
};

export default PhoneWithApp;
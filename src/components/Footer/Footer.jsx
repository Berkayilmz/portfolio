import React from "react";
import { Box, HStack, Text, Link, Icon } from "@chakra-ui/react";
import { FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      py={6}
      textAlign="center"
      color="gray.400"
      fontSize="sm"
      px={4}
      width='100%'
      borderTop="1px solid"
      borderColor="gray.700"  // Divider rengi
      mt={8}                   // Üstten biraz boşluk
    >
      <Text mb={2}>Tüm Haklar Saklıdır © 2025 Berkay Yılmaz</Text>
      <Text mb={4}>Ziyaretiniz için teşekkür ederim. Görüşmek üzere!</Text>
      <HStack
        justify="center"
        wrap="wrap"
        spacing={3}
        color="cyan.400"
        fontWeight="semibold"
        fontSize="md"
      >
        <Text whiteSpace="nowrap">Hazırlayan:</Text>
        <Icon as={FaLaptopCode} boxSize={6} />
        <Link
          href="https://github.com/Berkayilmz"
          isExternal
          whiteSpace="nowrap"
          _hover={{ textDecoration: "underline", color: "cyan.600" }}
        >
          Berkay Yılmaz
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;
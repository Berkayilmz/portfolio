import React from "react";
import { Box, SimpleGrid, Heading, Text, Link, Flex } from "@chakra-ui/react";
import PhoneWithApp from "../Phone/PhoneWithApp";

const ProjectsList = ({ title, projectsData, viewOnGitHub }) => (
  <Box
    height="100vh"
    bg="transparent"
    px={{ base: 4, md: 12 }}
    py={{ base: 8, md: 12 }}
    scrollSnapAlign="start"
    color="white"
  >
    <Heading size="xl" mb={6} color="cyan.400" textAlign="center">
      {title}
    </Heading>

    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} maxWidth="1200px" mx="auto">
      {projectsData.map(({ title, description, link, image }, idx) => (
        <Box
          key={idx}
          bg="blackAlpha.600"
          p={5}
          borderRadius="md"
          boxShadow="md"
          _hover={{ bg: "blackAlpha.800" }}
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Heading
            fontSize="lg"
            fontWeight="bold"
            mb={4}
            textAlign="center"
            width="100%"
          >
            {title}
          </Heading>

          <SimpleGrid templateColumns="1fr 2fr" gap={6} flex="1" mb={4} alignItems="center">
            {/* Sol: Telefon + Uygulama */}
            <Box
              borderRadius="md"
              overflow="hidden"
              bg="gray.700"
              maxHeight="320px"   // Küçültüldü
              maxWidth="150px"    // Genişlik sınırı eklendi
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"           // Küçük ekranlarda ortalamak için
              borderWidth={3}
              borderColor='#c96216'
            >
              <PhoneWithApp title={title} />
            </Box>

            {/* Sağ: Açıklama ve link */}
            <Flex direction="column" justifyContent="center" ml={4} height="100%">
              <Text
                color="gray.300"
                lineHeight="tall"
                noOfLines={8}
                overflow="hidden"
                mb={4}
              >
                {description}
              </Text>
              <Box textAlign="right" mt="auto">
                <Link
                  href={link}
                  isExternal
                  color="cyan.400"
                  fontWeight="semibold"
                >
                  {viewOnGitHub}
                </Link>
              </Box>
            </Flex>
          </SimpleGrid>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default ProjectsList;
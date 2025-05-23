import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Link,
  Flex,
  VStack,
  Portal,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import PhoneWithApp from "../Phone/PhoneWithApp";

const ProjectsList = ({ title, projectsData, viewOnGitHub }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const prevImage = () => {
    if (!selectedProject || !selectedProject.images) return;
    setCurrentImageIndex((idx) =>
      idx === 0 ? selectedProject.images.length - 1 : idx - 1
    );
  };

  const nextImage = () => {
    if (!selectedProject || !selectedProject.images) return;
    setCurrentImageIndex((idx) =>
      idx === selectedProject.images.length - 1 ? 0 : idx + 1
    );
  };

  return (
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

      {isMobile ? (
        <SimpleGrid columns={2} gap={4} maxWidth="100%" mx="auto">
          {projectsData.map(({ title, link }, idx) => (
            <Box
              key={idx}
              bg="blackAlpha.600"
              p={3}
              borderRadius="md"
              boxShadow="md"
              _hover={{ bg: "blackAlpha.800", cursor: "pointer" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              onClick={() => setSelectedProject(projectsData[idx])}
            >
              <Heading fontSize="md" fontWeight="bold" mb={3} width="100%">
                {title}
              </Heading>
              <Box
                borderRadius="md"
                overflow="hidden"
                bg="gray.700"
                maxHeight="270px"
                maxWidth="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                borderWidth={2}
                borderColor="#c96216"
                mb={3}
                width="100%"
              >
                <PhoneWithApp title={title} />
              </Box>
              <Link
                href={link}
                isExternal
                color="cyan.400"
                fontWeight="semibold"
                fontSize="12px"
                width="100%"
                textAlign="center"
              >
                {viewOnGitHub}
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={2} gap={6} maxWidth="1200px" mx="auto">
          {projectsData.map(({ title, description, link }, idx) => (
            <Box
              key={idx}
              bg="blackAlpha.600"
              p={5}
              borderRadius="md"
              boxShadow="md"
              _hover={{ bg: "blackAlpha.800", cursor: "pointer" }}
              display="flex"
              flexDirection="column"
              height="100%"
              onClick={() => setSelectedProject(projectsData[idx])}
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

              <SimpleGrid
                templateColumns="1fr 2fr"
                gap={6}
                flex="1"
                mb={4}
                alignItems="center"
              >
                <Box
                  borderRadius="md"
                  overflow="hidden"
                  bg="gray.700"
                  maxHeight="320px"
                  maxWidth="150px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  borderWidth={3}
                  borderColor="#c96216"
                >
                  <PhoneWithApp title={title} />
                </Box>

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
                    <Link href={link} isExternal color="cyan.400" fontWeight="semibold">
                      {viewOnGitHub}
                    </Link>
                  </Box>
                </Flex>
              </SimpleGrid>
            </Box>
          ))}
        </SimpleGrid>
      )}

      {/* Modal */}
      {selectedProject && (
        <Portal>
          <Box
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            bg="rgba(0, 0, 0, 0.7)"
            zIndex={1500}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              bg="gray.900"
              p={6}
              borderRadius="md"
              maxW="600px"
              maxH="80vh"
              overflowY="auto"
              color="white"
              boxShadow="lg"
              position="relative"
            >
              <Heading mb={4}>{selectedProject.title}</Heading>

              {/* Slider */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <Flex alignItems="center" mb={6} position="relative">
                  <Button
                    onClick={prevImage}
                    position="absolute"
                    left={0}
                    zIndex={10}
                    colorScheme="cyan"
                    size="sm"
                  >
                    {"<"}
                  </Button>
                  <Box flex="1" textAlign="center" mx={10}>
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      maxH="300px"
                      borderRadius="md"
                      mx="auto"
                    />
                  </Box>
                  <Button
                    onClick={nextImage}
                    position="absolute"
                    right={0}
                    zIndex={10}
                    colorScheme="cyan"
                    size="sm"
                  >
                    {">"}
                  </Button>
                </Flex>
              )}

              <Text mb={6}>{selectedProject.description}</Text>

              <Flex justifyContent="flex-end" gap={4}>
                <Button onClick={closeModal} colorScheme="cyan">
                  Close
                </Button>
                <Link
                  href={selectedProject.link}
                  isExternal
                  color="cyan.400"
                  fontWeight="semibold"
                  alignSelf="center"
                >
                  {viewOnGitHub}
                </Link>
              </Flex>
            </Box>
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default ProjectsList;
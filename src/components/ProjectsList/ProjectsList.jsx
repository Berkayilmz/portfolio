import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Link,
  Flex,
  Portal,
  Button,
  Image,
  useBreakpointValue,
  CloseButton,
} from "@chakra-ui/react";
import PhoneWithApp from "../Phone/PhoneWithApp";

const chunkArray = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

const ProjectsList = ({ title, projectsData, viewOnGitHub }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // Sayfalama için durum
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobile ? 2 : 2; // Mobilde 2 başlık+fotoğraf gösterelim
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setZoomed(false);
  };

  const prevImage = () => {
    if (!selectedProject || !selectedProject.images) return;
    setCurrentImageIndex((idx) =>
      idx === 0 ? selectedProject.images.length - 1 : idx - 1
    );
    setZoomed(false);
  };

  const nextImage = () => {
    if (!selectedProject || !selectedProject.images) return;
    setCurrentImageIndex((idx) =>
      idx === selectedProject.images.length - 1 ? 0 : idx + 1
    );
    setZoomed(false);
  };

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Sayfaya göre projeleri böl
  const displayedProjects = projectsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

      {/* Mobilde sadece başlık ve fotoğraf göster */}
      {isMobile ? (
        <SimpleGrid columns={2} gap={6} maxWidth="1200px" mx="auto">
          {displayedProjects.map(({ title, link }, idx) => (
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
              onClick={() => setSelectedProject(displayedProjects[idx])}
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
        // Web görünümü orijinal gibi kalıyor
        <SimpleGrid columns={2} gap={6} maxWidth="1200px" mx="auto">
          {displayedProjects.map(({ title, description, link }, idx) => (
            <Box
              key={idx}
              bg="blackAlpha.600"
              p={5}
              borderRadius="md"
              boxShadow="md"
              _hover={{ bg: "blackAlpha.800", cursor: "pointer" }}
              display="flex"
              flexDirection="column"
              height="50vh"
              onClick={() => setSelectedProject(displayedProjects[idx])}
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
                  maxHeight="384px"
                  maxWidth="180px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  ml={2}
                  borderWidth={3}
                  borderColor="cyan.400"
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

      {/* Sayfalama Butonları */}
      <Flex justifyContent="center" mt={8} gap={4} flexWrap="wrap">
        <Button
          onClick={() => changePage(currentPage - 1)}
          isDisabled={currentPage === 1}
          backgroundColor='cyan.400'
        >
          Önceki
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i}
            onClick={() => changePage(i + 1)}
            variant={currentPage === i + 1 ? "solid" : "outline"}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          onClick={() => changePage(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          backgroundColor='cyan.400'
        >
          Sonraki
        </Button>
      </Flex>

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
              maxW="550px"
              maxH="100vh"
              overflowY="auto"
              color="white"
              boxShadow="lg"
              position="relative"
            >
              <CloseButton
                position="absolute"
                top={4}
                right={4}
                onClick={closeModal}
                color="white"
                zIndex={10}
              />
              {!zoomed && <Heading mb={4}>{selectedProject.title}</Heading>}

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
                    background="transparent"
                    _hover={{ bg: "cyan.600", color: "white" }}
                    color="white"
                  >
                    {"<"}
                  </Button>
                  <Box
                    flex="1"
                    textAlign="center"
                    mx={10}
                    onClick={() => setZoomed(!zoomed)}
                    cursor={zoomed ? "zoom-out" : "zoom-in"}
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      maxH={zoomed ? "60vh" : "400px"}
                      borderRadius="md"
                      mx="auto"
                      my="10"
                      transition="transform 0.3s ease"
                      transform={zoomed ? "scale(1.1)" : "scale(1)"}
                    />
                  </Box>
                  <Button
                    onClick={nextImage}
                    position="absolute"
                    right={0}
                    zIndex={10}
                    colorScheme="cyan"
                    size="sm"
                    background="transparent"
                    _hover={{ bg: "cyan.600", color: "white" }}
                    color="white"
                  >
                    {">"}
                  </Button>
                </Flex>
              )}

              {/* Açıklama */}
              {!zoomed && (
                <>
                  <Text mb={6}>{selectedProject.description}</Text>
                  <Flex justifyContent="flex-end" gap={4}>
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
                </>
              )}
            </Box>
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default ProjectsList;
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



const ProjectsList = ({ title, projectsData, viewOnGitHub }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // Fullscreen foto popup state
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Sayfalama durumu
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobile ? 2 : 2; // Her zaman 2 gösteriliyor, istersen mobilde 1 yapabilirsin
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

  // Gösterilecek projeleri sayfaya göre böl
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

      {/* Proje kartları */}
      <SimpleGrid columns={isMobile ? 2 : 2} gap={6} maxWidth="1200px" mx="auto">
        {displayedProjects.map(({ title, description, link }, idx) => (
          <Box
            key={idx}
            bg="blackAlpha.600"
            p={isMobile ? 3 : 5}
            borderRadius="md"
            boxShadow="md"
            _hover={{ bg: "blackAlpha.800", cursor: "pointer" }}
            display="flex"
            flexDirection="column"
            minHeight={isMobile ? "auto" : "380px"}
            onClick={() => setSelectedProject(displayedProjects[idx])}
          >
            <Heading
              fontSize={isMobile ? "md" : "lg"}
              fontWeight="bold"
              mb={4}
              textAlign="center"
              width="100%"
            >
              {title}
            </Heading>

            <SimpleGrid
              templateColumns={isMobile ? "1fr" : "180px 1fr"}
              gap={6}
              flex="1"
              mb={4}
              alignItems="center"
            >
              <Box
                borderRadius="md"
                overflow="hidden"
                bg="gray.700"
                width={isMobile ? "100%" : "150px"}
                height={isMobile ? "auto" : "320px"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                borderWidth={3}
                borderColor="cyan.400"
              >
                <PhoneWithApp title={title} />
              </Box>

              {!isMobile && (
                <Flex direction="column" justifyContent="center" height="100%">
                  <Text
                    color="gray.300"
                    lineHeight="tall"
                    noOfLines={8}
                    overflow="hidden"
                    mb={4}
                    fontSize={14}
                  >
                    {description}
                  </Text>
                  <Box textAlign="right" mt="auto">
                    <Link href={link} isExternal color="cyan.400" fontWeight="semibold">
                      {viewOnGitHub}
                    </Link>
                  </Box>
                </Flex>
              )}
            </SimpleGrid>
          </Box>
        ))}
      </SimpleGrid>

      {/* Sayfalama Butonları */}
      <Flex justifyContent="center" mt={8} gap={4} flexWrap="wrap">
        <Button
          onClick={() => changePage(currentPage - 1)}
          isDisabled={currentPage === 1}
          backgroundColor="cyan.400"
        >
          Önceki
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i}
            onClick={() => changePage(i + 1)}
            variant={currentPage === i + 1 ? "solid" : "outline"}
            colorScheme="cyan"
          >
            {i + 1}
          </Button>
        ))}
        <Button
          onClick={() => changePage(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          backgroundColor="cyan.400"
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
              maxH="90vh"
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
                <Flex alignItems="center" mb={6} position="relative" overflow="hidden">
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
                    onClick={() => setFullscreenImage(selectedProject.images[currentImageIndex])}
                    cursor="zoom-in"
                    maxWidth="100%"
                    maxHeight="80vh"
                    overflow="hidden"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      maxHeight={zoomed ? "60vh" : "400px"}
                      borderRadius="md"
                      mx="auto"
                      my="10"
                      transition="transform 0.3s ease"
                      transform={zoomed ? "scale(1.1)" : "scale(1)"}
                      objectFit="contain"
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

      {/* Fullscreen Fotoğraf Popup */}
      {fullscreenImage && (
        <Portal>
          <Box
            position="fixed"
            inset={0}
            bg="rgba(0, 0, 0, 0.9)"
            zIndex={1600}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CloseButton
              position="absolute"
              top={4}
              right={4}
              onClick={() => setFullscreenImage(null)}
              color="white"
              zIndex={1700}
            />
            <Image
              src={fullscreenImage}
              alt="Fullscreen"
              maxH="90vh"
              maxW="90vw"
              objectFit="contain"
              cursor="zoom-out"
              onClick={() => setFullscreenImage(null)}
            />
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default ProjectsList;
import React from "react";
import { VStack, Image, Heading, Text, HStack, Icon, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaReact } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiSelenium } from "react-icons/si";
import profile from "../../assets/profile.png";

const ProfileCard = ({ cardContent }) => (
  <VStack
    maxW={{ base: "320px", md: "350px" }}
    p={{ base: 6, md: 8 }}
    mt={{base: 20, md: 'auto'}}
    spacing={5}
    bg="blackAlpha.600"
    borderRadius="lg"
    boxShadow="lg"
    textAlign="center"
    mx="auto"
    overflow="visible"   // Taşmaları görünür yap
    position="relative"  // Pozisyonlandırma varsa çakışmayı azaltır
    minHeight={{ base: "400px", md: "auto" }} 
    justifyContent={{ base: "flex-end" }} 
  >
    <Image
      src={profile}
      alt="Profil"
      borderRadius="full"
      boxSize={{ base: "140px", md: "150px" }}  // Mobilde biraz büyük tut
      objectFit="cover"
      shadow="lg"
      mt={{ base: 0, md: 0 }}  // Üst boşluk gereksizse sıfır yapın
      display="block"
    />
    <Heading size="xl" fontWeight="bold" mt={2}>
      Berkay Yılmaz
    </Heading>
    <Text fontSize="md" color="gray.300" maxW="300px" px={{ base: 3, md: 0 }}>
      {cardContent}
    </Text>
    <HStack spacing={6} justifyContent="center" w="100%">
      <Icon as={FaReact} boxSize={8} color="cyan.400" opacity={0.7} />
      <Icon as={SiFirebase} boxSize={8} color="orange.400" opacity={0.7} />
      <Icon as={SiMongodb} boxSize={8} color="green.400" opacity={0.7} />
      <Icon as={SiSelenium} boxSize={8} color="gray.400" opacity={0.7} />
    </HStack>
    <HStack spacing={5} pt={6} justifyContent="center" w="100%">
      <Link href="https://www.linkedin.com/in/berkay-yılmaz-088b8a271/" isExternal>
        <Icon as={FaLinkedin} boxSize={6} color="white" _hover={{ color: "cyan.400" }} />
      </Link>
      <Link href="https://github.com/Berkayilmz" isExternal>
        <Icon as={FaGithub} boxSize={6} color="white" _hover={{ color: "cyan.400" }} />
      </Link>
      <Link href="https://instagram.com/berkayyilmzzz" isExternal>
        <Icon as={FaInstagram} boxSize={6} color="white" _hover={{ color: "cyan.400" }} />
      </Link>
      <Link href="mailto:berkayyilmz01@gmail.com" isExternal>
        <Icon as={FaEnvelope} boxSize={6} color="white" _hover={{ color: "cyan.400" }} />
      </Link>
    </HStack>
  </VStack>
);

export default ProfileCard;
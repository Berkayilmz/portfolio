import React from "react";
import { VStack, Image, Heading, Text, HStack, Icon, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaReact } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiSelenium } from "react-icons/si";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
  hidden: {}
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const ProfileCard = ({ cardContent }) => (
  <MotionVStack
    transition="transform 0.2s ease-in-out"
    _hover={{ transform: "scale(1.05)" }}
    maxW={{ base: "320px", md: "350px" }}
    p={{ base: 6, md: 8 }}
    mt={{ base: 20, md: 'auto' }}
    spacing={5}
    bg="blackAlpha.600"
    borderRadius="lg"
    boxShadow="lg"
    textAlign="center"
    mx="auto"
    overflow="visible"
    position="relative"
    minHeight={{ base: "400px", md: "auto" }}
    justifyContent={{ base: "flex-end" }}
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <MotionImage
      src="/assets/profilePNG/profile.png"
      alt="Profil"
      borderRadius="full"
      boxSize={{ base: "140px", md: "150px" }}
      objectFit="cover"
      shadow="lg"
      mt={{ base: 0, md: 0 }}
      display="block"
      border="3px solid"
      borderColor="white"
      variants={itemVariants}
    />
    <MotionHeading size="xl" fontWeight="bold" mt={2} variants={itemVariants}>
      Berkay Yılmaz
    </MotionHeading>
    <MotionText fontSize="md" color="gray.300" maxW="300px" px={{ base: 3, md: 0 }} variants={itemVariants}>
      {cardContent}
    </MotionText>
    <MotionHStack spacing={6} justifyContent="center" w="100%" variants={itemVariants}>
      <Icon as={FaReact} boxSize={8} color="cyan.400" opacity={0.7} />
      <Icon as={SiFirebase} boxSize={8} color="orange.400" opacity={0.7} />
      <Icon as={SiMongodb} boxSize={8} color="green.400" opacity={0.7} />
      <Icon as={SiSelenium} boxSize={8} color="gray.400" opacity={0.7} />
    </MotionHStack>
    <MotionHStack spacing={5} pt={6} justifyContent="center" w="100%" variants={itemVariants}>
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
    </MotionHStack>
  </MotionVStack>
);

export default ProfileCard;
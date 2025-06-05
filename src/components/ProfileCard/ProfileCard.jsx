import React, { useState } from "react";
import { VStack, Heading, Text, HStack, Icon, Link, Box } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaReact } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiSelenium } from "react-icons/si";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);
const MotionImage = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);
const MotionIcon = motion(Icon);

const shakeAnimation = {
  rotate: [0, 15, -15, 15, -15, 0],
  transition: { duration: 0.6, ease: "easeInOut" },
};

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ProfileCard = ({ cardContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionVStack
      maxW={{ base: "320px", md: "350px" }}
      p={{ base: 6, md: 8 }}
      mt={{ base: 20, md: "auto" }}
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
      style={{
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MotionImage
        as="img"
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
      <MotionText
        fontSize="md"
        color="gray.300"
        maxW="300px"
        px={{ base: 3, md: 0 }}
        variants={itemVariants}
      >
        {cardContent}
      </MotionText>

      <MotionHStack spacing={6} justifyContent="center" w="100%" variants={itemVariants}>
        <MotionIcon
          as={FaReact}
          boxSize={8}
          color="cyan.400"
          opacity={0.7}
          whileHover={shakeAnimation}
          cursor="pointer"
        />
        <MotionIcon
          as={SiFirebase}
          boxSize={8}
          color="orange.400"
          opacity={0.7}
          whileHover={shakeAnimation}
          cursor="pointer"
        />
        <MotionIcon
          as={SiMongodb}
          boxSize={8}
          color="green.400"
          opacity={0.7}
          whileHover={shakeAnimation}
          cursor="pointer"
        />
        <MotionIcon
          as={SiSelenium}
          boxSize={8}
          color="gray.400"
          opacity={0.7}
          whileHover={shakeAnimation}
          cursor="pointer"
        />
      </MotionHStack>

      <MotionHStack spacing={5} pt={6} justifyContent="center" w="100%" variants={itemVariants}>
        <Link href="https://www.linkedin.com/in/berkay-yılmaz-088b8a271/" isExternal>
          <MotionIcon
            as={FaLinkedin}
            boxSize={6}
            color="white"
            cursor="pointer"
            _hover={{ color: "cyan.400" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
        <Link href="https://github.com/Berkayilmz" isExternal>
          <MotionIcon
            as={FaGithub}
            boxSize={6}
            color="white"
            cursor="pointer"
            _hover={{ color: "cyan.400" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
        <Link href="https://instagram.com/berkayyilmzzz" isExternal>
          <MotionIcon
            as={FaInstagram}
            boxSize={6}
            color="white"
            cursor="pointer"
            _hover={{ color: "cyan.400" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
        <Link href="mailto:berkayyilmz01@gmail.com" isExternal>
          <MotionIcon
            as={FaEnvelope}
            boxSize={6}
            color="white"
            cursor="pointer"
            _hover={{ color: "cyan.400" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
      </MotionHStack>
    </MotionVStack>
  );
};

export default ProfileCard;
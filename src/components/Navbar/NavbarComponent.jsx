import { HStack, Box, Link, Icon } from "@chakra-ui/react";
import { FiHome, FiFolder, FiGift, FiTool, FiEdit } from "react-icons/fi";
import LanguageSwitch from "../Switch/LanguageSwitch";
import { useLanguage } from "../../context/LanguageContext";

const NavbarComponent = () => {
  const { language } = useLanguage();

  return (
    <Box
      position="fixed"
      top="20px"
      left="50%"
      transform="translateX(-50%)"
      zIndex={100}
      px={6}
      py={2}
      borderRadius="2xl"
      boxShadow="lg"
      bg="rgba(255, 255, 255, 0.05)" // Açık gri saydam
      backdropFilter="blur(12px)"    // Bulanıklık efekti
      border="1px solid rgba(255,255,255,0.2)" // Hafif çerçeve
    >
      <HStack spacing={6}>
        <Link href="/">
          <Icon as={FiHome} boxSize={5} color="white" />
        </Link>
        <Link href="/about"><Icon as={FiFolder} boxSize={5} color="white" /></Link>
        <Link href="/projects"><Icon as={FiGift} boxSize={5} color="white" /></Link>
        <Link href="/contact"><Icon as={FiTool} boxSize={5} color="white" /></Link>
        <Link href="/resume"><Icon as={FiEdit} boxSize={5} color="white" /></Link>
        <LanguageSwitch />
      </HStack>
    </Box>
  );
};

export default NavbarComponent;
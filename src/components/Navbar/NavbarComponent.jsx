import { HStack, Box, Icon } from "@chakra-ui/react";
import { FiHome, FiFolder, FiTool, FiEdit } from "react-icons/fi";
import { MdOutlineContactMail } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import LanguageSwitch from "../Switch/LanguageSwitch";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavbarComponent = ({ scrollToSection }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      scrollToSection("about-section");
    } else {
      navigate("/");
    }
  };

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
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(12px)"
      border="1px solid rgba(255,255,255,0.2)"
    >
      <HStack spacing={6}>
        <Box
          onClick={handleHomeClick}
          cursor="pointer"
          opacity={0.5}
          _hover={{ opacity: 1 }}
        >
          <Icon as={FiHome} boxSize={5} color="white" />
        </Box>
        <Box
          onClick={() => scrollToSection("education-section")}
          cursor="pointer"
          opacity={0.5}
          _hover={{ opacity: 1 }}
        >
          <Icon as={FaUniversity} boxSize={5} color="white" />
        </Box>
        <Box
          onClick={() => scrollToSection("projects-section")}
          cursor="pointer"
          opacity={0.5}
          _hover={{ opacity: 1 }}
        >
          <Icon as={FiFolder} boxSize={5} color="white" />
        </Box>
        <Box cursor="pointer" opacity={0.5} _hover={{ opacity: 1 }}>
          <Link to="/contact">
            <Icon as={MdOutlineContactMail} boxSize={5} color="white" />
          </Link>
        </Box>
        <Box cursor="pointer" opacity={0.5} _hover={{ opacity: 1 }}>
          <Icon as={FiEdit} boxSize={5} color="white" />
        </Box>
        <LanguageSwitch />
      </HStack>
    </Box>
  );
};

export default NavbarComponent;
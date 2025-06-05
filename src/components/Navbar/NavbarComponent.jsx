import { HStack, Box, Icon } from "@chakra-ui/react";
import { FiHome, FiFolder } from "react-icons/fi";
import { MdOutlineContactMail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";
import LanguageSwitch from "../Switch/LanguageSwitch";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const NavbarComponent = ({ scrollToSection, activeSection }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pendingScroll, setPendingScroll] = useState(null);

  useEffect(() => {
    if (pendingScroll && location.pathname === "/") {
      scrollToSection(pendingScroll);
      setPendingScroll(null);
    }
  }, [pendingScroll, location.pathname, scrollToSection]);

  const handleScrollOrNavigate = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      setPendingScroll(sectionId);
      navigate("/");
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      scrollToSection("about-section");
    } else {
      navigate("/");
    }
  };

  // Aktif section ise opacity 1, değilse 0.5; renk beyaz her durumda
  const getIconStyles = (section) => ({
    cursor: "pointer",
    opacity: activeSection === section ? 1 : 0.5,
    color: "white",
    _hover: { opacity: 1 },
  });

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
        <Box {...getIconStyles("about-section")} onClick={handleHomeClick}>
          <Icon as={FiHome} boxSize={5} />
        </Box>
        <Box
          {...getIconStyles("education-section")}
          onClick={() => handleScrollOrNavigate("education-section")}
        >
          <Icon as={FaUniversity} boxSize={5} />
        </Box>
        <Box
          {...getIconStyles("projects-section")}
          onClick={() => handleScrollOrNavigate("projects-section")}
        >
          <Icon as={FiFolder} boxSize={5} />
        </Box>
        <Box
          {...getIconStyles("contact-section")}
          onClick={() => handleScrollOrNavigate("contact-section")}
        >
          <Icon as={MdOutlineContactMail} boxSize={5} />
        </Box>
        <Box
          as="a"
          href="/assets/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          {...getIconStyles("cv-section")}
        >
          <Icon as={TbFileCv} boxSize={5} />
        </Box>

        <LanguageSwitch />
      </HStack>
    </Box>
  );
};

export default NavbarComponent;
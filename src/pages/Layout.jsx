import React from 'react';
import { Box } from '@chakra-ui/react';
import NavbarComponent from '../components/Navbar/NavbarComponent';
import { Outlet } from 'react-router-dom';
import background from '../assets/background.png';

function Layout() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      bgImage={`url(${background})`}
      bgSize="cover"
      bgPos="center"
      minH="100vh"

    >
      <NavbarComponent scrollToSection={scrollToSection} />
      <Outlet />
    </Box>
  );
}

export default Layout;
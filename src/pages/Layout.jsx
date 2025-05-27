import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import { Outlet, useLocation } from "react-router-dom";
import background from "../assets/background.png";

const SECTIONS = [
  "about-section",
  "education-section",
  "projects-section",
  "contact-section",
];

function Layout() {
  const [activeSection, setActiveSection] = useState("about-section");
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    // Sadece anasayfa ("/") sayfasındayken scroll dinle
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight / 3;

        for (let i = SECTIONS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECTIONS[i]);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(SECTIONS[i]);
            break;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Sayfa açıldığında aktif sectionu belirle

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // Anasayfa dışındaysa default section ataması
      setActiveSection(null);
    }
  }, [location.pathname]);

  return (
    <Box
      bgImage={`url(${background})`}
      bgSize="cover"
      bgPos="center"
      minH="100vh"
    >
      <NavbarComponent scrollToSection={scrollToSection} activeSection={activeSection} />
      <Outlet />
    </Box>
  );
}

export default Layout;
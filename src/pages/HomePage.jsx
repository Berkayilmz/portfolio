import React from "react";
import {
  Box,
  Grid,
} from "@chakra-ui/react";
import { useLanguage } from "../context/LanguageContext"; // Dil context hook
import ProfileCard from "../components/ProfileCard/ProfileCard";
import AboutMe from "../components/AboutMe/AboutMe";
import EducationList from "../components/EducationList/EducationList";
import SkillsList from "../components/SkillsList/SkillsList";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import ContactForm from "../components/ContactForm/ContactForm";  // ContactForm importu

import data from "../assets/data/data";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  const { language } = useLanguage();

  const {
    projectsData,
    educationData,
    skillsData,
    aboutTitle,
    cardContent,
    aboutTexts,
    educationTitle,
    skillsTitle,
    projectsTitle,
    viewOnGitHub,
    cvText,
  } = data[language];

  return (
    <Box
      height="100vh"
      overflowY="auto"
      bg="transparent"
      color="white"
    >
      {/* Section 1: Profil ve Hakkımda */}
      <Box
        height={{ base: 'none', md: '100vh' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="transparent"
        px={{ base: 4, md: 12 }}
        id="about-section"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 2fr" }}
          gap={10}
          maxW="1200px"
          width="100%"
          color="white"
          alignItems="center"
        >
          <ProfileCard cardContent={cardContent} />
          <AboutMe title={aboutTitle} texts={aboutTexts} cvText={cvText} />
        </Grid>
      </Box>

      {/* Section 2: Eğitim ve Yetenekler */}
      <Box
        height={{ base: 'none', md: '90vh' }}
        bg="transparent"
        px={{ base: 4, md: 12 }}
        py={{ base: 8, md: 12 }}
        mt={{ base: 8, md: 20 }}  // Burada ekledik
        color="white"
        overflowY="visible"
        id="education-section"
      >
        <EducationList title={educationTitle} educationData={educationData} />
        <SkillsList title={skillsTitle} skillsData={skillsData} />
      </Box>

      {/* Section 3: Projeler */}
      <Box
        height={{ base: 'none', md: '100vh' }}
        bg="transparent"
        px={{ base: 4, md: 12 }}
        py={{ base: 8, md: 12 }}
        mt={{ base: 8, md: 20 }}  // Burada ekledik
        color="white"
        id="projects-section"
      >
        <ProjectsList
          title={projectsTitle}
          projectsData={projectsData}
          viewOnGitHub={viewOnGitHub}
        />
      </Box>

      {/* Section 4: İletişim */}
      <Box
        height={{ base: 'none', md: '100vh' }}
        bg="transparent"
        color="white"
        px={{ base: 4, md: 12 }}
        py={{ base: 8, md: 12 }}
        mt={{ base: 8, md: 10 }}  // Burada ekledik
        id="contact-section"
      >
        <ContactForm />
        <ContactInfo />
      </Box>

      <Box
        height={{ base: 'none', md: '10vh' }}
        bg="transparent"
        color="white"
        px={{ base: 4, md: 12 }}
        py={{ base: 8, md: 12 }}
        mt={{ base: 8, md: 10 }}
        id="contact-section"
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default HomePage;
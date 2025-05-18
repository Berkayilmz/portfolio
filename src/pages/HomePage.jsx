import React, { useRef } from "react";
import {
  Box,
  Grid,
  useRadioGroup,
} from "@chakra-ui/react";
import { useLanguage } from "../context/LanguageContext"; // Dil context hook
import projectImage from '../assets/phone.png'
import ProfileCard from "../components/ProfileCard/ProfileCard";
import AboutMe from "../components/AboutMe/AboutMe";
import EducationList from "../components/EducationList/EducationList";
import SkillsList from "../components/SkillsList/SkillsList";
import ProjectsList from "../components/ProjectsList/ProjectsList";

import data from "../assets/data/data";

const HomePage = () => {
  const { language, toggleLanguage } = useLanguage();


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
  } = data[language];



  return (
    <Box
      height="100vh"
      overflowY="auto"
      scrollSnapType="y mandatory"
      bg="transparent"
      color="white"
    >

      {/* Section 1: Profil ve Hakkımda */}
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        scrollSnapAlign="start"
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
          {/* Profil Kart */}
          <ProfileCard cardContent={cardContent}/>

          {/* Hakkımda Metin */}
          <AboutMe title={aboutTitle} texts={aboutTexts} />
        </Grid>
      </Box>

      {/* Section 2: Eğitim ve Yetenekler */}
      <Box
        height="100vh"
        bg="transparent"
        px={{ base: 4, md: 12 }}
        py={{ base: 8, md: 12 }}
        scrollSnapAlign="start"
        color="white"
        overflowY="auto"
        id="education-section"
      >

        {/* Eğitim Bölümü */}
        <EducationList title={educationTitle} educationData={educationData}/>

        {/* Yetenekler Bölümü */}
        <SkillsList title={skillsTitle} skillsData={skillsData}/>
      </Box>

      {/* Section 3: Projeler */}
      <Box
        height="100vh"
        bg="transparent"
        px={{ base: 4, md: 12 }}
        py={{ base: 8, md: 12 }}
        scrollSnapAlign="start"
        color="white"
        id="projects-section"
      >

        {/* Projects */}

        <ProjectsList
          title={projectsTitle}
          projectsData={projectsData}
          viewOnGitHub={viewOnGitHub}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
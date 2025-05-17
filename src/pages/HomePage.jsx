import React from "react";
import {
  Box,
  Grid,
  VStack,
  HStack,
  Image,
  Heading,
  Text,
  Link,
  Icon,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaReact } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiSelenium } from "react-icons/si";
import ProgressComponent from "../components/Progress/ProgressComponent";
import profile from "../assets/profile.png";
import { useLanguage } from "../context/LanguageContext"; // Dil context hook
import { image } from "framer-motion/client";
import projectImage from '../assets/phone.png'

const data = {
  tr: {
    projectsData: [
      {
        title: "WeatherWay",
        description:
          "WeatherWay, iki şehir arasında rota oluşturup güzergah üzerindeki saatlik hava durumunu analiz eden bir mobil uygulamadır.",
        link: "https://github.com/Berkayilmz/project1",
        image: projectImage
      },
      {
        title: "Secretum",
        description:
          "Kullanıcıların günlük tutmasını, her gününü bir emoji ile ifade etmesini ve görsel yükleyerek anılarını daha anlamlı hale getirmesini sağlayan bir mobil uygulamadır.",
        link: "https://github.com/Berkayilmz/project2",
        image: projectImage
      },
    ],
    educationData: [
      { label: "Bilgisayar Mühendisliği", value: "Süleyman Demirel Üniversitesi • 2021 - Halen" },
      { label: "Rusça Hazırlık (Dil Okulu)", value: "Igor Sikorsky Kyiv Polytechnic Institute • 2019 - 2020" },
    ],
    skillsData: [
      { label: "React", value: "80%" },
      { label: "React Native", value: "80%" },
      { label: "Node.js", value: "80%" },
      { label: "Firebase", value: "70%" },
      { label: "MongoDB", value: "65%" },
      { label: "Network", value: "40%" },
      { label: "Python (Selenium)", value: "30%" },
    ],
    aboutTitle: "Hakkımda",
    aboutTexts: [
      "Yazılım geliştirici ve teknoloji tutkunu olarak, modern mobil ve web uygulamalar geliştirmeye odaklanıyorum. Projelerimde genellikle React Native, Firebase, React, Node.js ve MongoDB gibi teknolojileri kullanıyorum.",
      "GitHub profilimde pek çok açık kaynak proje ve kişisel çalışmalarımı bulabilirsiniz. Yazılım geliştirme yolculuğumda, sürekli öğrenmeye ve yeni teknolojilere adapte olmaya önem veriyorum.",
      "Hedefim, kaliteli, sürdürülebilir ve kullanıcı dostu çözümler üretmek. İşbirliği yapmayı ve birlikte öğrenmeyi çok seviyorum.",
      "Daha fazla bilgi için GitHub, LinkedIn ve diğer sosyal medya hesaplarımı inceleyebilirsiniz.",
    ],
    educationTitle: "Eğitim",
    skillsTitle: "Yetenekler",
    projectsTitle: "Projelerim",
    viewOnGitHub: "GitHub'da Görüntüle",
  },
  en: {
    projectsData: [
      {
        title: "WeatherWay",
        description:
          "WeatherWay is a mobile app that creates routes between two cities and analyzes hourly weather conditions along the route.",
        link: "https://github.com/Berkayilmz/project1",
        image: projectImage
      },
      {
        title: "Secretum",
        description:
          "Secretum is a mobile app that allows users to keep daily journals, express each day with an emoji, and upload images to make memories more meaningful.",
        link: "https://github.com/Berkayilmz/project2",
        image: projectImage
      },
    ],
    educationData: [
      { label: "Computer Science", value: "Süleyman Demirel University • 2021 - Present" },
      { label: "Russian Prep (Language School)", value: "Igor Sikorsky Kyiv Polytechnic Institute • 2019 - 2020" },
    ],
    skillsData: [
      { label: "React", value: "80%" },
      { label: "React Native", value: "80%" },
      { label: "Node.js", value: "80%" },
      { label: "Firebase", value: "70%" },
      { label: "MongoDB", value: "65%" },
      { label: "Network", value: "40%" },
      { label: "Python (Selenium)", value: "30%" },
    ],
    aboutTitle: "About Me",
    aboutTexts: [
      "As a software developer and technology enthusiast, I focus on creating modern mobile and web applications. I mainly use React Native, Firebase, React, Node.js, and MongoDB in my projects.",
      "You can find many open-source projects and personal works on my GitHub profile. I emphasize continuous learning and adapting to new technologies throughout my development journey.",
      "My goal is to deliver high-quality, sustainable, and user-friendly solutions. I really enjoy collaboration and learning together.",
      "For more information, feel free to check my GitHub, LinkedIn, and other social media profiles.",
    ],
    educationTitle: "Education",
    skillsTitle: "Skills",
    projectsTitle: "My Projects",
    viewOnGitHub: "View on GitHub",
  },
};

const HomePage = () => {
  const { language, toggleLanguage } = useLanguage();

  const {
    projectsData,
    educationData,
    skillsData,
    aboutTitle,
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
          <VStack
            spacing={5}
            bg="blackAlpha.600"
            p={8}
            borderRadius="lg"
            boxShadow="lg"
            textAlign="center"
          >
            <Image
              src={profile}
              alt="Profil"
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
              shadow="lg"
            />
            <Heading size="xl" fontWeight="bold">
              Berkay Yılmaz
            </Heading>
            <Text fontSize="md" color="gray.300" maxW="260px">
              Yazılım geliştirici ve teknoloji tutkunu.
            </Text>
            <HStack spacing={6} justifyContent="center" w="100%">
              <Icon as={FaReact} boxSize={8} color="cyan.400" opacity={0.7} />
              <Icon as={SiFirebase} boxSize={8} color="orange.400" opacity={0.7} />
              <Icon as={SiMongodb} boxSize={8} color="green.400" opacity={0.7} />
              <Icon as={SiSelenium} boxSize={8} color="gray.400" opacity={0.7} />
            </HStack>
            <HStack spacing={5} pt={6} justifyContent="center" w="100%">
              <Link href="https://linkedin.com/in/berkayyilmaz" isExternal>
                <Icon
                  as={FaLinkedin}
                  boxSize={6}
                  color="white"
                  _hover={{ color: "cyan.400" }}
                />
              </Link>
              <Link href="https://github.com/Berkayilmz" isExternal>
                <Icon
                  as={FaGithub}
                  boxSize={6}
                  color="white"
                  _hover={{ color: "cyan.400" }}
                />
              </Link>
              <Link href="https://instagram.com/berkay" isExternal>
                <Icon
                  as={FaInstagram}
                  boxSize={6}
                  color="white"
                  _hover={{ color: "cyan.400" }}
                />
              </Link>
              <Link href="mailto:berkay@example.com" isExternal>
                <Icon
                  as={FaEnvelope}
                  boxSize={6}
                  color="white"
                  _hover={{ color: "cyan.400" }}
                />
              </Link>
            </HStack>
          </VStack>

          {/* Hakkımda Metin */}
          <VStack
            spacing={6}
            maxW="700px"
            alignItems="flex-start"
            color="white"
            textAlign="left"
          >
            <Heading size="2xl" fontWeight="extrabold" mb={6}>
              {aboutTitle}
            </Heading>
            {aboutTexts.map((text, idx) => (
              <Text
                key={idx}
                fontSize={idx === 0 ? "lg" : "md"}
                color={idx === 0 ? "gray.300" : "gray.400"}
                lineHeight="tall"
              >
                {text}
              </Text>
            ))}
          </VStack>
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
      >


        {/* Eğitim Bölümü */}
        {/* Eğitim Bölümü */}
        <Box mb={12} maxWidth="1000px" mx="auto">
          <Heading size="3xl" mb={4} textAlign="center" color="white">
            <strong>{educationTitle}</strong>
          </Heading>
          {/* İçerik için arka plan ve padding */}
          <Box bg="blackAlpha.600" p={6} borderRadius="lg">
            <VStack align="flex-start" spacing={4}>
              {educationData.map(({ label, value }, idx) => (
                <Box key={idx} textAlign="left">
                  <Text fontWeight="bold" fontSize="md" color="white">
                    {label}
                  </Text>
                  <Text fontSize="sm" color="gray.300">
                    {value}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </Box>

        {/* Yetenekler Bölümü */}
        <Box maxWidth="1000px" mx="auto">
          <Heading size="3xl" mb={4} textAlign="center" color="white">
            <strong>{skillsTitle}</strong>
          </Heading>
          <Box maxWidth="1000px" mx="auto" p={4} borderRadius="md" bg="blackAlpha.600">
            <VStack spacing={6} align="stretch">
              {skillsData.map(({ label, value }, idx) => (
                <HStack
                  key={idx}
                  justifyContent="space-between"
                  p={2}
                  borderRadius="md"
                  borderWidth={1}
                >
                  <Text fontWeight="bold" color="white" minWidth="120px" textAlign="left">
                    {label}
                  </Text>
                  <Box flex="1" maxWidth="300px" ml={4}>
                    <ProgressComponent value={value} />
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Box>
        </Box>
      </Box>

      {/* Section 3: Projeler */}
      <Box
        height="100vh"
        bg="transparent"
        px={{ base: 4, md: 12 }}
        py={{ base: 8, md: 12 }}
        scrollSnapAlign="start"
        color="white"
      >
        <Heading size="xl" mb={6} color="cyan.400" textAlign="center">
          {projectsTitle}
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={6}
          maxWidth="1200px"
          mx="auto"
        >
          {projectsData.map(({ title, description, link, image }, idx) => (
            <Box
              key={idx}
              bg="blackAlpha.600"
              p={5}
              borderRadius="md"
              boxShadow="md"
              _hover={{ bg: "blackAlpha.800" }}
              display="flex"
              flexDirection="column"
              height="100%"
            >
              {/* Başlık: tam genişlik */}
              <Heading fontSize="lg" fontWeight="bold" mb={4} textAlign="center" width="100%">
                {title}
              </Heading>

              {/* İçerik bölümü: sol fotoğraf, sağ açıklama */}
              <Grid templateColumns="1fr 2fr" gap={4} flex="1" mb={4}>
                {/* Sol: Fotoğraf */}
                <Box
                  borderRadius="md"
                  overflow="hidden"
                  bg="gray.700"
                  maxHeight="150px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <Text color="gray.500" fontStyle="italic" textAlign="center" width="100%">
                      No image
                    </Text>
                  )}
                </Box>

                {/* Sağ: Açıklama */}
                <Text color="gray.300" lineHeight="tall" noOfLines={8} overflow="hidden">
                  {description}
                </Text>
              </Grid>

              {/* Alt: GitHub linki, tam genişlik */}
              <Link
                href={link}
                isExternal
                color="cyan.400"
                fontWeight="semibold"
                textAlign="center"
                mt="auto"
              >
                {viewOnGitHub}
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HomePage;
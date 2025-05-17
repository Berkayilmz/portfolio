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
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaReact } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiSelenium } from "react-icons/si";
import ProgressComponent from "../components/Progress/ProgressComponent";
import profile from "../assets/profile.png";
import { useLanguage } from "../context/LanguageContext"; // Dil context hook

const data = {
  tr: {
    projectsData: [
      {
        title: "WeatherWay",
        description:
          "WeatherWay, iki şehir arasında rota oluşturup güzergah üzerindeki saatlik hava durumunu analiz eden bir mobil uygulamadır.",
        link: "https://github.com/Berkayilmz/project1",
      },
      {
        title: "Secretum",
        description:
          "Kullanıcıların günlük tutmasını, her gününü bir emoji ile ifade etmesini ve görsel yükleyerek anılarını daha anlamlı hale getirmesini sağlayan bir mobil uygulamadır.",
        link: "https://github.com/Berkayilmz/project2",
      },
    ],
    educationData: [
      { label: "Bilgisayar Mühendisliği", value: "Süleyman Demirel Üniversitesi • 2021 - Halen" },
      { label: "Rusça Hazırlık (Dil Okulu)", value: "Igor Sikorsky Kyiv Polytechnic Institute • 2019 - 2020" },
    ],
    skillsData: [
      { label: "React", value: "80%" },
      { label: "React Native", value: "75%" },
      { label: "Node.js", value: "80%" },
      { label: "Firebase", value: "70%" },
      { label: "MongoDB", value: "65%" },
      { label: "Python (Selenium)", value: "50%" },
      { label: "Network (Switch konfigürasyonu, ARP, vs.)", value: "Orta Seviye" },
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
      },
      {
        title: "Secretum",
        description:
          "Secretum is a mobile app that allows users to keep daily journals, express each day with an emoji, and upload images to make memories more meaningful.",
        link: "https://github.com/Berkayilmz/project2",
      },
    ],
    educationData: [
      { label: "Computer Science", value: "Süleyman Demirel University • 2021 - Present" },
      { label: "Russian Prep (Language School)", value: "Igor Sikorsky Kyiv Polytechnic Institute • 2019 - 2020" },
    ],
    skillsData: [
      { label: "React", value: "80%" },
      { label: "React Native", value: "75%" },
      { label: "Node.js", value: "80%" },
      { label: "Firebase", value: "70%" },
      { label: "MongoDB", value: "65%" },
      { label: "Python (Selenium)", value: "50%" },
      { label: "Network (Switch configuration, ARP, etc.)", value: "Intermediate" },
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
      {/* Dil Değiştirici Buton */}
      <Box position="fixed" top={4} right={4} zIndex={1000}>
        <Button onClick={toggleLanguage} colorScheme="cyan" size="sm">
          {language === "tr" ? "EN" : "TR"}
        </Button>
      </Box>

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
        <Heading size="xl" mb={6} color="cyan.400" textAlign="center">
          {educationTitle} & {skillsTitle}
        </Heading>

        {/* Eğitim Bölümü */}
        {/* Eğitim Bölümü */}
        <Box mb={12} maxWidth="1000px" mx="auto">
          <Heading size="lg" mb={4} color="white">
            {educationTitle}
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
          <Box bg="blackAlpha.600" p={6} borderRadius="lg" maxWidth="1000px" mx="auto">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {skillsData.flatMap(({ label, value }, idx) => [
                <Box key={`${idx}-label`} p={2} borderRadius="md">
                  <Text fontWeight="bold" color="white" textAlign="left" minWidth="120px">
                    {label}
                  </Text>
                </Box>,
                <Box key={`${idx}-progress`} p={2} borderRadius="md">
                  <ProgressComponent value={value} />
                </Box>
              ])}
            </SimpleGrid>
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
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={6}
          maxWidth="1200px"
          mx="auto"
        >
          {projectsData.map(({ title, description, link }, idx) => (
            <Box
              key={idx}
              bg="blackAlpha.600"
              p={5}
              borderRadius="md"
              boxShadow="md"
              _hover={{ bg: "blackAlpha.800" }}
            >
              <Text fontWeight="bold" fontSize="lg" mb={2}>
                {title}
              </Text>
              <Text mb={3} color="gray.300">
                {description}
              </Text>
              <Link href={link} isExternal color="cyan.400" fontWeight="semibold">
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
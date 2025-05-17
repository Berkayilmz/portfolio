import React from "react";
import {
  Grid,
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Heading,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.png";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiSelenium, SiMongodb } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";  // dil context hook

const HomePage = () => {
  const { language } = useLanguage();

  // Dil bazlı içerikler
  const labels = {
    tr: {
      name: "Berkay Yılmaz",
      descriptionShort: "Yazılım geliştirici ve teknoloji tutkunu.",
      aboutTitle: "Merhaba, ben Berkay Yılmaz",
      aboutParagraphs: [
        "Yazılım geliştirici ve teknoloji tutkunu olarak, modern mobil ve web uygulamalar geliştirmeye odaklanıyorum. Projelerimde genellikle React Native, Firebase, React, Node.js ve MongoDB gibi teknolojileri kullanıyorum.",
        "GitHub profilimde pek çok açık kaynak proje ve kişisel çalışmalarımı bulabilirsiniz. Yazılım geliştirme yolculuğumda, sürekli öğrenmeye ve yeni teknolojilere adapte olmaya önem veriyorum.",
        "Hedefim, kaliteli, sürdürülebilir ve kullanıcı dostu çözümler üretmek. İşbirliği yapmayı ve birlikte öğrenmeyi çok seviyorum.",
        "Daha fazla bilgi için GitHub, LinkedIn ve diğer sosyal medya hesaplarımı inceleyebilirsiniz."
      ],
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "E-posta"
      }
    },
    en: {
      name: "Berkay Yilmaz",
      descriptionShort: "Software developer and technology enthusiast.",
      aboutTitle: "Hello, I'm Berkay Yilmaz",
      aboutParagraphs: [
        "As a software developer and technology enthusiast, I focus on creating modern mobile and web applications. I mainly use React Native, Firebase, React, Node.js, and MongoDB in my projects.",
        "You can find many open-source projects and personal works on my GitHub profile. I emphasize continuous learning and adapting to new technologies throughout my development journey.",
        "My goal is to deliver high-quality, sustainable, and user-friendly solutions. I really enjoy collaboration and learning together.",
        "For more information, feel free to check my GitHub, LinkedIn, and other social media profiles."
      ],
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email"
      }
    }
  };

  const content = labels[language];

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 2fr" }}
      minH="100vh"
      color="white"
      px={{ base: 4, md: 12 }}
      py={{ base: 6, md: 12 }}
      gap={10}
      bg="transparent"
      alignItems="center"
    >
      {/* Sol kart - 1/3 */}
      <Box
        bg="blackAlpha.700"
        backdropFilter="blur(12px)"
        borderRadius="lg"
        border="1px solid rgba(255, 255, 255, 0.1)"
        px={6}
        py={8}
        maxW="100%"
        boxShadow="lg"
        alignSelf="center"
      >
        <VStack spacing={5} align="center" textAlign="center">
          {/* Profil fotoğrafı */}
          <Image
            borderRadius="full"
            boxSize="130px"
            src={profile}
            alt="Profile"
            objectFit="cover"
            mb={2}
            shadow="lg"
          />

          {/* İsim */}
          <Heading as="h2" size="xl" fontWeight="bold">
            {content.name}
          </Heading>

          {/* Boşluk */}
          <Box h="12px" />

          {/* Alt açıklama */}
          <Text fontSize="md" color="gray.300" maxW="260px">
            {content.descriptionShort}
          </Text>

          {/* Teknoloji ikonları yan yana */}
          <HStack spacing={6} pt={3} justify="center" w="100%">
            <Icon as={FaReact} boxSize={8} color="cyan.400" opacity={0.7} />
            <Icon as={SiFirebase} boxSize={8} color="orange.400" opacity={0.7} />
            <Icon as={SiMongodb} boxSize={8} color="green.400" opacity={0.7} />
            <Icon as={SiSelenium} boxSize={8} color="gray.400" opacity={0.7} />
          </HStack>

          {/* Sosyal ikonlar */}
          <HStack spacing={5} pt={6} justify="center" w="100%">
            <Link href="https://linkedin.com/in/berkayyilmaz" isExternal>
              <Icon as={FaLinkedin} boxSize={6} color="white" _hover={{ color: "cyan.400" }} />
            </Link>
            <Link href="https://github.com/Berkayilmz" isExternal>
              <Icon as={FaGithub} boxSize={6} color="white" _hover={{ color: "cyan.400" }} />
            </Link>
            <Link href="https://instagram.com/berkay" isExternal>
              <Icon as={FaInstagram} boxSize={6} color="white" _hover={{ color: "cyan.400" }} />
            </Link>
            <Link href="mailto:berkay@example.com" isExternal>
              <Icon as={FaEnvelope} boxSize={6} color="white" _hover={{ color: "cyan.400" }} />
            </Link>
          </HStack>
        </VStack>
      </Box>

      {/* Sağ içerik - 2/3 */}
      <Box maxW="100%" alignSelf="center" px={{ base: 2, md: 6 }}>
        <VStack align="start" spacing={6} maxW="700px" color="white">
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            {content.aboutTitle}
          </Heading>

          {content.aboutParagraphs.map((para, i) => (
            <Text key={i} fontSize={i === 0 ? "lg" : "md"} lineHeight="tall" color={i === 0 ? "gray.300" : "gray.400"}>
              {para}
            </Text>
          ))}

          
        </VStack>
      </Box>
    </Grid>
  );
};

export default HomePage;
import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";
import data from "../../assets/data/data";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);

const ContactForm = () => {
  const { language } = useLanguage();

  const langData = data[language] || data["tr"];

  const {
    contactTitle,
    contactNameLabel,
    contactNamePlaceholder,
    contactEmailLabel,
    contactEmailPlaceholder,
    contactMessageLabel,
    contactMessagePlaceholder,
    contactSendButton,
  } = langData;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Intersection Observer ile görünürlüğü kontrol et
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,  // %30 göründüğünde tetiklenir
  });

  // Animasyon variant'ları
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <Box
      ref={ref}
      maxW="500px"
      mx="auto"
      p={8}
      minH="85vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading mb={6} textAlign="center" color="cyan.400">
        {contactTitle}
      </Heading>

      <MotionVStack
        borderRadius="md"
        boxShadow="lg"
        color="white"
        p={8}
        bg="blackAlpha.600"
        spacing={5}
        width="100%"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <MotionBox
          width="100%"
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <Text mb={1} fontWeight="bold">
            {contactNameLabel}
          </Text>
          <Input
            type="text"
            name="name"
            placeholder={contactNamePlaceholder}
            bg="whiteAlpha.200"
            border="none"
            color="white"
            _focus={{ bg: "whiteAlpha.300" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </MotionBox>

        <MotionBox
          width="100%"
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <Text mb={1} fontWeight="bold">
            {contactEmailLabel}
          </Text>
          <Input
            type="email"
            name="email"
            placeholder={contactEmailPlaceholder}
            bg="whiteAlpha.200"
            border="none"
            color="white"
            _focus={{ bg: "whiteAlpha.300" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </MotionBox>

        <MotionBox
          width="100%"
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <Text mb={1} fontWeight="bold">
            {contactMessageLabel}
          </Text>
          <Textarea
            name="message"
            placeholder={contactMessagePlaceholder}
            rows={6}
            bg="whiteAlpha.200"
            border="none"
            color="white"
            _focus={{ bg: "whiteAlpha.300" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </MotionBox>

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://berkay-yilmaz.netlify.app"
        />

        <MotionBox
          width="100%"
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <Button type="submit" colorScheme="cyan" width="full">
            {contactSendButton}
          </Button>
        </MotionBox>
      </MotionVStack>
    </Box>
  );
};

export default ContactForm;
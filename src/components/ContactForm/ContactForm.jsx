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

const ContactForm = () => {
  // Form state sadece input kontrolü için
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box
      maxW="500px"
      mx="auto"
      p={8}
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading mb={6} textAlign="center" color="cyan.400">
        Contact Me
      </Heading>

      <form
        action="https://formsubmit.co/berkayyilmz01@gmail.com"
        method="POST"
        style={{ width: "100%" }}
      >
        <VStack
          borderRadius="md"
          boxShadow="lg"
          color="white"
          p={8}
          bg="blackAlpha.600"
          spacing={5}
          width="100%"
        >
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Name
            </Text>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _focus={{ bg: "whiteAlpha.300" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Box>

          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Email
            </Text>
            <Input
              type="email"
              name="email"
              placeholder="you@example.com"
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _focus={{ bg: "whiteAlpha.300" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>

          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Message
            </Text>
            <Textarea
              name="message"
              placeholder="Write your message here..."
              rows={6}
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _focus={{ bg: "whiteAlpha.300" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Box>

          {/* Gizli alan: formsubmit için captcha devre dışı */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Başarılı gönderim sonrası yönlendirme (opsiyonel) */}
          <input type="hidden" name="_next" value="http://localhost:3000" />

          <Button type="submit" colorScheme="cyan" width="full">
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
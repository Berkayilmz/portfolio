import React from "react";
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
            <VStack
                borderRadius="md"
                boxShadow="lg"
                color="white"
                p={8}
                bg='blackAlpha.600'
                as="form"
                spacing={5}
                width="100%"
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Form submitted!");
                }}
            >
                <Box width="100%">
                    <Text mb={1} fontWeight="bold">
                        Name
                    </Text>
                    <Input
                        placeholder="Your Name"
                        bg="whiteAlpha.200"
                        border="none"
                        color="white"
                        _focus={{ bg: "whiteAlpha.300" }}
                    />
                </Box>

                <Box width="100%">
                    <Text mb={1} fontWeight="bold">
                        Email
                    </Text>
                    <Input
                        type="email"
                        placeholder="you@example.com"
                        bg="whiteAlpha.200"
                        border="none"
                        color="white"
                        _focus={{ bg: "whiteAlpha.300" }}
                    />
                </Box>

                <Box width="100%">
                    <Text mb={1} fontWeight="bold">
                        Message
                    </Text>
                    <Textarea
                        placeholder="Write your message here..."
                        rows={6}
                        bg="whiteAlpha.200"
                        border="none"
                        color="white"
                        _focus={{ bg: "whiteAlpha.300" }}
                    />
                </Box>

                <Button type="submit" colorScheme="cyan" width="full">
                    Send Message
                </Button>
            </VStack>
        </Box>
    );
};

export default ContactForm;
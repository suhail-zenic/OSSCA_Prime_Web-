import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { send } from "@emailjs/browser";

export default function StartProject() {
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await send(
        "service_egtaixl",
        "template_l97vlat",
        form,
        "9bFVuNz0SuH0xpeD1"
      );

      toast({
        title: "Message sent!",
        description: "We’ve received your request and will contact you shortly.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      setForm({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="2xl" py={20}>
      <VStack spacing={8} align="stretch">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          fontFamily="'Playfair Display', serif"
          fontWeight="800"
          bgGradient="linear(to-r, #FFD700, #FFA500, #FFD700)"
          bgClip="text"
          style={{
            backgroundSize: "200% auto",
            animation: "shine 3s linear infinite",
          }}
        >
          Start a Project 🚀
        </Heading>

        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="rgba(255, 255, 255, 0.85)"
          p={8}
          rounded="2xl"
          shadow="2xl"
          backdropFilter="blur(12px)"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.01)", shadow: "dark-lg" }}
        >
          <FormControl id="from_name" isRequired mb={4}>
            <FormLabel fontWeight="600">Name</FormLabel>
            <Input
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="Your Name"
              rounded="lg"
              shadow="sm"
              _focus={{ borderColor: "gold", shadow: "0 0 0 1px gold" }}
            />
          </FormControl>

          <FormControl id="from_email" isRequired mb={4}>
            <FormLabel fontWeight="600">Email</FormLabel>
            <Input
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              placeholder="Your Email"
              rounded="lg"
              shadow="sm"
              _focus={{ borderColor: "gold", shadow: "0 0 0 1px gold" }}
            />
          </FormControl>

          <FormControl id="message" isRequired mb={6}>
            <FormLabel fontWeight="600">Requirements</FormLabel>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your project requirements..."
              rounded="lg"
              shadow="sm"
              _focus={{ borderColor: "gold", shadow: "0 0 0 1px gold" }}
            />
          </FormControl>

          <Button
            type="submit"
            color="black"
            bgGradient="linear(to-r, gold, orange.300, gold)"
            isLoading={loading}
            w="full"
            rounded="xl"
            shadow="lg"
            _hover={{
              transform: "scale(1.02)",
              shadow: "0 0 20px rgba(255, 215, 0, 0.6)",
            }}
            transition="all 0.3s ease"
          >
            Send Request
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";

export default function StartProject() {
  const toast = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now just show a success toast — later you can connect it to EmailJS or backend
    toast({
      title: "Project request sent!",
      description: "We’ll get back to you at " + form.email,
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    // Clear form
    setForm({ name: "", email: "", requirements: "" });
  };

  return (
    <Box bg="offwhite.500" minH="100vh" py={16}>
      <Container maxW="2xl" bg="white" p={10} rounded="2xl" shadow="xl">
        <VStack spacing={6} as="form" onSubmit={handleSubmit}>
          <Heading size="lg" color="gold.500">
            Start a Project 🚀
          </Heading>
          <Text color="gray.600">
            Tell us about your project requirements and we’ll reach out.
          </Text>

          {/* Name Field */}
          <FormControl isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>

          {/* Email Field */}
          <FormControl isRequired>
            <FormLabel>Your Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>

          {/* Requirements Field */}
          <FormControl isRequired>
            <FormLabel>Project Requirements</FormLabel>
            <Textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              placeholder="Briefly describe your project..."
              rows={5}
            />
          </FormControl>

          <Button
            type="submit"
            bg="gold.500"
            color="white"
            size="lg"
            rounded="2xl"
            px={8}
            _hover={{ bg: "black.500", color: "gold.500" }}
          >
            Submit
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

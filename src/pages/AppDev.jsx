import React from "react";
import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AppDev() {
  return (
    <Container maxW="4xl" py={16}>
      <Heading mb={6}>App Development</Heading>
      <Text fontSize="lg" color="gray.600" mb={8}>
        Our team builds mobile and desktop applications with speed, security,
        and scalability in mind. From Android/iOS apps to cross-platform
        solutions, we create experiences that keep users engaged.
      </Text>
      <Button as={Link} to="/" bg="black" color="gold" _hover={{ bg: "gold", color: "black" }}>
        ← Back to Home
      </Button>
    </Container>
  );
}

import React from "react";
import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function WebDev() {
  return (
    <Container maxW="4xl" py={16}>
      <Heading mb={6}>Web Development</Heading>
      <Text fontSize="lg" color="gray.600" mb={8}>
        We craft responsive, SEO-optimized, and high-performance websites
        designed to scale with your business. Whether you need a portfolio,
        corporate site, or an e-commerce solution, OSSCA Prime delivers premium
        web experiences.
      </Text>
      <Button as={Link} to="/" bg="black" color="gold" _hover={{ bg: "gold", color: "black" }}>
        ← Back to Home
      </Button>
    </Container>
  );
}

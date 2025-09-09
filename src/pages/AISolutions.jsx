import React from "react";
import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AISolutions() {
  return (
    <Container maxW="4xl" py={16}>
      <Heading mb={6}>AI Solutions</Heading>
      <Text fontSize="lg" color="gray.600" mb={8}>
        Harness the power of Artificial Intelligence. From chatbots and machine
        learning models to automation systems, OSSCA Prime integrates AI into
        your workflows, giving your business a true competitive edge.
      </Text>
      <Button as={Link} to="/" bg="black" color="gold" _hover={{ bg: "gold", color: "black" }}>
        ← Back to Home
      </Button>
    </Container>
  );
}

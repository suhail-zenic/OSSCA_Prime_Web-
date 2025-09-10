import React from "react";
import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";

export default function ProFeatures() {
  return (
    <Container maxW="5xl" py={16}>
      <Heading textAlign="center" mb={8}>Pro Plan Features</Heading>

      <Text fontSize="lg" mb={8} textAlign="center">
        Ideal for startups and growing businesses that need more advanced functionality.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">Responsive Design</Text>
          <Text mt={2}>✅ Works seamlessly on all devices</Text>
        </Box>

        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">Advanced CMS</Text>
          <Text mt={2}>✅ Manage multiple pages, blogs, and content easily</Text>
        </Box>

        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">SEO Optimization</Text>
          <Text mt={2}>✅ Advanced SEO strategies built-in</Text>
        </Box>

        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">Priority Support</Text>
          <Text mt={2}>✅ Email & chat support within 24 hours</Text>
        </Box>

        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">Analytics</Text>
          <Text mt={2}>✅ Integration with Google Analytics & insights</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

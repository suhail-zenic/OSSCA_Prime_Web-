import React from "react";
import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";

export default function EnterpriseFeatures() {
  return (
    <Container maxW="5xl" py={16}>
      <Heading textAlign="center" mb={8}>Enterprise Plan Features</Heading>

      <Text fontSize="lg" mb={8} textAlign="center">
        Tailored solutions for large-scale projects, businesses, and enterprises.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">Responsive Design</Text>
          <Text mt={2}>✅ Optimized for all devices and screen sizes</Text>
        </Box>

        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">Custom CMS</Text>
          <Text mt={2}>✅ Fully customized content management system</Text>
        </Box>

        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">Advanced SEO & Marketing</Text>
          <Text mt={2}>✅ Full SEO, marketing, and conversion optimization</Text>
        </Box>

        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">Dedicated Manager</Text>
          <Text mt={2}>✅ Your personal project manager for seamless coordination</Text>
        </Box>

        <Box p={6} borderWidth={1} borderRadius="2xl">
          <Text fontWeight="bold">Premium Support</Text>
          <Text mt={2}>✅ 24/7 support with SLA guarantees</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

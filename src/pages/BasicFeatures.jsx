import React from "react";
import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";

// 👇 function wraps the return
export default function BasicFeatures() {
  return (
    <Container maxW="5xl" py={16}>
      <Heading
        textAlign="center"
        mb={8}
        fontFamily="'Playfair Display', serif"
        fontWeight="800"
        fontSize={{ base: "3xl", md: "5xl" }}
        bgGradient="linear(to-r, #FFD700, #FFA500, #FFD700)"
        bgClip="text"
        style={{
          backgroundSize: "200% auto",
          animation: "shine 3s linear infinite",
        }}
      >
        Basic Plan Features
      </Heading>

      <Text fontSize="lg" mb={8} textAlign="center">
        Perfect for individuals and small projects who need a simple, functional website.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Box
          p={6}
          borderWidth={1}
          borderRadius="2xl"
          bg="rgba(255,255,255,0.7)"
          backdropFilter="blur(10px)"
          shadow="lg"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.03)", shadow: "xl" }}
        >
          <Text fontWeight="bold">Responsive Design</Text>
          <Text mt={2}>✅ Works on all devices (desktop, tablet, mobile)</Text>
        </Box>

        <Box
          p={6}
          borderWidth={1}
          borderRadius="2xl"
          bg="rgba(255,255,255,0.7)"
          backdropFilter="blur(10px)"
          shadow="lg"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.03)", shadow: "xl" }}
        >
          <Text fontWeight="bold">Basic CMS</Text>
          <Text mt={2}>✅ Simple content management for blogs or pages</Text>
        </Box>

        <Box
          p={6}
          borderWidth={1}
          borderRadius="2xl"
          bg="rgba(255,255,255,0.7)"
          backdropFilter="blur(10px)"
          shadow="lg"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.03)", shadow: "xl" }}
        >
          <Text fontWeight="bold">SEO Friendly</Text>
          <Text mt={2}>✅ Optimized for search engines</Text>
        </Box>

        <Box
          p={6}
          borderWidth={1}
          borderRadius="2xl"
          bg="rgba(255,255,255,0.7)"
          backdropFilter="blur(10px)"
          shadow="lg"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.03)", shadow: "xl" }}
        >
          <Text fontWeight="bold">Support</Text>
          <Text mt={2}>✅ Email support within 3 business days</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

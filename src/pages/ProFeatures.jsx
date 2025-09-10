import React from "react";
import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";

export default function ProFeatures() {
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
        Pro Plan Features
      </Heading>

      <Text fontSize="lg" mb={8} textAlign="center" color="gray.600">
        Ideal for startups and growing businesses that need more advanced functionality.
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
          <Text mt={2}>✅ Works seamlessly on all devices</Text>
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
          <Text fontWeight="bold">Advanced CMS</Text>
          <Text mt={2}>✅ Manage multiple pages, blogs, and content easily</Text>
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
          <Text fontWeight="bold">SEO Optimization</Text>
          <Text mt={2}>✅ Advanced SEO strategies built-in</Text>
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
          <Text fontWeight="bold">Priority Support</Text>
          <Text mt={2}>✅ Email & chat support within 24 hours</Text>
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
          <Text fontWeight="bold">Analytics</Text>
          <Text mt={2}>✅ Integration with Google Analytics & insights</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

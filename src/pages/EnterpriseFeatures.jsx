import React from "react";
import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";

export default function EnterpriseFeatures() {
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
        Enterprise Plan Features
      </Heading>

      <Text fontSize="lg" mb={8} textAlign="center" color="gray.600">
        Tailored solutions for large-scale projects, businesses, and enterprises.
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
          <Text mt={2}>✅ Optimized for all devices and screen sizes</Text>
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
          <Text fontWeight="bold">Custom CMS</Text>
          <Text mt={2}>✅ Fully customized content management system</Text>
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
          <Text fontWeight="bold">Advanced SEO & Marketing</Text>
          <Text mt={2}>✅ Full SEO, marketing, and conversion optimization</Text>
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
          <Text fontWeight="bold">Dedicated Manager</Text>
          <Text mt={2}>✅ Your personal project manager for seamless coordination</Text>
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
          <Text fontWeight="bold">Premium Support</Text>
          <Text mt={2}>✅ 24/7 support with SLA guarantees</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

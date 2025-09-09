import React from 'react';
import { Box, Button, Container, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react"; // Correct keyframes import
import { FaInstagram } from "react-icons/fa"; // Instagram icon
import hatImg from "./assets/fedora.png"; // Make sure this file exists
import { Link } from "react-router-dom"; // 👈 only import once

const MotionBox = motion(Box);

// Floating animation for hat
const floatAnimation = {
  y: [0, -5, 0, -5, 0],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
};

// Floating decorative circles keyframes
const floatCircle = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

// Gradient animation keyframes for "Prime"
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ServiceCard component
function ServiceCard({ title, description, link }) {
  return (
    <Box
      p={6}
      borderWidth={1}
      borderRadius="2xl"
      bg="white"
      boxShadow="lg"
      textAlign="center"
    >
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      <Text mb={4} color="gray.600">
        {description}
      </Text>
      {link && (
        <Button
          as={Link}
          to={link}
          variant="link"
          color="gold.500"
          fontWeight="bold"
        >
          Learn more →
        </Button>
      )}
    </Box>
  );
}

export default function App() {
  return (
    <Box bg="offwhite.500" minH="100vh" position="relative" overflow="hidden">
      {/* Decorative floating circles */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        w="40px"
        h="40px"
        bg="gold.200"
        rounded="full"
        opacity={0.3}
        style={{ animation: `${floatCircle} 6s ease-in-out infinite` }}
      />
      <MotionBox
        position="absolute"
        top="50%"
        right="15%"
        w="60px"
        h="60px"
        bg="gold.300"
        rounded="full"
        opacity={0.2}
        style={{ animation: `${floatCircle} 8s ease-in-out infinite` }}
      />

      <Container maxW="7xl" py={12}>
        {/* Hero Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          textAlign="center"
          py={20}
        >
          <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="800">
            OSSC
            <Box as="span" position="relative" display="inline-block" color="black.500">
              A
              <MotionBox
                as="img"
                src={hatImg}
                position="absolute"
                top="-0.4em"
                left="0"
                w="0.8em"
                h="0.8em"
                animate={floatAnimation}
              />
            </Box>
            <Box
              as="span"
              ml={4}
              bgGradient="linear(to-r, #FFD700, #FFA500, #FFD700)"
              bgClip="text"
              style={{ animation: `${gradientAnimation} 5s ease infinite` }}
            >
              Prime
            </Box>
          </Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} mt={4} color="gray.600">
            Your prime partner for web, app and AI solutions
          </Text>
          <Button
  as={Link}
  to="/start-project"
  size="lg"
  mt={8}
  bg="gold.500"
  color="white"
  _hover={{ bg: "black.500", color: "gold.500", transform: "scale(1.05)", boxShadow: "lg" }}
  transition="all 0.3s ease"
  rounded="2xl"
>
  Start a Project
</Button>

        </MotionBox>

        {/* Services Section */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={16} justifyItems="center">
          <ServiceCard
            title="Web Development"
            description="Performance-first, accessible websites with modern UX."
            link="/web-development"
          />
          <ServiceCard
            title="App Development"
            description="Cross-platform mobile & desktop apps that scale."
            link="/app-development"
          />
          <ServiceCard
            title="AI Solutions"
            description="Custom ML/AI systems, automation, and integrations."
            link="/ai-solutions"
          />
        </SimpleGrid>

        {/* Contact Section */}
        <Box mt={20} textAlign="center">
          <VStack
            bg="white"
            rounded="2xl"
            shadow="lg"
            py={16}
            px={{ base: 6, md: 12 }}
            spacing={6}
            maxW="3xl"
            mx="auto"
          >
            <Heading as="h3" size="lg">
              Get in Touch
            </Heading>
            <Text fontSize="lg" color="gray.600">
              For inquiries or collaborations, reach out to us:
            </Text>

            {/* Email Button */}
            <Button
              as="a"
              href="mailto:contact.osscaprime@gmail.com"
              bg="gold.500"
              color="white"
              _hover={{ bg: "black.500", color: "gold.500", transform: "scale(1.05)", boxShadow: "lg" }}
              size="lg"
              rounded="2xl"
              px={8}
              transition="all 0.3s ease"
            >
              ✉️ Email Us
            </Button>

            {/* Instagram Button */}
            <Button
              as="a"
              href="https://www.instagram.com/ossca_prime"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaInstagram />}
              variant="outline"
              borderColor="gold.500"
              color="gold.500"
              _hover={{ bg: "gold.500", color: "white", transform: "scale(1.05)" }}
              size="lg"
              rounded="2xl"
              px={8}
              transition="all 0.3s ease"
            >
              @ossca_prime
            </Button>

            <Text fontSize="sm" color="gray.500">
              Or copy our email: <Box as="span" fontWeight="bold">contact.osscaprime@gmail.com</Box>
            </Text>
          </VStack>
        </Box>

        {/* Footer */}
        <VStack as="footer" mt={20} py={10} spacing={2} fontSize="sm" color="gray.600">
          <Text>© {new Date().getFullYear()} OSSCA Prime — Your prime partner for web, app and AI solutions.</Text>
        </VStack>
      </Container>
    </Box>
  );
}

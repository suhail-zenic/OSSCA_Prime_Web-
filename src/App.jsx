import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { keyframes } from "@emotion/react";
import { FaInstagram } from "react-icons/fa";
import hatImg from "./assets/fedora.png";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

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

// Shine effect keyframes
const shineAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

// Magnetic hover effect
const MagneticButton = ({ children, ...props }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <MotionButton
      {...props}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </MotionButton>
  );
};

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
      <Heading size="md" mb={4} fontFamily="'Playfair Display', serif">
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
              style={{
                backgroundSize: "200% auto",
                animation: `${shineAnimation} 3s linear infinite`,
              }}
              fontFamily="'Playfair Display', serif"
            >
              Prime
            </Box>
          </Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} mt={4} color="gray.600">
            Your prime partner for web, app and AI solutions
          </Text>
          <MagneticButton
            as={Link}
            to="/start-project"
            size="lg"
            mt={8}
            bg="gold.500"
            color="white"
            _hover={{ bg: "black.500", color: "gold.500", transform: "scale(1.05)", boxShadow: "lg" }}
            transition="all 0.3s ease"
            rounded="2xl"
            style={{
              backgroundImage: "linear-gradient(120deg, rgba(255,215,0,0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(255,215,0,0.2) 100%)",
              backgroundSize: "200% auto",
              animation: `${shineAnimation} 5s linear infinite`,
            }}
          >
            Start a Project
          </MagneticButton>
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

       {/* Pricing Section */}
<SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={16} justifyItems="center">

  {/* Basic Plan */}
  <Box p={10} borderWidth={3} borderRadius="2xl" bg="rgba(255,255,255,0.7)" backdropFilter="blur(10px)" shadow="lg" textAlign="center">
    <Heading size="lg" mb={2} fontFamily="'Playfair Display', serif">Basic</Heading>
    <Text fontSize="sm" color="gray.600" mb={6}>
      For individuals and small projects
    </Text>

    <Text fontSize="4xl" fontWeight="bold" mb={6}>
      Starting from $299 <Box as="span" fontSize="md" color="gray.500">/project</Box>
    </Text>

    <MagneticButton
      as={Link}
      to="/basic-features"
      mt={4}
      colorScheme="blackAlpha"
      bg="white"
      color="black"
      rounded="xl"
      shadow="md"
      _hover={{ bg: "black", color: "white" }}
    >
      Learn More
    </MagneticButton>
  </Box>

  {/* Pro Plan (Most Popular) */}
  <Box position="relative">
    <Box
      position="absolute"
      top="-3"
      left="50%"
      transform="translateX(-50%)"
      bg="white"
      color="black"
      fontWeight="bold"
      fontSize="xs"
      px={3}
      py={1}
      rounded="full"
      shadow="lg"
      border="1px solid"
      borderColor="gray.200"
      zIndex={1}
    >
      ⭐ Most Popular
    </Box>

    <Box
      p={10}
      borderWidth={3}
      borderRadius="2xl"
      bgGradient="linear(to-br, #FFD700, #C5A000)"
      backdropFilter="blur(12px)"
      shadow="2xl"
      textAlign="center"
      transform="scale(1.05)"
      _hover={{ transform: "scale(1.08)", transition: "0.3s" }}
    >
      <Heading size="lg" mb={2} color="white" fontFamily="'Playfair Display', serif">Pro</Heading>
      <Text fontSize="sm" color="whiteAlpha.800" mb={6}>
        Best for growing startups and businesses ready to scale
      </Text>

      <Text fontSize="4xl" fontWeight="bold" mb={6} color="white">
        Starting from $999 <Box as="span" fontSize="md" color="whiteAlpha.800">/project</Box>
      </Text>

      <MagneticButton
        as={Link}
        to="/pro-features"
        mt={4}
        colorScheme="blackAlpha"
        bg="white"
        color="black"
        rounded="xl"
        shadow="md"
        _hover={{ bg: "black", color: "white" }}
      >
        Learn More
      </MagneticButton>
    </Box>
  </Box>

  {/* Enterprise Plan */}
  <Box p={10} borderWidth={3} borderRadius="2xl" bg="rgba(255,255,255,0.7)" backdropFilter="blur(10px)" shadow="lg" textAlign="center">
    <Heading size="lg" mb={2} fontFamily="'Playfair Display', serif">Enterprise</Heading>
    <Text fontSize="sm" color="gray.600" mb={6}>
      Tailored solutions for large-scale projects
    </Text>

    <Text fontSize="4xl" fontWeight="bold" mb={6}>
      Starting from $1999 <Box as="span" fontSize="md" color="gray.500">/project</Box>
    </Text>

    <MagneticButton
      as={Link}
      to="/enterprise-features"
      mt={4}
      colorScheme="blackAlpha"
      bg="white"
      color="black"
      rounded="xl"
      shadow="md"
      _hover={{ bg: "black", color: "white" }}
    >
      Learn More
    </MagneticButton>
  </Box>

</SimpleGrid>

        {/* Contact Section */}
        <Box mt={20} textAlign="center">
          <VStack
            bg="rgba(255,255,255,0.7)"
            backdropFilter="blur(12px)"
            rounded="2xl"
            shadow="lg"
            py={16}
            px={{ base: 6, md: 12 }}
            spacing={6}
            maxW="3xl"
            mx="auto"
          >
            <Heading as="h3" size="lg" fontFamily="'Playfair Display', serif">
              Get in Touch
            </Heading>
            <Text fontSize="lg" color="gray.600">
              For inquiries or collaborations, reach out to us:
            </Text>

            {/* Email Button */}
            <MagneticButton
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
            </MagneticButton>

            {/* Instagram Button */}
            <MagneticButton
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
            </MagneticButton>

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

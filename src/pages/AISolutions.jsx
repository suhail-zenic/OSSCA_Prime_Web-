import React, { useState } from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import { Button } from "@chakra-ui/react";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

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

export default function AISolutions() {
  return (
    <Container maxW="4xl" py={16} textAlign="center">
      <MotionHeading
        mb={6}
        fontFamily="'Playfair Display', serif"
        fontWeight="800"
        fontSize={{ base: "3xl", md: "5xl" }}
        bgGradient="linear(to-r, #FFD700, #FFA500, #FFD700)"
        bgClip="text"
        style={{
          backgroundSize: "200% auto",
          animation: `${shineAnimation} 3s linear infinite`,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI Solutions
      </MotionHeading>

      <MotionText
        fontSize="lg"
        color="gray.600"
        mb={8}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Harness the power of Artificial Intelligence. From chatbots and machine
        learning models to automation systems, OSSCA Prime integrates AI into
        your workflows, giving your business a true competitive edge.
      </MotionText>

      <MagneticButton
        as={Link}
        to="/"
        size="lg"
        bg="gold.500"
        color="white"
        rounded="2xl"
        shadow="md"
        _hover={{
          bg: "black",
          color: "gold.500",
          transform: "scale(1.05)",
          boxShadow: "lg",
        }}
        transition="all 0.3s ease"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,215,0,0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(255,215,0,0.2) 100%)",
          backgroundSize: "200% auto",
          animation: `${shineAnimation} 5s linear infinite`,
        }}
      >
        ← Back to Home
      </MagneticButton>
    </Container>
  );
}

import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack, 
  HStack, 
  Button, 
  Badge, 
  Icon,
  Divider,
  useColorModeValue,
  Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import { 
  FaCheck, 
  FaRocket, 
  FaMobile, 
  FaSearch, 
  FaHeadset, 
  FaShieldAlt, 
  FaClock, 
  FaCode,
  FaPalette,
  FaGlobe,
  FaArrowLeft,
  FaStar
} from "react-icons/fa";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionText = motion(Text);

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

// Feature Card Component
const FeatureCard = ({ icon, title, description, isHighlighted = false }) => (
  <MotionBox
    p={6}
    borderWidth={2}
    borderRadius="2xl"
    bg={isHighlighted ? "rgba(255,215,0,0.1)" : "rgba(255,255,255,0.8)"}
    backdropFilter="blur(10px)"
    shadow="lg"
    borderColor={isHighlighted ? "gold.300" : "gray.200"}
    _hover={{ 
      transform: "translateY(-5px)", 
      shadow: "xl",
      borderColor: "gold.400"
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <HStack spacing={4} mb={3}>
      <Icon as={icon} w={6} h={6} color="gold.500" />
      <Text fontWeight="bold" fontSize="lg">{title}</Text>
      {isHighlighted && <Badge colorScheme="gold" variant="solid">Popular</Badge>}
    </HStack>
    <Text color="gray.600">{description}</Text>
  </MotionBox>
);

export default function BasicFeatures() {
  const bgColor = useColorModeValue("offwhite.500", "gray.900");

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="7xl" py={16}>
        {/* Header Section */}
        <VStack spacing={8} textAlign="center" mb={16}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="800"
              fontSize={{ base: "3xl", md: "5xl" }}
              bgGradient="linear(to-r, #FFD700, #FFA500, #FFD700)"
              bgClip="text"
              style={{
                backgroundSize: "200% auto",
                animation: `${shineAnimation} 3s linear infinite`,
              }}
            >
              Basic Plan Features
            </Heading>
          </MotionBox>

          <MotionText
            fontSize="xl"
            color="gray.600"
            maxW="3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Perfect for individuals, freelancers, and small businesses who need a professional, 
            functional website without breaking the bank.
          </MotionText>

          {/* Pricing Badge */}
          <MotionBox
            bg="gold.500"
            color="white"
            px={8}
            py={3}
            borderRadius="full"
            fontWeight="bold"
            fontSize="xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Starting from $299/project
          </MotionBox>
        </VStack>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={16}>
          <FeatureCard
            icon={FaMobile}
            title="Responsive Design"
            description="Your website will look perfect on all devices - desktop, tablet, and mobile. No compromise on user experience."
            isHighlighted={true}
          />
          
          <FeatureCard
            icon={FaCode}
            title="Modern Technologies"
            description="Built with the latest web technologies including React, Node.js, and modern CSS frameworks for optimal performance."
          />
          
          <FeatureCard
            icon={FaSearch}
            title="SEO Optimization"
            description="Basic SEO optimization to help your website rank better in search engines and attract more organic traffic."
          />
          
          <FeatureCard
            icon={FaPalette}
            title="Custom Design"
            description="Unique, professional design tailored to your brand identity and business requirements."
          />
          
          <FeatureCard
            icon={FaGlobe}
            title="Fast Loading"
            description="Optimized for speed with fast loading times to keep your visitors engaged and improve search rankings."
          />
          
          <FeatureCard
            icon={FaShieldAlt}
            title="Security"
            description="Basic security measures including SSL certificate and secure hosting to protect your website and visitors."
          />
        </SimpleGrid>

        {/* What's Included Section */}
        <MotionBox
          bg="rgba(255,255,255,0.8)"
          backdropFilter="blur(10px)"
          borderRadius="2xl"
          p={8}
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={6} textAlign="center" fontFamily="'Playfair Display', serif">
            What's Included
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>Up to 5 pages</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>Contact form</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>Basic CMS for content updates</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>Mobile-responsive design</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>SSL certificate</Text>
              </HStack>
            </VStack>
            
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>Basic SEO setup</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>Google Analytics integration</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>Social media integration</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>2 weeks of revisions</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>Email support (3 business days)</Text>
              </HStack>
            </VStack>
          </SimpleGrid>
        </MotionBox>

        {/* Timeline Section */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={8} textAlign="center" fontFamily="'Playfair Display', serif">
            Project Timeline
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
            {[
              { step: "1", title: "Discovery", duration: "1-2 days", description: "Understanding your requirements" },
              { step: "2", title: "Design", duration: "3-5 days", description: "Creating your unique design" },
              { step: "3", title: "Development", duration: "5-7 days", description: "Building your website" },
              { step: "4", title: "Launch", duration: "1-2 days", description: "Testing and going live" }
            ].map((item, index) => (
              <VStack key={index} spacing={3} textAlign="center">
                <Box
                  w={12}
                  h={12}
                  bg="gold.500"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  {item.step}
                </Box>
                <Text fontWeight="bold">{item.title}</Text>
                <Text fontSize="sm" color="gold.600" fontWeight="bold">{item.duration}</Text>
                <Text fontSize="sm" color="gray.600">{item.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* CTA Section */}
        <MotionBox
          textAlign="center"
          bg="rgba(255,215,0,0.1)"
          borderRadius="2xl"
          p={12}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={4} fontFamily="'Playfair Display', serif">
            Ready to Get Started?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Join hundreds of satisfied clients who chose our Basic plan for their online presence.
          </Text>
          
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <MagneticButton
              as={Link}
              to="/start-project"
              size="lg"
              bg="gold.500"
              color="white"
              _hover={{ bg: "black.500", color: "gold.500", transform: "scale(1.05)" }}
              rounded="xl"
              px={8}
              style={{
                backgroundImage: "linear-gradient(120deg, rgba(255,215,0,0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(255,215,0,0.2) 100%)",
                backgroundSize: "200% auto",
                animation: `${shineAnimation} 5s linear infinite`,
              }}
            >
              <Icon as={FaRocket} mr={2} />
              Start Your Project
            </MagneticButton>
            
            <MagneticButton
              as={Link}
              to="/"
              size="lg"
              variant="outline"
              borderColor="gold.500"
              color="gold.500"
              _hover={{ bg: "gold.500", color: "white" }}
              rounded="xl"
              px={8}
            >
              <Icon as={FaArrowLeft} mr={2} />
              Back to Home
            </MagneticButton>
          </HStack>
        </MotionBox>
      </Container>
    </Box>
  );
}

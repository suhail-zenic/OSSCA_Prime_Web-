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
  useColorModeValue,
  Flex,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
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
  FaStar,
  FaCrown,
  FaChartLine,
  FaDatabase,
  FaCog,
  FaUsers,
  FaTimes,
  FaCheckCircle
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
const FeatureCard = ({ icon, title, description, isHighlighted = false, isPremium = false }) => (
  <MotionBox
    p={6}
    borderWidth={2}
    borderRadius="2xl"
    bg={isHighlighted ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.8)"}
    backdropFilter="blur(10px)"
    shadow="lg"
    borderColor={isHighlighted ? "gold.400" : "gray.200"}
    _hover={{ 
      transform: "translateY(-5px)", 
      shadow: "xl",
      borderColor: "gold.500"
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    position="relative"
  >
    {isPremium && (
      <Badge
        position="absolute"
        top="-2"
        right="-2"
        colorScheme="gold"
        variant="solid"
        borderRadius="full"
        px={2}
        py={1}
        fontSize="xs"
      >
        <Icon as={FaCrown} mr={1} />
        PRO
      </Badge>
    )}
    <HStack spacing={4} mb={3}>
      <Icon as={icon} w={6} h={6} color="gold.500" />
      <Text fontWeight="bold" fontSize="lg">{title}</Text>
    </HStack>
    <Text color="gray.600">{description}</Text>
  </MotionBox>
);

export default function ProFeatures() {
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
        Pro Plan Features
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
            Perfect for startups and growing businesses that need advanced functionality, 
            scalability, and premium support to accelerate their growth.
          </MotionText>

          {/* Pricing Badge */}
          <MotionBox
            bgGradient="linear(to-r, #FFD700, #FFA500)"
            color="white"
            px={8}
            py={3}
            borderRadius="full"
            fontWeight="bold"
            fontSize="xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            position="relative"
            overflow="hidden"
          >
            <Icon as={FaCrown} mr={2} />
            Starting from $999/project
            <Box
              position="absolute"
              top="0"
              left="-100%"
              w="100%"
              h="100%"
              bg="linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
              style={{
                animation: `${shineAnimation} 3s linear infinite`,
              }}
            />
          </MotionBox>
        </VStack>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={16}>
          <FeatureCard
            icon={FaMobile}
            title="Advanced Responsive Design"
            description="Premium responsive design with custom breakpoints, advanced animations, and pixel-perfect layouts across all devices."
            isHighlighted={true}
            isPremium={true}
          />
          
          <FeatureCard
            icon={FaCode}
            title="Custom Development"
            description="Tailored solutions with custom functionality, integrations, and advanced features built specifically for your business needs."
            isPremium={true}
          />
          
          <FeatureCard
            icon={FaSearch}
            title="Advanced SEO & Marketing"
            description="Comprehensive SEO strategy, content optimization, and marketing tools to maximize your online visibility and conversions."
            isPremium={true}
          />
          
          <FeatureCard
            icon={FaDatabase}
            title="Database Integration"
            description="Custom database solutions, user management systems, and data analytics to power your business operations."
            isPremium={true}
          />
          
          <FeatureCard
            icon={FaChartLine}
            title="Analytics & Reporting"
            description="Advanced analytics dashboard with custom reports, user behavior tracking, and business intelligence insights."
            isPremium={true}
          />
          
          <FeatureCard
            icon={FaCog}
            title="API Integrations"
            description="Seamless integration with third-party services, payment gateways, CRM systems, and other business tools."
            isPremium={true}
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
            Pro Plan Includes Everything
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Up to 15 pages</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Advanced contact forms</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Custom CMS with admin panel</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">User authentication system</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">E-commerce functionality</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Payment gateway integration</Text>
              </HStack>
            </VStack>
            
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Advanced SEO optimization</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Custom analytics dashboard</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Social media integration</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">4 weeks of revisions</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Priority support (24 hours)</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">3 months free maintenance</Text>
              </HStack>
            </VStack>
          </SimpleGrid>
        </MotionBox>

        {/* Comparison Table */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={8} textAlign="center" fontFamily="'Playfair Display', serif">
            Pro vs Basic Comparison
          </Heading>
          
          <TableContainer
            bg="rgba(255,255,255,0.8)"
            backdropFilter="blur(10px)"
          borderRadius="2xl"
          shadow="lg"
            overflow="hidden"
          >
            <Table variant="simple">
              <Thead bg="gold.50">
                <Tr>
                  <Th>Feature</Th>
                  <Th textAlign="center">Basic</Th>
                  <Th textAlign="center" bg="gold.100">Pro</Th>
                </Tr>
              </Thead>
              <Tbody>
                {[
                  { feature: "Number of Pages", basic: "Up to 5", pro: "Up to 15" },
                  { feature: "Custom Design", basic: "✓", pro: "✓" },
                  { feature: "CMS", basic: "Basic", pro: "Advanced" },
                  { feature: "E-commerce", basic: "✗", pro: "✓" },
                  { feature: "User Authentication", basic: "✗", pro: "✓" },
                  { feature: "API Integrations", basic: "Basic", pro: "Advanced" },
                  { feature: "Analytics", basic: "Basic", pro: "Custom Dashboard" },
                  { feature: "Support", basic: "Email (3 days)", pro: "Priority (24h)" },
                  { feature: "Revisions", basic: "2 weeks", pro: "4 weeks" },
                  { feature: "Maintenance", basic: "✗", pro: "3 months free" }
                ].map((row, index) => (
                  <Tr key={index} _hover={{ bg: "gray.50" }}>
                    <Td fontWeight="medium">{row.feature}</Td>
                    <Td textAlign="center">{row.basic}</Td>
                    <Td textAlign="center" bg="gold.50" fontWeight="bold">{row.pro}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
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
            Pro Project Timeline
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={6}>
            {[
              { step: "1", title: "Discovery", duration: "2-3 days", description: "Deep dive into your business needs" },
              { step: "2", title: "Strategy", duration: "2-3 days", description: "Creating comprehensive strategy" },
              { step: "3", title: "Design", duration: "5-7 days", description: "Advanced UI/UX design" },
              { step: "4", title: "Development", duration: "10-14 days", description: "Building your solution" },
              { step: "5", title: "Launch", duration: "2-3 days", description: "Testing and deployment" }
            ].map((item, index) => (
              <VStack key={index} spacing={3} textAlign="center">
                <Box
                  w={12}
                  h={12}
                  bgGradient="linear(to-r, #FFD700, #FFA500)"
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
          bgGradient="linear(to-r, rgba(255,215,0,0.1), rgba(255,165,0,0.1))"
          borderRadius="2xl"
          p={12}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={4} fontFamily="'Playfair Display', serif">
            Ready to Scale Your Business?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Join successful startups and growing businesses who chose our Pro plan to accelerate their growth.
          </Text>
          
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <MagneticButton
              as={Link}
              to="/start-project"
              size="lg"
              bgGradient="linear(to-r, #FFD700, #FFA500)"
              color="white"
              _hover={{ 
                bgGradient: "linear(to-r, #000000, #333333)", 
                color: "gold.500", 
                transform: "scale(1.05)" 
              }}
              rounded="xl"
              px={8}
              style={{
                backgroundImage: "linear-gradient(120deg, rgba(255,215,0,0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(255,215,0,0.2) 100%)",
                backgroundSize: "200% auto",
                animation: `${shineAnimation} 5s linear infinite`,
              }}
            >
              <Icon as={FaCrown} mr={2} />
              Start Pro Project
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

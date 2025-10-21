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
  List,
  ListItem,
  ListIcon
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
  FaCheckCircle,
  FaGem,
  FaInfinity,
  FaLock,
  FaServer,
  FaCloud,
  FaBrain,
  FaHandshake,
  FaApple,
  FaAndroid,
  FaReact,
  FaAppStore,
  FaGooglePlay,
  FaBell,
  FaMapMarkerAlt,
  FaCamera,
  FaWallet
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

// Service Card Component
const ServiceCard = ({ icon, title, description, platforms = [] }) => (
  <MotionBox
    p={6}
    borderWidth={2}
    borderRadius="2xl"
    bg="rgba(255,255,255,0.8)"
    backdropFilter="blur(10px)"
    shadow="lg"
    borderColor="gray.200"
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
    </HStack>
    <Text color="gray.600" mb={4}>{description}</Text>
    {platforms.length > 0 && (
      <HStack spacing={2} flexWrap="wrap">
        {platforms.map((platform, index) => (
          <Badge key={index} colorScheme="blue" variant="subtle" fontSize="xs">
            {platform}
          </Badge>
        ))}
      </HStack>
    )}
  </MotionBox>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <VStack
    p={4}
    borderWidth={1}
    borderRadius="xl"
    bg="rgba(255,255,255,0.6)"
    backdropFilter="blur(10px)"
    shadow="md"
    textAlign="center"
    spacing={3}
    transition="all 0.3s ease"
    _hover={{ 
      transform: "translateY(-3px)", 
      shadow: "lg",
      bg: "rgba(255,255,255,0.8)"
    }}
  >
    <Icon as={icon} w={8} h={8} color="gold.500" />
    <Text fontWeight="bold" fontSize="sm">{title}</Text>
    <Text fontSize="xs" color="gray.600">{description}</Text>
  </VStack>
);

export default function AppDev() {
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
        App Development
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
            We build powerful mobile and desktop applications with speed, security,
            and scalability in mind. From native iOS/Android apps to cross-platform
            solutions, we create engaging experiences that delight users and drive business growth.
      </MotionText>
        </VStack>

        {/* Services Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={16}>
          <ServiceCard
            icon={FaApple}
            title="iOS App Development"
            description="Native iOS applications built with Swift and SwiftUI for optimal performance on iPhone and iPad."
            platforms={["Swift", "SwiftUI", "UIKit", "Core Data"]}
          />
          
          <ServiceCard
            icon={FaAndroid}
            title="Android App Development"
            description="Native Android apps using Kotlin and Jetpack Compose for seamless experiences across Android devices."
            platforms={["Kotlin", "Jetpack Compose", "Java", "Room"]}
          />
          
          <ServiceCard
            icon={FaReact}
            title="Cross-Platform Apps"
            description="Build once, deploy everywhere with React Native or Flutter for iOS, Android, and web platforms."
            platforms={["React Native", "Flutter", "Expo", "Dart"]}
          />
          
          <ServiceCard
            icon={FaCode}
            title="Progressive Web Apps"
            description="Modern PWAs that work offline, load instantly, and provide app-like experiences on any device."
            platforms={["React", "Vue", "Service Workers", "Web APIs"]}
          />
          
          <ServiceCard
            icon={FaCloud}
            title="Backend & APIs"
            description="Scalable cloud infrastructure with RESTful APIs, real-time features, and secure data management."
            platforms={["Node.js", "Firebase", "AWS", "MongoDB"]}
          />
          
          <ServiceCard
            icon={FaAppStore}
            title="App Store Deployment"
            description="End-to-end deployment support, app store optimization, and compliance with platform guidelines."
            platforms={["App Store", "Google Play", "TestFlight", "Beta Testing"]}
          />
        </SimpleGrid>

        {/* Key Features Section */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={8} textAlign="center" fontFamily="'Playfair Display', serif">
            App Features We Build
          </Heading>
          
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
            <FeatureCard
              icon={FaUsers}
              title="User Authentication"
              description="Secure login & registration"
            />
            <FeatureCard
              icon={FaBell}
              title="Push Notifications"
              description="Real-time alerts & updates"
            />
            <FeatureCard
              icon={FaWallet}
              title="Payment Integration"
              description="Stripe, PayPal, in-app purchases"
            />
            <FeatureCard
              icon={FaMapMarkerAlt}
              title="Location Services"
              description="GPS, maps, geofencing"
            />
            <FeatureCard
              icon={FaCamera}
              title="Camera & Media"
              description="Photo/video capture & editing"
            />
            <FeatureCard
              icon={FaDatabase}
              title="Offline Mode"
              description="Work without internet"
            />
            <FeatureCard
              icon={FaChartLine}
              title="Analytics"
              description="User behavior tracking"
            />
            <FeatureCard
              icon={FaShieldAlt}
              title="Security"
              description="Encryption & data protection"
            />
          </SimpleGrid>
        </MotionBox>

        {/* App Types Section */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={8} textAlign="center" fontFamily="'Playfair Display', serif">
            Types of Apps We Build
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box
              bg="rgba(255,255,255,0.8)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={6}
              shadow="lg"
            >
              <Heading size="md" mb={4} color="gold.600">
                <Icon as={FaMobile} mr={2} />
                Consumer Apps
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Social networking & dating apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  E-commerce & marketplace apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Health & fitness trackers
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Entertainment & streaming apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Education & learning platforms
                </ListItem>
              </List>
            </Box>

            <Box
              bg="rgba(255,255,255,0.8)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={6}
              shadow="lg"
            >
              <Heading size="md" mb={4} color="gold.600">
                <Icon as={FaServer} mr={2} />
                Business Apps
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Enterprise resource planning (ERP)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Customer relationship management (CRM)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Project management & collaboration
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Inventory & supply chain management
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Field service & workforce management
                </ListItem>
              </List>
            </Box>

            <Box
              bg="rgba(255,255,255,0.8)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={6}
              shadow="lg"
            >
              <Heading size="md" mb={4} color="gold.600">
                <Icon as={FaGlobe} mr={2} />
                On-Demand Apps
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Ride-sharing & delivery apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Food ordering & restaurant apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Home services & booking platforms
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Healthcare & telemedicine apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Real estate & property management
                </ListItem>
              </List>
            </Box>

            <Box
              bg="rgba(255,255,255,0.8)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={6}
              shadow="lg"
            >
              <Heading size="md" mb={4} color="gold.600">
                <Icon as={FaPalette} mr={2} />
                Specialized Apps
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  IoT & smart device control apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Augmented reality (AR) apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Gaming & entertainment apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Finance & fintech apps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Travel & hospitality apps
                </ListItem>
              </List>
            </Box>
          </SimpleGrid>
        </MotionBox>

        {/* Process Section */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={8} textAlign="center" fontFamily="'Playfair Display', serif">
            Our App Development Process
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 6 }} spacing={6}>
            {[
              { step: "1", title: "Research", description: "Market & user research" },
              { step: "2", title: "Design", description: "UI/UX wireframes & prototypes" },
              { step: "3", title: "Develop", description: "Frontend & backend coding" },
              { step: "4", title: "Test", description: "QA & device testing" },
              { step: "5", title: "Launch", description: "App store submission" },
              { step: "6", title: "Support", description: "Updates & maintenance" }
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
                <Text fontSize="sm" color="gray.600">{item.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Benefits Section */}
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
            Why Build a Mobile App?
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Direct access to customers</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Enhanced user experience</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Push notification marketing</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Offline functionality</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Device feature integration</Text>
              </HStack>
            </VStack>
            
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Personalized user experience</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Increased brand visibility</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Higher customer engagement</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Valuable analytics & insights</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Competitive advantage</Text>
              </HStack>
            </VStack>
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
            Ready to Build Your App?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Let's turn your app idea into reality with cutting-edge technology and stunning design.
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
              <Icon as={FaMobile} mr={2} />
              Start App Project
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

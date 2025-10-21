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
  FaRobot,
  FaLanguage,
  FaChartBar,
  FaLightbulb,
  FaCogs,
  FaMagic
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
const ServiceCard = ({ icon, title, description, technologies = [] }) => (
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
    {technologies.length > 0 && (
      <HStack spacing={2} flexWrap="wrap">
        {technologies.map((tech, index) => (
          <Badge key={index} colorScheme="purple" variant="subtle" fontSize="xs">
            {tech}
          </Badge>
        ))}
      </HStack>
    )}
  </MotionBox>
);

export default function AISolutions() {
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
        AI Solutions
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
            Harness the power of Artificial Intelligence. From intelligent chatbots and machine
            learning models to automation systems and predictive analytics, OSSCA Prime integrates 
            cutting-edge AI into your workflows, giving your business a true competitive edge.
      </MotionText>
        </VStack>

        {/* Services Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={16}>
          <ServiceCard
            icon={FaRobot}
            title="AI Chatbots & Virtual Assistants"
            description="Intelligent conversational AI that provides 24/7 customer support, answers queries, and improves user engagement."
            technologies={["ChatGPT", "Dialogflow", "Rasa", "Custom NLP"]}
          />
          
          <ServiceCard
            icon={FaBrain}
            title="Machine Learning Models"
            description="Custom ML models for prediction, classification, recommendation systems, and data-driven decision making."
            technologies={["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"]}
          />
          
          <ServiceCard
            icon={FaChartBar}
            title="Predictive Analytics"
            description="Advanced analytics to forecast trends, predict customer behavior, and optimize business strategies."
            technologies={["Python", "R", "Tableau", "Power BI"]}
          />
          
          <ServiceCard
            icon={FaLanguage}
            title="Natural Language Processing"
            description="Text analysis, sentiment analysis, language translation, and document understanding using NLP."
            technologies={["BERT", "spaCy", "NLTK", "Transformers"]}
          />
          
          <ServiceCard
            icon={FaCogs}
            title="Process Automation"
            description="Automate repetitive tasks, workflows, and business processes with intelligent automation systems."
            technologies={["RPA", "AI Workflows", "Custom Scripts", "APIs"]}
          />
          
          <ServiceCard
            icon={FaMagic}
            title="Computer Vision"
            description="Image recognition, object detection, facial recognition, and visual data analysis solutions."
            technologies={["OpenCV", "YOLO", "TensorFlow", "Custom Models"]}
          />
        </SimpleGrid>

        {/* Use Cases Section */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={8} textAlign="center" fontFamily="'Playfair Display', serif">
            AI Use Cases
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
                <Icon as={FaChartLine} mr={2} />
                Business Intelligence
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Sales forecasting and demand prediction
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Customer churn prediction
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Market trend analysis
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Competitive intelligence
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
                <Icon as={FaUsers} mr={2} />
                Customer Experience
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Personalized recommendations
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Sentiment analysis from reviews
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Smart customer segmentation
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Automated support tickets
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
                <Icon as={FaCog} mr={2} />
                Operations
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Quality control automation
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Inventory optimization
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Route optimization
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Predictive maintenance
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
                <Icon as={FaLightbulb} mr={2} />
                Innovation
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Content generation (text, images)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Code assistance and review
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Design automation
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Research and data mining
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
            Our AI Development Process
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={6}>
            {[
              { step: "1", title: "Discovery", description: "Understanding your business problem" },
              { step: "2", title: "Data Analysis", description: "Analyzing and preparing data" },
              { step: "3", title: "Model Development", description: "Building and training AI models" },
              { step: "4", title: "Testing", description: "Validating model accuracy" },
              { step: "5", title: "Deployment", description: "Integrating into production" }
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
            Why Choose AI Solutions?
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Increase efficiency by automating tasks</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Make data-driven decisions</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Reduce operational costs</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Improve customer experience</Text>
              </HStack>
            </VStack>
            
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Scale operations intelligently</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Gain competitive advantage</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Predict trends and outcomes</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Unlock insights from data</Text>
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
            Ready to Embrace AI?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Transform your business with intelligent automation and AI-powered solutions.
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
              <Icon as={FaBrain} mr={2} />
              Start AI Project
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

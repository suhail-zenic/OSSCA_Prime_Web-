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
  Image,
  AspectRatio
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
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaAws,
  FaShopify,
  FaWordpress
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
          <Badge key={index} colorScheme="gold" variant="subtle" fontSize="xs">
            {tech}
          </Badge>
        ))}
      </HStack>
    )}
  </MotionBox>
);

// Technology Card Component
const TechCard = ({ icon, name, description }) => (
  <MotionBox
    p={4}
    borderWidth={1}
    borderRadius="xl"
    bg="rgba(255,255,255,0.6)"
    backdropFilter="blur(10px)"
    shadow="md"
    textAlign="center"
    _hover={{ 
      transform: "translateY(-3px)", 
      shadow: "lg",
      bg: "rgba(255,255,255,0.8)"
    }}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    <Icon as={icon} w={8} h={8} color="gold.500" mb={2} />
    <Text fontWeight="bold" fontSize="sm" mb={1}>{name}</Text>
    <Text fontSize="xs" color="gray.600">{description}</Text>
  </MotionBox>
);

export default function WebDev() {
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
              Web Development
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
            We craft responsive, SEO-optimized, and high-performance websites
            designed to scale with your business. From simple portfolios to complex
            e-commerce platforms, we deliver premium web experiences that drive results.
          </MotionText>
        </VStack>

        {/* Services Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={16}>
          <ServiceCard
            icon={FaPalette}
            title="Custom Web Design"
            description="Unique, modern designs tailored to your brand identity and business goals."
            technologies={["Figma", "Adobe XD", "Sketch", "Photoshop"]}
          />
          
          <ServiceCard
            icon={FaCode}
            title="Frontend Development"
            description="Interactive, responsive user interfaces built with modern frameworks and best practices."
            technologies={["React", "Vue.js", "Angular", "Next.js"]}
          />
          
          <ServiceCard
            icon={FaServer}
            title="Backend Development"
            description="Robust server-side solutions with APIs, databases, and cloud infrastructure."
            technologies={["Node.js", "Python", "PHP", "Java"]}
          />
          
          <ServiceCard
            icon={FaShopify}
            title="E-commerce Solutions"
            description="Complete online stores with payment processing, inventory management, and analytics."
            technologies={["Shopify", "WooCommerce", "Magento", "Custom"]}
          />
          
          <ServiceCard
            icon={FaSearch}
            title="SEO Optimization"
            description="Technical SEO, content optimization, and performance tuning for better search rankings."
            technologies={["Google Analytics", "Search Console", "Schema", "Core Web Vitals"]}
          />
          
          <ServiceCard
            icon={FaShieldAlt}
            title="Security & Maintenance"
            description="Ongoing security updates, performance monitoring, and technical support."
            technologies={["SSL", "Firewalls", "Backups", "Monitoring"]}
          />
        </SimpleGrid>

        {/* Technologies Section */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={8} textAlign="center" fontFamily="'Playfair Display', serif">
            Technologies We Use
          </Heading>
          
          <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={6}>
            <TechCard
              icon={FaReact}
              name="React"
              description="Modern UI library"
            />
            <TechCard
              icon={FaNodeJs}
              name="Node.js"
              description="Server-side JavaScript"
            />
            <TechCard
              icon={FaJs}
              name="JavaScript"
              description="Dynamic web development"
            />
            <TechCard
              icon={FaHtml5}
              name="HTML5"
              description="Semantic markup"
            />
            <TechCard
              icon={FaCss3Alt}
              name="CSS3"
              description="Advanced styling"
            />
            <TechCard
              icon={FaPython}
              name="Python"
              description="Backend development"
            />
            <TechCard
              icon={FaGitAlt}
              name="Git"
              description="Version control"
            />
            <TechCard
              icon={FaAws}
              name="AWS"
              description="Cloud services"
            />
            <TechCard
              icon={FaWordpress}
              name="WordPress"
              description="CMS platform"
            />
            <TechCard
              icon={FaShopify}
              name="Shopify"
              description="E-commerce platform"
            />
            <TechCard
              icon={FaDatabase}
              name="Databases"
              description="Data management"
            />
            <TechCard
              icon={FaCloud}
              name="Cloud"
              description="Scalable hosting"
            />
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
            Our Development Process
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
            {[
              { step: "1", title: "Discovery & Planning", description: "Understanding your requirements, goals, and target audience" },
              { step: "2", title: "Design & Prototyping", description: "Creating wireframes, mockups, and interactive prototypes" },
              { step: "3", title: "Development & Testing", description: "Building your website with clean, optimized code" },
              { step: "4", title: "Launch & Optimization", description: "Deploying your site and ongoing performance monitoring" }
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
            What's Included in Web Development
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Responsive design for all devices</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Custom UI/UX design</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Modern, clean code</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">SEO optimization</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Fast loading speeds</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Cross-browser compatibility</Text>
              </HStack>
            </VStack>
            
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Content management system</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Contact forms & integrations</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Google Analytics setup</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">SSL certificate</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Domain & hosting setup</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Training & documentation</Text>
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
            Ready to Build Your Website?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Let's create a stunning, high-performance website that drives your business forward.
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
              Start Web Project
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

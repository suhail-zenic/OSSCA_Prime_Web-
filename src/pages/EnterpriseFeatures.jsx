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
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
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
  FaHandshake
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
const FeatureCard = ({ icon, title, description, isHighlighted = false, isEnterprise = false }) => (
  <MotionBox
    p={6}
    borderWidth={2}
    borderRadius="2xl"
    bg={isHighlighted ? "rgba(255,215,0,0.2)" : "rgba(255,255,255,0.8)"}
    backdropFilter="blur(10px)"
    shadow="lg"
    borderColor={isHighlighted ? "gold.500" : "gray.200"}
    _hover={{ 
      transform: "translateY(-5px)", 
      shadow: "xl",
      borderColor: "gold.600"
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    position="relative"
  >
    {isEnterprise && (
      <Badge
        position="absolute"
        top="-2"
        right="-2"
        colorScheme="purple"
        variant="solid"
        borderRadius="full"
        px={2}
        py={1}
        fontSize="xs"
      >
        <Icon as={FaGem} mr={1} />
        ENTERPRISE
      </Badge>
    )}
    <HStack spacing={4} mb={3}>
      <Icon as={icon} w={6} h={6} color="gold.500" />
      <Text fontWeight="bold" fontSize="lg">{title}</Text>
    </HStack>
    <Text color="gray.600">{description}</Text>
  </MotionBox>
);

export default function EnterpriseFeatures() {
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
              Enterprise Plan Features
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
            Tailored solutions for large-scale projects, enterprises, and organizations 
            that require maximum scalability, security, and dedicated support.
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
            position="relative"
            overflow="hidden"
          >
            <Icon as={FaGem} mr={2} />
            Starting from $1999/project
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
            icon={FaServer}
            title="Enterprise Infrastructure"
            description="Scalable cloud infrastructure with load balancing, auto-scaling, and enterprise-grade security protocols."
            isHighlighted={true}
            isEnterprise={true}
          />
          
          <FeatureCard
            icon={FaLock}
            title="Advanced Security"
            description="Multi-layer security with encryption, compliance certifications, and dedicated security monitoring."
            isEnterprise={true}
          />
          
          <FeatureCard
            icon={FaUsers}
            title="Dedicated Team"
            description="Your dedicated project manager, developers, and support team working exclusively on your project."
            isEnterprise={true}
          />
          
          <FeatureCard
            icon={FaDatabase}
            title="Enterprise Database"
            description="High-performance database solutions with backup, replication, and disaster recovery capabilities."
            isEnterprise={true}
          />
          
          <FeatureCard
            icon={FaCloud}
            title="Cloud Integration"
            description="Seamless integration with AWS, Azure, or Google Cloud with custom deployment strategies."
            isEnterprise={true}
          />
          
          <FeatureCard
            icon={FaBrain}
            title="AI & Analytics"
            description="Advanced AI integration, machine learning models, and comprehensive business intelligence solutions."
            isEnterprise={true}
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
            Enterprise Package Includes
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Unlimited pages & features</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Custom enterprise CMS</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Multi-user authentication</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Advanced e-commerce platform</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">API development & integration</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Custom reporting dashboard</Text>
              </HStack>
            </VStack>
            
            <VStack spacing={4} align="start">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Dedicated project manager</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">24/7 priority support</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">SLA guarantees</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Unlimited revisions</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">12 months free maintenance</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="medium">Training & documentation</Text>
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
            Enterprise vs Pro vs Basic
          </Heading>
          
          <TableContainer
            bg="rgba(255,255,255,0.8)"
            backdropFilter="blur(10px)"
            borderRadius="2xl"
            shadow="lg"
            overflow="hidden"
          >
            <Table variant="simple">
              <Thead bg="purple.50">
                <Tr>
                  <Th>Feature</Th>
                  <Th textAlign="center">Basic</Th>
                  <Th textAlign="center">Pro</Th>
                  <Th textAlign="center" bg="purple.100">Enterprise</Th>
                </Tr>
              </Thead>
              <Tbody>
                {[
                  { feature: "Pages", basic: "Up to 5", pro: "Up to 15", enterprise: "Unlimited" },
                  { feature: "Team Size", basic: "1-2 developers", pro: "3-4 developers", enterprise: "Dedicated team" },
                  { feature: "Project Manager", basic: "✗", pro: "✗", enterprise: "✓ Dedicated" },
                  { feature: "Support", basic: "Email (3 days)", pro: "Priority (24h)", enterprise: "24/7 SLA" },
                  { feature: "Security", basic: "Basic", pro: "Advanced", enterprise: "Enterprise-grade" },
                  { feature: "Infrastructure", basic: "Shared", pro: "Dedicated", enterprise: "Custom cloud" },
                  { feature: "Compliance", basic: "✗", pro: "Basic", enterprise: "Full compliance" },
                  { feature: "Training", basic: "✗", pro: "Basic", enterprise: "Comprehensive" },
                  { feature: "Maintenance", basic: "✗", pro: "3 months", enterprise: "12 months" },
                  { feature: "Revisions", basic: "2 weeks", pro: "4 weeks", enterprise: "Unlimited" }
                ].map((row, index) => (
                  <Tr key={index} _hover={{ bg: "gray.50" }}>
                    <Td fontWeight="medium">{row.feature}</Td>
                    <Td textAlign="center">{row.basic}</Td>
                    <Td textAlign="center">{row.pro}</Td>
                    <Td textAlign="center" bg="purple.50" fontWeight="bold">{row.enterprise}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </MotionBox>

        {/* FAQ Section */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={8} textAlign="center" fontFamily="'Playfair Display', serif">
            Enterprise FAQ
          </Heading>
          
          <Box maxW="4xl" mx="auto">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                      What makes Enterprise different from Pro?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Enterprise includes a dedicated team, unlimited features, enterprise-grade security, 
                  compliance certifications, 24/7 support with SLA guarantees, and comprehensive training.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                      Do you provide compliance certifications?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, we provide SOC 2, GDPR, HIPAA compliance certifications and can help you meet 
                  industry-specific regulatory requirements.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                      What kind of SLA do you offer?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We offer 99.9% uptime SLA, 24/7 support response within 1 hour for critical issues, 
                  and dedicated escalation procedures.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                      Can you integrate with our existing systems?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Absolutely. We specialize in enterprise integrations with ERP systems, CRM platforms, 
                  legacy systems, and third-party APIs.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
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
            Enterprise Project Timeline
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 6 }} spacing={6}>
            {[
              { step: "1", title: "Discovery", duration: "1 week", description: "Comprehensive business analysis" },
              { step: "2", title: "Strategy", duration: "1 week", description: "Enterprise architecture planning" },
              { step: "3", title: "Design", duration: "2 weeks", description: "Enterprise UI/UX design" },
              { step: "4", title: "Development", duration: "4-8 weeks", description: "Agile development sprints" },
              { step: "5", title: "Testing", duration: "1-2 weeks", description: "Comprehensive QA testing" },
              { step: "6", title: "Launch", duration: "1 week", description: "Deployment & training" }
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
                <Text fontSize="sm" color="purple.600" fontWeight="bold">{item.duration}</Text>
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
            Ready for Enterprise Solutions?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Let's discuss your enterprise requirements and create a custom solution 
            that scales with your organization's growth.
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
              <Icon as={FaHandshake} mr={2} />
              Schedule Consultation
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

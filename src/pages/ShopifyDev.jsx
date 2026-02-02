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
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import {
  FaShopify,
  FaArrowLeft,
  FaCheckCircle,
  FaPalette,
  FaShoppingCart,
  FaCode,
  FaPlug,
  FaChartLine,
  FaShieldAlt,
  FaCog,
  FaSync,
  FaStore,
} from "react-icons/fa";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionText = motion(Text);

const motionTransition = { duration: 0.5, ease: [0.4, 0, 0.2, 1] };
const motionTransitionSlow = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };

const shineAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

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
      borderColor: "gold.400",
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <HStack spacing={4} mb={3}>
      <Icon as={icon} w={6} h={6} color="gold.500" />
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
    </HStack>
    <Text color="gray.600" mb={4}>
      {description}
    </Text>
    {technologies.length > 0 && (
      <HStack spacing={2} flexWrap="wrap">
        {technologies.map((tech, index) => (
          <Badge key={index} colorScheme="green" variant="subtle" fontSize="xs">
            {tech}
          </Badge>
        ))}
      </HStack>
    )}
  </MotionBox>
);

export default function ShopifyDev() {
  const bgColor = useColorModeValue("offwhite.500", "gray.900");

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="7xl" py={16}>
        {/* Header Section */}
        <VStack spacing={8} textAlign="center" mb={16}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={motionTransitionSlow}
          >
            <HStack justify="center" mb={2}>
              <Icon as={FaShopify} w={12} h={12} color="#96BF48" />
            </HStack>
            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="800"
              fontSize={{ base: "3xl", md: "5xl" }}
              bgGradient="linear(to-r, #96BF48, #5E8E3E, #96BF48)"
              bgClip="text"
              style={{
                backgroundSize: "200% auto",
                animation: `${shineAnimation} 3s linear infinite`,
              }}
            >
              Shopify Store Development
            </Heading>
          </MotionBox>

          <MotionText
            fontSize="xl"
            color="gray.600"
            maxW="3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionTransitionSlow, delay: 0.2 }}
          >
            We build high-converting, conversion-focused Shopify stores with
            modern design and excellent performance. From new store setup to
            custom themes and apps—your prime partner for e-commerce success.
          </MotionText>
        </VStack>

        {/* Services Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={16}>
          <ServiceCard
            icon={FaStore}
            title="New Store Setup"
            description="Complete Shopify store setup: domain, plan, payments, shipping, and tax configuration so you can start selling fast."
            technologies={["Shopify Plus", "Shopify Basic", "Payments", "Shipping"]}
          />

          <ServiceCard
            icon={FaPalette}
            title="Custom Theme Development"
            description="Bespoke Shopify themes built with Liquid, Dawn, or custom code. Mobile-first, fast, and aligned with your brand."
            technologies={["Liquid", "Dawn", "Theme 2.0", "JSON Templates"]}
          />

          <ServiceCard
            icon={FaCode}
            title="Theme Customization"
            description="Tailor your existing theme: layout changes, new sections, custom features, and third-party app styling."
            technologies={["Sections", "Snippets", "CSS/JS", "App blocks"]}
          />

          <ServiceCard
            icon={FaPlug}
            title="Shopify App Integration"
            description="Install, configure, and customize apps for reviews, email, inventory, subscriptions, and more."
            technologies={["App Store", "Private apps", "API", "Webhooks"]}
          />

          <ServiceCard
            icon={FaSync}
            title="Migration to Shopify"
            description="Smooth migration from WooCommerce, Magento, BigCommerce, or custom platforms. Products, orders, and SEO preserved."
            technologies={["Product import", "Redirects", "SEO", "Data mapping"]}
          />

          <ServiceCard
            icon={FaCog}
            title="Ongoing Support & Maintenance"
            description="Updates, bug fixes, new features, and performance monitoring so your store stays secure and fast."
            technologies={["Updates", "Backups", "Monitoring", "Support"]}
          />
        </SimpleGrid>

        {/* What We Deliver Section */}
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={motionTransition}
          viewport={{ once: true }}
        >
          <Heading
            size="lg"
            mb={8}
            textAlign="center"
            fontFamily="'Playfair Display', serif"
          >
            What We Deliver
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box
              bg="rgba(255,255,255,0.8)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={6}
              shadow="lg"
            >
              <Heading size="md" mb={4} color="gold.600">
                <Icon as={FaShoppingCart} mr={2} />
                Store & Checkout
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Product catalog setup & collections
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Checkout & payment configuration
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Shipping zones & rates
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Tax settings & compliance
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Discounts, gift cards, and promotions
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
                Design & UX
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Custom theme or theme customization
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Mobile-responsive, fast-loading pages
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Homepage, collection, and product layouts
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Brand consistency and conversion-focused UI
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Accessibility and best practices
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
                <Icon as={FaChartLine} mr={2} />
                Growth & Analytics
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  SEO (meta tags, sitemaps, structured data)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Google Analytics & Tag Manager
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Facebook Pixel & conversion tracking
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Email marketing integration
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Performance monitoring
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
                <Icon as={FaShieldAlt} mr={2} />
                Security & Compliance
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  SSL and secure checkout
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  PCI-compliant payments
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Privacy policy & terms setup
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  GDPR and cookie consent
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Backup and recovery
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
          transition={motionTransition}
          viewport={{ once: true }}
        >
          <Heading
            size="lg"
            mb={8}
            textAlign="center"
            fontFamily="'Playfair Display', serif"
          >
            Our Shopify Development Process
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
            {[
              {
                step: "1",
                title: "Discovery & Strategy",
                description:
                  "Goals, brand, products, and conversion requirements",
              },
              {
                step: "2",
                title: "Design & Setup",
                description:
                  "Theme choice or custom design, store configuration",
              },
              {
                step: "3",
                title: "Build & Integrate",
                description:
                  "Development, apps, content, and testing",
              },
              {
                step: "4",
                title: "Launch & Optimize",
                description:
                  "Go live, train you, and ongoing optimization",
              },
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
                <Text fontSize="sm" color="gray.600">
                  {item.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* CTA Section */}
        <MotionBox
          textAlign="center"
          bg="rgba(150, 191, 72, 0.12)"
          borderRadius="2xl"
          p={12}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={motionTransition}
          viewport={{ once: true }}
        >
          <Heading size="lg" mb={4} fontFamily="'Playfair Display', serif">
            Ready to Build Your Shopify Store?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Let's create a high-quality, conversion-focused store that scales
            with your business.
          </Text>

          <HStack spacing={4} justify="center" flexWrap="wrap">
            <MagneticButton
              as={Link}
              to="/start-project"
              size="lg"
              bg="gold.500"
              color="white"
              _hover={{
                bg: "black.500",
                color: "gold.500",
                transform: "scale(1.05)",
              }}
              rounded="xl"
              px={8}
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(255,215,0,0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(255,215,0,0.2) 100%)",
                backgroundSize: "200% auto",
                animation: `${shineAnimation} 5s linear infinite`,
              }}
            >
              <Icon as={FaShopify} mr={2} />
              Start Shopify Project
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
